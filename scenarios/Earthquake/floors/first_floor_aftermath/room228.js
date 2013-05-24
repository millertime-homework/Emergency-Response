'room228': {
    'id': 'stairs228',
    'x': 2,
    'y': 2,
    'annotation': 'AnnotationStairs.png',
    '_walls': {
        'e': {
            'name': 'EStairs228',
            'image': 'R220-east.jpg'
        },
        'w': {
            'name': 'WStairs228',
            'image': 'R220-west.jpg',
            'destination': {
                'x': 1,
                'z': 9
            }
        },
        'n': {
            'name': 'NStairs228',
            'image': 'R220-north.jpg',
            '_props': {
                'Info-TV': {
                    'name': 'Info-TV',
                    'image': 'info-tv.png',
                    'hoverImage': 'info-tvHover.png',
                    'width': 215,
                    'height': 139,
                    'top': 192,
                    'left': 454,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Info TV'
                    }
                }
            }
        },
        's': {
            'name': 'SStairs228',
            'image': 'R220-south.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'rubble': {
                    'name': 'rubble',
                    'image': 'rubble.png',
                    'width': 150,
                    'height': 87,
                    'left': 475,
                    'top': 315
                }
            }
        }
    }
}
