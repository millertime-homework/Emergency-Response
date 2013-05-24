'room019': {
    'id': 'class019',
    'x': 0,
    'y': 1,
    '_triggers': ['failprepSchoolObjectives','setAftermathObjectives','checkIfSurvivedEarthquake'],
    '_walls': {
        'e': {
            'name': 'EClass019',
            'image': 'R011-east.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
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
                        'conversationName': 'door',
                        'isAnAction': true
                    }
                }
            }
        },
        'w': {
            'name': 'WClass019',
            'image': 'R011-west.jpg',
            '_props': {
                'ProfXavInjured': {
                    'name': 'ProfXavInjured',
                    'image': 'XavHurt.png',
                    'width': 300,
                    'height': 150,
                    'left': 400,
                    'top': 400,
                    'action': 'showConversation',
                    'actionVariables':{
                        'conversationName': 'Help Injured Professor'
                    }
                },
                'flashlight': {
                    'name': 'Flashlight',
                    'image': 'flashlight.png',
                    'width': 62,
                    'height': 40,
                    'left': 700,
                    'top': 400,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'pickupExtraFlashlight',
                        'isAnAction': true
                    }
                }
            }
        },
        'n': {
            'name': 'NClass019',
            'image': 'R011-north.jpg'
        },
        's': {
            'name': 'SClass019',
            'image': 'R011-south.jpg'
        }
    }
}
