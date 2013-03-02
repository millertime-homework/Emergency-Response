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
            }
        },
        'w': {
            'name': 'WClassroom030',
            'image': 'R030-west.jpg',
        },
        'n': {
            'name': 'NClassroom030',
            'image': 'R030-north.jpg',
            '_props': {
                'computer': {
                    'name': 'computer',
                    'image': 'computer.png',
                    'width': 250,
                    'height': 255,
                    'left': 400,
                    'top': 200,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Computer'
                    }
                }
            }
        },
        's': {
            'name': 'SClassroom030',
            'image': 'R030-south.jpg'
        }
    }
}
