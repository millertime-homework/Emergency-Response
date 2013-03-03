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
            }
        },
        'w': {
            'name': 'WClassroom020',
            'image': 'R020-west.jpg',
            '_props': {
                'science-teacher': {
                    'name': 'science-teacher',
                    'image': 'science-teacher.png',
                    'width': 120,
                    'height': 200,
                    'left': 500,
                    'top': 200,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Science Teacher'
                    }
                }
            }
        },
        'n': {
            'name': 'NClassroom020',
            'image': 'R020-north.jpg',
        },
        's': {
            'name': 'SClassroom020',
            'image': 'R020-south.jpg'
        }
    }
}
