'room241': {
    'id': 'library241',
    'x': 2,
    'y': 4,
    '_walls': {
        'e': {
            'name': 'ELibrary241',
            'image': 'R241-east.jpg',
            '_props': {
                'bookshelf': {
                    'name': 'bookshelf',
                    'image': 'largeSquare.png',
                    'hoverImage': 'largeSquareHover.png',
                    'width': 567,
                    'height': 449,
                    'top': 122,
                    'left': 401,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Bookshelf',
                        'isAnAction': true
                    }
                }
            }
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
        },
        'w': {
            'name': 'WLibrary241',
            'image': 'R241-west.jpg',
            '_props': {
                'bookshelf': {
                    'name': 'bookshelf',
                    'image': 'largeSquare.png',
                    'hoverImage': 'largeSquareHover.png',
                    'width': 982,
                    'height': 611,
                    'top': 1,
                    'left': 104,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Bookshelf',
                        'isAnAction': true
                    }
                }
            }
        }
    }
}