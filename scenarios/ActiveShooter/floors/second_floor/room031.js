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
                'doorShade031': {
                    'name': 'doorShade031',
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
                        'conversationName': 'lockDoor'
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
                        'conversationName': 'turnOffLights031'
                    }
                },
                'lightSwitchDone031': {
                    'name': 'lightSwitch031',
                    'image': 'ASLightSwitch.png',
                    'width': 50,
                    'height': 45,
                    'left': 365,
                    'top': 357
                },
                'hidingSpot031':{
                    'name':  'hidingSpot031',
                    'image': 'ASHideSilhouette.png',
                    'width': 84,
                    'height': 89,
                    'left': 240,
                    'top': 480,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'goIntoHidingByDoor'
                    }
                },
                'hidingStudent031_1': {
                    'name': 'hidingStudent031_1',
                    'image': 'personHiding.png',
                    'width': 200,
                    'height': 100,
                    'left': 750,
                    'top': 380
                },
                'hidingStudent031_2': {
                    'name': 'hidingStudent031_2',
                    'image': 'personHiding.png',
                    'width': 200,
                    'height': 100,
                    'left': 750,
                    'top': 230
                },
                'door': {
                    'name': 'door',
                    'image': 'UseDoor.png',
                    'openImage': 'blank.png',
                    'width': 280,
                    'height': 500,
                    'left': 420,
                    'top': 160,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'w': {
            'name': 'WOffice031',
            'image': 'R031-west.jpg'
        },
        'n': {
            'name': 'NOffice031',
            'image': 'R031-north.jpg'
        },
        's': {
            'name': 'SOffice031',
            'image': 'R031-south.jpg',
            '_props': {
                'screwdriver031':{
                        'name': 'screwdriver031',
                        'image':      'screwdriver.png',
                        'hoverImage': 'screwdriver.png',
                        'width' : 100,
                        'height': 66,
                        'left'  : 500,
                        'top' :   300,
                        'action': 'showConversation',
                        'actionVariables': {
                            'conversationName': 'Pick up screw driver?'
                        }
                }
            }
        }
    }
}
