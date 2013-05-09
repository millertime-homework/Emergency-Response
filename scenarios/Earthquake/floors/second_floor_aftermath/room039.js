'room039': {
    'id': 'office039',
    'x': 0,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'EOffice039',
            'image': 'R031-east.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'door.png',
                    'openImage': 'doorOpen.png',
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
            'name': 'WOffice039',
            'image': 'R031-west.jpg'
        },
        'n': {
            'name': 'NOffice039',
            'image': 'R031-north.jpg'
        },
        's': {
            'name': 'SOffice039',
            'image': 'R031-south.jpg'
        }
    }
}
