'room011': {
    'id': 'class011',
    'x': 0,
    'y': 1,
    '_triggers': ['enterRoom206'],
    '_walls': {
        'e': {
            'name': 'EClass011',
            'image': 'R011-east.jpg',
            'destination': {
                'x': 1
            }
        },
        'w': {
            'name': 'WClass011',
            'image': 'R011-west.jpg',
            '_props': {
                'mrsfoo': {
                    'name': 'Mrs. Foo',
                    'image': 'mrsfoo.png',
                    'width': 219,
                    'height': 511,
                    'left': 100,
                    'top': 50,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'mrsfooconvo'
                    }
                },
                'sturdydesk':{
                    'name': 'Sturdy Desk',
                    'image':'sturdy-desk.png',
                    'width': 389,
                    'height': 213,
                    'left': 550,
                    'top': 300,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Sturdy Desk'
                    }
                },
                'chalk': {
                    'name':'Chalk',
                    'image': 'chalk.png',
                    'width': 79,
                    'height': 107,
                    'left': 720,
                    'top': 220,
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
