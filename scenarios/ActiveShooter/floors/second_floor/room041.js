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
                    'hoverImage': 'doorHover.png',
                    'width': 189,
                    'height': 489,
                    'top': 192,
                    'left': 463,
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
                    'width': 34,
                    'height': 41,
                    'top': 399,
                    'left': 476,
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
                    'width': 94,
                    'height': 114,
                    'top': 289,
                    'left': 508
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