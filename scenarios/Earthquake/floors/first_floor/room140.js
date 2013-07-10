'room140': {
    'id': 'hall140',
    'x': 1,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall140',
            'image': 'R140-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'n': {
            'name': 'NHall140',
            'image': 'R140-north.jpg',
            'destination': {
                'y': 5
            }
        },
        's': {
            'name': 'SHall140',
            'image': 'R140-south.jpg',
            'destination': {
                'y': 3
            },
            '_props': {
                'foo': {
                    'name': 'foo',
                    'image': 'fooLeft.png',
                    'width': 35,
                    'height': 90,
                    'top': 290,
                    'left': 585,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Mrs Anderson'
                    }
                }
            }
        },
        'w': {
            'name': 'WHall140',
            'image': 'R140-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'bike': {
                    'name': 'bike',
                    'image': 'bike.png',
                    'width': 61,
                    'height': 46,
                    'top': 300,
                    'left': 526
                },
                'bikeMoved': {
                    'name': 'bikeMoved',
                    'image': 'bikeMoved.png',
                    'width': 30,
                    'height': 57,
                    'top': 300,
                    'left': 578
                }
            }
        }
    }
}
