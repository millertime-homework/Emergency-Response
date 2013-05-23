'room020': {
    'id': 'classroom020',
    'x': 0,
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EClassroom020',
            'image': 'R020-east.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideLeftHover.png',
                    'width': 106,
                    'height': 246,
                    'top': 228,
                    'left': 453,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'n': {
            'name': 'NClassroom020',
            'image': 'R020-north.jpg'
        },
        's': {
            'name': 'SClassroom020',
            'image': 'R020-south.jpg'
        },
        'w': {
            'name': 'WClassroom020',
            'image': 'R020-west.jpg'
        }
    }
}