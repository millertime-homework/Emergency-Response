var saveableVars = {
    'x':0,'y':1,'z':2,'facing':3,'scenario':4,'objectives':5,'inactiveProps':6,'inventory':7,'lightsOn':8,'triggers':9,
    'triggerTypes':0, 'lives':1, 'timeLeft': 2
};
var triggerTypes = ['disabled', 'pool', 'waitingForSignal', 'deferredByMoves', 'deferredByTime', 'deferredByObjectives'];
function getAllTriggerNames() { // needs to be the same for save and load
    var triggerNames = [];
    var allTriggers = window[currentScenario]._triggers;
    for (var i in allTriggers) {
        if (allTriggers.hasOwnProperty(i))
            triggerNames[triggerNames.length] = i;
    }
    triggerNames.sort();
    return triggerNames;
}

function saveGame() {
    try {
        if (gameState == GAME_STATE_OVER) {
            document.cookie = 'emergencySave=; expires=Sat, 1-Jan-2000 00:00:00 GMT'; // expire in the past to delete
            return;
        }
        var inactList = [];
        for (var i in scenario.inactiveProps) 
            if (scenario.inactiveProps.hasOwnProperty(i))
                inactList[inactList.length] = i;
        var flashlightOverlay = jQuery('#flashlight-overlay');
        var triggersSaveable = [];
        var saveable = [
            /*"x":*/ player.x, /*"y":*/ player.y, /*"z":*/ player.z, /*"facing":*/ player.facing,
            /*"scenario":*/ currentScenario,
            /*"objectives":*/ scenario.objectives,
            /*"inactiveProps":*/ inactList,
            /*"inventory":*/ player.inventory.items,
            /*"lightsOn":*/ lightsOn ? 'on' : flashlightOverlay.hasClass('flashlight-on'),
            /*"triggers":*/ triggersSaveable
        ];
        var triggerNames = getAllTriggerNames();
        for (i = 0; i < triggerNames.length; i++) {
            var tname = triggerNames[i];
            var result = [[]];
            for (var j = 0; j < triggerTypes.length; j++) {
                var type = triggerTypes[j];
                var trigger = scenario.triggers[type][tname];
                if (trigger != null) {
                    result[saveableVars.triggerTypes][result[saveableVars.triggerTypes].length] = j;
                    if (Number.isFinite(trigger.lives))
                        result[saveableVars.lives] = trigger.lives;
                    else
                        result[saveableVars.lives] = -1;
                    if (trigger.timeLeft != null && type == 'deferredByTime')
                        result[saveableVars.timeLeft] = trigger.timeLeft;
                }
            }
            triggersSaveable[i] = result;
        }
        var str = escape(JSON.stringify(saveable));
        var cookieStr = "emergencySave="+str+"";
        if(cookieStr.length >= 4096)
            console.log("Cookie is too long again ("+cookieStr.length+"): "+JSON.stringify(saveable));
        // TODO expire
        document.cookie = cookieStr;
    } catch (e) {
        console.log("Error while saving: " + e);
    }
}

// I can use this from the console if further testing or debugging is needed
function logSavedGame() {
    document.cookie.match(/emergencySave=([^;]+)/);
    console.log(unescape(RegExp.$1));
}

function canLoadGame() {
    return document.cookie.match(/emergencySave=([^;]+)/);
}

function loadGame() {
    document.cookie.match(/emergencySave=([^;]+)/);
    var str = unescape(RegExp.$1);
    var saveable = jQuery.parseJSON(str);
    currentScenario = saveable[saveableVars.scenario];
    loadScenario(window[currentScenario]);
    
    var allTriggers = jQuery.extend(true, {}, window[currentScenario]._triggers);
    var triggerNames = getAllTriggerNames();
    
    player.x = saveable[saveableVars.x];
    player.y = saveable[saveableVars.y];
    player.z = saveable[saveableVars.z];
    player.facing = saveable[saveableVars.facing];
    player.inventory.items = saveable[saveableVars.inventory];
    scenario.objectives = saveable[saveableVars.objectives];
    clearAllTriggers();
    if (triggerNames.length != saveable[saveableVars.triggers].length)
        console.log("Incompatible save: number of triggers changed from "+triggerNames.length+" to "+saveable[saveableVars.triggers].length);
    for(var i = 0; i < triggerNames.length; i++) {
        var tname = triggerNames[i];
        var input = saveable[saveableVars.triggers][i];
        var trigger = allTriggers[tname];
        for (var j = 0; j < input[saveableVars.triggerTypes].length; j++)
            scenario.triggers[triggerTypes[input[saveableVars.triggerTypes][j]]][tname] = trigger;
        trigger.lives = input[saveableVars.lives];
        if(input[saveableVars.timeLeft] != null)
            trigger.timeLeft = input[saveableVars.timeLeft];
    }
    scenario.inactiveProps = {};
    for (var i = 0; i < saveable[saveableVars.inactiveProps].length; i++)
        scenario.inactiveProps[saveable[saveableVars.inactiveProps][i]] = true;
    var flashlightOverlay = jQuery('#flashlight-overlay');
    if(saveable[saveableVars.lightsOn] != 'on') {
        jQuery(document).trigger('disableLights');
        if(saveable[saveableVars.lightsOn]) { // flashlights on
            flashlightOverlay.removeClass('flashlight-off');
            flashlightOverlay.addClass('flashlight-on');
        } else {
            flashlightOverlay.removeClass('flashlight-on');
            flashlightOverlay.addClass('flashlight-off');
        }
    }
    renderScene();
    updateMap();
    jQuery('#objective ul').empty();
    for (var name in scenario.objectives.inProgress) {
        if(scenario.objectives.inProgress.hasOwnProperty(name))
            jQuery('#objective ul').append('<li id="{0}">{1}</li>'.format(name, scenario.objectives.inProgress[name]));
    }
    for (var i in scenario.triggers.deferredByTime) {
        if (scenario.triggers.deferredByTime.hasOwnProperty(i))
            timeDelayedStep(i, scenario);
    }
}
