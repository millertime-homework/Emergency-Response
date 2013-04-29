'room141': {
    'id': 'library141',
    'x': 1,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'ELibrary141',
            'image': 'R141-east.jpg'
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
                    'image': 'door.png',
                    'openImage': 'blackout.jpg',
                    'hoverImage': 'doorHover.png',
                    'width': 160,
                    'height': 340,
                    'left': 480,
                    'top': 200,
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
