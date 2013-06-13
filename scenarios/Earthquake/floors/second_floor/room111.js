'room111': {
    'id': 'hall111',
    'x': 1,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall111',
            'image': 'R111-east.jpg',
            '_props': {
                'evac_plan_2': {
                    'name': 'evac_plan_2',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 559,
                    'height': 433,
                    'left': 274,
                    'top': 63,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'evac_second_floor'
                    }
                }
            }
        },
        'w': {
            'name': 'WHall111',
            'image': 'R111-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorOutsideRightHover.png',
                    'width': 228,
                    'height': 607,
                    'top': 169,
                    'left': 444,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door',
                        'isAnAction': true
                    }
                }
            }
        },
        'n': {
            'name': 'NHall111',
            'image': 'R111-north.jpg',
            'destination': {
                'y': 2
            }
        },
        's': {
            'name': 'SHall111',
            'image': 'R111-south.jpg',
            'destination': {
                'y': 0
            }
        }
    }
}
