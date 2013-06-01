'room201': {
    'id': 'hall201',
    'x': 2,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EHall201',
            'image': 'R201-east.jpg'
        },
        'n': {
            'name': 'NHall201',
            'image': 'R201-north.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'girlWounded': {
                    'name': 'girlWounded',
                    'image': 'girlWounded.png',
                    'width': 148,
                    'height': 118,
                    'top': 363,
                    'left': 384,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Wounded Student'
                    }
                }
            }
        },
        's': {
            'name': 'SHall201',
            'image': 'R201-south.jpg'
        },
        'w': {
            'name': 'WHall201',
            'image': 'R201-west.jpg',
            'destination': {
                'x': 1
            }
        }
    }
}