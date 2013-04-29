'room031': {
    'id': 'office031',
    'x': 0,
    'y': 3,
    '_triggers' : ['librarySouthOfficeEventsStart'],
    '_walls': {
        'e': {
            'name': 'EOffice031',
            'image': 'R031-east.jpg',
            'destination': {
                'x': 1
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
                },
                'doorShadeDown031': {
                    'name': 'doorShadeDown031',
                    'image': 'ASshadeDown.png',
                    'width': 52,
                    'height': 72,
                    'left': 532,
                    'top': 277
                },
                'doorHandle031': {
                    'name': 'doorHandle031',
                    'image': 'ASDoorHandle.png',
                    'hoverImage': 'ASDoorHandleHover.png',
                    'width': 45,
                    'height': 83,
                    'left': 476,
                    'top': 380,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockDoor',
                        'isAnAction': true
                    }
                },
                'doorHandleDone031': {
                    'name': 'doorHandle031',
                    'image': 'ASDoorHandle.png',
                    'width': 45,
                    'height': 83,
                    'left': 476,
                    'top': 380
                },
                'lightSwitch031': {
                    'name': 'lightSwitch031',
                    'image': 'ASLightSwitch.png',
                    'hoverImage': 'ASLightSwitchHover.png',
                    'width': 50,
                    'height': 45,
                    'left': 365,
                    'top': 357,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'turnOffLights031',
                        'isAnAction': true
                    }
                },
                'lightSwitchDone031': {
                    'name': 'lightSwitch031',
                    'image': 'ASLightSwitch.png',
                    'width': 50,
                    'height': 45,
                    'left': 365,
                    'top': 357
                }
            }
        },
        'w': {
            'name': 'WOffice031',
            'image': 'R031-west.jpg',
            '_props': {
                'student1SWLib':{
                        'name': 'student1SWLib',
                        'image':      'student1SWLib.png',
                        'hoverImage': 'student1SWLib.png',
                        'width' : 200,
                        'height': 600,
                        'left'  : 400,
                        'top' :   200,
                        'action': 'showConversation',
                        'actionVariables': {
                            'conversationName': 'She'
                       }
                },
                'student2SWLib':{
                        'name': 'student2SWLib',
                        'image':      'student2SWLib.png',
                        'hoverImage': 'student2SWLib.png',
                        'width' : 200,
                        'height': 600,
                        'left'  : 700,
                        'top' :   200,
                        'action': 'showConversation',
                        'actionVariables': {
                            'conversationName': 'Carol'
                        }
                },
                'screwdriver031':{
                        'name': 'screwdriver031',
                        'image':      'screwdriver.png',
                        'hoverImage': 'screwdriverHover.png',
                        'width' : 55,
                        'height': 33,
                        'left'  : 350,
                        'top' :   475,
                        'action': 'showConversation',
                        'actionVariables': {
                            'conversationName': 'Pick up screw driver?'
                        }
                }
            }
        },
        'n': {
            'name': 'NOffice031',
            'image': 'R031-north.jpg'
        },
        's': {
            'name': 'SOffice031',
            'image': 'R031-south.jpg',
            '_props': {
            }
        }
    }
}
