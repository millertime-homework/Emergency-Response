var keypressed = null; // true when handling a user's keypress
var allowKeyEvents = false; //Will be enabled/disabled by methods in functions.js depending on the game state.
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_ESC = 27;
var KEY_E = 69;
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
            //These are key events that should only be triggered when the game is in the correct state.
        if (allowKeyEvents) {
            if (event.keyCode == KEY_LEFT) {
                // left arrow key
                keyEvent = 'player-move';
                keyEventArg = 'turn-left';
            } else if (event.keyCode == KEY_UP) {
                // up arrow key
                keyEvent = 'player-move';
                keyEventArg = 'move-forward';
            } else if (event.keyCode == KEY_RIGHT) {
                // right arrow key
                keyEvent = 'player-move';
                keyEventArg = 'turn-right';
            } else if (event.keyCode == KEY_DOWN) {
                // down arrow key
            } else if (event.keyCode == KEY_E) {
                // start earthquake
                keyEvent = 'startEarthquake';
            }
        }
        //The remaining events can be triggered at all times.
        if (event.keyCode == KEY_ESC && gameState !== GAME_STATE_MENU) {
                // pause game
                showPauseMenu();
        }
        if (keyEvent) {
            event.preventDefault();
            $(document).trigger(keyEvent, keyEventArg);
        }
        keypressed = false;
    })
})
