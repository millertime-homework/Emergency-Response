'room148': {
    'id': 'hall148',
    'x': 1,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall148',
            'image': 'R140-east.jpg',
            'destination': {
                'x': 2
            },
			'_props': {
                'mrs-wheelchair': {
                    'name': 'mrs_wheelchair',
                    'image': 'mrs_wheelchair.png',
                    'width': 150,
                    'height': 150,
                    'left': 600,
                    'top': 350,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Mrs Lydia'
                    }
                },
                'wheelchair':{
                    'name':'the_wheelchair',
                    'image':'wheelchair.png',
                    'width':150,
                    'height':150,
                    'left': 450,
                    'top': 300,
                    'action':'showConversation',
                    'actionVariables': {
                        'conversationName' : 'wheelchair'
                    }
                },
                'brokenGlass': {
                    'name': 'brokenGlass',
                    'image': 'brokenGlass.png',
                    'width': 80,
                    'height': 30,
                    'left': 520,
                    'top': 310
			    },
				'bridgeDoor': {
                    'name': 'bridgeDoor',
                    'image': 'doordown.png',
                    'width': 40,
                    'height': 40,
                    'left': 540,
                    'top': 310
                }
			}
        },
        'w': {
            'name': 'WHall148',
            'image': 'R140-west.jpg',
            'destination': {
                'x': 0
            },
			'_props' : {
				'bikeMangled' : {
					'named' : 'bikeMangled',
					'image' : 'bikeMangle.png',
					'width': 50,
                    'height': 65,
                    'left': 532,
                    'top': 277,
				},
				'beam' : {
					'named' : 'beam',
					'image' : 'beam.png',
					'width': 18,
                    'height': 85,
                    'left': 528,
                    'top': 275
				},
				'bikeMoved' : {
					'named' : 'bikeMoved',
					'image' : 'bikeMoved.png',
					'width': 35,
                    'height': 75,
                    'left': 575,
                    'top': 275,
				}
			}
        },
        'n': {
            'name': 'NHall148',
            'image': 'R140-north.jpg',
            'destination': {
                'y': 5
            }
        },
        's': {
            'name': 'SHall148',
            'image': 'R140-south.jpg',
            'destination': {
                'y': 3
            },
			'_props' : {
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'downwiresNew.png',
                    'width': 50,
                    'height': 50,
                    'left': 530,
                    'top': 275
                },
				'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'movedwiresNew.png',
                    'width': 50,
                    'height': 50,
                    'left': 530,
                    'top': 275
                }
            }
        }
    }
}
