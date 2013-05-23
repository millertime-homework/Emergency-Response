'room408': {
    'id': 'hall408',
    'x': 4,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EHall408',
            'image': 'R400-east.jpg'
        },
        'w': {
            'name': 'WHall408',
            'image': 'R400-west.jpg',
            'destination': {
                'x': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
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
        },
        'n': {
            'name': 'NHall408',
            'image': 'R400-north.jpg',
            'destination': {
                'y': 1
            }
        },
        's': {
            'name': 'SHall408',
            'image': 'R400-south.jpg'
        }
    }
}
