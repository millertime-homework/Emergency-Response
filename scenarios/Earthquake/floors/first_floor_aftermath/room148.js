'room148': {
    'id': 'hall148',
    'x': 1,
    'y': 4,
    '_triggers': ['footInjury'],
    '_walls': {
        'e': {
            'name': 'EHall148',
            'image': 'R140-east.jpg',
            'destination': {
                'x': 2
            },
            '_props': {
                'bridgeDoor': {
                    'name': 'bridgeDoor',
                    'image': 'doordown.png',
                    'width': 40,
                    'height': 23,
                    'top': 325,
                    'left': 540
                },
                'brokenGlass': {
                    'name': 'brokenGlass',
                    'image': 'brokenGlass.png',
                    'width': 80,
                    'height': 25,
                    'top': 330,
                    'left': 520
                },
                'mrs-wheelchair': {
                    'name': 'mrs_wheelchair',
                    'image': 'manFront.png',
                    'width': 275,
                    'height': 275,
                    'top': 300,
                    'left': 400,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'James'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall148',
            'image': 'R140-north.jpg',
            'destination': {
                'y': 5
            }
        },
        's': {
            'name': 'SHall148',
            'image': 'R140-south.jpg',
            '_triggers': ['dangerwarningPowerLines', 'activateElectrocute'],
            'destination': {
                'y': 3
            },
            '_props': {
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'wire.png',
                    'width': 160,
                    'height': 102,
                    'top': 220,
                    'left': 483
                },
                'Luke2': {
                    'name': 'Luke2',
                    'image': 'RunnerBack.png',
                    'width': 24,
                    'height': 69,
                    'top': 288,
                    'left': 539
                },
                'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'wire-moved.png',
                    'width': 160,
                    'height': 102,
                    'top': 220,
                    'left': 483
                }
            }
        },
        'w': {
            'name': 'WHall148',
            'image': 'R140-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'beam': {
                    'name': 'beam',
                    'image': 'beam.png',
                    'width': 12,
                    'height': 85,
                    'top': 275,
                    'left': 528
                },
                'bikeMangled': {
                    'name': 'bikeMangle',
                    'image': 'bikeMangle.png',
                    'width': 50,
                    'height': 65,
                    'top': 284,
                    'left': 529
                },
                'bikeMoved': {
                    'name': 'bikeMoved',
                    'image': 'bikeMoved.png',
                    'width': 30,
                    'height': 55,
                    'top': 301,
                    'left': 577
                }
            }
        }
    }
}
