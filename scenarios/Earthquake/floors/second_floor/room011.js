'room011': {
    'id': 'class011',
    'x': 0,
    'y': 1,
    '_triggers': ['enterRoom206','hiXavier','walkedAwayFromConversation'],
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
                    'openImage': 'trans.png',
                    'hoverImage': 'doorHover.png',
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
            'name': 'WClass011',
            'image': 'R011-west.jpg',
            '_props': {
                'profXav': {
                    'name': 'profXav',
                    'image': 'XavFront.png',
                    'width': 113,
                    'height': 340,
                    'left': 440,
                    'top': 230,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Professor Xavier'
                    }
                },
                'sturdydesk':{
                    'name': 'Sturdy Desk',
                    'image':'rectangleGlow.png',
                    'width': 410,
                    'height': 190,
                    'left': 620,
                    'top': 385,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Sturdy Desk'
                    }
                },
                'chalk': {
                    'name':'Chalk',
                    'image': 'chalk.png',
                    'hoverImage': 'chalkHover.png',
                    'width': 35,
                    'height': 60,
                    'left': 760,
                    'top': 355,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Chalk on Sturdy Desk'
                    }
                }
            }
        },
        'n': {
            'name': 'NClass011',
            'image': 'R011-north.jpg',
        },
        's': {
            'name': 'SClass011',
            'image': 'R011-south.jpg',
        }
    }
}
