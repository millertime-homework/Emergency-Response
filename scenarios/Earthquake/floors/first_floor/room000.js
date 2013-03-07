'room000': {
    'id': 'classroom000',
    'x': 0,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EClassroom000',
            'image': 'R000-east.jpg',
            'destination': {
                'x': 1
            },
			'_props': {
				'smBookcase' : {
					'name' : 'smBookcase',
					'image' : 'smBookcaseside.png',
					'width': 200,
                    'height': 150,
                    'left': 75,
                    'top': 365	
				},
                'heavy': {
                    'name': 'heavy',
                    'image': 'largeTVside.png',
                    'width': 100,
                    'height': 158,
                    'left': 140,
                    'top': 235,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Heavy Object'
                    }
                },
                'heavy-on-floor': {
                    'name': 'heavy',
                    'image': 'largeTVside.png',
                    'width': 100,
                    'height': 150,
                    'left': 200,
                    'top': 400
                }
            }
        },
        'w': {
            'name': 'WClassroom000',
            'image': 'R000-west.jpg'
        },
        'n': {
            'name': 'NClassroom000',
            'image': 'R000-north.jpg',
			'_props': {
				'smBookcase' : {
					'name' : 'smBookcase',
					'image' : 'smBookcase.png',
					'width': 200,
                    'height': 150,
                    'left': 705,
                    'top': 330	
				},
                'heavy': {
                    'name': 'heavy',
                    'image': 'largeTV.png',
                    'width': 175,
                    'height': 150,
                    'left': 720,
                    'top': 190,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Heavy Object'
                    }
                },
                'heavy-on-floor': {
                    'name': 'heavy',
                    'image': 'largeTV.png',
                    'width': 200,
                    'height': 175,
                    'left': 760,
                    'top': 360
                }
            }
        },
        's': {
            'name': 'SClassroom000',
            'image': 'R000-south.jpg'
        }
    }
}
