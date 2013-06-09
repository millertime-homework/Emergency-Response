'activateShooter': {
    'addToScene': ['shooterR111', 'shooter220S'],
    'startRandomTrigger': ['getToFrontDoors', 'hideFromShooter'],
    'enableTriggers': ['groupAttack411', 'librarySouthOfficeEventsStart', 'hideFromShooter_041'],
    'events': {
        'replaceProp': ['girl','girlCrouched']
    }
},
'playerEnters011':{
    'timeDelay' : 1500,
    'events': {
        'showConversation' : ['Professor Bell']
    }
},
'disablePBAutoConversation':{
    'abortTriggers': ['playerEnters011']
}
