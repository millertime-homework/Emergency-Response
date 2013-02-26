'room120': {
    'id': 'hall120',
    'x': 1,
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall120',
            'image': 'R120-east.jpg'
        },
        'w': {
            'name': 'WHall120',
            'image': 'R120-west.jpg',
            'destination': {
                'x': 0
            }
        },
        'n': {
            'name': 'NHall120',
            'image': 'R120-north.jpg',
            'destination': {
                'y': 3
            }
        },
        'custom': {
            'name': 'custom',
            'image': 'apartment-e.jpg',
            'fakeDirection' : 'e',
            'destination': {
                'f': 'w'
            },
            'isCutscene' : true
        },
        's': {
            'name': 'SHall120',
            'image': 'R120-south.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'Info-TV': {
                    'name': 'Info-TV',
                    'image': 'info-tv-skew-right.png',
                    'width': 150,
                    'height': 104,
                    'left': 320,
                    'top': 190,
                },
                'fire2': {
                    'name': 'fire2',
                    'image': 'fire.png',
                    'width': 800,
                    'height': 400,
                    'left': 100,
                    'top': 100,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Fire 2'
                    },
                    'barrier': true
                }
            }
        }
    }
}
