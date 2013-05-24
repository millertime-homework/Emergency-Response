'elevator': {
    'id': 'elevator',
    'x': 2,
    'y': 1,
    '_triggers': ['movedForward'],
    '_walls': {
        'e': {
            'name': 'ElevatorE',
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
                        'conversationName': 'evacPlan',
                        'isAnAction': true
                    }
                }
            }
        },
        'n': {
            'name': 'ElevatorN',
            'image': 'R210-north.jpg'
        },
        's': {
            'name': 'ElevatorS',
            'image': 'R210-south.jpg',
            'destination': {
                'y': 0
            }
        },
        'w': {
            'name': 'ElevatorW',
            'image': 'R210-west.jpg'
        }
    }
}
