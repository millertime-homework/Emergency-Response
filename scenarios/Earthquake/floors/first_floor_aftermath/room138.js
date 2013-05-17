'room138': {
    'id': 'hall138',
    'x': 1,
    'y': 3,
    '_triggers': ['lukeRunsPast','electrocute'],
    '_walls': {
        'Runscene': {
            'name': 'Runscene',
            'image': 'R130-north.jpg',
            'destination': {
                'x': 2
            },
            'isCutscene': true,
            '_props': {
                'Luke': {
                    'name': 'Luke',
                    'image': 'RunnerFront.png',
                    'width': 113,
                    'height': 300,
                    'top': 250,
                    'left': 475
                }
            }
        },
        'e': {
            'name': 'NHall138',
            'image': 'R130-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'n': {
            'name': 'WHall138',
            'image': 'R130-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'EHall138',
            'image': 'R130-south.jpg',
            'destination': {
                'y': 2
            },
            '_triggers': ['lukeRunsPast','electrocute'],
            '_props': {
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'wire.png',
                    'width': 385,
                    'height': 250,
                    'top': 120,
                    'left': 370,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Hanging wires'
                    }
                },
                'Luke2': {
                    'name': 'Luke2',
                    'image': 'RunnerBack.png',
                    'width': 55,
                    'height': 152,
                    'top': 284,
                    'left': 526
                },
                'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'wire-moved.png',
                    'width': 385,
                    'height': 250,
                    'top': 120,
                    'left': 374
                },
                'doorFrame': {
                    'name': 'doorFrame',
                    'image': 'doorframe2.png',
                    'width': 25,
                    'height': 25,
                    'top': 325,
                    'left': 540
                }
            }
        },
        'w': {
            'name': 'SHall138',
            'image': 'R130-west.jpg',
            'destination': {
                'x': 0
            }
        }
    }
}