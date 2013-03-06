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
            '_props': {
                'xavier': {
                    'name': 'xavier',
                    'image': 'XavierFront.png',
                    'width': 270,
                    'height': 480,
                    'left': 340,
                    'top': 181,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Professor Xavier'
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
