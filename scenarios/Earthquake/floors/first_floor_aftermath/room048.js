'room048': {
    'id': 'hall048',
    'x': 0,
    'y': 4,
    'annotation': 'AnnotationExit.png',
    '_walls': {
        'e': {
            'name': 'EHall048',
            'image': 'R040-east.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'wheelchair': {
                    'name': 'the_wheelchair',
                    'image': 'manFront.png',
                    'width': 45,
                    'height': 45,
                    'top': 305,
                    'left': 535
                }
            }
        },
        'n': {
            'name': 'NHall048',
            'image': 'R040-north.jpg'
        },
        's': {
            'name': 'SHall048',
            'image': 'R040-south.jpg'
        },
        'w': {
            'name': 'WHall048',
            'image': 'R040-west.jpg',
            '_props': {
                'beam': {
                    'name': 'beam',
                    'image': 'beam.png',
                    'width': 60,
                    'height': 450,
                    'top': 130,
                    'left': 385
                },
                'bikeMangled': {
                    'name': 'bikeMangled',
                    'image': 'bikeMangle.png',
                    'hoverImage': 'bikeMangleHover.png',
                    'width': 350,
                    'height': 425,
                    'top': 140,
                    'left': 355,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A Mangled Bike'
                    }
                },
                'bikeMoved': {
                    'name': 'bikeMoved',
                    'image': 'bikeMoved.png',
                    'width': 100,
                    'height': 300,
                    'top': 300,
                    'left': 750,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A Bike against the wall.'
                    }
                },
                'west-exit': {
                    'name': 'west-exit',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 167,
                    'height': 352,
                    'top': 188,
                    'left': 475,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Exit Building'
                    }
                }
            }
        }
    }
}