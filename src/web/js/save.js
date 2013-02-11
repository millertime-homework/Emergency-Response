function saveGame() {
    if (gameState == GAME_STATE_OVER) {
        document.cookie = 'emergencySave=; expires=Sat, 1-Jan-2000 00:00:00 GMT'; // expire in the past to delete
        return;
    }
    var saveable = {
        "player": {"x": player.x, "y": player.y, "z": player.z, "facing": player.facing},
        "scenario": currentScenario,
        "objectives": scenario.objectives,
        "inactiveProps": scenario.inactiveProps,
        "inventory": player.inventory.items,
        "triggers": scenario.triggers
    };
    var str = escape(JSON.stringify(saveable));
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
    
    player.x = saveable.player.x;
    player.y = saveable.player.y;
    player.z = saveable.player.z;
    player.facing = saveable.player.facing;
    player.inventory.items = saveable.inventory;
    scenario.objectives = saveable.objectives;
    scenario.triggers = saveable.triggers;
    // restore timed triggers
    scenario.inactiveProps = saveable.inactiveProps;
    renderScene();
    updateMap();
    for (var name in scenario.objectives.inProgress) {
        console.log(name);
        if(scenario.objectives.inProgress.hasOwnProperty(name))
            jQuery('#objective ul').append('<li id="{0}">{1}</li>'.format(name, scenario.objectives.inProgress[name]));
    }
}
