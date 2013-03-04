'room328': {
    'id': 'hall328', 
    'x': 3, 
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall328', 
            'image': 'R320-east.jpg',
            'destination': {
                'x': 4
            },
			'_props' : {
                'smoke': {
                    'name': 'smoke',
                    'image': 'smokeScreen.png',
                    'width': 1300,
                    'height': 600,
                    'left': 0,
                    'top': 0,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Smoke'
                    },
                    'barrier' : true
                },
                'smokeSafe': {
                    'name': 'smokeSafe',
                    'image': 'smokeScreen.png',
                    'width': 1300,
                    'height': 600,
                    'left': 0,
                    'top': 0,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Smoke'
                    }
                }
			}
        },
        'w': {
            'name': 'WHall328',
            'image': 'R320-west.jpg',
			'_props' : {
				'smokeSafe': {
                    'name': 'smokeSafe',
                    'image': 'smokeScreen.png',
                    'width': 1300,
                    'height': 600,
                    'left': 0,
                    'top': 0,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Smoke'
                    }
                }
			}
        },
        'n': {
            'name': 'NHall328',   
            'image': 'R320-north.jpg',
            'destination': {
                'y': 3
            },
			'_props' : {
                'smoke': {
                    'name': 'smoke',
                    'image': 'smokeScreen.png',
                    'width': 1300,
                    'height': 600,
                    'left': 0,
                    'top': 0,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Smoke'
                    },
                    'barrier' : true
                },
                'smokeSafe': {
                    'name': 'smokeSafe',
                    'image': 'smokeScreen.png',
                    'width': 1300,
                    'height': 600,
                    'left': 0,
                    'top': 0,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Smoke'
                    }
                }
            }
        },
        's': {
            'name': 'SHall328', 
            'image': 'R320-south.jpg',
            'destination': {
                'y': 1
            },
            '_props' : {
			'smokeSafe': {
                    'name': 'smokeSafe',
                    'image': 'smokeScreen.png',
                    'width': 1300,
                    'height': 150,
                    'left': 0,
                    'top': 0,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Smoke'
                    }
                },
                'puddle': {
                    'name': 'puddle',
                    'image': 'puddle.png',
                    'width': 267,
                    'height': 139,
                    'left': 435,
                    'top': 380,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Puddle'
                    }
                },
                'cloth': {
                    'name': 'cloth',
                    'image': 'cloth.png',
                    'width': 100,
                    'height': 75,
                    'left': 350,
                    'top': 480,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A cloth'
                    }
                }
            }
        }
    }
}
