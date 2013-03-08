'room011': {
    'id': 'class011',
    'x': 0,
    'y': 1,
    '_triggers' : ['abort'],
    '_walls': {
        'e': {
            'name': 'EClass011',
            'image': 'R011-east.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
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
                        'conversationName': 'putShadeDown'
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
                    'image': 'ASDoorHandle.png',
                    'hoverImage': 'ASDoorHandleHover.png',
                    'width': 40,
                    'height': 52,
                    'left': 495,
                    'top': 370,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockDoor'
                    }
                },
                'doorHandleDone': {
                    'name': 'doorHandle',
                    'image': 'ASDoorHandle.png',
                    'width': 40,
                    'height': 52,
                    'left': 495,
                    'top': 370
                },
                'lightSwitch': {
                    'name': 'lightSwitch',
                    'image': 'ASLightSwitch.png',
                    'hoverImage': 'ASLightSwitchHover.png',
                    'width': 50,
                    'height': 45,
                    'left': 365,
                    'top': 357,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'turnOffLights'
                    }
                },
                'hidingSpot011':{
                    'name':  'hidingSpot011',
                    'image': 'ASHideSilhouette.png',
                    'width': 84,
                    'height': 89,
                    'left': 196,
                    'top': 459,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'goIntoHidingByDoor'
                    }
                },
                'lightSwitchDone': {
                    'name': 'lightSwitch',
                    'image': 'ASLightSwitch.png',
                    'width': 50,
                    'height': 45,
                    'left': 365,
                    'top': 357
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
                }
            }
        },
        'w': {
            'name': 'WClass011',
            'image': 'R011-west.jpg',
            '_props': {
                'prof-bell': {
                    'name': 'prof-bell',
                    'image': 'prof_bell.png',
                    'width': 200,
                    'height': 350,
                    'left': 100,
                    'top': 270,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Professor Bell'
                    }
                },
                'student1':{
                    'name': 'student1',
                    'image': 'student.png',
                    'width': 200,
                    'height': 100,
                    'left': 300,
                    'top': 270,
                },
                'student2':{
                    'name': 'student2',
                    'image': 'student.png',
                    'width': 200,
                    'height': 100,
                    'left': 500,
                    'top': 270,
                },
                'student3':{
                    'name': 'student3',
                    'image': 'student.png',
                    'width': 200,
                    'height': 100,
                    'left': 700,
                    'top': 270,
                }
            }
        },
        'n': {
            'name': 'NClass011',
            'image': 'R011-north.jpg',
            '_props':{
                'hidingStudent3': {
                        'name': 'hidingStudent3',
                        'image': 'personHiding.png',
                        'width': 200,
                        'height': 100,
                        'left': 350,
                        'top': 380
                }
            }
        },
        's': {
            'name': 'SClass011',
            'image': 'R011-south.jpg'
        }
    }
}
