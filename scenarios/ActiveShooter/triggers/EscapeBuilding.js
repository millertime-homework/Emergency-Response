'EscapeBuilding' : {
    'enableTriggers': ['escapeEnding'],
    'events' : {
        'warpPlayer': ['survived',0,0,12]
    }
},
'escapeEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events': {
        'addPoints' : [100],
        'endGame': ['You survived!', 'You made a decision and it turned out to be the right one. You escaped the building.']        
    }
}
