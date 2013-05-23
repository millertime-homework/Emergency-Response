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
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 189,
                    'height': 489,
                    'top': 192,
                    'left': 463,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockableDoor1',
                        'isAnAction': true
                    }
                }
            }
        },
        'w': {
            'name': 'WOffice049',
            'image': 'R041-west.jpg'
        },
        'n': {
            'name': 'NOffice049',
            'image': 'R041-north.jpg'
        },
        's': {
            'name': 'SOffice049',
            'image': 'R041-south.jpg'
        }
    }
}
