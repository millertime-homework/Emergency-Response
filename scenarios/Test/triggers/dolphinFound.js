//Starts disabled so it can't be triggered unless the player is on the dolphin quest
'dolphinFound' : {
    'events' : {
        'completeObjective' : ['dolphinHunt'],
        'addPoints' : [50]
    },
    'disabled' : true,
    'abortTriggers' : ['dolphinHint']
}
