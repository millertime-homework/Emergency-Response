'lockedTheDoorAgain' : {
    'disabled' : true,
    'abortTriggers': ['shooterEnters011'],
    'events' : {
        'addPoints' : [10],
        'completeObjective' : ['lockTheDoorAgain'],
        'replaceProp': ['doorHandle', 'doorHandleDone']
    },
    'deleteTriggers' : ['failedToLockTheDoor']
}
