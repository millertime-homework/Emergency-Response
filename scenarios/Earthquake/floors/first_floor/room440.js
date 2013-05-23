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
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
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
            },
            '_props': {
                'bike': {
                    'name': 'bike',
                    'image': 'bike.png',
                    'width': 29,
                    'height': 22,
                    'top': 305,
                    'left': 542
                },
                'bikeMoved': {
                    'name': 'bikeMoved',
                    'image': 'bikeMoved.png',
                    'width': 25,
                    'height': 28,
                    'top': 303,
                    'left': 557
                }
            }
        }
    }
}
