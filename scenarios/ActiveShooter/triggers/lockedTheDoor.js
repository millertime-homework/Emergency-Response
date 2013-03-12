'lockedTheDoor' : {
    'disabled' : true,
    'abortTriggers': ['failedToLockTheDoor'],
    'startTriggers' : ['ShootsThroughWalls011'],
    'events' : {
        'addPoints' : [10],
        'completeObjective' : ['lockTheDoor'],
        'replaceProp': ['doorHandle', 'doorHandleDone']
    },
    'deleteTriggers' : ['failedToLockTheDoor'],
    'startTriggers': ['lockDoor2']
},

'lockedTheDoor041' : {
    'disabled' : true,
    'abortTriggers': ['failedToLockTheDoor041'],
    //'startTriggers' : ['ShootsThroughWalls011'],
    'events' : {
        'addPoints' : [75],
        'completeObjective' : ['lockTheDoor041'],
        'replaceProp': ['doorHandle041', 'doorHandleDone041']
    },
    'deleteTriggers' : ['failedToLockTheDoor041'],
    'startTriggers': ['lockDoor1', 'ShootsThroughWalls041']
}
