'room131': {
    'id': 'library131',
    'x': 1,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'ELibrary131',
            'image': 'R131-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'n': {
            'name': 'NLibrary131',
            'image': 'R131-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'SLibrary131',
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
            'name': 'WLibrary131',
            'image': 'R131-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'door2': {
                    'name': 'door',
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorOutsideRightHover.png',
                    'width': 122,
                    'height': 281,
                    'top': 234,
                    'left': 788,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door2',
                        'isAnAction': true
                    }
                }
            }
        }
    }
}
