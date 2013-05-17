'room248': {
    'id': 'hall248',
    'x': 2,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall248',
            'image': 'R240-east.jpg',
            'destination': {
                'x': 3
            },
            '_props': {
                'bridgeDoor': {
                    'name': 'bridgeDoor',
                    'image': 'doordown.png',
                    'width': 60,
                    'height': 45,
                    'top': 340,
                    'left': 530
                },
                'brokenDoor': {
                    'name': 'brokenDoor',
                    'image': 'dooraskew.png',
                    'width': 15,
                    'height': 120,
                    'top': 251,
                    'left': 610
                },
                'brokenGlass': {
                    'name': 'brokenGlass',
                    'image': 'brokenGlass.png',
                    'width': 125,
                    'height': 25,
                    'top': 350,
                    'left': 500
                }
            }
        },
        'n': {
            'name': 'NHall248',
            'image': 'R240-north.jpg'
        },
        's': {
            'name': 'SHall248',
            'image': 'R240-south.jpg'
        },
        'w': {
            'name': 'WHall248',
            'image': 'R240-west.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'beam': {
                    'name': 'beam',
                    'image': 'beam.png',
                    'width': 13,
                    'height': 55,
                    'top': 280,
                    'left': 535
                },
                'bikeMangled': {
                    'name': 'bikeMangle',
                    'image': 'bikeMangle.png',
                    'width': 35,
                    'height': 50,
                    'top': 286,
                    'left': 540
                },
                'bikeMoved': {
                    'name': 'bikeMoved',
                    'image': 'bikeMoved.png',
                    'width': 15,
                    'height': 41,
                    'top': 301,
                    'left': 579
                },
                'mrs-wheelchair': {
                    'name': 'mrs_wheelchair',
                    'image': 'manLeft.png',
                    'width': 275,
                    'height': 275,
                    'top': 308,
                    'left': 406,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'James'
                    }
                }
            }
        }
    }
}
