'WinIn011' : {
    'waitForObjectiveCompletions' : ['lockTheDoorAgain'],
    'timeDelay' : 5000,
    'enableTriggers': ['hideEnding'],
    'events' : {
        'warpPlayer': ['survived',0,0,12]
    }
},
'WinAloneIn011' : {
    'waitForObjectiveCompletions' : ['turnOffLights', 'pullDownWindowShade', 'hideByDoor', 'lockTheDoor', 'silencePhone'],
    'enableTriggers': ['hideEnding'],
    'events' : {
        'completeObjective' : ['hideFromShooter'],
        'warpPlayer': ['survived',0,0,12]
    }
}
