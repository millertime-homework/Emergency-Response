'room131': {
    'id': 'hall131',
    'x': 1,
    'y': 3,
    '_triggers': ['abort'],
    '_walls': {
        'e': {
            'name': 'EHall131',
            'image': 'R131-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'WHall131',
            'image': 'R131-west.jpg'
        },
        'n': {
            'name': 'NHall131',
            'image': 'R131-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'SHall131',
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
