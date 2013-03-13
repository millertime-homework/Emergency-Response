'room200': {
    'id': 'hall200', 
    'x': 2, 
    'y': 0,
    'annotation': 'AnnotationExit.png',
    '_triggers': ['enteredSchool','prepSchoolObjectives', 'getToClass'],
    '_walls': {
        'e': {
            'name': 'EHall200', 
            'image': 'R200-east.jpg',
            'destination': {
                'x': 3
            }
        },
        'w': {
            'name': 'WHall200',
            'image': 'R200-west.jpg',
            'destination': {
                'x': 1
            }
        },
        'n': {
            'name': 'NHall200',   
            'image': 'R200-north.jpg',
            'destination': {
                'y': 1
            }
        },
        's': {
            'name': 'SHall200', 
            'image': 'R200-south.jpg'
        }
    }
}
