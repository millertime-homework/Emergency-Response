'turnedOffLights031' : {
    'timeDelay' : 15000,
    'showCountdown': true,
    'enableTriggers': ['lightsOutEnding'],
    'events' : {
        'addPoints' : [10],
        'warpPlayer': ['survived',0,0,12]
    }
},
'lightsOutEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events': {
        'addPoints' : [100],
        'endGame': ['You Survived!', "You did the right thing by not making too much noise and not giving away your position. You might not ever know why, but the shooter left the area without ever trying to get into the office."]
    }
}
