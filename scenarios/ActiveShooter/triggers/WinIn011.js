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
    'events' : {
        'completeObjective' : ['hideFromShooter'],
        'endGame': ['You survived!', 'Hiding in a locked room turned out to be a good choice. although things won\'t always be this easy, you survived a very bad situation.']
    }
}
