'room131': {
    'id': 'library131',
    'x': 1,
    'y': 3,
    '_triggers': ['abort'],
    '_walls': {
        'e': {
            'name': 'ELibrary131',
            'image': 'R131-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'WLibrary131',
            'image': 'R131-west.jpg',
            'destination': {
                'x': 0
            }
        },
        'n': {
            'name': 'NLibrary131',
            'image': 'R131-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'SLibrary131',
            'image': 'R131-south.jpg',
            'destination': {
                'y': 2
            },
            '_props': {
                'shooterR111': {
                    'name': 'shooterR111',
                    'image': 'shooter.png',
                    'width': 16,
                    'height': 32,
                    'left': 550,
                    'top': 290
                }
            }
        }
    }
}
