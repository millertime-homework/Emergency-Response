'room419': {
    'id': 'room419',
    'x': 4,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'ERoom419',
            'image': 'R411-east.jpg'
        },
        'w': {
            'name': 'WRoom419',
            'image': 'R411-west.jpg',
            'destination': {
                'x': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideLeftHover.png',
                    'width': 79,
                    'height': 188,
                    'top': 259,
                    'left': 519,
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
            'name': 'NRoom419',
            'image': 'R411-north.jpg'
        },
        's': {
            'name': 'SRoom419',
            'image': 'R411-south.jpg'
        }
    }
}
