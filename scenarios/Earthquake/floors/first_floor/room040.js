'room040': {
    'id': 'hall040',
    'x': 0,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall040',
            'image': 'R040-east.jpg',
            'destination': {
                'x': 1
            }
        },
        'w': {
            'name': 'WHall040',
            'image': 'R040-west.jpg',
			'_props' : {
				'bike' : {
					'named' : 'bike',
					'image' : 'bike.png',
					'width': 350,
                    'height': 300,
                    'left': 325,
                    'top': 275,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A Bike'
                    }
				},
				'bikeMoved' : {
					'named' : 'bikeMoved',
					'image' : 'bikeMoved.png',
					'width': 100,
                    'height': 300,
                    'left': 750,
                    'top': 300,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A Bike against the wall'
                    }
				}
			}
        },
        'n': {
            'name': 'NHall040',
            'image': 'R040-north.jpg',
        },
        's': {
            'name': 'SHall040',
            'image': 'R040-south.jpg'
        }
    }
}
