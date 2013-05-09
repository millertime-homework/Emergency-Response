'room011': {
    'id': 'class011',
    'x': 0,
    'y': 1,
    '_triggers' : ['abort', 'playerEnters011'],
    '_walls': {
        'e': {
            'name': 'EClass011',
            'image': 'R011-east.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'openImage': 'doorOpen.png',
                    'width': 165,
                    'height': 367,
                    'left': 475,
                    'top': 207,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockableDoor2',
                        'isAnAction': true
                    }
                },
                'evac_plan': {
                    'name': 'evac_plan',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 130,
                    'height': 117,
                    'left': 724,
                    'top': 270,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'evac_second_floor_detail'
                    }
                },
                'doorShade': {
                    'name': 'doorShade',
                    'image': 'ASshadeUp.png',
                    'hoverImage': 'ASshadeUpHover.png',
                    'width': 52,
                    'height': 72,
                    'left': 532,
                    'top': 277,
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
                    'left': 532,
                    'top': 277
                },
                'doorHandle': {
                    'name': 'doorHandle',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 20,
                    'height': 62,
                    'left': 497,
                    'top': 368,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockDoor',
                        'isAnAction': true
                    }
                },
                'lightSwitch': {
                    'name': 'lightSwitch',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 47,
                    'height': 25,
                    'left': 674,
                    'top': 355,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'turnOffLights',
                        'isAnAction': true
                    }
                },
                'bell-hiding': {
                    'name': 'bell-hiding',
                    'image': 'XavDuck.png',
                    'width': 207,
                    'height': 200,
                    'left': 180,
                    'top': 440,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Professor Bell is hiding'
                    }
                }
            }
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
                    'left': 500,
                    'top': 225,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Professor Bell'
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
        }
    }
}
