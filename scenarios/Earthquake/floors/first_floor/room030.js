'room030': {
    'id': 'classroom030',
    'x': 0,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'EClassroom030',
            'image': 'R030-east.jpg',
            'destination': {
                'x': 1
            },
            '_triggers': [],
            '_props': {
                'computer': {
                    'name': 'computer',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 170,
                    'height': 114,
                    'top': 311,
                    'left': 324,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Computer',
                        'isAnAction': true
                    }
                },
                'door': {
                    'name': 'door',
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideLeftHover.png',
                    'width': 106,
                    'height': 247,
                    'top': 228,
                    'left': 659,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'n': {
            'name': 'NClassroom030',
            'image': 'R030-north.jpg'
        },
        's': {
            'name': 'SClassroom030',
            'image': 'R030-south.jpg'
        },
        'w': {
            'name': 'WClassroom030',
            'image': 'R030-west.jpg'
        }
    }
}