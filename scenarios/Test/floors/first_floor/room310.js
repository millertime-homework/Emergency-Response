'room310': {
    'id': 'hall310',
    'x': 3,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall310',
            'image': 'R310-east.jpg',
        },
        'w': {
            'name': 'WHall310',
            'image': 'R310-west.jpg'
        },
        'n': {
            'name': 'NHall310',
            'image': 'R310-north.jpg',
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
                'y': 2
            }
        },
        's': {
            'name': 'SHall310',
            'image': 'R310-south.jpg',
            'destination': {
                'y': 0
            }
        }
    }
}
