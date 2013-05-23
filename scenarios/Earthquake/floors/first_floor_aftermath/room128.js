'room128': {
    'id': 'hall128',
    'x': 1,
    'y': 2,
    '_triggers': ['electrocute'],
    '_walls': {
        'e': {
            'name': 'EHall128',
            'image': 'R120-east.jpg'
        },
        'n': {
            'name': 'NHall128',
            'image': 'R120-north.jpg',
            'destination': {
                'y': 3
            },
            '_triggers': ['electrocute'],
            '_props': {
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'wire.png',
                    'width': 390,
                    'height': 250,
                    'top': 120,
                    'left': 370,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Hanging wires'
                    }
                },
                'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'wire-moved.png',
                    'width': 390,
                    'height': 250,
                    'top': 120,
                    'left': 370
                }
            }
        },
        's': {
            'name': 'SHall128',
            'image': 'R120-south.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'Luke2': {
                    'name': 'Luke2',
                    'image': 'RunnerBack.png',
                    'width': 81,
                    'height': 250,
                    'top': 248,
                    'left': 477,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Luke'
                    }
                },
                'doorFrame': {
                    'name': 'doorFrame',
                    'image': 'doorframe2.png',
                    'hoverImage': 'doorframe2Hover.png',
                    'width': 75,
                    'height': 75,
                    'top': 400,
                    'left': 515,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A door frame'
                    }
                }
            }
        },
        'w': {
            'name': 'WHall128',
            'image': 'R120-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorOutsideRightHover.png',
                    'width': 229,
                    'height': 532,
                    'top': 135,
                    'left': 445,
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