'room220': {
    'id': 'stairs220',
    'x': 2,
    'y': 2,
    'annotation': 'AnnotationStairs.png',
    '_triggers' : ['getShotAt', 'abort'],
    '_walls': {
        'e': {
            'name': 'EStairs220',
            'image': 'R220-east.jpg'
        },
        'w': {
            'name': 'WStairs220',
            'image': 'R220-west.jpg',
            'destination': {
                'x': 1,
                'z': 1
            }
        },
        'n': {
            'name': 'NStairs220',
            'image': 'R220-north.jpg'
        },
        's': {
            'name': 'SStairs220',
            'image': 'R220-south.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'shooter220S': {
                    'name': 'shooter220S',
                    'image': 'shooter.png',
                    'width': 50,
                    'height': 100,
                    'left': 520,
                    'top': 400
                }
            }
        }
    }
}
