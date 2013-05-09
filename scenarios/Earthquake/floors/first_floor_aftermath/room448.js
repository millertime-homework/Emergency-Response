'room448': {
    'id': 'hall448',
    'x': 4,
    'y': 4,
    '_triggers' : ['activateFootInjury'],
    '_walls': {
        'e': {
            'name': 'EHall448',
            'image': 'R440-east.jpg',
            'destination': {
                'x': 5
            }
        },
        'w': {
            'name': 'WHall448',
            'image': 'R440-west.jpg',
            'destination': {
                'x': 3
            },
            '_props' : {
                'bikeMangled' : {
                    'named' : 'bikeMangled',
                    'image' : 'bikeMangle.png',
                    'width': 30,
                    'height': 40,
                    'left': 540,
                    'top': 285,
                },
                'beam' : {
                    'named' : 'beam',
                    'image' : 'beam.png',
                    'width': 9,
                    'height': 38,
                    'left': 541,
                    'top': 280,
                },
                'bikeMoved' : {
                    'named' : 'bikeMoved',
                    'image' : 'bikeMoved.png',
                    'width': 13,
                    'height': 27,
                    'left': 570,
                    'top': 295,
                },
                'wheelchair':{
                    'name':'the_wheelchair',
                    'image':'manLeft.png',
                    'width':50,
                    'height':50,
                    'left': 530,
                    'top': 300,
                }
            }
        },
        'n': {
            'name': 'NHall448',
            'image': 'R440-north.jpg'
        },
        's': {
            'name': 'SHall448',
            'image': 'R440-south.jpg',
            'destination': {
                'y': 3
            }
        }
    }
}
