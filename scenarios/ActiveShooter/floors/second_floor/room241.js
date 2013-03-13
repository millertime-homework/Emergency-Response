'room241': {
    'id': 'library241',
    'x': 2,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'ELibrary241',
            'image': 'R241-east.jpg',
            '_props': {
                'new-book': {
                    'name': 'new-book',
                    'image': 'book.png',
                    'hoverImage': 'book-hover.png',
                    'width': 70,
                    'height': 55,
                    'left': 490,
                    'top': 304,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'New Book',
                        'isAnAction': true
                    }
                }
            }
        },
        'w': {
            'name': 'WLibrary241',
            'image': 'R241-west.jpg'
        },
        'n': {
            'name': 'NLibrary241',
            'image': 'R241-north.jpg'
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
