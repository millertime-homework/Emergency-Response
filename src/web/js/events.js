// GLOBALS
var lightsOn = true;
var earthquakeAnimating = false;
var earthquakeTimeout = null;
/* ######################################## */
/* ######################################## */

jQuery(document).ready(function($) {

    /* DO NOT CALL BY ITSELF */
    function shakeScene() {
        var speed = 100;

        $('#view-scene')
            .animate({ left: '2' }, speed)
            .animate({ left: '-2' }, speed)
            .animate({ left: '2' }, speed)
            .animate({ left: '-2' }, speed)
            .animate({ left: '2' }, speed)
            .animate({ left: '-2' }, speed)
            .animate({ left: '2' }, speed)
            .animate({ left: '-2' }, speed)
            .animate({ left: '2' }, speed)
            .animate({ left: '-2' }, speed)
            .animate({ left: '2' }, speed)
            .animate({ left: '-2' }, speed)
            .animate({ left: '2' }, speed)
            .animate({ left: '-2' }, speed)
            .animate({ left: '2' }, speed)
            .animate({ left: '-2' }, speed)
            .animate({ left: '2' }, speed)
            .animate({ left: '-2' }, speed, function() {
                $('#view-scene').css('left', ''); // clear left value
                $('#view-scene').append('<img id="_dust" src="web/img/dust.png" style="z-index: 100; left: 100; width: 791px; height: 143px; position: absolute; display:block; top: 0; left:0;">');
                $("#_dust")
                    .animate({ top: '60', width: '900', opacity: 0}, 300, function() {
                        $('#view-scene').append('<img id="_dust2" src="web/img/dust.png" style="z-index: 100; left: 100; width: 791px; height: 143px; position: absolute; display:block; top: 0; left:0;">');
                        $('#_dust2')
                            .animate({ top: '100', width: '1200', opacity: 0 }, 600, function() {
                                $('#_dust').remove();
                                $('#_dust2').remove();
                                // Moves the player to aftermath floor
                                // $(document).trigger('disableLights');
                                // player.warp(player.facing, player.x, player.y, player.z + 8);
                                if (earthquakeAnimating) {
                                    shakeScene();
                                }
                            })
                    })
            })
    }

    $(document).on('startEarthquake', function(event, time, triggerName) {
        earthquakeAnimating = true;
        earthquakeTimeout = setTimeout(function() {
            $(document).trigger('stopEarthquake', triggerName);
            return;
        }, time);

        shakeScene();
    });

    $(document).on('stopEarthquake', function(event, triggerName) {
        earthquakeAnimating = false;
        clearTimeout(earthquakeTimeout);
        earthquakeTimeout = null;
        $('#view-scene').stop(true, true);
        $('#view-scene').css('left', '');
        $('#_dust').remove();
        $('#_dust2').remove();
        if (triggerName) {
            console.log('triggering ' + triggerName)
            startTrigger(triggerName);
        }
    })

    // Call renderScene when player moves
    $(document).on('player-move', function(event, direction) {
        var playerMoved = false;
        switch(direction) {
            case 'move-forward':
                playerMoved = player.move(player.facing);
                break;
            case 'turn-left':
                playerMoved = player.turn('l');
                break;
            case 'turn-right':
                playerMoved = player.turn('r');
                break;
            case 'move-up':
                playerMoved = player.move('u');
                break;
            case 'move-down':
                playerMoved = player.move('d');
                break;
        }
    });

    $('#inventory').click(function() {
        if (allowKeyEvents) {
            showInventory();
        }
    });

    $('#modal-close, #modal-close #icon').click(function(){
        hideModal();
    })

    $(document).on('ask-name', function(event) {
        if (player.name === 'Player') {
            player.name = prompt("What is your name?") || "Player";
        }
    });

    /** 
    * Should be triggered by any function that moves the player. Any functions
    * that should run after the player moves can react accordingly.
    */
    $(document).on('player-moved', function (event, x, y, z) {
        renderScene();
        updateMap();
        triggersMovementHandler(x, y, z);
        saveGame();
    });

    /** 
    * Should be triggered by any function that turns the player. Any functions
    * that should run after the player turns can react accordingly.
    */
    $(document).on('player-turned', function (event) {
        renderScene();
        triggersTurnHandler(player.facing, player.x, player.y, player.z);
        saveGame();
        showDirectionalIndicator();
    });


    /** 
    * Teleport the player to the specified location. All of the arguments are
    * optional and the current player value will be substituted for any null
    * or undefined argument. If the specified or derived location does not 
    * exist, the warp instruction is ignored. A successful warp will trigger 
    * the 'player-moved' event.
    * @param {string} wall The wall the player should face.
    * @param {int} x The destination x coordinate.
    * @param {int} y The destination y coordinate.
    * @param {int} z The destination z coordinate.
    */
     $(document).on('warpPlayer', function (event, wall, x, y, z) {
        player.warp(wall, x, y, z);

    });

    /** 
    * Shows a modal.
    * @param {string} header The modal's header text.
    * @param {string} body Text to display in the modal's body.
    * @param {HTMLImageElement} An image to display in the modal.
    */
    $(document).on('showModal', function (event, header, body, image) {
        displayModal(header, body, image);
    });

    /** 
    * Ends the current game, displaying a modal that presents information
    * about the session to the user.
    * @param {string} header A concise description of the outcome (EG "Game
    *     over. You lose." or "You win!").
    * @param {string} body A lengthier description of the outcome (EG, what
    *     caused the player to win or lose the game?).
    */
    $(document).on('endGame', function (event, header, body) {
        showGameOver(header, body);
    });

    /** 
    * Reduces the player's score by the specified number of points.
    * @param {int} pointValue The number of points to take away from the 
    *     player. Must be greater than zero.
    */
    $(document).on('deductPoints', function (event, pointValue) {
        if (pointValue && !isNaN(pointValue) && pointValue > 0) {
            player.score -= pointValue;
        }
    });

    /** 
    * Increases the player's score by the specified number of points
    * @param {int} pointValue The number of points to award the player. Must
    *     be greater than zero.
    */
    $(document).on('addPoints', function (event, pointValue) {
        if (pointValue && !isNaN(pointValue) && pointValue > 0) {
            player.score += pointValue;
        }
    });

    /** 
    * Creates an objective and starts it. Can be completed or failed via
    * an event or direct call to completeObjective/failObjective.
    * @param {string} name The name of the objective
    * @param {string} displayText A pretty-printable string of text that is
    *     used to present the objective to the user.
    */
    $(document).on('setObjective', function (event, name, displayText) {
        setObjective(name, displayText);
    });

    /** 
    * Starts an array of objectives where every even (0, 2, 4... n+2) element 
    * is an objective name and every odd (1, 3, 4... n+2) element is an 
    * objective description. The first objective name/description pair is 
    * considered the primary objective, and will be displayed in the current 
    * objective window.
    * @param {array<string>} objectives The objectives to create/start.
    */
    $(document).on('setObjectives', function (event, objectives) {
        objectives.reverse();
        for (var i = 0; objectives[i]; i += 2) {
            setObjective(objectives[i+1], objectives[i]);
        }
    });

    /**
    * Mark an objective in progress as completed.
    * @param {string} name The name of the objective to mark completed.
    */
    $(document).on('completeObjective', function (event, name) {
        completeObjective(name);
        triggersObjectiveCompletionHandler(name);
    });

    /**
    * Mark an objective in progress as failed.
    * @param {string} name The name of the objective to mark failed.
    */
    $(document).on('failObjective', function (event, name) {
        failObjective(name);
    });

    $(document).on('showConversation', function (event, conversationName) {
        showConversation(conversationName);
    });

    /**
    * Shows a conversation in a standardized conversation modal.
    * @param {string} conversationName The name of the conversation to be 
          displayed.
    * @param {string} entryPoint The key of the first message to display. 
          Default is '1'
    * @param {boolean} cannotSkip If true, the player cannot close the 
          conversation before it is over.
    * @param {boolean} isAnAction If true, 'x says' and 'you reply' are not 
          displayed.
    */
    $(document).on('showConversation', function (
            event, conversationName, entryPoint, cannotSkip, isAnAction) {
        showConversation(conversationName, entryPoint, cannotSkip, isAnAction);
    });

    /**
    * Show a message via large text that overlays the middle of the viewport
    * @param {string} message The message to be displayed.
    * @param {int} duration The number of seconds that the message should 
    *     remain on screen. Defaults to 5 seconds.
    */
    $(document).on('showOnScreenMessage', function (event, message, duration) {
        showOnScreenMessage(message, duration);
    });

    /**
    * Shows the annotation, if it exists, for the specified cell.
    * @param {int} x The x coordinate for this annotation.
    * @param {int} y The y coordinate for this annotation.
    * @param {int} z The z coordinate for this annotation.
    */
    $(document).on('showMapAnnotation', function (event, x, y ,z) {
        showAnnotation(x, y, z);
    });

    /**
    * Hides the annotation, if it exists, for the specified cell.
    * @param {int} x The x coordinate for this annotation.
    * @param {int} y The y coordinate for this annotation.
    * @param {int} z The z coordinate for this annotation.
    */
    $(document).on('hideMapAnnotation', function (event, x, y ,z) {
        hideAnnotation(x, y, z);
    });

    /**
    * Shows the annotations, if they exist, for the specified cells.
    * @param {Array<string>} keys An array of strings of the form "x,y,z" where
    *     x,y,z are the coordinates of each annotation that should be shown.
    */
    $(document).on('showMapAnnotations', function (event, keys) {
        showAnnotations(keys, showAnnotation);
    });

    /**
    * Hides the annotations, if they exist, for the specified cells.
    * @param {Array<string>} keys An array of strings of the form "x,y,z" where
    *     x,y,z are the coordinates of each annotation that should be hidden.
    */
    $(document).on('hideMapAnnotations', function (event, keys) {
        hideAnnotations(keys, showAnnotation);
    });

    $(document).on('disableLights', function (event) {
        lightsOn = false;
        $('#flashlight-overlay').removeClass('hidden');
    });

    $(document).on('enableLights', function (event) {
        lightsOn = true;
        $('#flashlightOverlay').addClass('hidden');
    });
});
