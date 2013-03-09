// GLOBALS
var scenario = null;
var player = null;
var currentScenario;
/* Determines whether a modal can be ignored by clicking in deadspace to close it.
Managed by setGameState, so you can override it temporarily without cleaning up
after yourself (ie, saving and then restoring the original value) */
var canDismissModal = false;
var erg = erg || {};
erg.onScreenMessageContainer = jQuery('#on-screen-message-container');
erg.onScreenMessageTemplate = jQuery('#on-screen-message-template');

jQuery(document).ready(function (jQuery) {
    jQuery(window).resize(function () {
        sizeWindow();
    });

    jQuery('#overlay').live("click", function () {
        if (canDismissModal) {
            hideModal();
        }
    });

    jQuery("li.conversation-option").live("click", function () {
        showConversation(null, jQuery(this).attr('data-conversation-option'));
    });

    jQuery(".viewport-button").live("click", function () {
        jQuery(document).trigger(
            'player-move',
            jQuery(this).attr('id')
        );
    });

    /* Pause Menu click functions */
    jQuery('#pause-resume-button').live("click", function () {
        setGameState(GAME_STATE_RUNNING);
    });

    jQuery('#pause-save-button').live("click", function () {
        saveGame();
        hideModal();
    });

    jQuery('#pause-mainmenu-button').live("click", function () {
        if (confirm("Quit and return to main menu?")) {
            setGameState(GAME_STATE_MENU);
        }
    });

    jQuery('#game-over-mainmenu-button').live("click", function () {
        setGameState(GAME_STATE_MENU);
    });

    //Allows scenario image loader to signal once all the images are loaded.
    jQuery(document).on('scenario-images-loaded', function(event) {
        setGameState(GAME_STATE_RUNNING);
        renderScene();
        generateMap(player.x, player.y, scenario.getFloor(player.z));
        sizeWindow();
        saveGame();
        jQuery('div.spinner').remove();
    });
});

