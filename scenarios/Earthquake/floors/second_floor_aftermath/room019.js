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
                    'image': 'UseDoor.png',
                    'openImage': 'blank.png',
                    'width': 160,
                    'height': 340,
                    'left': 480,
                    'top': 200,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
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
                    'left': 150,
                    'top': 350,
                    'action': 'showConversation',
                    'actionVariables':{
                        'conversationName': 'Help Injured Professor'
                    }
                }
            }
        },
        'n': {
            'name': 'NClass019',
            'image': 'R011-north.jpg',
        },
        's': {
            'name': 'SClass019',
            'image': 'R011-south.jpg',
        }
    }
}
