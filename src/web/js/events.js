// GLOBALS

/* ######################################## */
/* ######################################## */

jQuery(document).ready(function($) {

    $(document).on('startEarthquake', function() {


        // Moves the player to aftermath floor
        player.set(player.x, player.y, player.z + 8, player.facing, player.scenario);
        $(document).trigger('player-moved', [player.x, player.y, player.z]);

        // Shakes the scene image - super realistic.
        // var image = $('#view-scene');
        // console.log($(image).attr('src'));
        // var speed = 30;
        // image.stop(true);
        // for (i = 0; i < 5; i++) {
        //     console.log('animating...')
        //     image.animate({
        //         left: '-5'
        //     }, speed).animate({ 
        //         left: '10'
        //     }, speed).animate({
        //         left: '-5'
        //     }).animate({
        //         left: '10'
        //     }, speed).animate({
        //         left: '0'
        //     }, speed)
        //     image.css('left', '');
        //     console.log(image.css('left'))
        // }
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
