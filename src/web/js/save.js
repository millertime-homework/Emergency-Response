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
var hencode = {" ":"1101010","!":"110101111011","\"":"0110","#":"110101111010","$":"011110011110","%":"110101110011","&":"110101110010","'":"110101110001","(":"00000000100",")":"110101110101","*":"110101110100","+":"00000000111",",":"111","-":"1100",".":"00100011","/":"00000000110","0":"011101","1":"010","2":"0111001","3":"01111011","4":"11010110010","5":"00000000101","6":"110111101111","7":"110111101110","8":"110101100110","9":"011110011101",":":"001001",";":"011110011100","<":"110101111101","=":"110101111100",">":"110111101101","?":"110111101100","@":"110111101011","A":"000001110","B":"1101111001","C":"110111101010","D":"00000110","E":"0111100110","F":"110101101","G":"0000000001","H":"0111000110","I":"110111100000","J":"110101111001","K":"0111100101","L":"0000000000","M":"011100010","N":"110101111000","O":"110111100011","P":"000001111","Q":"110101110000","R":"11010110001","S":"01111010","T":"0111000011","U":"0111100100","V":"110101100001","W":"011100000","X":"110101110111","Y":"110101110110","Z":"110101100111","[":"100","\\":"011110011111","]":"101","^":"110101111111","_":"110101111110","`":"110111100001","a":"001111","b":"00000001","c":"11010011","d":"001011","e":"00010","f":"11010010","g":"000111","h":"011111","i":"00001","j":"110101100000","k":"0001100","l":"1101110","m":"0010000","n":"001110","o":"00110","p":"0001101","q":"0111000010","r":"001010","s":"1101000","t":"110110","u":"00100010","v":"011110001","w":"0000001","x":"0111000111","y":"011110000","z":"110111101001","{":"11011111","|":"110111100010","}":"0000010","~":"110111101000"};
var hdecode = {"1101010":" ","110101111011":"!","0110":"\"","110101111010":"#","011110011110":"$","110101110011":"%","110101110010":"&","110101110001":"'","00000000100":"(","110101110101":")","110101110100":"*","00000000111":"+","111":",","1100":"-","00100011":".","00000000110":"/","011101":"0","010":"1","0111001":"2","01111011":"3","11010110010":"4","00000000101":"5","110111101111":"6","110111101110":"7","110101100110":"8","011110011101":"9","001001":":","011110011100":";","110101111101":"<","110101111100":"=","110111101101":">","110111101100":"?","110111101011":"@","000001110":"A","1101111001":"B","110111101010":"C","00000110":"D","0111100110":"E","110101101":"F","0000000001":"G","0111000110":"H","110111100000":"I","110101111001":"J","0111100101":"K","0000000000":"L","011100010":"M","110101111000":"N","110111100011":"O","000001111":"P","110101110000":"Q","11010110001":"R","01111010":"S","0111000011":"T","0111100100":"U","110101100001":"V","011100000":"W","110101110111":"X","110101110110":"Y","110101100111":"Z","100":"[","011110011111":"\\","101":"]","110101111111":"^","110101111110":"_","110111100001":"`","001111":"a","00000001":"b","11010011":"c","001011":"d","00010":"e","11010010":"f","000111":"g","011111":"h","00001":"i","110101100000":"j","0001100":"k","1101110":"l","0010000":"m","001110":"n","00110":"o","0001101":"p","0111000010":"q","001010":"r","1101000":"s","110110":"t","00100010":"u","011110001":"v","0000001":"w","0111000111":"x","011110000":"y","110111101001":"z","11011111":"{","110111100010":"|","0000010":"}","110111101000":"~"};
var b64encode = {'A':"000000",'B':"000001",'C':"000010",'D':"000011",'E':"000100",'F':"000101",'G':"000110",'H':"000111",'I':"001000",'J':"001001",'K':"001010",'L':"001011",'M':"001100",'N':"001101",'O':"001110",'P':"001111",'Q':"010000",'R':"010001",'S':"010010",'T':"010011",'U':"010100",'V':"010101",'W':"010110",'X':"010111",'Y':"011000",'Z':"011001",'a':"011010",'b':"011011",'c':"011100",'d':"011101",'e':"011110",'f':"011111",'g':"100000",'h':"100001",'i':"100010",'j':"100011",'k':"100100",'l':"100101",'m':"100110",'n':"100111",'o':"101000",'p':"101001",'q':"101010",'r':"101011",'s':"101100",'t':"101101",'u':"101110",'v':"101111",'w':"110000",'x':"110001",'y':"110010",'z':"110011",'0':"110100",'1':"110101",'2':"110110",'3':"110111",'4':"111000",'5':"111001",'6':"111010",'7':"111011",'8':"111100",'9':"111101",'-':"111110",'.':"111111"};
var b64decode = {"000000":'A',"000001":'B',"000010":'C',"000011":'D',"000100":'E',"000101":'F',"000110":'G',"000111":'H',"001000":'I',"001001":'J',"001010":'K',"001011":'L',"001100":'M',"001101":'N',"001110":'O',"001111":'P',"010000":'Q',"010001":'R',"010010":'S',"010011":'T',"010100":'U',"010101":'V',"010110":'W',"010111":'X',"011000":'Y',"011001":'Z',"011010":'a',"011011":'b',"011100":'c',"011101":'d',"011110":'e',"011111":'f',"100000":'g',"100001":'h',"100010":'i',"100011":'j',"100100":'k',"100101":'l',"100110":'m',"100111":'n',"101000":'o',"101001":'p',"101010":'q',"101011":'r',"101100":'s',"101101":'t',"101110":'u',"101111":'v',"110000":'w',"110001":'x',"110010":'y',"110011":'z',"110100":'0',"110101":'1',"110110":'2',"110111":'3',"111000":'4',"111001":'5',"111010":'6',"111011":'7',"111100":'8',"111101":'9',"111110":'-',"111111":'.'};


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
