'room118': {
    'id': 'hall118',
    'x': 1,
    'y': 1,
    '_triggers' : ['activateElectrocute','footInjury'],
    '_walls': {
        'e': {
            'name': 'EHall118',
            'image': 'R110-east.jpg'
        },
        'w': {
            'name': 'WHall118',
            'image': 'R110-west.jpg'
        },
        'n': {
            'name': 'NHall118',
            'image': 'R110-north.jpg',
            'destination': {
                'y': 2
            },
            '_props' : {
                'Downedwire': {
                    'name': 'Downedwire',
                    'image': 'wire.png',
                    'width': 160,
                    'height': 102,
                    'left': 483,
                    'top': 220
                },
                'Movedwire': {
                    'name': 'Movedwire',
                    'image': 'wire-moved.png',
                    'width': 160,
                    'height': 102,
                    'left': 483,
                    'top': 220
                },
                'doorFrame': {
                    'name': 'doorFrame',
                    'image': 'doorframe2.png',
                    'hoverImage': 'doorframe2Hover.png',
                    'width': 75,
                    'height': 75,
                    'left': 534,
                    'top': 400,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A door frame'
                    }
                },
                'Luke2' : {
                    'name': 'Luke2',
                    'image': 'RunnerFront.png',
                    'width': 113,
                    'height': 300,
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
            'name': 'SHall118',
            'image': 'R110-south.jpg',
            'destination': {
                'y': 0
            }
        }
    }
}
