// GLOBALS
var scenario = null;
var player = null;
var currentScenario;
/* Determines whether a modal can be ignored by clicking in deadspace to close it.
Managed by setGameState, so you can override it temporarily without cleaning up
after yourself (ie, saving and then restoring the original value) */
var canDismissModal = false;
var erg = erg || {};
erg.onScreenMessageContainer = $('#on-screen-message-container');
erg.onScreenMessageTemplate = $('#on-screen-message-template');
var spinnerTimerId;

$(document).ready(function () {
    $(window).resize(function () {
        sizeWindow();
    });

    $('#overlay').click(function () {
        if (canDismissModal) {
            hideModal();
        }
    });

    $("body").on("click", "li.conversation-option", function () {
        showConversation(null, $(this).attr('data-conversation-option'));
    });

    $(".viewport-button").click(function () {
        if (!allowKeyEvents) return;
        $(document).trigger(
            'player-move',
            $(this).attr('id')
        );
    });

    /* Pause Menu click functions */
    $('#pause-resume-button').click(function () {
        setGameState(GAME_STATE_RUNNING);
    });

    $('#pause-save-button').click(function () {
        saveGame();
        hideModal();
    });

    $('#pause-mainmenu-button').click(function () {
        if (confirm("Quit and return to main menu?")) {
            setGameState(GAME_STATE_MENU);
        }
    });

    $('#game-over-mainmenu-button').click(function () {
        setGameState(GAME_STATE_MENU);
    });

    $('#help').click(function() {
        if (!allowKeyEvents) return;
        displayModal('', '', null);
        $('#help-template').clone().
                appendTo($('#modal').
                children('#content')).
                removeAttr('id');
    });

    //Allows scenario image loader to signal once all the images are loaded.
    $(document).on('scenario-images-loaded', function(event) {
        window.clearTimeout(spinnerTimerId);
        setGameState(GAME_STATE_RUNNING);
        renderScene();
        generateMap(player.x, player.y, scenario.getFloor(player.z));
        sizeWindow();
        saveGame();
        $('div.spinner').remove();

        // start running the triggers in the same room as the player
        var startRoomTriggers = scenario.getRoom(player.x, player.y, player.z).triggers;
        if (startRoomTriggers) {
            $.map(startRoomTriggers, startTrigger);
        }
    });
});

/**
* Loads annotations from the scenario file.
*/
function loadAnnodations(annotations) {
    var key;

    if (!annotations) {
        return;
    }

    for (key in annotations) {
        if (annotations.hasOwnProperty(key)) {
            addMinimapAnnotationByKey(annotations[key], key);
        }
    }
}

function spinnerTimeout() {
    $(document).trigger('scenario-images-loaded');
}

