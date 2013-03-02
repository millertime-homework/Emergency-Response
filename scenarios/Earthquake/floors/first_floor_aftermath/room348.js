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
            },
			'_props':{
				'smokeSafe': {
                    'name': 'smokeSafe',
                    'image': 'smokeScreen.png',
                    'width': 150,
                    'height': 90,
                    'left': 485,
                    'top': 250,
                    'action': 'showConversation',
                }
			}
        }
    }
}
