



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
        append('<div class="option"><span id="loadTest">' + testDef['name'] + '</span></div>').
        show();
        centerModal(scenarioSelectModal);
    })

    // Load Scenario
    $("#loadActiveShooter").live("click", function() {
        currentScenario = "activeShooterDef";
        loadScenario(activeShooterDef);
    });

    $("#loadEarthquake").live("click", function() {
        currentScenario = "earthquakeDef";
        loadScenario(earthquakeDef);
    });

    $("#loadTest").live("click", function() {
        currentScenario = "testDef";
        loadScenario(testDef);
    });

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


