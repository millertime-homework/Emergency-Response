'room049': {
    'id': 'office049',
    'x': 0,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EOffice049',
            'image': 'R041-east.jpg',
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
            'name': 'WOffice049',
            'image': 'R041-west.jpg',
        },
        'n': {
            'name': 'NOffice049',
            'image': 'R041-north.jpg',
        },
        's': {
            'name': 'SOffice049',
            'image': 'R041-south.jpg',
        }
    }
}
