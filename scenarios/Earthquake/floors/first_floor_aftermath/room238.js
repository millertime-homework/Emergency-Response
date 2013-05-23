'room238': {
    'id': 'room238',
    'x': 2,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'ERoom238',
            'image': 'R230-east.jpg',
            'destination': {
                'x': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideLeftHover.png',
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
            'name': 'WRoom238',
            'image': 'R230-west.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideRightHover.png',
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
            'name': 'NRoom238',
            'image': 'R230-north.jpg'
        },
        's': {
            'name': 'SRoom238',
            'image': 'R230-south.jpg'
        }
    }
}
