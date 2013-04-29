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
                    'openImage': 'blackout.jpg',
                    'width': 162,
                    'height': 360,
                    'left': 478,
                    'top': 200,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockableDoor2',
                        'isAnAction': true
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
                    'left': 495,
                    'top': 370,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockDoor',
                        'isAnAction': true
                    }
                },
                'doorHandleDone': {
                    'name': 'doorHandle',
                    'image': 'rectangle.png',
                    'width': 20,
                    'height': 62,
                    'left': 495,
                    'top': 370
                },
                'lightSwitch': {
                    'name': 'lightSwitch',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 51,
                    'height': 25,
                    'left': 673,
                    'top': 385,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'turnOffLights',
                        'isAnAction': true
                    }
                },
                'lightSwitchDone': {
                    'name': 'lightSwitch',
                    'image': 'trans.png',
                    'width': 51,
                    'height': 25,
                    'left': 673,
                    'top': 385
                },
                'hidingStudent1': {
                    'name': 'hidingStudent1',
                    'image': 'personHiding.png',
                    'width': 200,
                    'height': 100,
                    'left': 750,
                    'top': 380
                },
                'hidingStudent2': {
                    'name': 'hidingStudent2',
                    'image': 'personHiding.png',
                    'width': 200,
                    'height': 100,
                    'left': 750,
                    'top': 230
                },
                'bell-hiding': {
                    'name': 'bell-hiding',
                    'image': 'XavDuck.png',
                    'width': 207,
                    'height': 200,
                    'left': 180,
                    'top': 370,
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
