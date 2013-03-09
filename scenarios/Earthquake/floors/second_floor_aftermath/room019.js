'room019': {
    'id': 'class019',
    'x': 0,
    'y': 1,
    '_triggers': ['checkIfSurvivedEarthquake'],
    '_walls': {
        'e': {
            'name': 'EClass019',
            'image': 'R011-east.jpg',
            'destination': {
                'x': 1
            }
        },
        'w': {
            'name': 'WClass019',
            'image': 'R011-west.jpg',
            '_props': {
                'mrsfooinjured': {
                    'name': 'Mrs. Foo Injured',
                    'image': 'fooWounded.png',
                    'width': 300,
                    'height': 150,
                    'left': 150,
                    'top': 350,
                    'action': 'showConversation',
                    'actionVariables':{
                        'conversationName': 'Help Injured Foo'
                    }
                },
                'sturdydesk':{
                    'name': 'Sturdy Desk',
                    'image':'sturdy-desk.png',
                    'width': 389,
                    'height': 213,
                    'left': 550,
                    'top': 300
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
