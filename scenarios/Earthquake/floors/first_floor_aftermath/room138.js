'room138': {
    'id': 'hall138',
    'x': 1,
    'y': 3,
    '_triggers': ['lukeRunsPast','electrocute'],
    '_walls': {
        'e': {
            'name': 'NHall138',
            'image': 'R130-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'SHall138',
            'image': 'R130-west.jpg',
            'destination': {
                'x': 0
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
            '_triggers' : ['dangerwarningPowerLines','activateElectrocute'],
            '_props' : {
                'doorFrame': {
                    'name': 'doorFrame',
                    'image': 'doorframe2.png',
                    'width': 25,
                    'height': 25,
                    'left': 540,
                    'top': 325
                },
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'wire.png',
                    'width': 385,
                    'height': 250,
                    'left': 370,
                    'top': 120,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Hanging wires'
                    }
                },
                'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'wire-moved.png',
                    'width': 385,
                    'height': 250,
                    'left': 370,
                    'top': 120
                },
                'Luke2' : {
                    'name': 'Luke2',
                    'image': 'RunnerBack.png',
                    'width': 41,
                    'height': 125,
                    'left': 500,
                    'top': 275
                }
            }
        },
        'Runscene': {
            'name': 'Runscene',
            'image': 'R130-north.jpg',
            'isCutscene': true,
            'destination': {
                'x': 2
            },
            '_props' : {
                'Luke' : {
                    'name': 'Luke',
                    'image': 'RunnerFront.png',
                    'width': 113,
                    'height': 300,
                    'left': 475,
                    'top': 250
                }
            }
        }
    }
}
