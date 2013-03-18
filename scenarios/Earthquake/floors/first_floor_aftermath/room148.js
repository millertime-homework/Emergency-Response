'room148': {
    'id': 'hall148',
    'x': 1,
    'y': 4,
	'_triggers' : ['deactivateElectrocute','footInjury'],
    '_walls': {
        'e': {
            'name': 'EHall148',
            'image': 'R140-east.jpg',
            'destination': {
                'x': 2
            },
			'_props': {
                'brokenGlass': {
                    'name': 'brokenGlass',
                    'image': 'brokenGlass.png',
                    'width': 80,
                    'height': 25,
                    'left': 520,
                    'top': 330
			    },
				'bridgeDoor': {
                    'name': 'bridgeDoor',
                    'image': 'doordown.png',
                    'width': 40,
                    'height': 23,
                    'left': 540,
                    'top': 325
                },
				'mrs-wheelchair': {
                    'name': 'mrs_wheelchair',
                    'image': 'manFront.png',
                    'width': 275,
                    'height': 275,
                    'left': 400,
                    'top': 300,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'James'
                    }
                }
			}
        },
        'w': {
            'name': 'WHall148',
            'image': 'R140-west.jpg',
            'destination': {
                'x': 0
            },
			'_props' : {
				'bikeMangled' : {
					'named' : 'bikeMangled',
					'image' : 'bikeMangle.png',
					'width': 50,
                    'height': 65,
                    'left': 532,
                    'top': 277,
				},
				'beam' : {
					'named' : 'beam',
					'image' : 'beam.png',
					'width': 18,
                    'height': 85,
                    'left': 528,
                    'top': 275
				},
				'bikeMoved' : {
					'named' : 'bikeMoved',
					'image' : 'bikeMoved.png',
					'width': 35,
                    'height': 75,
                    'left': 575,
                    'top': 275,
				}
			}
        },
        'n': {
            'name': 'NHall148',
            'image': 'R140-north.jpg',
            'destination': {
                'y': 5
            }
        },
        's': {
            'name': 'SHall148',
            'image': 'R140-south.jpg',
            'destination': {
                'y': 3
            },
			'_props' : {
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'wire.png',
                    'width': 160,
                    'height': 102,
                    'left': 483,
                    'top': 220
                },
				'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'wire-moved.png',
                    'width': 160,
                    'height': 102,
                    'left': 483,
                    'top': 220
                },
				'Luke2' : {    
					'name': 'Luke2',
                    'image': 'RunnerBack.png',
                    'width': 33,
                    'height': 100,
                    'left': 500,
                    'top': 275
				}
            }
        }
    }
}
