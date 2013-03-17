'room411': {
    'id': 'room411',
    'x': 4,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'ERoom411',
            'image': 'R411-east.jpg'
        },
        'w': {
            'name': 'WRoom411',
            'image': 'R411-west.jpg',
            'destination': {
                'x': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'door.png',
                    'openImage': 'trans.png',
                    'hoverImage': 'doorHover.png',
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
            'name': 'NRoom411',
            'image': 'R411-north.jpg'
        },
        's': {
            'name': 'SRoom411',
            'image': 'R411-south.jpg'
        }
    }
}
