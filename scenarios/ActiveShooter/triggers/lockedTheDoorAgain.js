'lockedTheDoorAgain' : {
    'disabled' : true,
    'abortTriggers': ['shooterEnters011'],
    'events' : {
        'addPoints' : [10],
        'completeObjective' : ['lockTheDoorAgain'],
        'removeFromScene': ['doorHandle']
    },
    'deleteTriggers' : ['failedToLockTheDoor']
}
