



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
		displayModal('About this game', 'We are about this game. That is all for now.', null);
	})

    $('#feedback-button').click(function(){
        $('#report-modal').show();
        $('#main-menu').hide();
    })

})


