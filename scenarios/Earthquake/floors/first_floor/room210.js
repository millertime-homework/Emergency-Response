'room210': {
    'id': 'hall210', 
    'x': 2, 
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall210', 
            'image': 'R210-east.jpg',
            '_props': {
                'evac_plan': {
                    'name': 'evac_plan',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 450,
                    'height': 391,
                    'left': 300,
                    'top': 56,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'evac_first_floor',
                    }
                }
            }
        },
        'w': {
            'name': 'WHall210',
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
                        'conversationName': 'Elevator Up'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall210',   
            'image': 'R210-north.jpg',
            'destination': {
                'y': 2,
            }
        },
        's': {
            'name': 'SHall210', 
            'image': 'R210-south.jpg',
            'destination': {
                'y': 0
            }
        }
    }
}
