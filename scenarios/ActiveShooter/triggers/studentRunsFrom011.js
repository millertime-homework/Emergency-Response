'studentRunsFrom011' : { 
    'timeDelay' : 40000,
    'events' : {
        'showModal': ["As you hid in the classroom you heard gunshots going off, but they seemed to be getting further away. Then you heard nothing. It seemed like half an hour had gone by since the shooting began, but when you looked down at your watch you realized it had only been about 5 minutes. Then everything was quiet. After it had been quiet for a while a student came up to you and whispered \"Hey, we should go. The shooter's gone. Follow me, we have to get out of the building\" Without waiting for you to respond he quickly went to the door, unlocked it and disappeared down the hall."],
        'replaceProp': ['doorHandleDone', 'doorHandle'],
        'setObjective' : ['lockTheDoorAgain', 'Lock the door to the room again.'],
    },
    'enableTriggers' : ['lockedTheDoorAgain', , 'shooterEnters011'],
    'startTriggers' : ['WinIn011']
}
