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
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 151,
                    'height': 348,
                    'top': 217,
                    'left': 482,
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
                    'image': 'sturdyDesk.png',
                    'hoverImage':'sturdyDeskHover.png',
                    'width': 285,
                    'height': 94,
                    'left': 751,
                    'top': 405,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Sturdy Desk',
                        'isAnAction': true
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
                        'conversationName': 'Chalk on Sturdy Desk',
                        'isAnAction': true
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
