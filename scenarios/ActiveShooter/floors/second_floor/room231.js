'room231': {
    'id': 'library231',
    'x': 2,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'ELibrary231',
            'image': 'R231-east.jpg',
            '_props': {
                'lockedDoor': {
                    'name': 'lockedDoor',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 143,
                    'height': 299,
                    'top': 223,
                    'left': 660,
                    'barrier': 'true',
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockedDoor',
                        'isAnAction': 'true'
                    }
                }
            }
        },
        'n': {
            'name': 'NLibrary231',
            'image': 'R231-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'SLibrary231',
            'image': 'R231-south.jpg'
        },
        'w': {
            'name': 'WLibrary231',
            'image': 'R231-west.jpg',
            'destination': {
                'x': 1
            }
        }
    }
}
