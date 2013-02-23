'room128': {
    'id': 'hall128', 
    'x': 1, 
    'y': 2,
    '_triggers': ['checkForFire'],
    '_walls': {
        'e': {
            'name': 'EHall128', 
            'image': 'R120-east.jpg'
        },
        'w': {
            'name': 'WHall128',
            'image': 'R120-west.jpg',
            'destination': {
                'x': 0
            }
        },
        'n': {
            'name': 'NHall128',   
            'image': 'R120-north.jpg',
            'destination': {
                'y': 3
            }
        },
        's': {
            'name': 'SHall128', 
            'image': 'R120-south.jpg',
            'destination': {
                'y': 1
            }
        }
    }
}
