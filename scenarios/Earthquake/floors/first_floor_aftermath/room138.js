'room138': {
    'id': 'hall138',
    'x': 1, 
    'y': 3,
	'_triggers': ['lukeRunsPast'],
    '_walls': {
        'e': {
            'name': 'NHall138',
            'image': 'R130-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'SHall138',
            'image': 'R130-west.jpg',
            'destination': {
                'x': 0
            }
        },
        'n': {
            'name': 'WHall138',
            'image': 'R130-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'EHall138',
            'image': 'R130-south.jpg',
            'destination': {
                'y': 2
            },
		    '_props' : {
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'downwiresNew.png',
                    'width': 160,
                    'height': 138,
                    'left': 483,
                    'top': 220,
			        'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Hanging wires'
                    },
                    'barrier' : true
                },
				'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'movedwiresNew.png',
                    'width': 120,
                    'height': 122,
                    'left': 490,
                    'top': 240
                },
				'GirlRunner2' : {    
					'name': 'GirlRunner',
                    'image': 'RunnerBack.png',
                    'width': 75,
                    'height': 125,
                    'left': 500,
                    'top': 275
				}
            }
        },
		'Runscene': {
            'name': 'Runscene',
            'image': 'R130-north.jpg',
			'isCutscene': true,
            'destination': {
                'x': 2
            },
			'_props' : {
			    'Luke' : {    
					'name': 'Luke',
                    'image': 'RunnerFront.png',
                    'width': 175,
                    'height': 300,
                    'left': 475,
                    'top': 250
				}
			}
        },
    }
}
