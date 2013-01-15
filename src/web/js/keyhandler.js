var keypressed = null; // true when handling a user's keypress
var allowKeyEvents = false; //Will be enabled/disabled by methods in functions.js depending on the game state.
/* ######################################## */
/* ######################################## */

jQuery(document).ready(function ($) {
    // Key is pressed.
    $(document).keydown(function (event) {
        if (keypressed) {
            return true;
        }
        var keyEvent = null;
        var keyEventArg = null;
        keypressed = true;
        try {
            //These are key events that should only be triggered when the game is in the correct state.
            if (allowKeyEvents) {
                if (event.keyCode == 37) {
                    // left arrow key
                    keyEvent = 'player-move';
                    keyEventArg = 'turn-left';
                } else if (event.keyCode == 38) {
                    // up arrow key
                    keyEvent = 'player-move';
                    keyEventArg = 'move-forward';
                } else if (event.keyCode == 39) {
                    // right arrow key
                    keyEvent = 'player-move';
                    keyEventArg = 'turn-right';
                } else if (event.keyCode == 40) {
                    // down arrow key
                    keyEvent = 'player-move';
                    keyEventArg = 'move-down';
                } else if (event.keyCode == 69) {
                    // start earthquake
                    keyEvent = 'startEarthquake';
                }
            }
            //The remaining events can be triggered at all times.
            if (event.keyCode == 27) {
                    // pause game
                    playerState = "Paused";
                    evalGameState();
            }
            if (keyEvent) {
                event.preventDefault();
                $(document).trigger(keyEvent, keyEventArg);
            }
        } catch (e) {
            console.log(e);
        }
        keypressed = false;
    })
})
