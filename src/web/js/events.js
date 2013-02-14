// GLOBALS

/* ######################################## */
/* ######################################## */

jQuery(document).ready(function($) {

    $(document).on('startEarthquake', function(){
        // Shakes the scene image - super realistic.
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

        // Moves the player to aftermath floor
        player.set(player.x, player.y, player.z + 8, player.facing, player.scenario);
        jQuery(document).trigger('player-moved', [player.x, player.y, player.z]);
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

    $(document).on('completeObjective', function (event, name) {
        completeObjective(name);
    });

    $(document).on('failObjective', function (event, name) {
        failObjective(name);
    });
});
