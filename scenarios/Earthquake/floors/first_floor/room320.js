'room320': {
    'id': 'hall320', 
    'x': 3, 
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall320', 
            'image': 'R320-east.jpg',
            'destination': {
                'x': 4
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 230,
                    'height': 537,
                    'top': 135,
                    'left': 571,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'w': {
            'name': 'WHall320',
            'image': 'R320-west.jpg'
        },
        'n': {
            'name': 'NHall320',   
            'image': 'R320-north.jpg',
            'destination': {
                'y': 3
            }
        },
        's': {
            'name': 'SHall320', 
            'image': 'R320-south.jpg',
            'destination': {
                'y': 1
            }
        }
    }
}
