'hiddenFromShooter' : {
    'waitForObjectiveCompletions' : ['turnOffLights', 'pullDownWindowShade', 'hideByDoor', 'silencePhone', 'lockTheDoor'],
    'events' : {
        'addPoints' : [60],
        'completeObjective' : ['hideFromShooter']
    },
    'deleteTriggers' : ['failedToHide'],
    'abortTriggers': ['ShootsThroughWalls011'],
    'startTriggers' : ['studentRunsFrom011(NoWait)']
}
