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
					'width': 65,
                    'height': 50,
                    'left': 515,
                    'top': 300,
				},
				'bikeMoved' : {
					'named' : 'bikeMoved',
					'image' : 'bikeMoved.png',
					'width': 30,
                    'height': 55,
                    'left': 575,
                    'top': 290
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
                'foo': {
                    'name': 'foo',
                    'image': 'fooLeft.png',
                    'width': 95,
                    'height': 230,
                    'left': 575,
                    'top': 260,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Mrs Foo'
                    }
                }
            }
        }
    }
}
