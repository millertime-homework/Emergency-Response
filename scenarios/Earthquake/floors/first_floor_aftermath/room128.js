'room128': {
    'id': 'hall128', 
    'x': 1, 
    'y': 2,
	'_triggers' : ['electrocute'],
    '_walls': {
        'e': {
            'name': 'EHall128', 
            'image': 'R120-east.jpg'
        },
        'w': {
            'name': 'WHall128',
            'image': 'R120-west.jpg',
            'destination': {
                'x': 0
            },
        },
        'n': {
            'name': 'NHall128',   
            'image': 'R120-north.jpg',
            'destination': {
                'y': 3
            },
			'_triggers' : ['dangerwarningPowerLines','activateElectrocute'],
			'_props' : {
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'downwiresNew.png',
                    'hoverImage': 'downwiresNewHover.png',
                    'width': 400,
                    'height': 300,
                    'left': 380,
                    'top': 150,
                    'action': 'showConversation',
                        'actionVariables': {
                            'conversationName': 'Hanging wires'
                        }
                },
                'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'movedwiresNew.png',
                    'width': 400,
                    'height': 300,
                    'left': 380,
                    'top': 150
                }
            }
        },
        's': {
            'name': 'SHall128', 
            'image': 'R120-south.jpg',
            'destination': {
                'y': 1
            },
			'_props' : {
				'doorFrame': {
					'name': 'doorFrame',
					'image': 'doorframe2.png',
                    'hoverImage': 'doorframe2Hover.png',
					'width': 75,
					'height': 75,
					'left': 515,
					'top': 400,
					'action': 'showConversation',
					'actionVariables': {
						'conversationName': 'A door frame'
					}
				},
				'Luke2' : {
					'name': 'Luke2',
                    'image': 'RunnerBack.png',
                    'width': 81,
                    'height': 250,
                    'left': 435,
                    'top': 250,
					'action': 'showConversation',
					'actionVariables': {
                        'conversationName': 'Luke'
                    }
				}
			},
		}
    }
}
