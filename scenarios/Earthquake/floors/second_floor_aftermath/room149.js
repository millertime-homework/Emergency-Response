'room149': {
    'id': 'library149',
    'x': 1,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'ELibrary149',
            'image': 'R141-east.jpg'
        },
        'w': {
            'name': 'WLibrary149',
            'image': 'R141-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'UseDoor.png',
                    'openImage': 'blank.png',
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
            'name': 'NLibrary149',
            'image': 'R141-north.jpg'
        },
        's': {
            'name': 'SLibrary149',
            'image': 'R141-south.jpg',
            'destination': {
                'y': 3
            }
        }
    }
}
