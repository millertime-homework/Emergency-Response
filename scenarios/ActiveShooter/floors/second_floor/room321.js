'room321': {
    'id': 'hall321',
    'x': 3,
    'y': 2,
    'annotation': 'AnnotationStairs.png',
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
                    'image': 'lockedDoor.png',
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
