'failedToLockTheDoor' : {
    'timeDelay' : 15000,
    'showCountdown': true,
    'enableTriggers': ['shotInClassroomEnding'],
    'events' : {
        'warpPlayer': ['injured',0,0,12]
    }
},
'shotInClassroomEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events': {
        'endGame': ['Game Over', "The shooter was right outside the classroom and you failed to lock the door in time. He entered the classroom and began shooting. Unfortunately no one was prepared and you and several others were either wounded or killed. Next time lock the door more quickly by clicking on the door handle. Locking the door early will give you extra time to escape, hide or find cover."]        
    }
},
'failedToLockTheDoor041' : {
    'timeDelay' : 15000,
    'showCountdown': true,
    'enableTriggers': ['shotInOfficeEnding'],
    'events' : {
        'warpPlayer': ['died',0,0,12]
    }
},
'shotInOfficeEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events': {
        'endGame': ['Game Over', "The shooter was right outside the office and you failed to lock the door in time. He barged into the office and shot you. Next time lock the door more quickly by clicking on the door handle. Locking the door early will give you extra time to escape, hide or find cover."]        
    }
}
