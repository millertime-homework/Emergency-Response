'room141': {
    'id': 'library141',
    'x': 1,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'ELibrary141',
            'image': 'R141-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'WLibrary141',
            'image': 'R141-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'UseDoor.png',
                    'openImage': 'blank.png',
                    'width': 280,
                    'height': 500,
                    'left': 420,
                    'top': 160,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'n': {
            'name': 'NLibrary141',
            'image': 'R141-north.jpg'
        },
        's': {
            'name': 'SLibrary141',
            'image': 'R141-south.jpg',
            'destination': {
                'y': 3
            }
        }
    }
}
