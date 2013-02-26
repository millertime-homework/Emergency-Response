//It starts sampleObjectiveEnd, which is triggered after the player moves. Completes 'moveTutorial' objective.
//Player earns points, and starts a new objecive.
'sampleObjectiveEnd' : {
    'events' : {
        'completeObjective' : ['moveTutorial'],
        'addPoints' : [10],
        'addTextMessage' : ['Jerome Jackson', 'This is the second text message']
    },
    'moveDelay' : 1
}
