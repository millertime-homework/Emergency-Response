'room338': {
    'id': 'hall338', 
    'x': 3, 
    'y': 3,
	'_triggers' : ['passout','aftershock'],
    '_walls': {
        'e': {
            'name': 'EHall338', 
            'image': 'R330-east.jpg'
        },
        'w': {
            'name': 'WHall338',
            'image': 'R330-west.jpg',
            'destination': {
                'x': 2
            }
        },
        'n': {
            'name': 'NHall338',   
            'image': 'R330-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'SHall338', 
            'image': 'R330-south.jpg',
            'destination': {
                'y': 2
            },
			'_triggers' : ['dangerwarningSmoke','activatePassout'],
			'_props' : {
                'smoke': {
                    'name': 'smoke',
                    'image': 'smokeScreen.png',
                    'width': 1300,
                    'height': 400,
                    'left': 0,
                    'top': 0,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Smoke'
                    }
                },
                'smokeSafe': {
                    'name': 'smokeSafe',
                    'image': 'smokeScreen.png',
                    'width': 1300,
                    'height': 400,
                    'left': 0,
                    'top': 0,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Smoke'
                    }
                }
			}
        },
		'blackout': {
            'name': 'SHall338', 
            'image': 'blackout.jpg',
			'isCutscene': true,
		}
    }
}
