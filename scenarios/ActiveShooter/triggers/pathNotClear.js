'pathNotClear' : {
    'events': {
        'addToScene': ['shooter220S']
    },
    'enableTriggers' : ['getShotAt', 'shotInStairwell', 'shotAtBottomOfElevator'],
    'startTriggers':['shooterMoves']
},
'shotAtBottomOfElevator' : {
        'disabled' : true,
        'events' : {
        'endGame': ['Game Over', "You enetered the elevator and headed for the first floor. The shooter realized what was happening though and simply waited for you at the bottom. As the elevator doors opened you realized your mistake, but it was to late. The shooter fatally shot you."]
    }
},
'shooterMoves': {
    'timeDelay' : 20000,
    'enableTriggers' : ['shotOnStairPlatform', 'getShotAtYopOfStairs'],
    'events': {
        'addToScene': ['shooter121E', 'shooter321W']
    },
},
'shotOnStairPlatform':{
    'disabled' : true,
    'events' : {
        'endGame': ['Game Over', "You ran towards the shooter and he shot you!"],
    }
}
