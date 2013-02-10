// GLOBALS
var scenario = null;
var player = null;
var scenarioVariable = null;

function isScenarioDefined() {};
function isPlayerDefined() {};
function evalGameState() {};
function loadScenario() {};
function pauseMenu() {};
function showModal() {};
function hideModal() {};
function failObjective() {};
function completeObjective() {};
function setObjective() {};

function loadFloors(scenarioData) {
    "use strict";
    var currentFloor;

    jQuery.each(scenarioData._floors, function (key, floor) {
        currentFloor = scenario.addFloor(key, floor.z);
        loadRooms(currentFloor, floor);
    });
}

function loadRooms(floor, floorData) {
    "use strict";
    var currentRoom;

    jQuery.each(floorData._rooms, function (key, roomData) {
        currentRoom = floor.addRoom(key, roomData.id, roomData.x, roomData.y, floorData.z);
        currentRoom.addTriggers(roomData._triggers);
        loadWalls(currentRoom, roomData);
    });
}

function loadWalls(room, roomData) {
    "use strict";
    var currentWall;

    jQuery.each(roomData._walls, function (key, wallData) {
        currentWall = room.addWall(wallData.name, key, wallData.image);

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
    "use strict";

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
    player = new Player;
    player.set(playerData.x, playerData.y, playerData.z, playerData._facing, null);
    if (playerData.inventory) {
        for (var i = 0; i < playerData.inventory.length; i++) {
            player.inventory.add(playerData.inventory[i]);
        }
    }

    // Check if player exists
    if (player) {
        if (!scenario.isValidRoom(player.x, player.y, player.z)) {
            alert('Player\'s starting position is invalid')
            return;
        }
    } else {
        alert('Player not defined')
    }
        
}

function addSpinner() {
         // Add spinner to view-modal while loading scenario   
        var spinner = new Spinner({
            color: '#fff'
        }).spin(document.getElementById('view-modal'))
        return spinner;
}

function markInactivePropsInactive(inactivePropData) {
    if (inactivePropData) {
        for (var i = 0; i < inactivePropData.length; i++)
            scenario.inactiveProps[inactivePropData[i]] = true;
    }
}

jQuery(document).ready(function (jQuery) {
    var spinner;
    jQuery(window).resize(function() {
        sizeWindow();
    });

    // Loads the Scenario objects from the data parameter (scenario-definition array)
    loadScenario = function (data) {
        scenario = new Scenario;
        scenario.set(data.name, 'active');
        spinner = addSpinner();

        loadFloors(data);
        loadConversations(data._conversations);
        initializePlayer(data._player);
        loadTriggers(data._triggers);
        markInactivePropsInactive(data.inactiveProps);
        clearObjective();
        setGameState(GAME_STATE_RUNNING);
        renderScene();
        saveGame();
        generateMap(player.x, player.y, scenario.getFloor(player.z));
        sizeWindow();
        spinner.stop();
    }


    // Returns True if scenario object is defined
    isScenarioDefined = function () {
        if (typeof scenario === 'undefined') {
            console.log('scenario class undefined')
            return false;
        }
        return true;
    }


    // Returns True if player object is defined
    isPlayerDefined = function () {
        if (typeof player === 'undefined') {
            console.log('player class undefined')
            return false;
        }
        return true;
    }

    // Changes the layout to match the current game state.
    setGameState = function (state) {
        lastGameState = gameState;
        gameState = state;
        switch (state) {
            case GAME_STATE_MENU:
                jQuery('#view-modal').hide();
                jQuery('.modal').hide();
                showMainMenu();
                allowKeyEvents = false;
                break;
            case GAME_STATE_RUNNING:
                jQuery('.modal').hide();
                jQuery('#overlay').hide();
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
                break;
            case GAME_STATE_OVER:
                showNamedModal(jQuery('#game-over-menu'), false, false);
        }
    }

    function showNamedModal(modal, newAllowKeyEvents, newCanDismissModal) {
        canDismissModal = newCanDismissModal;
        allowKeyEvents = newAllowKeyEvents;
        modal.show();
        centerModal(modal);
        jQuery('#overlay').show();
    };

    showGameOver = function(header, body) {
        gameOverMenu = jQuery('#game-over-menu');
        gameOverMenu.find('#game-over-header').text(header);
        gameOverMenu.find('#game-over-message').text(body);
        gameOverMenu.find('#game-over-score span').text(player.score);
        showObjectivesIn(jQuery('#game-over-objective-list'), true);
        setGameState(GAME_STATE_OVER);
    }

    showPauseMenu = function() {
        showObjectivesIn(jQuery('#pause-objective-list'));
        setGameState(GAME_STATE_PAUSED);
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
            container.append('<span class="pause-header bold-colored-text">{0}</span><br>'.format(header));
            for (var objectiveText in list) {
                if (list.hasOwnProperty(objectiveText)) {
                    container.append('<span>{0}</span><br>'.format(list[objectiveText]));
                }
            }
            container.append('<p>');
        }
    }

    showConversation = function (conversationName, currentConversationChoice) {
        var optionRowTemplate = "<li class='conversation-option' data-conversation-option='{0}'>{1}</li><br />";

        //fetch the conversation name if we're progressing through a conversation tree.
        if (!conversationName) {
            conversationName = jQuery('#modal #header').text();
        }

        //Now the current contents from the modal.
        emptyModal();

        //Ensure the conversation exists.
        var conversation = scenario.conversations[conversationName];
        if (!conversation) {
            hideModal();
            return;
        }

        //If there is no current conversation choice provided then we'll start from the beginning. 0 terminates the conversation.
        var currentOptionId = currentConversationChoice || currentConversationChoice === 0 ? currentConversationChoice : 1;

        //Ensure that this is a valid conversation choice.
        var currentOption = conversation.getOption(currentOptionId);
        if (!currentOption) {
            hideModal();
            return;
        }
        
        if (currentOption['triggers']) {
            for (var i = 0; i < currentOption['triggers'].length; i++)
                startTrigger(currentOption.triggers[i]);
        }
        if (currentOption['checkInventory']) {
            checkInventory: for (var i = 0; i < currentOption.checkInventory.length; i++) {
                for (var j = 0; j < currentOption.checkInventory[i]['has'].length; j++) {
                    if(!player.inventory.contains(currentOption.checkInventory[i]['has'][j]))
                        continue checkInventory;
                }
                currentOptionId = currentOption.checkInventory[i]['goto'];
                break;
            }
        }

        var currentOption = conversation.getOption(currentOptionId);
        if (!currentOption || currentOption.message == null) {
            hideModal();
            return;
        }
        
        //Show the message and reply options.
        jQuery('#modal #header').html(conversationName);
        jQuery('#modal #content').append(currentOption['message'] + '<p /> You Reply: <br /><ul>');

        var replyChoices = currentOption['replies'];
        for (var choiceText in replyChoices) {
            if (replyChoices.hasOwnProperty(choiceText)) {
                if (conversation.getOption(replyChoices[choiceText]) &&
                    conversation.getOption(replyChoices[choiceText]).requires &&
                    !checkCondition(conversation.getOption(replyChoices[choiceText]).requires))
                    continue;
                jQuery('#modal #content').append(optionRowTemplate.format(replyChoices[choiceText], choiceText));
            }
        }
        jQuery('#modal #content').append('</ul>');

        showModal();
    }
    
    showInventory = function () {
        var i, items, rowTemplate, inventoryItemsContainer, inventoryModal, attrs;
        // modeled after showConversation's implementation
        rowTemplate = "<span><img src='web/img/{0}' alt=''{1}> {2}</span>";
        items = player.inventory.items;
        inventoryModal = jQuery('#inventory-modal');
        inventoryItemsContainer = inventoryModal.find('#items-container');
        inventoryItemsContainer.empty();
        for (i in items) {
            if (items.hasOwnProperty(i) && items[i] != null) {
                attrs = '';
                if(items[i].width)
                    attrs += ' width="'+items[i].width+'"';
                if(items[i].height)
                    attrs += ' width="'+items[i].height+'"';
                inventoryItemsContainer.append(rowTemplate.format(items[i].image, attrs, items[i].name));
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

    displayModal = function (header, text, image) {
        emptyModal();

        jQuery('#modal #header').html(header);
        jQuery('#modal #content').html(text);
        jQuery('#modal #content').append(image);
        showModal();
    }

    emptyModal = function () {
        // Clear header and content
        jQuery('#modal #header').empty();
        jQuery('#modal #content').empty();
    }

    hideModal = function () {
        // Hide any visible modal element
        if (lastGameState === GAME_STATE_MENU) {
            setGameState(GAME_STATE_MENU);
        }
        if(gameState !== GAME_STATE_MENU)
            setGameState(GAME_STATE_RUNNING);
    }

    showMainMenu = function() {
        jQuery('#main-menu').show();
        centerMainMenu();
    }

    hideMainMenu = function() {
        jQuery('#main-menu').hide();
    }

    showModal = function () {
        setGameState(GAME_STATE_MODAL);
    }

    setObjective = function (name, displayText) {
        scenario.objectives.inProgress[name] = displayText || name;
        $('#objective').find('#' + name).remove();
        $('#objective ul').append('<li id="{0}">{1}</li>'.format(name, scenario.objectives.inProgress[name]));
    };

    completeObjective = function (name) {
        var objective = scenario.objectives.inProgress[name];
        if (objective) {
            scenario.objectives.completed[name] = objective;
            delete scenario.objectives.inProgress[name];
        }
        $('#objective').find('#' + name).remove();
    };

    failObjective = function (name) {
        var objective = scenario.objectives.inProgress[name];
        if (objective) {
            scenario.objectives.failed[name] = objective;
            delete scenario.objectives.inProgress[name];
        }
        $('#objective').find('#' + name).remove();
    };

    $('#overlay').live("click", function () {

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
    jQuery('#pause-resume-button').live("click", function() {
        setGameState(GAME_STATE_RUNNING);
    });
    
    jQuery('#pause-save-button').live("click", function() {
        saveGame();
        hideModal();
    });

    jQuery('#pause-mainmenu-button').live("click", function() {
        if (confirm("Quit and return to main menu?")) {
            setGameState(GAME_STATE_MENU);
        }
    });
});

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
