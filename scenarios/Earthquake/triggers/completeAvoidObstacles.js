'completeAvoidObstacles' : {
    'events' : {
        'completeObjective' : ['avoidObstacles'],
        'addPoints' : [100]
    }
},
'failAvoidObstacles' : {
    'events' : {
        'failObjective' : ['avoidObstacles'],
        'addToScene' : ['ambulance']
    },
    'disableTriggers' : ['completeAvoidObstacles','inBestEnding'],
    'enableTriggers'  : ['inInjuredEnding']
},
