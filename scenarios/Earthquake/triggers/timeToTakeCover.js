'timeToTakeCover': {
    'enableTriggers': ['debrisEnding'],
    'events': {
        'warpPlayer': ['died',0,0,12]
    },
    'timeDelay': 4000,
    'showCountdown': true,
    'lives': Infinity
},
'debrisEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events': {
        'endGame': ['Game Over', 'You didn\'t find cover soon enough and you were struck by falling debris!']        
    }
}