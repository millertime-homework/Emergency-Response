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

    // When window is resized, resize modal
    // TODO: bind if modal shown, unbind when modal closed
    $(window).resize(function() {
        if (!$('#modal').hasClass('hidden')) {
            updateModalLocation();
        }
    })

    // Player clicks move-forward button
    $('.move-forward').click(function () {
        if (!player.move(player.facing)) {
            return;
        }
        $(document).trigger('player-move')
    })

    // Player clicks turn-left button
    $('.turn-left').click(function () {
        if (!player.turn("l")) {
            return;
        }
        $(document).trigger('player-move')
    })

    // Player clicks turn-right button
    $('.turn-right').click(function () {
        if (!player.turn("r")) {
            return;
        }
        $(document).trigger('player-move')
    })

    // Player clicks move-up button
    $('.move-up').click(function () {
        if (!player.move("u")) {
            return;
        }
        $(document).trigger('player-move')
    })

    // Player clicks move-down button
    $('.move-down').click(function () {
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
        event.preventDefault();
        keypressed = true;
        if (event.which == 37) {
            // left arrow key
            $('.turn-left').trigger('click')
        } else if (event.which == 38) {
            // up arrow key
            $('.move-forward').trigger('click')
        } else if (event.which == 39) {
            // right arrow key
            $('.turn-right').trigger('click')
        } else if (event.which == 40) {
            // down arrow key
        } else if (event.which == 69) {
            $(document).trigger('startEarthquake')
        }
        keypressed = false;

    })
})