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
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideLeftHover.png',
                    'width': 199,
                    'height': 443,
                    'top': 188,
                    'left': 456,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'doorR041',
                        'isAnAction': true
                    }
                },
                'doorHandle041': {
                    'name': 'doorHandle041',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 25,
                    'height': 80,
                    'top': 381,
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
                    'top': 275,
                    'left': 522,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'putShadeDown041',
                        'isAnAction': true
                    }
                },
                'doorShadeDown041': {
                    'name': 'doorShadeDown041',
                    'image': 'ASShadeDown.png',
                    'width': 72,
                    'height': 93,
                    'top': 268,
                    'left': 519
                },
                'hidingSpot041': {
                    'name': 'hidingSpot041',
                    'image': 'hideArrow.png',
                    'hoverImage': 'hideArrowHover.png',
                    'width': 84,
                    'height': 89,
                    'top': 482,
                    'left': 291,
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
