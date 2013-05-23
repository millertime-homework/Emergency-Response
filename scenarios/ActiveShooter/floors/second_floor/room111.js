'room111': {
    'id': 'hall111',
    'x': 1,
    'y': 1,
    '_triggers': ['playerRuns','shooterCloseGetShot'],
    '_walls': {
        'e': {
            'name': 'EHall111',
            'image': 'R111-east.jpg',
            '_props': {
                'evac_plan': {
                    'name': 'evac_plan',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 521,
                    'height': 434,
                    'top': 68,
                    'left': 288,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'evac_second_floor'
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
            },
            '_props': {
                'shooterR111': {
                    'name': 'shooterR111',
                    'image': 'shooter.png',
                    'width': 67,
                    'height': 192,
                    'top': 300,
                    'left': 550
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
                    'hoverImage': 'doorHover.png',
                    'width': 228,
                    'height': 607,
                    'top': 169,
                    'left': 444,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockableDoor2',
                        'isAnAction': true
                    }
                }
            }
        }
    }
}