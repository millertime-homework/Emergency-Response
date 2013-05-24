'classroom': {
    'id': 'classroom',
    'x': 0,
    'y': 0,
    '_triggers': ['enteredClassroom'],
    '_walls': {
        'e': {
            '_triggers': ['checkEnd'],
            'name': 'EClassroom000',
            'image': 'R000-east.jpg',
            'destination': {
                'x': 1
            }
        },
        'n': {
            'name': 'NClassroom000',
            'image': 'R000-north.jpg'
        },
        's': {
            'name': 'SClassroom000',
            'image': 'R000-south.jpg'
        },
        'w': {
            'name': 'WClassroom000',
            'image': 'R000-west.jpg',
            '_props': {
                'waterBottle': {
                    'name': 'waterBottle',
                    'image': 'waterbottle.png',
                    'hoverImage': 'waterbottleHover.png',
                    'width': 36,
                    'height': 64,
                    'top': 455,
                    'left': 558,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'waterBottle',
                        'isAnAction': true
                    }
                }
            }
        }
    }
}
