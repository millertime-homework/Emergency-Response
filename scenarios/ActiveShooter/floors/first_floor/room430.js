'room430': {
    'id': 'hall430',
    'x': 4,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'EHall430',
            'image': 'R430-east.jpg'
        },
        'w': {
            'name': 'WHall430',
            'image': 'R430-west.jpg',
            '_props': {
                'HidingPlace' : {
                    'name': 'HidingPlace',
                    'image': 'hiding-place.png',
                    'hoverImage': 'hiding-place-hover.png',
                    'width': 90,
                    'height': 40,
                    'left' : 470,
                    'top': 335,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Hide'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall430',
            'image': 'R430-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'SHall430',
            'image': 'R430-south.jpg'
        }
    }
}
