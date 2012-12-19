// GLOBALS
var spinner = null;

/* ######################################## */
/* ######################################## */

jQuery(document).ready(function($){

    // Add spinner to view-modal while loading scenario   
    spinner = new Spinner({
        color: '#fff'
    }).spin(document.getElementById('view-modal'))

    // ## MAIN FUNCTION ##
    // LOAD SCENARIO
    loadScenario(scenarioDef)

    // Check starting players position
    if (player) {
         if (!scenario.isValidRoom(player.x, player.y, player.z)) {
            alert('Player\'s starting position is invalid')
            return;
        }
    } else {
        alert('Player not defined')
    }

    // ## INIT UI ##
    // initMap()
    renderScene()

    spinner.stop();
});
