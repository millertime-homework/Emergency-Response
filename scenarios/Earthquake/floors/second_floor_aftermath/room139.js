'room139': {
    'id': 'library139',
    'x': 1,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'ELibrary139',
            'image': 'R131-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'WLibrary139',
            'image': 'R131-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'door2': {
                    'name': 'door',
                    'image': 'UseDoor.png',
                    'openImage': 'blank.png',
                    'width': 120,
                    'height': 250,
                    'left': 780,
                    'top': 240,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door2'
                    }
                }
            }
        },
        'n': {
            'name': 'NLibrary139',
            'image': 'R131-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'SLibrary139',
            'image': 'R131-south.jpg',
            'destination': {
                'y': 2
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'UseDoor.png',
                    'openImage': 'blank.png',
                    'width': 120,
                    'height': 250,
                    'left': 660,
                    'top': 240,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        }
    }
}
