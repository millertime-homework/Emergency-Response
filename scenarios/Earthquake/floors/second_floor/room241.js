'room241': {
    'id': 'library241',
    'x': 2,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'ELibrary241',
            'image': 'R241-east.jpg'
        },
        'w': {
            'name': 'WLibrary241',
            'image': 'R241-west.jpg',
            'destination': {
                'x': 1
            }
        },
        'n': {
            'name': 'NLibrary241',
            'image': 'R241-north.jpg'
        },
        's': {
            'name': 'SLibrary241',
            'image': 'R241-south.jpg',
            'destination': {
                'y': 3
            },
            '_props': {
                'heavy': {
                    'name': 'heavy',
                    'image': 'heavy.png',
                    'width': 300,
                    'height': 300,
                    'left': 400,
                    'top': 20,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Heavy Object'
                    }
                },
                'heavy-on-floor': {
                    'name': 'heavy',
                    'image': 'heavy.png',
                    'width': 300,
                    'height': 300,
                    'left': 400,
                    'top': 320
                }
            }
        }
    }
}
