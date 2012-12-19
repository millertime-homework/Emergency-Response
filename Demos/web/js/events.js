// GLOBALS
var keypressed = null; // true when handling a user's keypress

/* ######################################## */
/* ######################################## */

jQuery(document).ready(function($) {

    // Shakes the scene image - super realistic.
    $(document).on('startEarthquake', function(){
        var image = $('#scene-img')
        var speed = 30
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
    $(document).on('player-move', function() {
        renderScene()
    })

    // Player clicks move-forward button
    $('#move-forward').click(function () {
        if (!player.move(player.facing)) {
            return;
        }
        $(document).trigger('player-move')
    })

    // Player clicks turn-left button
    $('#turn-left').click(function () {
        if (!player.turn("l")) {
            return;
        }
        $(document).trigger('player-move')
    })

    // Player clicks turn-right button
    $('#turn-right').click(function () {
        if (!player.turn("r")) {
            return;
        }
        $(document).trigger('player-move')
    })

    // Player clicks move-up button
    $('#move-up').click(function () {
        if (!player.move("u")) {
            return;
        }
        $(document).trigger('player-move')
    })

    // Player clicks move-down button
    $('#move-down').click(function () {
        if (!player.move("d")) {
            return;
        }
        $(document).trigger('player-move')
    })

    // Key is pressed
    // TODO: hijack arrow-keys from scrollbar
    $(window).keydown(function(event) {
        if (keypressed) {
            return true;
        }
        keypressed = true;
        if (event.which == 37) {
            event.preventDefault();
            // left arrow key
            $('#turn-left').trigger('click')
        } else if (event.which == 38) {
            event.preventDefault();
            // up arrow key
            $('#move-forward').trigger('click')
        } else if (event.which == 39) {
            event.preventDefault();
            // right arrow key
            $('#turn-right').trigger('click')
        } else if (event.which == 40) {
            event.preventDefault();
            // down arrow key
        } else if (event.which == 69) {
            event.preventDefault();
            $(document).trigger('startEarthquake')
        }
        keypressed = false;

    })
})