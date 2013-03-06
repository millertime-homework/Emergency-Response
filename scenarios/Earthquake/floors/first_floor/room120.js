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
                'xavier': {
                    'name': 'xavier',
                    'image': 'XavierRight.png',
                    'width': 40,
                    'height': 68,
                    'left': 520,
                    'top': 280
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
