'failToTakeCover': {
    'enableTriggers': ['woodBeamEnding'],
    'events': {
        'warpPlayer': ['died',0,0,12]
    }
},
'woodBeamEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events': {
        'endGame': ['Game Over', 'You failed to survive the Earthquake!\n A large wood beam fell upon you.']
    }
}