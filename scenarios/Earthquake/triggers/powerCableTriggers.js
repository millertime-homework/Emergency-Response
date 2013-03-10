    'takeDoorFrame' : {
            'events' : {
                'takeFromScene' : [ {'name': 'A door frame','image':'doorframe.png', 'width':32, 'height':32 },
                'doorFrame']
            }
        },
        'moveDownedWires' : {
            'events' : {
                'replaceProp': ['Downedwire', 'Movedwire']
            },
			'enableTriggers' : ['girlRunspast']
        }
