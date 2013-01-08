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
        if (playerMoved) {
            renderScene()
        }
    })

    // Player clicks move-forward button
    $('#move-forward').click(function () {
        $(document).trigger('player-move', 'move-forward');
    })

    // Player clicks turn-left button
    $('#turn-left').click(function () {
        $(document).trigger('player-move', 'turn-left')
    })

    // Player clicks turn-right button
    $('#turn-right').click(function () {
        $(document).trigger('player-move', 'turn-right')
    })

    // Player clicks move-up button
    $('#move-up').click(function () {
        $(document).trigger('player-move', 'move-up')
    })

    // Player clicks move-down button
    $('#move-down').click(function () {
        $(document).trigger('player-move', 'move-down')
    })
})
