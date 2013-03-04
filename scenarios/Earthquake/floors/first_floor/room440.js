'room440': {
    'id': 'hall440', 
    'x': 4, 
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall440', 
            'image': 'R440-east.jpg',
            'destination': {
                'x': 5
            }
        },
        'w': {
            'name': 'WHall440',
            'image': 'R440-west.jpg',
            'destination': {
                'x': 3
            },
			'_props' : {
				'bike' : {
					'named' : 'bike',
					'image' : 'bike.png',
					'width': 39,
                    'height': 27,
                    'left': 537,
                    'top': 287,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A Bike'
                    }
				},
				'bikeMoved' : {
					'named' : 'bikeMoved',
					'image' : 'bikeMoved.png',
					'width': 13,
                    'height': 27,
                    'left': 570,
                    'top': 287,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A Bike'
                    }
				}
			}
        },
        'n': {
            'name': 'NHall440',   
            'image': 'R440-north.jpg'
        },
        's': {
            'name': 'SHall440', 
            'image': 'R440-south.jpg',
            'destination': {
                'y': 3
            }
        }
    }
}
