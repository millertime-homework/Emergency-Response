'room041': {
    'id': 'office041',
    'x': 0,
    'y': 4,
    '_triggers' : ['hideFromShooter_041'],
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
                    'width': 280,
                    'height': 500,
                    'left': 420,
                    'top': 160,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockableDoor1',
                        'isAnAction': true
                    }
                },
                'doorShade041': {
                    'name': 'doorShade041',
                    'image': 'ASshadeUp.png',
                    'hoverImage': 'ASshadeUpHover.png',
                    'width': 52,
                    'height': 72,
                    'left': 532,
                    'top': 277,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'putShadeDown041',
                        'isAnAction': true
                    }
                },
                'doorShadeDown041': {
                    'name': 'doorShadeDown041',
                    'image': 'ASShadeDown.png',
                    'width': 52,
                    'height': 72,
                    'left': 532,
                    'top': 277
                },
                'doorHandle041': {
                    'name': 'doorHandle041',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 45,
                    'height': 83,
                    'left': 476,
                    'top': 380,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockDoor041',
                        'isAnAction': true
                    }
                },
                'lightSwitch041': {
                    'name': 'lightSwitch041',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 50,
                    'height': 45,
                    'left': 365,
                    'top': 357,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'turnOffLights041',
                        'isAnAction': true
                    }
                },
                'hidingSpot041':{
                    'name':  'hidingSpot041',
                    'image': 'ASHideSilhouette.png',
                    'width': 84,
                    'height': 89,
                    'left': 240,
                    'top': 480,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Crouch down by the door?',
                        'isAnAction': true
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
