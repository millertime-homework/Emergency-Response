'takeDoorFrame' : {
    'events' : {
        'takeFromScene' : [ {'name': 'A door frame','image':'doorframe2.png', 'width':32, 'height':32 },
                            'doorFrame']
    }
},
'moveDownedWires' : {
    'events' : {
        'replaceProp': ['Downedwire', 'Movedwire']
    },
    'enableTriggers' : ['lukeRunsPast'],
    'disableTriggers' : ['activateElectrocute','electrocute']
}
