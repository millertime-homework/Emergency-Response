'hiddenFromShooter' : {
    'waitForObjectiveCompletions' : ['turnOffLights', 'pullDownWindowShade', 'hideByDoor', 'silencePhone'],
    'events' : {
        'addPoints' : [60],
        'completeObjective' : ['hideFromShooter']
    },
    'deleteTriggers' : ['failedToHide'],
    'abortTriggers': ['ShootsThroughWalls011'],
}
