



/* ######################################## */
/* ######################################## */


jQuery(document).ready(function($){
	
	// Changes Game State from main-menu to Playing
	$('#play-button').click(function() {
		// ## MAIN FUNCTION ##
    
        // Show Scene Selector
        displayModal('Select Scenario', '<a href="#" id="loadActiveShooter">' + activeShooterDef['name'] + '</a><br /><a href="#" id="loadEarthquake">' + earthquakeDef['name'] + '</a>', null);
        
        // Load Scenario
        $("#loadActiveShooter").live("click", function() {
            loadScenario(activeShooterDef);
            $("#loadEarthquake").unbind("click");
            $(this).unbind("click");
            hideModal();
        });

        $("#loadEarthquake").live("click", function() {
            loadScenario(earthquakeDef);
            $("#loadActiveShooter").unbind("click");
            $(this).unbind("click");
            hideModal();
        });
	})
	
    
	// Brings Up the Info page.
	$('#info-button').click(function() {
		displayModal('About this game', 'We are about this game. That is all for now.', null);
	})

})


