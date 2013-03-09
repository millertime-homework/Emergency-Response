'room108': {
    'id': 'hall108',
    'x': 1,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EHall108',
            'image': 'R100-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'WHall108',
            'image': 'R100-west.jpg',
            'destination': {
                'x': 0
            }
        },
        'n': {
            'name': 'NHall108',
            'image': 'R100-north.jpg',
            'destination': {
                'y': 1
            },			
			'_props' : {
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'downwiresNew.png',
                    'width': 50,
                    'height': 50,
                    'left': 530,
                    'top': 275
                },
				'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'movedwiresNew.png',
                    'width': 50,
                    'height': 50,
                    'left': 530,
                    'top': 275
                },
				'Luke' : {    
					'name': 'Luke',
                    'image': 'RunnerFront.png',
                    'width': 100,
                    'height': 250,
                    'left': 475,
                    'top': 250,
					'action': 'showConversation',
					'actionVariables': {
                        'conversationName': 'Luke'
                    }
				}
            }
        },
        's': {
            'name': 'SHall108',
            'image': 'R100-south.jpg'
        }
    }
}