// Loads the Scenario objects from the data parameter (scenario-definition array)
function loadScenario(data) {
    setGameState(GAME_STATE_LOADING);
    var triggerData;
    scenario = new Scenario;
    scenario.set(data.name, 'active');
    addSpinner();

    spinnerTimerId = window.setTimeout(spinnerTimeout, 10000);

    loadFloors(data);
    loadConversations(data._conversations);
    initializePlayer(data._player);
    initializeCellPhone();
    loadAnnodations(data.annotations);
    markInactivePropsInactive(data.inactiveProps);

    triggerData = $.extend(true, {}, data._triggers);
    loadTriggers(triggerData);

    function loadFloors(scenarioData) {
        var currentFloor;

        $.each(scenarioData._floors, function (key, floor) {
            currentFloor = scenario.addFloor(key, floor.z);
            loadRooms(currentFloor, floor);
        });
    }

    function loadRooms(floor, floorData) {
        var currentRoom;

        $.each(floorData._rooms, function (key, roomData) {
            currentRoom = floor.addRoom(key, roomData.id, roomData.x, roomData.y, floorData.z);
            currentRoom.addTriggers(roomData._triggers);
            currentRoom.abortTriggers = roomData.abortTriggers;
            loadWalls(currentRoom, roomData);
            if (roomData.annotation) {
                addMinimapAnnotation(roomData.annotation, roomData.x, roomData.y, floorData.z);
            }
        });
    }

    function loadWalls(room, roomData) {
        var currentWall;

        $.each(roomData._walls, function (key, wallData) {
            currentWall = room.addWall(wallData.name, key, wallData.image,
                    wallData.fakeDirection, wallData.isCutscene,
                    wallData._triggers);

            if (wallData._props) {
                loadProps(currentWall, wallData);
            }

            if (wallData.destination) {
                var newX, newY, newZ, newF, dest;
                dest = wallData.destination;
                newX = dest.x === undefined ? room.x : dest.x;
                newY = dest.y === undefined ? room.y : dest.y;
                newZ = dest.z === undefined ? room.z : dest.z;
                newF = dest.f === undefined ? key : dest.f;
                currentWall.setDestination(newX, newY, newZ, newF);
            }
        });
    }

    function loadProps(wall, wallData) {
        $.each(wallData._props, function (key, prop) {
            wall.addProp(
                key,
                prop.name,
                prop.image,
                prop.hoverImage,
                prop.width,
                prop.height,
                prop.left,
                prop.top,
                prop.action,
                prop.actionVariables
            );
            if (prop.barrier) {
                wall.barriers[wall.barriers.length] = key;
            }
            if (prop.openImage) {
                wall.addProp(
                    key+"-open",
                    prop.name,
                    prop.openImage,
                    prop.openHoverImage,
                    prop.width,
                    prop.height,
                    prop.left,
                    prop.top,
                    prop.action,
                    prop.actionVariables
                );
            }
            if (prop.barrierMessage) {
                wall.barrierMessages[key] = prop.barrierMessage;
            }
        });
    }

    function loadConversations(conversationData) {
        scenario.conversations = {};
        if (conversationData) {
            $.each(conversationData, function (key, value) {
                var newConversation = new Conversation;
                newConversation.set(key, value);
                scenario.conversations[key] = newConversation;
            });
        }
    }

    function loadTriggers(triggerData) {
        clearAllTriggers();
        clearObjective();

        if (triggerData) {
            $.each(triggerData, function (key, value) {
                scenario.addTrigger(key, value);
            });
        }
    }

    function initializePlayer(playerData) {
        var i;

        player = new Player;
        player.set(playerData.x, playerData.y, playerData.z, playerData._facing, null);
        if (playerData.inventory) {
            for (i = 0; i < playerData.inventory.length; i++) {
                player.inventory.add(playerData.inventory[i]);
            }
        }

        // Check if player exists
        if (player) {
            if (!scenario.isValidRoom(player.x, player.y, player.z)) {
                alert('Player\'s starting position is invalid');
                return;
            }
        } else {
            alert('Player not defined');
        }

    }

    function addSpinner() {
         // Add spinner to view-modal while loading scenario
        $('#overlay').show();
        var spinner = new Spinner({
            color: '#000'
        }).spin(document.getElementById('overlay'));
        return spinner;
    }

    function markInactivePropsInactive(inactivePropData) {
        var i;
        if (inactivePropData) {
            for (i = 0; i < inactivePropData.length; i++) {
                scenario.inactiveProps[inactivePropData[i]] = true;
            }
        }
    }
}

// Returns True if scenario object is defined
function isScenarioDefined() {
    if (scenario === undefined) {
        console.log('scenario class undefined');
        return false;
    }
    return true;
}


// Returns True if player object is defined
function isPlayerDefined() {
    if (player === undefined) {
        console.log('player class undefined');
        return false;
    }
    return true;
}

// todo: move to cellphone.js when it is more OO
function resetPhone() {
    $('#ringer-off').removeClass('selected');
    $('#ringer-on').addClass('selected');
}

