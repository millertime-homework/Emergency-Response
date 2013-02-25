'room320': {
    'id': 'hall320',
    'x': 3,
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall320',
            'image': 'R320-east.jpg',
            'destination': {
                'x': 4
            }
        },
        'w': {
            'name': 'WHall320',
            'image': 'R320-west.jpg'
        },
        'n': {
            'name': 'NHall320',
            'image': 'R320-north.jpg',
            'destination': {
                'y': 3
            }
        },
        's': {
            'name': 'SHall320',
            'image': 'R320-south.jpg',
            '_props': {
                'fire1': {
                    'name': 'fire1',
                    'image': 'fire.png',
                    'width': 800,
                    'height': 400,
                    'left': 100,
                    'top': 100,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Fire'
                    },
                    'barrier': true
                }
            },
            'destination': {
                'y': 1
            }
        }
    }
}
