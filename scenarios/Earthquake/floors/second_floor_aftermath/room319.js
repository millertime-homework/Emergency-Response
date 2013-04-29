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
                    'image': 'door.png',
                    'openImage': 'blackout.jpg',
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
