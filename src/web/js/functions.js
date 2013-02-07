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

jQuery(document).ready(function ($) {
    $(window).resize(function() {
        sizeWindow();
    });

    // Loads the Scenario objects from the data parameter (scenario-definition array)
    loadScenario = function (data) {
        scenario = new Scenario;
        scenario.set(data['name'], 'active')
        currFloor = null
        currRoom = null
        currWall = null

        // Add spinner to view-modal while loading scenario   
        spinner = new Spinner({
            color: '#fff'
        }).spin(document.getElementById('view-modal'))


        //load floors
        $.each(data['_floors'], function (key, value) {
            currFloor = scenario.addFloor(key, value['z'])
            // load rooms of this floor
            $.each(value['_rooms'], function (key, value) {
                currRoom = currFloor.addRoom(key, value['id'], value['x'], value['y'], currFloor.z);
                currRoom.addTriggers(value._triggers);
                // load walls of this room
                $.each(value['_walls'], function (key, value) {
                    currWall = currRoom.addWall(value['name'], key, value['image'])
                    // Add objects - if any
                    if (typeof value['_props'] != 'undefined') {
                        $.each(value['_props'], function (key, value) {
                            currWall.addProp(
                                key,
                                value['name'],
                                value['image'],
                                value['hoverImage'],
                                value['width'],
                                value['height'],
                                value['left'],
                                value['top'],
                                value['action'],
                                value['actionVariables']
                            );
                            if (value['barrier'])
                                currWall.barriers[currWall.barriers.length] = key;
                        })
                    }
                    // Add exits/destinations
                    if (typeof value['destination'] != 'undefined') {
                        var newX, newY, newZ, newF, dest = value['destination'];
                        if (typeof dest['x'] != 'undefined') { newX = dest['x']; } else { newX = currRoom['x']; }
                        if (typeof dest['y'] != 'undefined') { newY = dest['y']; } else { newY = currRoom['y']; }
                        if (typeof dest['z'] != 'undefined') { newZ = dest['z']; } else { newZ = currRoom['z']; }
                        if (typeof dest['f'] != 'undefined') { newF = dest['f']; } else { newF = key; }
                        currWall.setDestination(newX, newY, newZ, newF);
                    }
                })
            })
        })
        scenario.conversations = {};
        if (data['_conversations']) {
            $.each(data['_conversations'], function (key, value) {
                var newConversation = new Conversation;
                newConversation.set(key, value);
                scenario.conversations[key] = newConversation;
            });
        }
        clearAllTriggers();
        if (data['_triggers']) {
            $.each(data['_triggers'], function (key, value) {
                scenario.addTrigger(key, value);
            });
        }
        if (data['inactiveProps']) {
            for (var i = 0; i < data['inactiveProps'].length; i++)
                scenario.inactiveProps[data['inactiveProps'][i]] = true;
        }
        player = new Player;
        playerDef = data['_player']
        player.set(playerDef['x'], playerDef['y'], playerDef['z'], playerDef['_facing'], null)
        if (playerDef['inventory']) {
            for (var i = 0; i < playerDef['inventory'].length; i++)
                player.inventory.add(playerDef['inventory'][i]);
        }


        var startRoomTriggers = scenario.getRoom(player.x, player.y, player.z).triggers;
        if (startRoomTriggers) {
            startRoomTriggers.map(startTrigger);
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
        

        setGameState(GAME_STATE_RUNNING);
        renderScene();
        saveGame();
        generateMap(playerDef['x'], playerDef['y'], scenario.getFloor(playerDef['z']));
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
                $('#view-modal').hide();
                $('.modal').hide();
                showMainMenu();
                allowKeyEvents = false;
                break;
            case GAME_STATE_RUNNING:
                $('.modal').hide();
                $('#view-modal').show();
                allowKeyEvents = true;
                break;
            case GAME_STATE_PAUSED:
                allowKeyEvents = false;
                break;
        }
    }

    showPauseMenu = function() {
        jQuery('#pauseObjectiveList').empty();
        if (scenario) {
            var objectivesInProgress = scenario.getObjectivesInProgress();
            var objectivesCompleted = scenario.getObjectivesCompleted();
            var objectivesFailed = scenario.getObjectivesFailed();
            var objectiveList = jQuery('#pauseObjectiveList');

            if (objectivesInProgress.length > 0) {
                showObjectives(objectiveList, objectivesInProgress, 'Current Objectives');
            }

            if (objectivesCompleted.length > 0) {
                showObjectives(objectiveList, objectivesCompleted, 'Completed Objectives');
            }

            if (objectivesFailed.length > 0) {
                showObjectives(objectiveList, objectivesFailed, 'Failed Objectives');
            }
        }
        jQuery('#pause-menu').show();
        centerModal(jQuery('#pause-menu'));
        setGameState(GAME_STATE_PAUSED);

        

        function showObjectives(container, list, header) {
                container.append('<span class="pause-header">{0}</span><ul>'.format(header));
                for (var objectiveText in list) {
                    if (list.hasOwnProperty(objectiveText)) {
                        container.append('<li>{0}</li>'.format(list[objectiveText]));
                    }
                }
                container.append('</ul>');
        }
    }

    showConversation = function (conversationName, currentConversationChoice) {
        var optionRowTemplate = "<li class='conversation-option' data-conversation-option='{0}'>{1}</li><br />";

        //fetch the conversation name if we're progressing through a conversation tree.
        if (!conversationName) {
            conversationName = $('#modal #header').text();
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
        
        // Allow the conversation to change based on various things.
        // Local helper function:
        function checkCondition(condition) {
            if (condition['has'])
                for (var j = 0; j < condition['has'].length; j++) {
                    if (!player.inventory.contains(condition['has'][j]))
                        return false;
                }
            if (condition['triggersEnabled'])
                for (var j = 0; j < condition['triggersEnabled'].length; j++) {
                    if(!scenario.triggers.pool[condition['triggersEnabled'][j]])
                        return false;
                }
            if (condition['objectivesInProgress'])
                for (var j = 0; j < condition['objectivesInProgress'].length; j++) {
                    if(!scenario.objectives.inProgress[condition['objectivesInProgress'][j]])
                        return false;
                }
            if (condition['objectivesCompleted'])
                for (var j = 0; j < condition['objectivesCompleted'].length; j++) {
                    if(!scenario.objectives.completed[condition['objectivesCompleted'][j]])
                        return false;
                }
            return true;
        }
        
        // checkInventory was the name of this property before I allowed checking other things;
        // keeping it for now since I don't know if other people are using it in other branches.
        if (currentOption['checkInventory'])
            currentOption['check'] = currentOption['checkInventory'];
        if (currentOption['check']) {
            for (var i = 0; i < currentOption.check.length; i++) {
                if (checkCondition(currentOption.check[i])) {
                    currentOptionId = currentOption.check[i]['goto'];
                    break;
                }
            }
        }

        var currentOption = conversation.getOption(currentOptionId);
        if (!currentOption) {
            hideModal();
            return;
        }
        
        if (currentOption.message == null)
            hideModal();
        
        if (currentOption['triggers']) {
            for (var i = 0; i < currentOption['triggers'].length; i++)
                startTrigger(currentOption.triggers[i]);
            saveGame();
        }
        
        if (currentOption.message == null) {
            return;
        }
        
        //Show the message and reply options.
        $('#modal #header').html(conversationName);
        $('#modal #content').append(currentOption['message'] + '<p /> You Reply: <br /><ul>');

        var replyChoices = currentOption['replies'];
        for (var choiceText in replyChoices) {
            if (replyChoices.hasOwnProperty(choiceText)) {
                if (conversation.getOption(replyChoices[choiceText]) &&
                    conversation.getOption(replyChoices[choiceText]).requires &&
                    !checkCondition(conversation.getOption(replyChoices[choiceText]).requires))
                    continue;
                $('#modal #content').append(optionRowTemplate.format(replyChoices[choiceText], choiceText));
            }
        }
        $('#modal #content').append('</ul>');

        showModal();
    }
    
    showInventory = function () {
        // modeled after showConversation's implementation
        var rowTemplate = "<li><img src='web/img/{0}' alt=''{1}> {2}</li>";
        var items = player.inventory.items;
        
        emptyModal();
        $('#modal #header').html("Inventory");
        $('#modal #content').append('<ul class="inventory">');
        for (var i in items)
            if (items.hasOwnProperty(i) && items[i] != null) {
                var attrs = '';
                if(items[i].width)
                    attrs += ' width="'+items[i].width+'"';
                if(items[i].height)
                    attrs += ' width="'+items[i].height+'"';
                $('#modal #content').append(rowTemplate.format(items[i].image, attrs, items[i].name));
            }
        $('#modal #content').append('</ul>');

        showModal();
    }

    displayModal = function (header, text, image) {
        emptyModal();

        $('#modal #header').html(header);
        $('#modal #content').html(text);
        $('#modal #content').append(image);
        showModal();
    }

    emptyModal = function () {
        // Clear header and content
        $('#modal #header').empty();
        $('#modal #content').empty();
    }

    hideModal = function () {
        // Hide any visible modal element
        if (lastGameState === GAME_STATE_MENU) {
            setGameState(GAME_STATE_MENU);
        }
        if(gameState !== GAME_STATE_MENU)
            setGameState(GAME_STATE_RUNNING);
        $('#modal').hide();
        $('#overlay').hide();
    }

    showMainMenu = function() {
        $('#main-menu').show();
        centerMainMenu();
    }

    hideMainMenu = function() {
        $('#main-menu').hide();
    }

    showModal = function () {
        setGameState(GAME_STATE_PAUSED);
        $('#modal').show();
        centerModal($('#modal'));
        $('#overlay').show();
    }

    $('#overlay').live("click", function () {
        hideModal();
    });

    $("li.conversation-option").live("click", function () {
        showConversation(null, $(this).attr('data-conversation-option'));
    });

    $(".viewport-button").live("click", function () {
        $(document).trigger(
            'player-move',
            $(this).attr('id')
        );
    });

    /* Pause Menu click functions */
    $('#pause-resume-button').live("click", function() {
        setGameState(GAME_STATE_RUNNING);
    });
    
    $('#pause-save-button').live("click", function() {
        saveGame();
        hideModal();
    });

    $('#pause-mainmenu-button').live("click", function() {
        if (confirm("Quit and return to main menu?")) {
            setGameState(GAME_STATE_MENU);
        }
    });
});

function setObjective(name, displayText) {
    scenario.objectives.inProgress[name] = displayText || name;
    jQuery('#objective').find('#' + name).remove();
    jQuery('#objective ul').append('<li id="{0}">{1}</li>'.format(name, scenario.objectives.inProgress[name]));
};

function completeObjective(name) {
    var objective = scenario.objectives.inProgress[name];
    if (objective) {
        scenario.objectives.completed[name] = objective;
        delete scenario.objectives.inProgress[name];
    }
    jQuery('#objective').find('#' + name).remove();
};

function failObjective(name) {
    var objective = scenario.objectives.inProgress[name];
    if (objective) {
        scenario.objectives.failed[name] = objective;
        delete scenario.objectives.inProgress[name];
    }
    jQuery('#objective').find('#' + name).remove();
};

String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (m, n) { return args[n]; });
};

jQuery.fn.center = function () {
    return this.css({
        "position" : "absolute",
        "top" : (jQuery(window).height() - this.height()) / 2 + jQuery(window).scrollTop() + "px",
        "left" : (jQuery(window).width() - this.width()) / 2 + jQuery(window).scrollLeft() + "px"
    });
}