// Changes the layout to match the current game state.
function setGameState(state) {
    lastGameState = gameState;
    gameState = state;
    switch (state) {
    case GAME_STATE_MENU:
        $('#view-modal').hide();
        $('.modal').hide();
        $('#overlay').hide();
        resetLights();
        resetPhone();
        showMainMenu();
        allowKeyEvents = false;
        break;
    case GAME_STATE_RUNNING:
        hideMainMenu();
        $('#view-modal').show();
        $('.modal').hide();
        $('#overlay').hide();
        allowKeyEvents = true;
        break;
    case GAME_STATE_LOADING:
        hideMainMenu();
        $('.modal').hide();
        $('#view-modal').show();
        allowKeyEvents = true;
        break;
    case GAME_STATE_PAUSED:
        showNamedModal($('#pause-menu'), false, true);
        break;
    case GAME_STATE_SHOW_INVENTORY:
        showNamedModal($('#inventory-modal'), false, true);
        break;
    case GAME_STATE_SHOW_OBJECTIVES:
        $('#objectives-modal .option').hide();
        if (lastGameState === GAME_STATE_RUNNING) {
            $('#objectives-modal-close').show();

        } else if (lastGameState === GAME_STATE_PAUSED) {
            $('#objectives-modal-go-back-paused').show();
        } else {
            $('#objectives-modal-go-back-game-over').show();
        }

        showNamedModal($('#objectives-modal'), false, false);
        break;
    case GAME_STATE_MODAL:
        showNamedModal($('#modal'), false, true);
        $('#modal-close').show();
        break;
    case GAME_STATE_FORCED_MODAL:
        showNamedModal($('#modal'), false, false);
        $('#modal-close').hide();
        break;
    case GAME_STATE_TUTORIAL:
        allowKeyEvents = false;
        break;
    case GAME_STATE_OVER:
        if (lastGameState === GAME_STATE_SHOW_OBJECTIVES) {
            $('#objectives-modal').hide();
            $("#overlay").hide();
        }
        positionGameOverModal();
    }
}

function showNamedModal(modal, newAllowKeyEvents, newCanDismissModal) {
    canDismissModal = newCanDismissModal;
    allowKeyEvents = newAllowKeyEvents;
    modal.show();
    centerModal(modal);
    $('#overlay').show();
}

function showGameOver(header, body) {
    gameOverMenu = $('#game-over-menu');
    gameOverMenu.find('#game-over-header').text(header);
    gameOverMenu.find('#game-over-message').text(body);
    gameOverMenu.find('#game-over-score span').text(player.score);
    setGameState(GAME_STATE_OVER);
    gameOverMenu.show();
}

function showPauseMenu() {
    setGameState(GAME_STATE_PAUSED);
}

function showMainMenu() {
    $('#main-menu').show();
    centerMainMenu();
}

function hideMainMenu() {
    $('#main-menu').hide();
}

function displayModal(header, text, image) {
    emptyModal();

    $('#modal #header').html(header);
    $('#modal #content').html(text);
    $('#modal #content').append(image);
    showModal();
}

function showModal() {
    setGameState(GAME_STATE_MODAL);
}

function emptyModal() {
    // Clear header and content
    $('#modal #header').empty();
    $('#modal #content').empty();
}

function hideModal() {
    // Hide any visible modal element
    $('#modal').data('conversationName', null);
    $('#modal').data('cannotSkip', null);
    if (lastGameState === GAME_STATE_MENU) {
        setGameState(GAME_STATE_MENU);
    }
    if (gameState === GAME_STATE_OVER) {
        $('#modal').hide();
    } else if (gameState !== GAME_STATE_MENU) {
        setGameState(GAME_STATE_RUNNING);
    }
}


function resetLights() {
    lightsOn = true;
    var flashlightOverlay = $('#flashlight-overlay');
    flashlightOverlay.addClass('hidden');
    flashlightOverlay.removeClass('flashlight-on');
    flashlightOverlay.addClass('flashlight-off');
}
/**
* Show a message via large text that overlays the middle of the viewport.
* @param {string} message The message to be displayed.
* @param {int} duration The number of seconds that the message should remain
*     on screen.
*/
function showOnScreenMessage(message, duration) {
    duration = duration * 1000 || 5000;
    erg.onScreenMessageTemplate.clone().
            appendTo(erg.onScreenMessageContainer).
            removeAttr('id').
            text(message).
            show().
            delay(duration).
            fadeOut(300, function () { $(this).remove(); });
}

