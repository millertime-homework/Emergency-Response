'room440': {
    'id': 'hall440',
    'x': 4,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall440',
            'image': 'R440-east.jpg',
            'destination': {
                'x': 5
            }
        },
        'n': {
            'name': 'NHall440',
            'image': 'R440-north.jpg'
        },
        's': {
            'name': 'SHall440',
            'image': 'R440-south.jpg',
            'destination': {
                'y': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorOutsideRightHover.png',
                    'width': 225,
                    'height': 552,
                    'top': 138,
                    'left': 461,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'w': {
            'name': 'WHall440',
            'image': 'R440-west.jpg',
            'destination': {
                'x': 3
            }
        }
    }
}
