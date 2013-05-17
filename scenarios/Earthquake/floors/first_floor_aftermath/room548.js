'room548': {
    'id': 'hall548',
    'x': 5,
    'y': 4,
    'annotation': 'AnnotationExit.png',
    '_triggers': ['footInjury'],
    '_walls': {
        'e': {
            'name': 'EHall548',
            'image': 'R540-east.jpg',
            '_props': {
                'east-exit': {
                    'name': 'east-exit',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 166,
                    'height': 351,
                    'top': 186,
                    'left': 475,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Exit Building'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall548',
            'image': 'R540-north.jpg'
        },
        's': {
            'name': 'SHall548',
            'image': 'R540-south.jpg'
        },
        'w': {
            'name': 'WHall548',
            'image': 'R540-west.jpg',
            'destination': {
                'x': 4
            },
            '_props': {
                'bridgeDoor': {
                    'name': 'bridgeDoor',
                    'image': 'doordown.png',
                    'width': 78,
                    'height': 65,
                    'top': 330,
                    'left': 505,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Broken glass'
                    }
                },
                'brokenGlass': {
                    'name': 'brokenGlass',
                    'image': 'brokenGlass.png',
                    'width': 130,
                    'height': 75,
                    'top': 330,
                    'left': 490,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Broken glass'
                    }
                },
                'wheelchair': {
                    'name': 'the_wheelchair',
                    'image': 'manLeft.png',
                    'width': 30,
                    'height': 30,
                    'top': 300,
                    'left': 540
                }
            }
        }
    }
}