function showInventory() {
    var i, items, rowTemplate, inventoryItemsContainer, inventoryModal, attrs;
    // modeled after showConversation's implementation
    rowTemplate = "<span class='inventory-item' id='{0}' onclick='inventoryItemClick(\"{0}\")'><img src='web/img/{1}' alt=''{2}> {3}</span>";
    items = player.inventory.items;
    inventoryModal = $('#inventory-modal');
    inventoryItemsContainer = inventoryModal.find('#items-container');
    inventoryItemsContainer.empty();
    for (i in items) {
        if (items.hasOwnProperty(i) && items[i] !== null) {
            attrs = '';
            if (items[i].width) {
                attrs += ' width="' + items[i].width + '"';
            }

            if (items[i].height) {
                attrs += ' width="' + items[i].height + '"';
            }
            // Converts whitespace blocks into single dash
            var itemId = items[i].name;
            itemId = itemId.replace(' ', '-');
            inventoryItemsContainer.append(rowTemplate.format(itemId, items[i].image, attrs, items[i].name));
        }
    }
    if (inventoryItemsContainer.find('span').length > 0) {
        inventoryModal.find('#inventory-empty').hide();
        inventoryModal.find('#inventory-items').show();
    } else {
        inventoryModal.find('#inventory-empty').show();
        inventoryModal.find('#inventory-items').hide();
    }
    setGameState(GAME_STATE_SHOW_INVENTORY);
}

function inventoryItemClick(itemId) {

    validItemClicked = false;

    if (itemId == 'Flashlight') {
        validItemClicked = true;
        flashlightOverlay = $('#flashlight-overlay');
        if (!flashlightOverlay.hasClass('hidden')) {
            if (flashlightOverlay.hasClass('flashlight-on')) {
                flashlightOverlay.removeClass('flashlight-on');
                flashlightOverlay.addClass('flashlight-off');
            } else {
                flashlightOverlay.removeClass('flashlight-off');
                flashlightOverlay.addClass('flashlight-on');
            }
        }
    }

    else if (itemId == 'Breathing-Mask') {
        // check if clearSmoke is enabled yet
        if (scenario.triggers.pool['clearSmoke']) {
            validItemClicked = true;
            startTrigger('clearSmoke');
        }
    }

    // Hide inventory modal if valid item clicked
    if (validItemClicked) {
        hideModal();
    }
}

String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (m, n) { return args[n]; });
}

$.fn.center = function () {
    return this.css({
        "position" : "absolute",
        "top" : ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px",
        "left" : ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px"
    });
}

$.fn.opacity = function (opacity) {
    return this.css({
        "filter" : "alpha({0}*100)".format(opacity),
        "moz opacity" : opacity,
        "khtml opacity" : opacity,
        "opacity" : opacity
    });
}

