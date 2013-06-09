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
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideLeftHover.png',
                    'width': 112,
                    'height': 253,
                    'top': 239,
                    'left': 657,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door',
                        'isAnAction': true
                    }
                }
            }
        },
        'w': {
            'name': 'WLibrary139',
            'image': 'R131-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideLeftHover.png',
                    'width': 122,
                    'height': 281,
                    'top': 234,
                    'left': 788,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door',
                        'isAnAction': true
                    }
                }
            }
        }
    }
}
