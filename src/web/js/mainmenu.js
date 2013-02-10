



/* ######################################## */
/* ######################################## */


jQuery(document).ready(function($){
	
	// Changes Game State from main-menu to Playing
	$('#play-button').click(function() {
		// ## MAIN FUNCTION ##
    
        // Show Scene Selector
        var scenarioSelectModal = $('#scenario-select');
        scenarioSelectModal.find('.option').remove();
        scenarioSelectModal.append('<div class="option"><span id="loadActiveShooter">' + activeShooterDef['name'] + '</span></div>').
        append('<div class="option"><span id="loadEarthquake">' + earthquakeDef['name'] + '</span></div>').
        append('<div class="option"><span id="loadTest">' + testDef['name'] + '</span></div>').
        show();
        centerModal(scenarioSelectModal);

        
        // Load Scenario
        $("#loadActiveShooter").live("click", function() {
            currentScenario = "activeShooterDef";
            loadScenario(activeShooterDef);
            $("#loadEarthquake").unbind("click");
            $("#loadTest").unbind("click");
            $(this).unbind("click");
            $('#scenario-select').hide();
        });

        $("#loadEarthquake").live("click", function() {
            currentScenario = "earthquakeDef";
            loadScenario(earthquakeDef);
            $("#loadActiveShooter").unbind("click");
            $("#loadTest").unbind("click");
            $(this).unbind("click");
            $('#scenario-select').hide();
        });

        $("#loadTest").live("click", function() {
            currentScenario = "testDef";
            loadScenario(testDef);
            $("#loadActiveShooter").unbind("click");
            $("#loadEarthquake").unbind("click");
            $(this).unbind("click");
            $('#scenario-select').hide();
        });
	})

        $("#resume-button").click(function() {
            if(!canLoadGame())
                alert("You have not yet saved a game.");
            else
                loadGame();
        });
	
    
	// Brings Up the Info page.
	$('#info-button').click(function() {
		displayModal('About this game', 'Team Banana\'s Emergency Response Game<br/>Development Version 0.5', null);
	})

})


