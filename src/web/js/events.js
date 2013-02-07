// GLOBALS

/* ######################################## */
/* ######################################## */

jQuery(document).ready(function($) {

    // Shakes the scene image - super realistic.
    $(document).on('startEarthquake', function(){
        var image = $('#scene-img')
        var speed = 30
	image.stop(true);
        for (i = 0; i < 5; i++) {
            image.animate({
                left: '-5'
            }, speed).animate({ 
                left: '5'
            }, speed).animate({
                left: '-5'
            }).animate({
                left: '5'
            }, speed).animate({
                left: '0'
            }, speed)
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
    })

    $(document).on('player-moved', function (event, x, y, z) {
        renderScene();
        updateMap();
        triggersMovementHandler(x, y, z);
        saveGame();
    });

    $(document).on('showModal', function (event, header, body, image) {
        displayModal(header, body, image);
    });
    
    $(document).on('endGame', function (event, header, body) {
        displayModal(header, body+'<p>Score: '+player.score+'<p><a href="javascript:setGameState(GAME_STATE_MENU);">Main menu</a>');
        canDismissModal = false;
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

    $(document).on('completeObjective', function (event, name) {
        completeObjective(name);
    });

    $(document).on('failObjective', function (event, name) {
        failObjective(name);
    });
});
