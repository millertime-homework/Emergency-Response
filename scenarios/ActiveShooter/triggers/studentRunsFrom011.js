'studentRunsFrom011' : {
    'disabled' : true,
    'timeDelay' : 3000,
    'events' : {
        'replaceProp': ['girlCrouched', 'girlRunning'],
        'addToScene': ['doorHandle', 'girlWounded'],
        'setObjective' : ['lockTheDoorAgain', 'Quick, lock the door again!']
    },
    'enableTriggers' : ['lockedTheDoorAgain', 'shooterEnters011', 'playerRuns'],
    'startTriggers' : ['WinIn011', 'unlockDoor2', 'getOutOfBuilding', 'studentPanics'],
    'disableTriggers' : ['shooterCloseGetShot']
},
'studentPanics': {
    'events': {
        'showConversation': ['Really Scared Student', 1, true, false]
    }
},
'studentRunsOff': {
    'timeDelay': 1000,
    'events': {
        'removeFromScene': ['girlRunning']
    }
}
