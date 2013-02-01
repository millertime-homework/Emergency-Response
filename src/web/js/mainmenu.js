



/* ######################################## */
/* ######################################## */


jQuery(document).ready(function($){
	
	// Changes Game State from main-menu to Playing
	$('#play-button').click(function() {
		// ## MAIN FUNCTION ##
    
        // Show Scene Selector
        var scenarioSelectModal = jQuery('#scenario-select');
        scenarioSelectModal.find('.option').remove();
        scenarioSelectModal.append('<div class="option"><span id="loadActiveShooter">' + activeShooterDef['name'] + '</span></div>').
        append('<div class="option"><span id="loadEarthquake">' + earthquakeDef['name'] + '</span></div>').
        show();
        centerModal(scenarioSelectModal);

        
        // Load Scenario
        $("#loadActiveShooter").live("click", function() {
            loadScenario(activeShooterDef);
            $("#loadEarthquake").unbind("click");
            $(this).unbind("click");
            jQuery('#scenario-select').hide();
        });

        $("#loadEarthquake").live("click", function() {
            loadScenario(earthquakeDef);
            $("#loadActiveShooter").unbind("click");
            $(this).unbind("click");
            jQuery('#scenario-select').hide();
        });
	})
	
    
	// Brings Up the Info page.
	$('#info-button').click(function() {
		displayModal('About this game', 'Team Banana\'s Emergency Response Game<br/>Development Version 0.5', null);
	})

})


