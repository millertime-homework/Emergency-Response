//Triggered if the player is having trouble finding the dolphin. Note that because it is
//aborted by dolphinFound, this only appears if the player takes too long to find the dolphin
//You can override existing objectives with modified display text simply by reusing the
//objective name.
'dolphinHint' : {
    'events' : {
        'setObjective' : ['dolphinHunt', 'Find the dolphin! Hint: Look in a classroom.'],
    },
    'moveDelay' : 5,
}
