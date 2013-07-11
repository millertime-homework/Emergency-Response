'moveBike': {
    'events': {
        'replaceProp': ['bike','bikeMoved']
        'addPoints' : [10]
    }
},
'moveBeam' : {
    'events' : {
        'replaceProp': ['bikeMangled','beam'],
        'addToScene': ['west-exit'],
        'completeObjective': ['moveBike'],
        'addPoints' : [10]
    }
}
