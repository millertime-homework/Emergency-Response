'failedToHideByDoor' : {
    'disabled' : true,
    'events' : {
        'showConversation': ['You Failed To Hide By The Door!']
    }
},
'failedToHideByDoor041' : {
    'disabled' : true,
    'enableTriggers': ['nearMissEnding'],
    'events' : {
        'warpPlayer': ['survived',0,0,12]
    }
},
'nearMissEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events': {
        'endGame': ['You survived, but barely', "You managed to get the door locked, but unfortunately you did not find a good place to hide. After a while the shooter began firing towards the room you were hiding in and the bullets ripped through the walls almost hitting you several times. It was a really close call! Next time find something to hide behind or lie on the ground with your head pointed away from the shooter."]        
    }
}
