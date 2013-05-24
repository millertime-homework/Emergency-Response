'elevator': {
    'id': 'elevator',
    'x': 2,
    'y': 1,
    '_triggers': ['continueTutorial'],
    '_walls': {
        'e': {
            'name': 'ElevatorE',
            'image': 'R210-east.jpg'
        },
        'n': {
            'name': 'ElevatorN',
            'image': 'R210-north.jpg'
        },
        's': {
            'name': 'ElevatorS',
            'image': 'R210-south.jpg',
            'destination': {
                'y': 0
            }
        },
        'w': {
            'name': 'ElevatorW',
            'image': 'R210-west.jpg'
        }
    }
}
