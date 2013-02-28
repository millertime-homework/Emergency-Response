'room308': {
    'id': 'hall308', 
    'x': 3, 
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EHall308', 
            'image': 'R300-east.jpg',
            'destination': {
                'x': 4
            }
        },
        'w': {
            'name': 'WHall308',
            'image': 'R300-west.jpg',
            'destination': {
                'x': 2
            }
        },
        'n': {
            'name': 'NHall308',   
            'image': 'R300-north.jpg',
            'destination': {
                'y': 1
            },        
            '_props' : {			
		        'puddle': {
                    'name': 'puddle',
                    'image': 'puddle.png',
                    'width': 100,
                    'height': 50,
                    'left': 515,
                    'top': 325,
                    'action': 'showConversation',
                },
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
        },
        's': {
            'name': 'SHall308', 
            'image': 'R300-south.jpg'
        }
    }
}
