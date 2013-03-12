'activateShooter': {
    'addToScene': ['hidingSpot', 'shooterR111', 'shooter220S', 'hidingStudent1', 
                   'hidingStudent2', 'hidingStudent3'],
    'startRandomTrigger': ['getToFrontDoors'],//, 'hideFromShooter'],
    'enableTriggers': ['groupAttack411', 'librarySouthOfficeEventsStart', 'hideFromShooter_041']
},
'playerEnters011':{
    'timeDelay' : 5000,
    'events': {
                'showConversation' : ['Professor Bell']
    }
},
'disablePBAutoConversation':{
    'abortTriggers': ['playerEnters011']
}
