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
                        'conversationName': 'door',
                        'isAnAction': true
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
