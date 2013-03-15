'shooterEnters031':{
    'timeDelay' : 15000,
    'showCountdown': true,
    'enableTriggers': ['shotInOfficeEnding'],
    'events' : {
        'warpPlayer': ['died',0,0,12]
    }
},
'shooterKillsHidingPlayer031':{
    'enableTriggers': ['shotWhileHidingEnding'],
    'events': {
        'warpPlayer': ['died',0,0,12]
    }
},
'shotWhileHidingEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events' : {
        'endGame': ['Game Over', "Unfortunately it was too late. The room was far to small to hide in and the shooter easily spotted you and shot you. You did not survive. Next time be more aggressive and fight back."]
    }
},
'shooterWoundsPlayer031':{
    'enableTriggers': ['shotWhilePlayingDeadEnding'],
    'events': {
        'warpPlayer': ['injured',0,0,12]
    }
},
'shotWhilePlayingDeadEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events' : {
        'endGame': ['Game Over', "The shooter shot you anyway. You'll never know whether he knew you were still alive or whether he just shot you because he could. You wake up in the ICU of your local hospital. You might not survive. Next time be more aggressive and fight the shooter. Playing dead is obviously a very risky choice."]
    }
},
'playerDiesNoWeapons':{
    'enableTriggers': ['lostTheFightEnding'],
    'events': {
        'warpPlayer': ['died',0,0,12]
    }
},
'lostTheFightEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events' : {
        'endGame': ['Game Over', "The shooter entered the room and you and the other students jumped on him and tried to get his gun away from him. Unfortunately he got the upper hand and all three of you were killed. The fight was close though and if you had been able to find a weapon you probably would have survived. Next time improvise a weapon such as a screw driver or a fire extinguisher. You should also encourage the people areound you to find weapons."]
    }
},
'playerSubduesShooter031':{
    'enableTriggers': ['wonFightEnding'],
    'events': {
        'warpPlayer': ['survived',0,0,12]
    }
},
'wonFightEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events' : {
        'endGame': ['You Survived!', "It was a violent struggle. You and the other students bludgeoned the shooter to death with your improvised weapon(s). While you and another student were hurt in the fight, your injuries are not serious and you most importantly, you are still alive!"]
    }
}
