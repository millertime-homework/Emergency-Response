'room208': {
    'id': 'hall208',
    'x': 2,
    'y': 0,
    'annotation': 'AnnotationExit.png',
    '_walls': {
        'e': {
            'name': 'EHall208',
            'image': 'R200-east.jpg',
            'destination': {
                'x': 3
            }
        },
        'n': {
            'name': 'NHall208',
            'image': 'R200-north.jpg',
            'destination': {
                'y': 1
            }
        },
        's': {
            'name': 'SHall208',
            'image': 'R208-south.jpg',
            '_props': {
                'destroyedRotaryDoor': {
                    'name': 'destroyedRotaryDoor',
                    'image': 'largeSquare.png',
                    'hoverImage': 'largeSquareHover.png',
                    'width': 265,
                    'height': 303,
                    'top': 201,
                    'left': 425,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'DestroyedRotaryDoor',
                        'isAnAction': true
                    }
                }
            }
        },
        'w': {
            'name': 'WHall208',
            'image': 'R200-west.jpg',
            'destination': {
                'x': 1
            },
            '_triggers': []
        }
    }
}