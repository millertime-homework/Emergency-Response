'room041': {
    'id': 'office041',
    'x': 0,
    'y': 4,
    '_triggers' : ['hideFromShooter041'],
    '_walls': {
        'e': {
            'name': 'EOffice041',
            'image': 'R041-east.jpg',
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
                    'height': 70,
                    'left': 480,
                    'top': 380,
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
                'lightSwitchDone': {
                    'name': 'lightSwitch',
                    'image': 'ASLightSwitch.png',
                    'width': 50,
                    'height': 45,
                    'left': 365,
                    'top': 357
                },
                'hidingSpot': {
                    'name': 'hidingSpot',
                    'image': 'ASHideSilhouette.png',
                    'hoverImage': 'ASHideSilhouetteHover.png',
                    'width': 84,
                    'height': 89,
                    'left': 196,
                    'top': 459,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'goIntoHidingByDoor'
                    }
                }
            }
        },
        'w': {
            'name': 'WOffice041',
            'image': 'R041-west.jpg'
        },
        'n': {
            'name': 'NOffice041',
            'image': 'R041-north.jpg'
        },
        's': {
            'name': 'SOffice041',
            'image': 'R041-south.jpg'
        }
    }
}
