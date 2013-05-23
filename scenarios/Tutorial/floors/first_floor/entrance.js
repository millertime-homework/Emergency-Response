'entrance': {
    'id': 'entrance',
    'x': 0,
    'y': 0,
    '_triggers': ['startTutorial'],
    '_walls': {
        'e': {
            'name': 'EntranceE',
            'image': 'R200-east.jpg'
        },
        'n': {
            'name': 'EntranceN',
            'image': 'R200-north.jpg',
            'destination': {
                'y': 1
            }
        },
        's': {
            'name': 'EntranceS',
            'image': 'R200-south.jpg'
        },
        'w': {
            'name': 'EntranceW',
            'image': 'R200-west.jpg'
        }
    }
}
