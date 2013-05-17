'room321': {
    'id': 'hall321',
    'x': 3,
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall321',
            'image': 'R321-east.jpg'
        },
        'n': {
            'name': 'NHall321',
            'image': 'R321-north.jpg',
            '_props': {
                'lockedDoor': {
                    'name': 'lockedDoor',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 282,
                    'height': 510,
                    'top': 143,
                    'left': 418,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockedDoor',
                        'isAnAction': true
                    }
                }
            }
        },
        's': {
            'name': 'SHall321',
            'image': 'R321-south.jpg',
            'destination': {
                'y': 1
            }
        },
        'w': {
            'name': 'WHall321',
            'image': 'R321-west.jpg'
        }
    }
}