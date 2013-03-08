'lockedTheDoor' : {
    'disabled' : true,
    'abortTriggers': ['failedToLockTheDoor'],
    'startTriggers' : ['ShootsThroughWalls011'],
    'events' : {
        'addPoints' : [10],
        'completeObjective' : ['lockTheDoor'],
        'replaceProp': ['doorHandle', 'doorHandleDone']
    },
    'deleteTriggers' : ['failedToLockTheDoor']
}
