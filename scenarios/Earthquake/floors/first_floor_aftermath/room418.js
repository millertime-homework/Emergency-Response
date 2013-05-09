'room418': {
    'id': 'hall418',
    'x': 4,
    'y': 1,
    '_triggers' : ['deactivatePassout'],
    '_walls': {
        'e': {
            'name': 'EHall418',
            'image': 'R410-east.jpg',
        },
        'w': {
            'name': 'WHall418',
            'image': 'R410-west.jpg'
        },
        'n': {
            'name': 'NHall418',
            'image': 'R410-north.jpg',
            'destination': {
                'y': 2
            }
        },
        's': {
            'name': 'SHall418',
            'image': 'R410-south.jpg',
            'destination': {
                'y': 0
            }
        }
    }
}
