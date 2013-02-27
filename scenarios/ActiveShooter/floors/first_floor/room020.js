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
                'Hide_Curtains': {
                    'name': '',
                    'image': 'hiding-place.png',
                    'hoverImage': 'hiding-place-hover.png',
                    'width': 100,
                    'height': 120,
                    'left': 500,
                    'top': 270,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Hide'
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
