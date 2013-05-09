'room130': {
    'id': 'hall130',
    'x': 1, 
    'y': 3,
    '_walls': {
        'e': {
            'name': 'NHall130',
            'image': 'R130-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'SHall130',
            'image': 'R130-west.jpg',
            'destination': {
                'x': 0
            },
            '_triggers' : ['hiMrsFoo', 'walkedAwayFromConversation'],
            '_props': {
                'foo': {
                    'name': 'foo',
                    'image': 'fooFront.png',
                    'width': 285,
                    'height': 480,
                    'left': 650,
                    'top': 200,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Mrs Foo'
                    }
                }
            }
        },
        'n': {
            'name': 'WHall130',
            'image': 'R130-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'EHall130',
            'image': 'R130-south.jpg',
            'destination': {
                'y': 2
            }
        }
    }
}
