function saveGame() {
    var saveable = {
        "player": {"x": player.x, "y": player.y, "z": player.z, "facing": player.facing},
        "scenario": scenarioVariable,
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
    scenarioVariable = saveable.scenario;
    loadScenario(window[scenarioVariable]);
    
    player.x = saveable.player.x;
    player.y = saveable.player.y;
    player.z = saveable.player.z;
    player.facing = saveable.player.facing;
    player.inventory.items = saveable.inventory;
    scenario.objectives = saveable.objectives;
    scenario.triggers = saveable.triggers;
    // still need to update the displayed objective, and restore timed triggers
    scenario.inactiveProps = saveable.inactiveProps;
    renderScene();
    updateMap();
}