/**
* Shows a defined conversation with the specified name.
* @param {string} conversationName The name of the conversation to show.
* @param {string} currentConversationChoice The conversation choice to enter. If not provided, '1' is used.
* @param {boolean} cannotSkip If true, the player cannot close the conversation early.
* @param {boolean} isAnAction If true, 'x says' and 'you reply' are not visible.
*/
function showConversation(conversationName, currentConversationChoice, cannotSkip, isAnAction) {
    var i, conversation, optionRowTemplate, currentOptionId, currentOption,
            replyChoices, choiceText, contentContainer;
    cannotSkip = cannotSkip || $('#modal').data('cannotSkip');

    optionRowTemplate = "<li class='conversation-option' data-conversation-option='{0}'>{1}</li><br />";

    //fetch the conversation name if we're progressing through a conversation tree.
    if (!conversationName) {
        conversationName = $('#modal').data('conversationName');
    }

    //Now the current contents from the modal.
    emptyModal();

    //Ensure the conversation exists.
    conversation = scenario.conversations[conversationName];
    if (!conversation) {
        hideModal();
        return;
    }

    //If there is no current conversation choice provided then we'll start from the beginning. 0 terminates the conversation.
    currentOptionId = currentConversationChoice || currentConversationChoice === 0 ? currentConversationChoice : 1;

    //Ensure that this is a valid conversation choice.
    currentOption = conversation.getOption(currentOptionId);
    if (!currentOption) {
        hideModal();
        return;
    }

    var shouldCheck = true;

    while (shouldCheck) {
        shouldCheck = false;
        // checkInventory was the name of this property before I allowed checking other things;
        // keeping it for now since I don't know if other people are using it in other branches.
        if (currentOption.checkInventory) {
            currentOption.check = currentOption.checkInventory;
        }
        if (currentOption.check) {
            for (i = 0; i < currentOption.check.length; i++) {
                if (checkCondition(currentOption.check[i])) {
                    currentOptionId = currentOption.check[i]['goto'];
                    shouldCheck = true;
                    break;
                }
            }
        }

        currentOption = conversation.getOption(currentOptionId);
        if (!currentOption) {
            hideModal();
            return;
        }
    }

    // hideModal() and return need to be in separate if statements here.
    // hideModal needs to be called before the triggers run; otherwise, if the
    // trigger shows a modal, the modal will immediately be hidden.  Of
    // course, if we return here then triggers won't get executed (and
    // allowing triggers to execute without showing a message was the whole
    // point of checking for the message).
    if (!currentOption.message) {
         hideModal();
    }

    if (currentOption.triggers) {
        for (i = 0; i < currentOption.triggers.length; i++) {
            startTrigger(currentOption.triggers[i]);
        }
        saveGame();
    }

    if (!currentOption.message) {
        return;
    }
    //Save whether the conversation can be skipped or not to the modal.
    $('#modal').data('cannotSkip', cannotSkip);
    //Show the message and reply options.
    $('#modal').data('conversationName', conversationName);

    if (!isAnAction) {
        $('#modal #header').html('<span id="conversation-name">' + conversationName + " says:</span>");
    }
    contentContainer = $('#modal #content');
    contentContainer.append('<span id="option-message">' + currentOption.message + '</span><p />');

    if (!isAnAction) {
        contentContainer.append('<span id="you-reply"> You Reply: </span><br />');
    }
    contentContainer.append('<ul>');

    replyChoices = currentOption.replies;
    for (choiceText in replyChoices) {
        if (replyChoices.hasOwnProperty(choiceText) && shouldShowReplyChoice(conversation, replyChoices, choiceText)) {
            $('#modal #content ul').append(optionRowTemplate.format(replyChoices[choiceText], choiceText));
        }
    }
    contentContainer.append('</ul>');

    showModal();
    if (cannotSkip) {
        setGameState(GAME_STATE_FORCED_MODAL);
    }
}

function shouldShowReplyChoice(conversation, replyChoices, choiceText) {
    return !(conversation.getOption(replyChoices[choiceText]) &&
            conversation.getOption(replyChoices[choiceText]).requires &&
            !checkCondition(conversation.getOption(replyChoices[choiceText]).requires));
}

function checkCondition(condition) {
    return checkScenario(doesContain, condition.has, player.inventory.items) &&
            checkScenario(doesContain, condition.triggersEnabled, scenario.triggers.pool) &&
            checkScenario(doesContain, condition.objectivesInProgress, scenario.objectives.inProgress) &&
            checkScenario(doesContain, condition.objectivesCompleted, scenario.objectives.completed) &&
            checkScenario(doesContain, condition.doesntExist, scenario.inactiveProps) &&
            checkScenario(doesNotContain, condition.hasNot, player.inventory.items) &&
            checkScenario(doesNotContain, condition.triggersDisabled, scenario.triggers.pool) &&
            checkScenario(doesNotContain, condition.objectivesNotInProgress, scenario.objectives.inProgress) &&
            checkScenario(doesNotContain, condition.objectivesNotCompleted, scenario.objectives.completed) &&
            checkScenario(doesNotContain, condition.exists, scenario.inactiveProps);
}

function doesNotContain(source, contains) {
    for (i = 0; i < contains.length; i++) {
        if (source[contains[i]]) {
            return false;
        }
    }
    return true;
}

function doesContain(source, contains) {
    for (i = 0; i < contains.length; i++) {
        if (!source[contains[i]]) {
            return false;
        }
    }
    return true;
}

function checkScenario(checkFunction, conditionProperty, secnarioProperty) {
    var i;
    if (conditionProperty) {
            if (!checkFunction(secnarioProperty, conditionProperty)) {
                return false;
            }
    }
    return true;
}
