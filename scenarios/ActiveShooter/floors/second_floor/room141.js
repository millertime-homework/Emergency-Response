'room141': {
    'id': 'library141',
    'x': 1,
    'y': 4,
    '_triggers': ['shooterCloseGetShot'],
    '_walls': {
        'e': {
            'name': 'ELibrary141',
            'image': 'R141-east.jpg',
            '_props': {
                'bookshelf': {
                    'name': 'bookshelf',
                    'image': 'largeSquare.png',
                    'hoverImage': 'largeSquareHover.png',
                    'width': 800,
                    'height': 609,
                    'top': 1,
                    'left': 124,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Bookshelf',
                        'isAnAction': true
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
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorOutsideRightHover.png',
                    'width': 113,
                    'height': 271,
                    'top': 236,
                    'left': 502,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockableDoor1',
                        'isAnAction': true
                    }
                }
            }
        }
    }
}