// Loads the Scenario objects from the data parameter (scenario-definition array)
function loadScenario(data) {
    setGameState(GAME_STATE_LOADING);
    var triggerData;
    scenario = new Scenario;
    scenario.set(data.name, 'active');
    addSpinner();

    loadFloors(data);
    loadConversations(data._conversations);
    initializePlayer(data._player);
    initializeCellPhone();
    markInactivePropsInactive(data.inactiveProps);

    triggerData = jQuery.extend(true, {}, data._triggers);
    loadTriggers(triggerData);

    function loadFloors(scenarioData) {
        var currentFloor;

        jQuery.each(scenarioData._floors, function (key, floor) {
            currentFloor = scenario.addFloor(key, floor.z);
            loadRooms(currentFloor, floor);
        });
    }

    function loadRooms(floor, floorData) {
        var currentRoom;

        jQuery.each(floorData._rooms, function (key, roomData) {
            currentRoom = floor.addRoom(key, roomData.id, roomData.x, roomData.y, floorData.z);
            currentRoom.addTriggers(roomData._triggers);
            currentRoom.abortTriggers = roomData.abortTriggers;
            loadWalls(currentRoom, roomData);
        });
    }

    function loadWalls(room, roomData) {
        var currentWall;

        jQuery.each(roomData._walls, function (key, wallData) {
            currentWall = room.addWall(wallData.name, key, wallData.image, wallData.fakeDirection, wallData.isCutscene);

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
        jQuery.each(wallData._props, function (key, prop) {
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
            jQuery.each(conversationData, function (key, value) {
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
            jQuery.each(triggerData, function (key, value) {
                scenario.addTrigger(key, value);
            });
        }

        var startRoomTriggers = scenario.getRoom(player.x, player.y, player.z).triggers;
        if (startRoomTriggers) {
            startRoomTriggers.map(startTrigger);
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
        jQuery('#overlay').show();
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

// Changes the layout to match the current game state.
function setGameState(state) {
    lastGameState = gameState;
    gameState = state;
    switch (state) {
    case GAME_STATE_MENU:
        jQuery('#view-modal').hide();
        jQuery('.modal').hide();
        jQuery('#overlay').hide();
        resetLights();
        showMainMenu();
        allowKeyEvents = false;
        break;
    case GAME_STATE_RUNNING:
        hideMainMenu();
        jQuery('#view-modal').show();
        jQuery('.modal').hide();
        jQuery('#overlay').hide();
        allowKeyEvents = true;
        break;
    case GAME_STATE_LOADING:
        hideMainMenu();
        jQuery('.modal').hide();
        jQuery('#view-modal').show();
        allowKeyEvents = true;
        break;
    case GAME_STATE_PAUSED:
        showNamedModal(jQuery('#pause-menu'), false, true);
        break;
    case GAME_STATE_SHOW_INVENTORY:
        showNamedModal(jQuery('#inventory-modal'), false, true);
        break;
    case GAME_STATE_MODAL:
        showNamedModal(jQuery('#modal'), false, true);
        jQuery('#modal-close').show();
        break;
    case GAME_STATE_FORCED_MODAL:
        showNamedModal(jQuery('#modal'), false, false);
        jQuery('#modal-close').hide();
        break;
    case GAME_STATE_OVER:
        showNamedModal(jQuery('#game-over-menu'), false, false);
    }
}

function setObjective(name, displayText) {
    scenario.objectives.inProgress[name] = displayText || name;
    jQuery('#objective ul').empty();
    jQuery('#objective ul').append('<li id="{0}">{1}</li>'.format(name, scenario.objectives.inProgress[name]));
}

function completeObjective(name) {
    var objective = scenario.objectives.inProgress[name];
    if (objective) {
        scenario.objectives.completed[name] = objective;
        delete scenario.objectives.inProgress[name];
    }
    jQuery('#objective').find('#' + name).remove();
}

function failObjective(name) {
    var objective = scenario.objectives.inProgress[name];
    if (objective) {
        scenario.objectives.failed[name] = objective;
        delete scenario.objectives.inProgress[name];
    }
    jQuery('#objective').find('#' + name).remove();
}

function clearObjective() {
    jQuery('#objective').find('ul').empty();
}

function showNamedModal(modal, newAllowKeyEvents, newCanDismissModal) {
    canDismissModal = newCanDismissModal;
    allowKeyEvents = newAllowKeyEvents;
    modal.show();
    centerModal(modal);
    jQuery('#overlay').show();
}

function showGameOver(header, body) {
    gameOverMenu = jQuery('#game-over-menu');
    gameOverMenu.find('#game-over-header').text(header);
    gameOverMenu.find('#game-over-message').text(body);
    gameOverMenu.find('#game-over-score span').text(player.score);
    showObjectivesIn(jQuery('#game-over-objective-list'), true);
    setGameState(GAME_STATE_OVER);
}

function showPauseMenu() {
    showObjectivesIn(jQuery('#pause-objective-list'));
    setGameState(GAME_STATE_PAUSED);
}

function showMainMenu() {
    jQuery('#main-menu').show();
    centerMainMenu();
}

function hideMainMenu() {
    jQuery('#main-menu').hide();
}

function displayModal(header, text, image) {
    emptyModal();

    jQuery('#modal #header').html(header);
    jQuery('#modal #content').html(text);
    jQuery('#modal #content').append(image);
    showModal();
}

function showModal() {
    setGameState(GAME_STATE_MODAL);
}

function emptyModal() {
    // Clear header and content
    jQuery('#modal #header').empty();
    jQuery('#modal #content').empty();
}

function hideModal() {
    // Hide any visible modal element
    if (lastGameState === GAME_STATE_MENU) {
        setGameState(GAME_STATE_MENU);
    }
    if (gameState === GAME_STATE_OVER) {
        jQuery('#modal').hide();
    } else if (gameState !== GAME_STATE_MENU) {
        setGameState(GAME_STATE_RUNNING);
    }
}


function resetLights() {
    lightsOn = true;
    jQuery('#flashlight-overlay').addClass('hidden');
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
            fadeOut(300, function () { jQuery(this).remove(); });
}

function showObjectivesIn(element, markInProgressAsFailed) {
    var objectivesInProgress, objectivesCompleted, objectivesFailed;

    element.empty();

    if (scenario) {
        objectivesInProgress = scenario.getObjectivesInProgress();
        objectivesCompleted = scenario.getObjectivesCompleted();
        objectivesFailed = scenario.getObjectivesFailed();

        if (markInProgressAsFailed) {
            objectivesFailed = objectivesFailed.concat(objectivesInProgress);
            objectivesInProgress = [];
        }

        if (objectivesInProgress.length > 0) {
            showObjectives(element, objectivesInProgress, 'Current Objectives');
        }

        if (objectivesCompleted.length > 0) {
            showObjectives(element, objectivesCompleted, 'Completed Objectives');
        }

        if (objectivesFailed.length > 0) {
            showObjectives(element, objectivesFailed, 'Failed Objectives');
        }
    }

    function showObjectives(container, list, header) {
        var objectiveText;

        container.append('<span class="pause-header bold-colored-text">{0}</span><br>'.format(header));
        for (objectiveText in list) {
            if (list.hasOwnProperty(objectiveText)) {
                container.append('<span>{0}</span><br>'.format(list[objectiveText]));
            }
        }
        container.append('<p>');
    }
}

function showInventory() {
    var i, items, rowTemplate, inventoryItemsContainer, inventoryModal, attrs;
    // modeled after showConversation's implementation
    rowTemplate = "<span class='inventory-item' id='{0}' onclick='inventoryItemClick(\"{0}\")'><img src='web/img/{1}' alt=''{2}> {3}</span>";
    items = player.inventory.items;
    inventoryModal = jQuery('#inventory-modal');
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
        flashlightOverlay = jQuery('#flashlight-overlay');
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

    // Hide inventory modal if valid item clicked
    if (validItemClicked) {
        hideModal();
    }
}

String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (m, n) { return args[n]; });
}

jQuery.fn.center = function () {
    return this.css({
        "position" : "absolute",
        "top" : (jQuery(window).height() - this.height()) / 2 + jQuery(window).scrollTop() + "px",
        "left" : (jQuery(window).width() - this.width()) / 2 + jQuery(window).scrollLeft() + "px"
    });
}

jQuery.fn.opacity = function (opacity) {
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
*/
function showConversation(conversationName, currentConversationChoice, cannotSkip) {
    var i, conversation, optionRowTemplate, currentOptionId, currentOption, replyChoices, choiceText;
    cannotSkip = cannotSkip || jQuery('#modal').data('cannotSkip');
    
    optionRowTemplate = "<li class='conversation-option' data-conversation-option='{0}'>{1}</li><br />";

    //fetch the conversation name if we're progressing through a conversation tree.
    if (!conversationName) {
        conversationName = jQuery('#modal #header').text();
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

    // checkInventory was the name of this property before I allowed checking other things;
    // keeping it for now since I don't know if other people are using it in other branches.
    if (currentOption.checkInventory) {
        currentOption.check = currentOption.checkInventory;
    }
    if (currentOption.check) {
        for (i = 0; i < currentOption.check.length; i++) {
            if (checkCondition(currentOption.check[i])) {
                currentOptionId = currentOption.check[i]['goto'];
                break;
            }
        }
    }

    currentOption = conversation.getOption(currentOptionId);
    if (!currentOption) {
        hideModal();
        return;
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
    jQuery('#modal').data('cannotSkip', cannotSkip);
    //Show the message and reply options.
    jQuery('#modal #header').html(conversationName);
    jQuery('#modal #content').append(currentOption.message + '<p /> You Reply: <br /><ul>');

    replyChoices = currentOption.replies;
    for (choiceText in replyChoices) {
        if (replyChoices.hasOwnProperty(choiceText) && shouldShowReplyChoice(conversation, replyChoices, choiceText)) {
            jQuery('#modal #content ul').append(optionRowTemplate.format(replyChoices[choiceText], choiceText));
        }
    }
    jQuery('#modal #content').append('</ul>');

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
