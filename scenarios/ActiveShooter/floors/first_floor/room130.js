'room130': {
    'id': 'hall130',
    'x': 1, 
    'y': 3,
    '_walls': {
        'e': {
            'name': 'NHall130',
            'image': 'R130-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'SHall130',
            'image': 'R130-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'Room130Sign' : {
                    'name': 'Room130Sign',
                    'image': 'sign-room130.png',
                    'width': 79,
                    'height': 42,
                    'left' : 725,
                    'top': 375
                }
            }
        },
        'n': {
            'name': 'WHall130',
            'image': 'R130-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'EHall130',
            'image': 'R130-south.jpg',
            'destination': {
                'y': 2
            },
            '_props' :{
                'RHF_Poster': {
                    'name': 'RHF_Poster',
                    'image': 'RHF_Poster.png',
                    'width': 15,
                    'height': 17,
                    'left': 550,
                    'top': 295
                }
            }
        }
    }
}
