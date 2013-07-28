'hall': {
    'id': 'hall',
    'x': 1,
    'y': 0,
    '_triggers': ['foundDoor'],
    '_walls': {
        'e': {
            'name': 'EHall100',
            'image': 'R100-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'n': {
            'name': 'NHall100',
            'image': 'R100-north.jpg'
        },
        's': {
            'name': 'SHall100',
            'image': 'R100-south.jpg'
        },
        'w': {
            'name': 'WHall100',
            'image': 'R100-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorOutsideRightHover.png',
                    'width': 215,
                    'height': 536,
                    'top': 140,
                    'left': 154,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        }
    }
}
