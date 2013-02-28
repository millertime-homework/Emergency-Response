// GLOBALS

/* ######################################## */
/* ######################################## */

jQuery(document).ready(function($) {


    function shakeScene(count) {
        if (count <= 0) return;

        var speed = 100;

        $('#view-scene')
            .animate({ left: '2' }, speed)
            .animate({ left: '-2' }, speed)
            .animate({ left: '0' }, speed, shakeScene(count-1))
    }

    $(document).on('startEarthquake', function() {
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
            .animate({ left: '-2' }, speed, function() {
                $('#view-scene').append('<img id="_dust" src="web/img/dust.png" style="z-index: 100; left: 100; width: 791px; height: 143px; position: absolute; display:block; top: 0; left:0;">');
                $("#_dust")
                    .animate({ top: '60', width: '900', opacity: 0}, 300, function() {
                        $('#view-scene').append('<img id="_dust2" src="web/img/dust.png" style="z-index: 100; left: 100; width: 791px; height: 143px; position: absolute; display:block; top: 0; left:0;">');
                        $('#_dust2')
                            .animate({ top: '100', width: '1200', opacity: 0 }, 600, function() {
                                $('#_dust').remove();
                                $('#_dust2').remove();
                                // Moves the player to aftermath floor
                                player.warp(player.facing, player.x, player.y, player.z + 8);
                            })
                    })
            })
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
    })

    $('#inventory').click(function() {
        showInventory();
    });

    $(document).on('player-moved', function (event, x, y, z) {
        renderScene();
        updateMap();
        triggersMovementHandler(x, y, z);
        saveGame();
    });

     $(document).on('warpPlayer', function (event, f, x, y, z) {
        player.warp(f, x, y, z);

    });

    $(document).on('showModal', function (event, header, body, image) {
        displayModal(header, body, image);
    });
    
    $(document).on('endGame', function (event, header, body) {
        showGameOver(header, body);
    });

    $(document).on('player-turned', function (event, x, y, z) {
        renderScene();
        saveGame();
        showDirectionalIndicator();
    });    

    $(document).on('addPoints', function (event, pointValue) {
        if (pointValue && !isNaN(pointValue) && pointValue > 0) {
            player.score += pointValue;
        }
    });

    $(document).on('setObjective', function (event, name, displayText) {
        setObjective(name, displayText);
    });

    //Starts an array of objectives where every even (0, 2, 4... n+2) element is an objective name
    //and every odd (1, 3, 4... n+2) element is an objective description. The first objective
    //name/description pair is considered the primary objective, and will be displayed in the
    //current objective window.
    $(document).on('setObjectives', function (event, objectives) {
        objectives.reverse();
        for (var i = 0; objectives[i]; i += 2) {
            setObjective(objectives[i+1], objectives[i]);
        }
    });

    $(document).on('completeObjective', function (event, name) {
        completeObjective(name);
        triggersObjectiveCompletionHandler(name);
    });

    $(document).on('failObjective', function (event, name) {
        failObjective(name);
    });

    $(document).on('showConversation', function (event, conversationName) {
        showConversation(conversationName);
    });
});
