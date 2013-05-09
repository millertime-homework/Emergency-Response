'room420': {
    'id': 'hall420',
    'x': 4,
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall420',
            'image': 'R420-east.jpg',
        },
        'w': {
            'name': 'WHall420',
            'image': 'R420-west.jpg',
            'destination': {
                'x': 3
            },
            '_props' : {
                'pictureframeid':{
                    'name': 'pictureframeprop',
                    'image': 'picture.png',
                    'width': 100,
                    'height': 200,
                    'left': 300,
                    'top': 200,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A picture frame'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall420',
            'image': 'R420-north.jpg'
        },
        's': {
            'name': 'SHall420',
            'image': 'R420-south.jpg',
            'destination': {
                'y': 1
            }
        }
    }
}
