'room420': {
    'id': 'hall420',
    'x': 4,
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall420',
            'image': 'R420-east.jpg'
        },
        'n': {
            'name': 'NHall420',
            'image': 'R420-north.jpg'
        },
        's': {
            'name': 'SHall420',
            'image': 'R420-south.jpg',
            'destination': {
                'y': 1
            }
        },
        'w': {
            'name': 'WHall420',
            'image': 'R420-west.jpg',
            'destination': {
                'x': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 74,
                    'height': 171,
                    'top': 252,
                    'left': 480,
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