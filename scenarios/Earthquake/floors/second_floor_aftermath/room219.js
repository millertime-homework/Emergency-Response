'room211': {
    'id': 'hall211',
    'x': 2,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall211',
            'image': 'R211-east.jpg',
            'destination': {
                'x': 3
            }
        },
        'w': {
            'name': 'WHall211',
            'image': 'R211-west.jpg',
            '_props': {
                'elevator-down': {
                    'name': 'elevator-down',
                    'image': 'elevator-down.png',
                    'hoverImage': 'elevator-down-hover.png',
                    'width': 43,
                    'height': 24,
                    'left': 715,
                    'top': 375,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Aftermath Elevator'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall211',
            'image': 'R211-north.jpg'
        },
        's': {
            'name': 'SHall211',
            'image': 'R211-south.jpg',
            'destination': {
                'y': 0
            }
        }
    }
}
