'activateElectrocute' : {
    'enableTriggers' : ['electrocute'],
    'lives' : Infinity
},
'deactivateElectrocute' : {
    'disableTriggers' : ['electrocute'],
    'lives' : Infinity
},
'electrocute': {
    'disabled': true,
    'startTriggers': ['failAvoidObstacles'],
    'enableTriggers': ['electrocuteEnding'],
    'events': {
        'warpPlayer': ['died',0,0,12]
    }
},
'electrocuteEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events': {
        'endGame': ['Game Over', 'When passing you accidentally got too close to the live power lines, which is a fatal mistake.'],
    }
}