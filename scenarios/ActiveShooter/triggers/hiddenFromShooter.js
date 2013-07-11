'hiddenFromShooter' : {
    'waitForObjectiveCompletions' : ['turnOffLights', 'pullDownWindowShade', 'hideByDoor', 'lockTheDoor', 'silencePhone'],
    'events' : {
        'addPoints' : [100],
        'completeObjective' : ['hideFromShooter']
    },
    'deleteTriggers' : ['failedToHide'],
    'abortTriggers'  : ['ShootsThroughWalls011'],
    'startTriggers'  : ['studentRunsFrom011']
},
'hiddenFromShooter041' : {
    'waitForObjectiveCompletions' : ['turnOffLights041', 'pullDownWindowShade041', 'hideByDoor041', 'lockTheDoor041'],
    'abortTriggers' : ['ShootsThroughWalls041'],
    'enableTriggers': ['hideEnding'],
    'events' : {
        'addPoints' : [100],
        'completeObjective' : ['hideFromShooter041'],
        'warpPlayer': ['survived',0,0,12]
    }
},
'hideEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events': {
        'endGame': ['You survived!', 'You did the right thing by not leaving your hiding place. It took about an hour, but as the police cleared the building they found you and let you know that it was safe to leave the building.']
    }
}
