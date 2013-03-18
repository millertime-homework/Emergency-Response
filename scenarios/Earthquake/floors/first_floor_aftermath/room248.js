'room248': {
    'id': 'hall248', 
    'x': 2, 
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall248', 
            'image': 'R240-east.jpg',
            'destination': {
                'x': 3
            },
			'_props': {
                'brokenGlass': {
                    'name': 'brokenGlass',
                    'image': 'brokenGlass.png',
                    'width': 125,
                    'height': 25,
                    'left': 500,
                    'top': 350
			    },
                'brokenDoor': {
                    'name': 'brokenDoor',
                    'image': 'dooraskew.png',
                    'width': 15,
                    'height': 120,
                    'left': 610,
                    'top': 251
                },
                'bridgeDoor': {
                    'name': 'bridgeDoor',
                    'image': 'doordown.png',
                    'width': 60,
                    'height': 45,
                    'left': 530,
                    'top': 340
                }
       
            }
        },
        'w': {
            'name': 'WHall248',
            'image': 'R240-west.jpg',
            'destination': {
                'x': 1
            },
			'_props': {
				'bikeMangled' : {
					'named' : 'bikeMangled',
					'image' : 'bikeMangle.png',
					'width': 35,
                    'height': 50,
                    'left': 540,
                    'top': 280,
				},
				'beam' : {
					'named' : 'beam',
					'image' : 'beam.png',
					'width': 13,
                    'height': 55,
                    'left': 535,
                    'top': 280
				},
				'bikeMoved' : {
					'named' : 'bikeMoved',
					'image' : 'bikeMoved.png',
					'width': 15,
                    'height': 30,
                    'left': 580,
                    'top': 294,
				},
                'mrs-wheelchair': {
                    'name': 'mrs_wheelchair',
                    'image': 'manLeft.png',
                    'width': 275,
                    'height': 275,
                    'left': 400,
                    'top': 300,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'James'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall248',   
            'image': 'R240-north.jpg'
        },
        's': {
            'name': 'SHall248', 
            'image': 'R240-south.jpg'
        }
    }
}
