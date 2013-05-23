'room230': {
    'id': 'room230',
    'x': 2,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'ERoom230',
            'image': 'R230-east.jpg',
            'destination': {
                'x': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 82,
                    'height': 190,
                    'top': 246,
                    'left': 560,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'w': {
            'name': 'WRoom230',
            'image': 'R230-west.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 82,
                    'height': 190,
                    'top': 246,
                    'left': 473,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'n': {
            'name': 'NRoom230',
            'image': 'R230-north.jpg'
        },
        's': {
            'name': 'SRoom230',
            'image': 'R230-south.jpg'
        }
    }
}
