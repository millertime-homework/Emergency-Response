'room321': {
    'id': 'hall321',
    'x': 3,
    'y': 2,
    'annotation': 'AnnotationStairs.png',
    '_triggers' : ['getShotAtYopOfStairs'],
    '_walls': {
        'e': {
            'name': 'EHall321',
            'image': 'R321-east.jpg'
        },
        'w': {
            'name': 'WHall321',
            'image': 'R321-west.jpg',
            'destination': {
                'x': 2,
                'z': 0
            },
            '_props': {
                'shooter121E': {
                    'name': 'shooter121E',
                    'image': 'shooter.png',
                    'width': 50,
                    'height': 100,
                    'left': 520,
                    'top': 400
                }
            }
        },
        'n': {
            'name': 'NHall321',
            'image': 'R321-north.jpg',
            'destination': {
                'y': 3
            },
            '_props' : {
                'lockedDoor': {
                    'name': 'lockedDoor',
                    'image': 'trans.png',
                    'width': 550,
                    'height': 500,
                    'left': 220,
                    'top': 150,
                    'action': 'showConversation',
                    'actionVariables': {
                    'conversationName': 'lockedDoor'
                    },
                'barrier' : true
                }
            }
        },
        's': {
            'name': 'SHall321',
            'image': 'R321-south.jpg',
            'destination': {
                'y': 1
            }
        }
    }
}
