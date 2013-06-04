'room108': {
    'id': 'hall108',
    'x': 1,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EHall108',
            'image': 'R108-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'WHall108',
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
        },
        'n': {
            'name': 'NHall108',
            'image': 'R100-north.jpg',
            'destination': {
                'y': 1
            },
            '_props' : {
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'wire.png',
                    'width': 50,
                    'height': 32,
                    'left': 530,
                    'top': 275
                },
                'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'wire-moved.png',
                    'width': 50,
                    'height': 32,
                    'left': 530,
                    'top': 275
                },
                'doorFrame': {
                    'name': 'doorFrame',
                    'image': 'doorframe2.png',
                    'width': 35,
                    'height': 35,
                    'left': 534,
                    'top': 355
                },
                'Luke2' : {
                    'name': 'Luke2',
                    'image': 'RunnerFront.png',
                    'width': 94,
                    'height': 250,
                    'left': 475,
                    'top': 250,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Luke'
                    }
                }
            }
        },
        's': {
            'name': 'SHall108',
            'image': 'R100-south.jpg'
        }
    }
}
