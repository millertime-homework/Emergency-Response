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
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 104,
                    'height': 236,
                    'top': 232,
                    'left': 966,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
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
                    'top': 285,
                    'left': 367,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'evac_first_floor_detail'
                    }
                }
            }
        },
        'w': {
            'name': 'WClassroom000',
            'image': 'R000-west.jpg'
        }
    }
}