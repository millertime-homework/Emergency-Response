'room218': {
    'id': 'hall218', 
    'x': 2, 
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall218', 
            'image': 'R210-east.jpg',
            '_props': {
                'evac_plan': {
                    'name': 'evac_plan',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 530,
                    'height': 430,
                    'left': 290,
                    'top': 50,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'evac_first_floor',
                    }
                }
            }
        },
        'w': {
            'name': 'WHall218',
            'image': 'R210-west.jpg',
            '_props': {
                'elevator-up': {
                    'name': 'elevator-up',
                    'image': 'elevator-up.png',
                    'hoverImage': 'elevator-up-hover.png',
                    'width': 43,
                    'height': 24,
                    'left': 830,
                    'top': 360,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Aftermath Elevator'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall218',   
            'image': 'R210-north.jpg',
            'destination': {
                'y': 2,
            }
        },
        's': {
            'name': 'SHall218', 
            'image': 'R210-south.jpg',
            'destination': {
                'y': 0
            },
            '_props': {
                'rubble': {
                    'name': 'rubble',
                    'image': 'rubble.png',
                    'width': 550,
                    'height': 317,
                    'top': 200,
                    'left': 270
                }
            }
        }
    }
}
