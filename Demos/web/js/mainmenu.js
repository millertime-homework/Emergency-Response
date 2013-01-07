



/* ######################################## */
/* ######################################## */


jQuery(document).ready(function($){
	
	// Changes Game State from main-menu to Playing
	$('#play-button').click(function() {
		// ## MAIN FUNCTION ##
    	// LOAD SCENARIO
        loadScenario(scenarioDef)
    
    	// Check starting players position
    	// Add spinner to view-modal while loading scenario   
    	spinner = new Spinner({
        	color: '#fff'
    	}).spin(document.getElementById('view-modal'))

    	if (player) {
        	if (!scenario.isValidRoom(player.x, player.y, player.z)) {
            	alert('Player\'s starting position is invalid')
           		return;
       		}
    	} else {
        	alert('Player not defined')
    	}
    	renderScene()

		playerState = "Playing";
		evalGameState();
		spinner.stop();
	})
	
    
	// Brings Up the Info page.
	$('#info-button').click(function() {
		$('#overlay').removeClass('hidden');
		$('#modal').removeClass('hidden');
		$('#overlay, #modal').bind('click', function() {
			$('#overlay').addClass('hidden');
			$('#modal').addClass('hidden');
		})
	})

})


