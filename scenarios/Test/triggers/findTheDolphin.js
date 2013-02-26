//The player is tasked with finding the dolphin. TODO: Add a requirement that the player must face
//a certain direction to complete a trigger (IE, they must look at the dolphin, not just be on its tile)
//'dolphinHunt' is the internal name of the objective used for objective tracking.
//'Find the dolphin!' is the quest presented to the user.
'findTheDolphin' : {
    'events' : { 
        'setObjective' : ['dolphinHunt', 'Find the dolphin!'],
    },
    'enableTriggers' : ['dolphinFound'],
    'startTriggers' : ['dolphinHint']
}
