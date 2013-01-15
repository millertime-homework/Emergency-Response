var keypressed = null; // true when handling a user's keypress
var allowKeyEvents = false; //Will be enabled/disabled by methods in functions.js depending on the game state.
/* ######################################## */
/* ######################################## */

jQuery(document).ready(function ($) {
    // Key is pressed
    $(window).keydown(function (event) {
        if (keypressed) {
            return true;
        }
        var keyEvent = null;
        var keyEventArg = null;
        keypressed = true;
        try {
            if (event.which == 37) {
                // left arrow key
                keyEvent = 'player-move';
                keyEventArg = 'turn-left';
            } else if (event.which == 38) {
                // up arrow key
                keyEvent = 'player-move';
                keyEventArg = 'move-forward';
            } else if (event.which == 39) {
                // right arrow key
                keyEvent = 'player-move';
                keyEventArg = 'turn-right';
            } else if (event.which == 40) {
                // down arrow key
                keyEvent = 'player-move';
                keyEventArg = 'move-down';
            } else if (event.which == 69) {
                // start earthquake
                keyEvent = 'startEarthquake';
            } else if (event.which == 27) {
                // pause game
                playerState = "Paused";
                evalGameState();
            } else {
                // Debugging purposes :-/
                // alert(event.which);
            }
            if (keyEvent && allowKeyEvents) {
                event.preventDefault();
                $(document).trigger(keyEvent, keyEventArg);
            }
        } catch (e) {
            console.log(e);
        }
        keypressed = false;

    })
})
