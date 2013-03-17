'room120': {
    'id': 'hall120', 
    'x': 1, 
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall120', 
            'image': 'R120-east.jpg'
        },
        'w': {
            'name': 'WHall120',
            'image': 'R120-west.jpg',
            'destination': {
                'x': 0
            },
        },
        'n': {
            'name': 'NHall120',   
            'image': 'R120-north.jpg',
            'destination': {
                'y': 3
            },
            '_props': {
                'foo': {
                    'name': 'foo',
                    'image': 'fooRight.png',
                    'width': 52,
                    'height': 124,
                    'left': 475,
                    'top': 285
                }
            }
        },
        's': {
            'name': 'SHall120', 
            'image': 'R120-south.jpg',
            'destination': {
                'y': 1
            }
        }
    }
}
