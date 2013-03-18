'room031': {
    'id': 'office031',
    'x': 0,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'EOffice031',
            'image': 'R031-east.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'door.png',
                    'openImage': 'trans.png',
                    'hoverImage': 'doorHover.png',
                    'width': 280,
                    'height': 500,
                    'left': 420,
                    'top': 160,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'w': {
            'name': 'WOffice031',
            'image': 'R031-west.jpg',
        },
        'n': {
            'name': 'NOffice031',
            'image': 'R031-north.jpg',
        },
        's': {
            'name': 'SOffice031',
            'image': 'R031-south.jpg',
        }
    }
}
