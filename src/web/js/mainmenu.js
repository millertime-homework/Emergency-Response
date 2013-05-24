$(document).ready(function(){

    $("#play-button").click(function() {
        var scenarioSelectModal = $("#scenario-select");
        scenarioSelectModal.find(".option").remove();
        scenarioSelectModal
            .append("<div class=\"option\"><span id=\"loadTutorial\">"      + TutorialDef["name"]      + "</span></div>")
            .append("<div class=\"option\"><span id=\"loadEarthquake\">"    + EarthquakeDef["name"]    + "</span></div>")
            .append("<div class=\"option\"><span id=\"loadActiveShooter\">" + ActiveShooterDef["name"] + "</span></div>")
            .show();
        centerModal(scenarioSelectModal);

        $("#loadTutorial").click(function() {
            currentScenario = "TutorialDef";
            loadScenario(TutorialDef);
        });

        $("#loadEarthquake").click(function() {
            currentScenario = "EarthquakeDef";
            loadScenario(EarthquakeDef);
        });

        $("#loadActiveShooter").click(function() {
            currentScenario = "ActiveShooterDef";
            loadScenario(ActiveShooterDef);
        });
    });

    $("#resume-button").click(function() {
        if(!canLoadGame())
            alert("You have not yet saved a game.");
        else
            loadGame();
    });

    $("#info-button").click(function() {
        displayModal("About this game", "Team Banana's Emergency Response Game<br/>Development Version 0.5", null);
    });
});
