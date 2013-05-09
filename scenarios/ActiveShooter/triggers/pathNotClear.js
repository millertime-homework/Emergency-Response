'pathNotClear' : {
    'events': {
        'addToScene': ['shooter220S']
    },
    'enableTriggers' : ['getShotAt', 'shotInStairwell', 'shotAtBottomOfElevator'],
    'startTriggers':['shooterMoves']
},
'shotAtBottomOfElevator' : {
        'disabled' : true,
        'enableTriggers': ['shotAtBottomOfElevatorEnding'],
        'events' : {
            'warpPlayer': ['died',0,0,12]
    }
},
'shotAtBottomOfElevatorEnding': {
    'disabled' : true,
    'timeDelay': 750,
    'events' : {
        'endGame': ['Game Over', "You entered the elevator and headed for the first floor. The shooter realized what was happening though and simply waited for you at the bottom. As the elevator doors opened you realized your mistake, but it was too late and he shot you."]
    }
},
'shooterMoves': {
    'timeDelay' : 20000,
    'enableTriggers' : ['shotOnStairPlatform', 'getShotAtYopOfStairs'],
    'events': {
        'addToScene': ['shooter121E', 'shooter321W']
    }
},
'shotOnStairPlatform':{
    'disabled' : true,
    'enableTriggers': ['ranAtShooterEnding'],
    'events': {
        'warpPlayer': ['died',0,0,12]
    }
},
'ranAtShooterEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events' : {
        'endGame': ['Game Over', "You ran towards the shooter and he shot you!"]
    }
}
