'room428': {
    'id': 'hall428', 
    'x': 4, 
    'y': 2,
	'_triggers' : ['passout'],
    '_walls': {
        'e': {
            'name': 'EHall428', 
            'image': 'R420-east.jpg'
        },
        'w': {
            'name': 'WHall428',
            'image': 'R420-west.jpg',
            'destination': {
                'x': 3
            },
			'_triggers' : ['dangerwarningSmoke','activatePassout'],
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
                    }
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
        'n': {
            'name': 'NHall428',   
            'image': 'R420-north.jpg'
        },
        's': {
            'name': 'SHall428', 
            'image': 'R420-south.jpg',
            'destination': {
                'y': 1
            }
        }
    }
}
