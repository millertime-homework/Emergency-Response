'room121': {
    'id': 'hall121',
    'x': 1,
    'y': 2,
    'annotation': 'AnnotationStairs.png',
    '_triggers': ['chanceofEscape', 'deathIn240', 'getShotAtYopOfStairs'],
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
                    'left': 520,
                    'top': 366
                }
            }
        },
        'w': {
            'name': 'WHall121',
            'image': 'R121-west.jpg',
            'destination': {
                'x': 0
            },
            '_props' : {
                'lockedDoor': {
                    'name': 'lockedDoor',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 235,
                    'height': 450,
                    'left': 450,
                    'top': 170,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockedDoor',
                        'isAnAction': true
                    },
                'barrier' : true
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
                    'image': 'door.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 280,
                    'height': 500,
                    'left': 420,
                    'top': 160,
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
                    'left': 570,
                    'top': 310
                }
            }
        }
    }
}
