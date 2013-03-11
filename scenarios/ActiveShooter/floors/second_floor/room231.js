'room231': {
    'id': 'library231',
    'x': 2,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'ELibrary231',
            'image': 'R231-east.jpg',
            'destination': {
                'x': 3
            },
            '_props' : {
                'lockedDoor': {
                    'name': 'lockedDoor',
                    'image': 'trans.png',
                    'width': 150,
                    'height': 350,
                    'left': 875,
                    'top': 200,
                    'action': 'showConversation',
                    'actionVariables': {
                    'conversationName': 'lockedDoor'
                    },
                'barrier' : true
                }
            }
        },
        'w': {
            'name': 'WLibrary231',
            'image': 'R231-west.jpg',
            'destination': {
                'x': 1
            }
        },
        'n': {
            'name': 'NLibrary231',
            'image': 'R231-north.jpg',
            'destination': {
                'y': 4
            },
            '_props': {
                'table': {
                    'name': 'table',
                    'image': 'table.png',
                    'width': 140,
                    'height': 65,
                    'left': 500,
                    'top': 335
                },
                'new-book': {
                    'name': 'new-book',
                    'image': 'book.png',
                    'width': 23,
                    'height': 18,
                    'left': 530,
                    'top': 328
                }
            }
        },
        's': {
            'name': 'SLibrary231',
            'image': 'R231-south.jpg'
        }
    }
}
