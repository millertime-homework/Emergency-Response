'room121': {
    'id': 'hall121',
    'x': 1,
    'y': 2,
    '_triggers': ['chanceofEscape', 'deathIn240'],
    '_walls': {
        'e': {
            'name': 'EHall121',
            'image': 'R121-east.jpg',
            'destination': {
                'x': 2,
                'z': 0
            }
        },
        'w': {
            'name': 'WHall121',
            'image': 'R121-west.jpg',
            'destination': {
                'x': 0
            }
        },
        'n': {
            'name': 'NHall121',
            'image': 'R121-north.jpg',
            'destination': {
                'y': 3
            }
        },
        's': {
            'name': 'SHall121',
            'image': 'R121-south.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'shooterR111': {
                    'name': 'shooterR111',
                    'image': 'shooter.png',
                    'width': 32,
                    'height': 64,
                    'left': 570,
                    'top': 310
                }
            }
        }
    }
}
