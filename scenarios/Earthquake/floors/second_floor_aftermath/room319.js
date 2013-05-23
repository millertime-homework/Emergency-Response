'room319': {
    'id': 'hall319',
    'x': 3,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall319',
            'image': 'R311-east.jpg',
            'destination': {
                'x': 4
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 230,
                    'height': 564,
                    'top': 166,
                    'left': 442,
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
            'name': 'WHall319',
            'image': 'R311-west.jpg',
            'destination': {
                'x': 2
            }
        },
        'n': {
            'name': 'NHall319',
            'image': 'R311-north.jpg',
            'destination': {
                'y': 2
            }
        },
        's': {
            'name': 'SHall319',
            'image': 'R311-south.jpg'
        }
    }
}
