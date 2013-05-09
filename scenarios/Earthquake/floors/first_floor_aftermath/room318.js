'room318': {
    'id': 'hall318',
    'x': 3,
    'y': 1,
    '_triggers' : ['deactivatePassout'],
    '_walls': {
        'e': {
            'name': 'EHall318',
            'image': 'R310-east.jpg',
        },
        'w': {
            'name': 'WHall318',
            'image': 'R310-west.jpg'
        },
        'n': {
            'name': 'NHall318',
            'image': 'R310-north.jpg',
            'destination': {
                'y': 2
            },
            '_props' : {
                'wallwater': {
                    'name': 'wallwater',
                    'image': 'wallwater.png',
                    'width': 96,
                    'height': 433,
                    'top': 102,
                    'left': 334,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'WallWater',
                        'isAnAction': true
                    }
                },
                'smokeSafe': {
                    'name': 'smokeSafe',
                    'image': 'smokeScreen.png',
                    'width': 225,
                    'height': 125,
                    'left': 455,
                    'top': 215,
                }
            }
        },
        's': {
            'name': 'SHall318',
            'image': 'R310-south.jpg',
            'destination': {
                'y': 0
            }
        }
    }
}
