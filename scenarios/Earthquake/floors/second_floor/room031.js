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
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideLeftHover.png',
                    'width': 191,
                    'height': 487,
                    'top': 192,
                    'left': 461,
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
            'name': 'WOffice031',
            'image': 'R031-west.jpg'
        },
        'n': {
            'name': 'NOffice031',
            'image': 'R031-north.jpg'
        },
        's': {
            'name': 'SOffice031',
            'image': 'R031-south.jpg'
        }
    }
}
