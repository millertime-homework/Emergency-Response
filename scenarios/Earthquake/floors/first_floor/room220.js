'room220': {
    'id': 'stairs220',
    'x': 2,
    'y': 2,
    'annotation': 'AnnotationStairs.png',
    '_walls': {
        'e': {
            'name': 'EStairs220',
            'image': 'R220-east.jpg'
        },
        'w': {
            'name': 'WStairs220',
            'image': 'R220-west.jpg',
            'destination': {
                'x': 1,
                'z': 1
            }
        },
        'n': {
            'name': 'NStairs220',
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
            'name': 'SStairs220',
            'image': 'R220-south.jpg',
            'destination': {
                'y': 1
            }
        }
    }
}
