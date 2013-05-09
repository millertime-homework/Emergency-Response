'moveBike': {
    'events': {
        'replaceProp': ['bike','bikeMoved']
    }
},
'moveBeam' : {
    'events' : {
        'replaceProp': ['bikeMangled','beam'],
        'addToScene': ['west-exit'],
        'completeObjective': ['moveBike'],
        'addPoints' : [15]
    }
}
