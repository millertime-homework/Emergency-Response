'room048': {
    'id': 'hall048',
    'x': 0,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall048',
            'image': 'R040-east.jpg',
            'destination': {
                'x': 1
            },
			'_props' : {
				'wheelchair':{
                    'name':'the_wheelchair',
                    'image':'wheelchair.png',
                    'width':50,
                    'height':50,
                    'left': 530,
                    'top': 290,
                }
			}
        },
        'w': {
            'name': 'WHall048',
            'image': 'R040-west.jpg',
			'_props' : {
				'bikeMangled' : {
					'named' : 'bikeMangled',
					'image' : 'bikeMangle.png',
					'width': 350,
                    'height': 425,
                    'left': 355,
                    'top': 140,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A Mangled Bike'
                    },
					'barrier' : true
				},
				'beam' : {
					'named' : 'beam',
					'image' : 'beam.png',
					'width': 60,
                    'height': 450,
                    'left': 385,
                    'top': 130,
				},
				'bikeMoved' : {
					'named' : 'bikeMoved',
					'image' : 'bikeMoved.png',
					'width': 100,
                    'height': 300,
                    'left': 750,
                    'top': 300,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A Bike against the wall.'
                    }
				}
			}
        },
        'n': {
            'name': 'NHall048',
            'image': 'R040-north.jpg',
        },
        's': {
            'name': 'SHall048',
            'image': 'R040-south.jpg'
        }
    }
}
