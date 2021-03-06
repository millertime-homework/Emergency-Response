'room121': {
    'id': 'hall121',
    'x': 1,
    'y': 2,
    '_triggers': ['chanceofEscape','deathIn240','getShotAtYopOfStairs'],
    '_walls': {
        'e': {
            'name': 'EHall121',
            'image': 'R121-east.jpg',
            'destination': {
                'x': 2,
                'z': 0
            },
            '_props': {
                'shooter121E': {
                    'name': 'shooter121E',
                    'image': 'shooter.png',
                    'width': 61,
                    'height': 175,
                    'top': 366,
                    'left': 520
                }
            }
        },
        'n': {
            'name': 'NHall121',
            'image': 'R121-north.jpg',
            'destination': {
                'y': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorOutsideRightHover.png',
                    'width': 225,
                    'height': 604,
                    'top': 169,
                    'left': 445,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door',
                        'isAnAction': true
                    }
                }
            }
        },
        's': {
            'name': 'SHall121',
            'image': 'R121-south.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'shooterR111': {
                    'name': 'shooterR111',
                    'image': 'shooter.png',
                    'width': 32,
                    'height': 64,
                    'top': 310,
                    'left': 570
                }
            }
        },
        'w': {
            'name': 'WHall121',
            'image': 'R121-west.jpg',
            '_props': {
                'lockedDoor': {
                    'name': 'lockedDoor',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 271,
                    'height': 531,
                    'top': 144,
                    'left': 430,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockedDoor',
                        'isAnAction': true
                    }
                }
            }
        }
    }
}
