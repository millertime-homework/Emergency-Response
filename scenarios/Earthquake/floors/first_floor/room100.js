'room100': {
    'id': 'hall100',
    'x': 1,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EHall100',
            'image': 'R100-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'WHall100',
            'image': 'R100-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 215,
                    'height': 536,
                    'top': 140,
                    'left': 154,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall100',
            'image': 'R100-north.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'foo': {
                    'name': 'foo',
                    'image': 'fooRight.png',
                    'width': 12,
                    'height': 30,
                    'left': 532,
                    'top': 305
                }
            }
        },
        's': {
            'name': 'SHall100',
            'image': 'R100-south.jpg'
        }
    }
}
