'room011': {
    'id': 'class011',
    'x': 0,
    'y': 1,
    '_triggers': ['abort','playerEnters011'],
    '_walls': {
        'e': {
            'name': 'EClass011',
            'image': 'R011-east.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'bell-hiding': {
                    'name': 'bell-hiding',
                    'image': 'XavDuck.png',
                    'width': 207,
                    'height': 200,
                    'top': 440,
                    'left': 180,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Professor Bell is hiding'
                    }
                },
                'door': {
                    'name': 'door',
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideLeftHover.png',
                    'width': 151,
                    'height': 348,
                    'top': 217,
                    'left': 482,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockableDoor2',
                        'isAnAction': true
                    }
                },
                'doorHandle': {
                    'name': 'doorHandle',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 20,
                    'height': 62,
                    'top': 368,
                    'left': 497,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockDoor',
                        'isAnAction': true
                    }
                },
                'doorShade': {
                    'name': 'doorShade',
                    'image': 'ASshadeUp.png',
                    'hoverImage': 'ASshadeUpHover.png',
                    'width': 52,
                    'height': 72,
                    'top': 277,
                    'left': 532,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'putShadeDown',
                        'isAnAction': true
                    }
                },
                'doorShadeDown': {
                    'name': 'doorShadeDown',
                    'image': 'ASshadeDown.png',
                    'width': 52,
                    'height': 72,
                    'top': 277,
                    'left': 532
                },
                'evac_plan': {
                    'name': 'evac_plan',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 130,
                    'height': 117,
                    'top': 270,
                    'left': 724,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'evac_second_floor_detail'
                    }
                },
                'lightSwitch': {
                    'name': 'lightSwitch',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 47,
                    'height': 25,
                    'top': 355,
                    'left': 674,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'turnOffLights',
                        'isAnAction': true
                    }
                }
            }
        },
        'n': {
            'name': 'NClass011',
            'image': 'R011-north.jpg'
        },
        's': {
            'name': 'SClass011',
            'image': 'R011-south.jpg'
        },
        'w': {
            'name': 'WClass011',
            'image': 'R011-west.jpg',
            '_props': {
                'prof-bell': {
                    'name': 'prof-bell',
                    'image': 'XavFront.png',
                    'width': 80,
                    'height': 240,
                    'top': 225,
                    'left': 500,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Professor Bell'
                    }
                }
            }
        }
    }
}