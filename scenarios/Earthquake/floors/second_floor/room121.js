'room121': {
    'id': 'hall121',
    'x': 1,
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall121',
            'image': 'R121-east.jpg',
            'destination': {
                'x': 2,
                'z': 0
            }
        },
        'n': {
            'name': 'NHall121',
            'image': 'R121-north.jpg',
            'destination': {
                'y': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 225,
                    'height': 604,
                    'top': 169,
                    'left': 445,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door',
                        'isAnAction': true
                    }
                }
            }
        },
        's': {
            'name': 'SHall121',
            'image': 'R121-south.jpg',
            'destination': {
                'y': 1
            }
        },
        'w': {
            'name': 'WHall121',
            'image': 'R121-west.jpg',
            '_props': {
                'aorSign': {
                    'name': 'aorSign',
                    'image': 'AreaRescueSign.png',
                    'width': 125,
                    'height': 75,
                    'top': 325,
                    'left': 280
                }
            }
        }
    }
}
