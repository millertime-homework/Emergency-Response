'room119': {
    'id': 'hall119',
    'x': 1,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall119',
            'image': 'R111-east.jpg'
        },
        'w': {
            'name': 'WHall119',
            'image': 'R111-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'UseDoor.png',
                    'openImage': 'blank.png',
                    'width': 280,
                    'height': 500,
                    'left': 420,
                    'top': 160,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall119',
            'image': 'R111-north.jpg',
            'destination': {
                'y': 2
            },
			'_props' : {
                'ProfXavAoR': {
                    'name': 'ProfXavAoR',
                    'image': 'XavHurt.png',
                    'width': 300,
                    'height': 150,
                    'left': 400,
                    'top': 400,
                    'action': 'showConversation',
                    'actionVariables':{
                        'conversationName': 'Injured Professor'
                    }
                }
			}
        },
        's': {
            'name': 'SHall119',
            'image': 'R111-south.jpg',
            'destination': {
                'y': 0
            }
        }
    }
}
