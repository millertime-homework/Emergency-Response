var keypressed = null; // true when handling a user's keypress

/* ######################################## */
/* ######################################## */

jQuery(document).ready(function($) {
    // Key is pressed
    $(window).keydown(function(event) {
        if (keypressed) {
            return true;
        }
        keypressed = true;
        try {
            if (event.which == 37) {
                // left arrow key
                event.preventDefault();
                $(document).trigger('player-move', 'turn-left');
            } else if (event.which == 38) {
                // up arrow key
                event.preventDefault();
                $(document).trigger('player-move', 'move-forward');
            } else if (event.which == 39) {
                // right arrow key
                event.preventDefault();
                $(document).trigger('player-move', 'turn-right');
            } else if (event.which == 40) {
                // down arrow key
                event.preventDefault();
                $(document).trigger('player-move', 'move-down')
            } else if (event.which == 69) {
                // start earthquake
                event.preventDefault();
                $(document).trigger('startEarthquake')
            } else if(event.which == 27){
                // pause game
                playerState = "Paused";
                evalGameState();
            } else {
                // Debugging purposes :-/
                // alert(event.which);
            }
        } catch(e) {
            console.log(e);
        }
        keypressed = false;

    })
})
