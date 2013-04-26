'room000': {
    'id': 'classroom000',
    'x': 0,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EClassroom000',
            'image': 'R000-east.jpg',
            'destination': {
                'x': 1
            }
        },
        'w': {
            'name': 'WClassroom000',
            'image': 'R000-west.jpg'
        },
        'n': {
            'name': 'NClassroom000',
            'image': 'R000-north.jpg'
        },
        's': {
            'name': 'SClassroom000',
            'image': 'R000-south.jpg',
            '_props': {
                'evac_plan': {
                    'name': 'evac_plan',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 56,
                    'height': 50,
                    'left': 367,
                    'top': 285,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'evac_first_floor_detail'
                    }
                }
            }
        }
    }
}
