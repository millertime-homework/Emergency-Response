'room400': {
    'id': 'hall400',
    'x': 4,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EHall400',
            'image': 'R400-east.jpg'
        },
        'n': {
            'name': 'NHall400',
            'image': 'R400-north.jpg',
            'destination': {
                'y': 1
            }
        },
        's': {
            'name': 'SHall400',
            'image': 'R400-south.jpg'
        },
        'w': {
            'name': 'WHall400',
            'image': 'R400-west.jpg',
            'destination': {
                'x': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideRightHover.png',
                    'width': 72,
                    'height': 171,
                    'top': 252,
                    'left': 482,
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