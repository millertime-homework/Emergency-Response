'room041': {
    'id': 'office041',
    'x': 0,
    'y': 4,
    '_triggers': ['hideFromShooter_041'],
    '_walls': {
        'e': {
            'name': 'EOffice041',
            'image': 'R041-east.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'door.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 239,
                    'height': 493,
                    'top': 170,
                    'left': 436,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockableDoor1',
                        'isAnAction': true
                    }
                },
                'doorHandle041': {
                    'name': 'doorHandle041',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 27,
                    'height': 85,
                    'top': 382,
                    'left': 479,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockDoor041',
                        'isAnAction': true
                    }
                },
                'doorShade041': {
                    'name': 'doorShade041',
                    'image': 'ASshadeUp.png',
                    'hoverImage': 'ASshadeUpHover.png',
                    'width': 67,
                    'height': 76,
                    'top': 274,
                    'left': 523,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'putShadeDown041',
                        'isAnAction': true
                    }
                },
                'doorShadeDown041': {
                    'name': 'doorShadeDown041',
                    'image': 'ASShadeDown.png',
                    'width': 67,
                    'height': 93,
                    'top': 273,
                    'left': 523
                },
                'hidingSpot041': {
                    'name': 'hidingSpot041',
                    'image': 'ASHideSilhouette.png',
                    'width': 84,
                    'height': 89,
                    'top': 528,
                    'left': 248,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Crouch down by the door?',
                        'isAnAction': true
                    }
                },
                'lightSwitch041': {
                    'name': 'lightSwitch041',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 57,
                    'height': 36,
                    'top': 406,
                    'left': 351,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'turnOffLights041',
                        'isAnAction': true
                    }
                }
            }
        },
        'n': {
            'name': 'NOffice041',
            'image': 'R041-north.jpg'
        },
        's': {
            'name': 'SOffice041',
            'image': 'R041-south.jpg'
        },
        'w': {
            'name': 'WOffice041',
            'image': 'R041-west.jpg'
        }
    }
}