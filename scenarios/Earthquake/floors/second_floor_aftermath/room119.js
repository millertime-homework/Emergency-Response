'room119': {
    'id': 'hall119',
    'x': 1,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall119',
            'image': 'R111-east.jpg',
            '_props': {
                'evac_plan': {
                    'name': 'evac_plan',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 448,
                    'height': 393,
                    'left': 288,
                    'top': 68,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'evac_second_floor',
                    }
                }
            }
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
                    'image': 'door.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 269,
                    'height': 500,
                    'left': 426,
                    'top': 151,
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
