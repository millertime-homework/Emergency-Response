'room311': {
    'id': 'hall311',
    'x': 3,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall311',
            'image': 'R311-east.jpg',
            'destination': {
                'x': 4
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'door.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 280,
                    'height': 500,
                    'top': 143,
                    'left': 417,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door',
                        'isAnAction': true
                    }
                }
            }
        },
        'n': {
            'name': 'NHall311',
            'image': 'R311-north.jpg',
            'destination': {
                'y': 2
            }
        },
        's': {
            'name': 'SHall311',
            'image': 'R311-south.jpg'
        },
        'w': {
            'name': 'WHall311',
            'image': 'R311-west.jpg',
            'destination': {
                'x': 2
            }
        }
    }
}