'lockedTheDoor' : {
    'disabled' : true,
    'abortTriggers': ['failedToLockTheDoor'],
    'events' : {
        'addPoints' : [10],
        'completeObjective' : ['lockTheDoor'],
        'removeFromScene': ['doorHandle']
    },
    'deleteTriggers' : ['failedToLockTheDoor'],
    'startTriggers': ['lockDoor2', 'ShootsThroughWalls011']
},
'lockedTheDoorAlone' : {
    'disabled' : true,
    'abortTriggers': ['failedToLockTheDoor'],
    'events' : {
        'addPoints' : [10],
        'completeObjective' : ['lockTheDoor'],
        'removeFromScene': ['doorHandle']
    },
    'deleteTriggers' : ['failedToLockTheDoor'],
    'startTriggers': ['lockDoor2']
},
'lockedTheDoor041' : {
    'disabled' : true,
    'abortTriggers': ['failedToLockTheDoor041'],
    'events' : {
        'addPoints' : [10],
        'completeObjective' : ['lockTheDoor041'],
        'removeFromScene': ['doorHandle041']
    },
    'deleteTriggers' : ['failedToLockTheDoor041'],
    'startTriggers': ['lockDoor1', 'ShootsThroughWalls041']
}
