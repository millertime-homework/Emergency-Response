'room000': {
    'id': 'classroom000',
    'x': 0,
    'y': 0,
    '_triggers' : ['dolphinFound'],
    '_walls': {
        'e': {
            'name': 'EClassroom000',
            'image': 'R000-east.jpg',
            'destination': {
                'x': 1
            }
        },
        'w': {
            'name': 'WClassroom000',
            'image': 'R000-west.jpg',
            '_props' : {
                'dolphin' : {
                    'image': 'dolphin.png',
                    'hoverImage' : 'dolphinhover.png',
                    'top' : 200,
                    'left' : 200,
                    'height': 256,
                    'width' : 499,
                }
            }
        },
        'n': {
            'name': 'NClassroom000',
            'image': 'R000-north.jpg',
        },
        's': {
            'name': 'SClassroom000',
            'image': 'R000-south.jpg'
        }
    }
}
