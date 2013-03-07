var triggerTypes = ['disabled', 'pool', 'waitingForSignal', 'deferredByMoves', 'deferredByTime', 'deferredByObjectives'];
function saveGame() {
    if (gameState == GAME_STATE_OVER) {
        document.cookie = 'emergencySave=; expires=Sat, 1-Jan-2000 00:00:00 GMT'; // expire in the past to delete
        return;
    }
    var inactList = [];
    for (var i in scenario.inactiveProps) 
        if (scenario.inactiveProps.hasOwnProperty(i))
            inactList[inactList.length] = i;
    var saveable = {
        "x": player.x, "y": player.y, "z": player.z, "facing": player.facing,
        "scenario": currentScenario,
        "objectives": scenario.objectives,
        "inactiveProps": inactList,
        "inventory": player.inventory.items,
        "triggers": {}
    };
    for (var j = 0; j < triggerTypes.length; j++) {
        var name = triggerTypes[j];
        var input = scenario.triggers[name];
        var result = {};
        for (var i in input) {
            result[i] = {'lives': input[i].lives};
            if (!Number.isFinite(result[i].lives))
                result[i].lives = -1; // JSON doesn't have Infinity
            if (input[i].timeLeft != null && name == 'deferredByTime')
                result[i].timeLeft = input[i].timeLeft;
        }
        saveable.triggers[name] = result;
    }
    var str = escape(JSON.stringify(saveable));
    console.log(JSON.stringify(saveable));
    // TODO expire
    document.cookie = "emergencySave="+str+"";
}

function canLoadGame() {
    return document.cookie.match(/emergencySave=([^;]+)/);
}

function loadGame() {
    document.cookie.match(/emergencySave=([^;]+)/);
    var str = unescape(RegExp.$1);
    var saveable = jQuery.parseJSON(str);
    currentScenario = saveable.scenario;
    loadScenario(window[currentScenario]);
    
    var allTriggers = jQuery.extend(true, {}, window[currentScenario]._triggers);
    
    player.x = saveable.x;
    player.y = saveable.y;
    player.z = saveable.z;
    player.facing = saveable.facing;
    player.inventory.items = saveable.inventory;
    scenario.objectives = saveable.objectives;
    clearAllTriggers();
    for (var j = 0; j < triggerTypes.length; j++) {
        var name = triggerTypes[j];
        var input = saveable.triggers[name];
        var result = {};
        for (var i in input) {
            result[i] = allTriggers[i];
            result[i].lives = input[i].lives;
            if (input[i].timeLeft != null)
                result[i].timeLeft = input[i].timeLeft;
        }
        scenario.triggers[name] = result;
    }
    scenario.inactiveProps = {};
    for (var i = 0; i < saveable.inactiveProps.length; i++)
        scenario.inactiveProps[saveable.inactiveProps[i]] = true;
    renderScene();
    updateMap();
    for (var name in scenario.objectives.inProgress) {
        console.log(name);
        if(scenario.objectives.inProgress.hasOwnProperty(name))
            jQuery('#objective ul').append('<li id="{0}">{1}</li>'.format(name, scenario.objectives.inProgress[name]));
    }
}
