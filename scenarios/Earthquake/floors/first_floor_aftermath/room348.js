'room348': {
    'id': 'hall348', 
    'x': 3, 
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall348', 
            'image': 'R340-east.jpg',
            'destination': {
                'x': 4
            }
        },
        'w': {
            'name': 'WHall348',
            'image': 'R340-west.jpg',
            'destination': {
                'x': 2
            },
			'_props' : {
			    'wheelchair':{
                    'name':'the_wheelchair',
                    'image':'wheelchair.png',
                    'width':100,
                    'height':100,
                    'left': 530,
                    'top': 300,
                }
			}
        },
        'n': {
            'name': 'NHall348',   
            'image': 'R340-north.jpg',
            'destination': {
                'y': 5
            }
        },
        's': {
            'name': 'SHall348', 
            'image': 'R340-south.jpg',
            'destination': {
                'y': 3
            }
        }
    }
}
