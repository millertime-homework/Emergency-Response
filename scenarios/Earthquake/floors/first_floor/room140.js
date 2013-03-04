'room140': {
    'id': 'hall140',
    'x': 1,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall140',
            'image': 'R140-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'WHall140',
            'image': 'R140-west.jpg',
            'destination': {
                'x': 0
            },
			'_props' : {
				'bike' : {
					'named' : 'bike',
					'image' : 'bike.png',
					'width': 75,
                    'height': 60,
                    'left': 515,
                    'top': 275,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A Bike'
                    }
				},
				'bikeMoved' : {
					'named' : 'bikeMoved',
					'image' : 'bikeMoved.png',
					'width': 35,
                    'height': 75,
                    'left': 575,
                    'top': 275,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A Bike'
                    }
				}
			}
        },
        'n': {
            'name': 'NHall140',
            'image': 'R140-north.jpg',
            'destination': {
                'y': 5
            }
        },
        's': {
            'name': 'SHall140',
            'image': 'R140-south.jpg',
            'destination': {
                'y': 3
            },
            '_props': {
                'xavier': {
                    'name': 'xavier',
                    'image': 'prof_bell.png',
                    'width': 219,
                    'height': 391,
                    'left': 600,
                    'top': 210 
                }
            }
        }
    }
}
