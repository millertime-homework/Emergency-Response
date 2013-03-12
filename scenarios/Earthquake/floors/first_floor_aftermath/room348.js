'room348': {
    'id': 'hall348', 
    'x': 3, 
    'y': 4,
	'_triggers' : ['deactivatePassout'],
    '_walls': {
        'e': {
            'name': 'EHall348', 
            'image': 'R340-east.jpg',
            'destination': {
                'x': 4
            },
			'_triggers' : ['dangerwarningGlass'],
			'_props': {
                'brokenGlass': {
                    'name': 'brokenGlass',
                    'image': 'brokenGlass.png',
                    'width': 300,
                    'height': 200,
                    'left': 415,
                    'top': 380,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Broken glass'
                    }
			    },
                'brokenDoor': {
                    'name': 'brokenDoor',
                    'image': 'dooraskew.png',
                    'width': 80,
                    'height': 320,
                    'left': 700,
                    'top': 205,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Unhinged door'
                    }
                },
                'bridgeDoor': {
                    'name': 'bridgeDoor',
                    'image': 'doordown.png',
                    'width': 200,
                    'height': 150,
                    'left': 435,
                    'top': 380,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Broken glass'
                    }
                }
            }
        },
        'w': {
            'name': 'WHall348',
            'image': 'R340-west.jpg',
            'destination': {
                'x': 2
            },
			'_props' : {
				'bikeMangled' : {
					'named' : 'bikeMangled',
					'image' : 'bikeMangle.png',
					'width': 30,
                    'height': 40,
                    'left': 540,
                    'top': 280,
				},
				'beam' : {
					'named' : 'beam',
					'image' : 'beam.png',
					'width': 10,
                    'height': 45,
                    'left': 541,
                    'top': 280,
				},
				'bikeMoved' : {
					'named' : 'bikeMoved',
					'image' : 'bikeMoved.png',
					'width': 14,
                    'height': 28,
                    'left': 580,
                    'top': 293,
				},
			    'wheelchair':{
                    'name':'the_wheelchair',
                    'image':'manLeft.png',
                    'width':100,
                    'height':100,
                    'left': 510,
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
