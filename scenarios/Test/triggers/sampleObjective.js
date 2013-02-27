//This sample objective is started when you hit the room where it is included.
//'moveTutorial' is the internal name of the objective used for objective tracking.
//'Move somewhere' is the quest presented to the user.
'sampleObjective' : {
    'events' : {
        'setObjective' : ['moveTutorial', 'Move somewhere'],
        'attachEventsToPhone' : ['ringer-on', {'findTheDolphin' : {'func' : startTrigger, 'args' : ['findTheDolphin'] } } ],
        'addTextMessage' : ['Jerome Jackson', 'This is the first text message ever']
    },
    'startTriggers' : ['sampleObjectiveEnd']
}
