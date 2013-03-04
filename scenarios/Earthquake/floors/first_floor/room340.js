'room340': {
    'id': 'hall340', 
    'x': 3, 
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall340', 
            'image': 'R340-east.jpg',
            'destination': {
                'x': 4
            }
        },
        'w': {
            'name': 'WHall340',
            'image': 'R340-west.jpg',
            'destination': {
                'x': 2
            },
			'_props' : {
				'bike' : {
					'named' : 'bike',
					'image' : 'bike.png',
					'width': 40,
                    'height': 28,
                    'left': 535,
                    'top': 288,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A Bike'
                    }
				},
				'bikeMoved' : {
					'named' : 'bikeMoved',
					'image' : 'bikeMoved.png',
					'width': 14,
                    'height': 28,
                    'left': 580,
                    'top': 288,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A Bike'
                    }
				}
			}
        },
        'n': {
            'name': 'NHall340',   
            'image': 'R340-north.jpg',
            'destination': {
                'y': 5
            }
        },
        's': {
            'name': 'SHall340', 
            'image': 'R340-south.jpg',
            'destination': {
                'y': 3
            }
        }
    }
}
