'room448': {
    'id': 'hall448', 
    'x': 4, 
    'y': 4,
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
			    'wheelchair':{
                    'name':'the_wheelchair',
                    'image':'wheelchair.png',
                    'width':50,
                    'height':50,
                    'left': 540,
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
