'lockedTheDoor' : {
    'disabled' : true,
    'abortTriggers': ['failedToLockTheDoor'],
    'events' : {
        'addPoints' : [10],
        'completeObjective' : ['lockTheDoor'],
        'replaceProp': ['doorHandle', 'doorHandleDone']
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
        'replaceProp': ['doorHandle', 'doorHandleDone']
    },
    'deleteTriggers' : ['failedToLockTheDoor'],
    'startTriggers': ['lockDoor2', 'WinAloneIn011']
},
'lockedTheDoor041' : {
    'disabled' : true,
    'abortTriggers': ['failedToLockTheDoor041'],
    'events' : {
        'addPoints' : [75],
        'completeObjective' : ['lockTheDoor041'],
        'replaceProp': ['doorHandle041', 'doorHandleDone041']
    },
    'deleteTriggers' : ['failedToLockTheDoor041'],
    'startTriggers': ['lockDoor1', 'ShootsThroughWalls041']
}
