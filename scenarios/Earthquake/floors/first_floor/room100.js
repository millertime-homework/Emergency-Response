'room100': {
    'id': 'hall100',
    'x': 1,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EHall100',
            'image': 'R100-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'WHall100',
            'image': 'R100-west.jpg',
            'destination': {
                'x': 0
            }
        },
        'n': {
            'name': 'NHall100',
            'image': 'R100-north.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'foo': {
                    'name': 'foo',
                    'image': 'fooRight.png',
                    'width': 10,
                    'height': 25,
                    'left': 540,
                    'top': 300 
                }
            }
        },
        's': {
            'name': 'SHall100',
            'image': 'R100-south.jpg'
        }
    }
}
