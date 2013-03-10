'lockedTheDoor' : {
    'disabled' : true,
    'abortTriggers': ['shooterEnters011'],
    'events' : {
        'addPoints' : [10],
        'completeObjective' : ['lockTheDoor'],
        'replaceProp': ['doorHandle', 'doorHandleDone']
    },
    'deleteTriggers' : ['failedToLockTheDoor'],
    'startTriggers': ['lockDoor2']
}
