'room210': {
    'id': 'hall210',
    'x': 2,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall210',
            'image': 'R210-east.jpg',
            '_props': {
                'evac_plan_1': {
                    'name': 'evac_plan_1',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 530,
                    'height': 430,
                    'left': 290,
                    'top': 50,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'evac_first_floor'
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
                    'width': 75,
                    'height': 42,
                    'left': 815,
                    'top': 350,
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
                'y': 2
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
