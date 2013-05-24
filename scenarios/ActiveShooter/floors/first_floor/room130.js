'room130': {
    'id': 'hall130',
    'x': 1,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'NHall130',
            'image': 'R130-east.jpg',
            'destination': {
                'x': 2
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorOutsideLeftHover.png',
                    'width': 231,
                    'height': 598,
                    'top': 135,
                    'left': 567,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'n': {
            'name': 'WHall130',
            'image': 'R130-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'EHall130',
            'image': 'R130-south.jpg',
            'destination': {
                'y': 2
            }
        },
        'w': {
            'name': 'SHall130',
            'image': 'R130-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorOutsideRightHover.png',
                    'width': 226,
                    'height': 567,
                    'top': 138,
                    'left': 446,
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