'room300': {
    'id': 'hall300',
    'x': 3,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EHall300',
            'image': 'R300-east.jpg',
            'destination': {
                'x': 4
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 232,
                    'height': 565,
                    'top': 135,
                    'left': 685,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall300',
            'image': 'R300-north.jpg',
            'destination': {
                'y': 1
            }
        },
        's': {
            'name': 'SHall300',
            'image': 'R300-south.jpg'
        },
        'w': {
            'name': 'WHall300',
            'image': 'R300-west.jpg',
            'destination': {
                'x': 2
            }
        }
    }
}