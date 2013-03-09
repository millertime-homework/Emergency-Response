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
                    'image': 'UseDoor.png',
                    'openImage': 'blank.png',
                    'width': 140,
                    'height': 240,
                    'left': 500,
                    'top': 250,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
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
