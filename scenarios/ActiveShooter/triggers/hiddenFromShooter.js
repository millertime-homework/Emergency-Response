'hiddenFromShooter' : {
    'waitForObjectiveCompletions' : ['turnOffLights', 'pullDownWindowShade', 'hideByDoor', 'silencePhone'],
    'events' : {
        'addPoints' : [60],
        'completeObjective' : ['hideFromShooter'],
        'endGame' : ['You successfully hid from the shooter', "You took decisive action in preparing yourself and your surroundings to maximize the effectiveness of your hiding spot. The shooter was not able to find you before the police arrived to apprehend him. Nice work!"]
    },
    'deleteTriggers' : ['failedToHide']
}
