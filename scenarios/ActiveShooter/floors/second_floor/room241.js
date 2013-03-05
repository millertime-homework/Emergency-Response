'room241': {
    'id': 'library241',
    'x': 2,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'ELibrary241',
            'image': 'R241-east.jpg'
        },
        'w': {
            'name': 'WLibrary241',
            'image': 'R241-west.jpg',
            'destination': {
                'x': 1
            }
        },
        'n': {
            'name': 'NLibrary241',
            'image': 'R241-north.jpg',
            '_props': {
                'table': {
                    'name': 'table',
                    'image': 'table.png',
                    'width': 407,
                    'height': 211,
                    'left': 300,
                    'top': 400
                },
                'new-book': {
                    'name': 'new-book',
                    'image': 'book.png',
                    'hoverImage': 'book-hover.png',
                    'width': 70,
                    'height': 55,
                    'left': 400,
                    'top': 370,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'New Book'
                    }
                }
            }
        },
        's': {
            'name': 'SLibrary241',
            'image': 'R241-south.jpg',
            'destination': {
                'y': 3
            }
        }
    }
}
