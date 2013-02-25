'room030': {
    'id': 'classroom030',
    'x': 0,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'EClassroom030',
            'image': 'R030-east.jpg',
            'destination': {
                'x': 1
            }
        },
        'w': {
            'name': 'WClassroom030',
            'image': 'R030-west.jpg',
            '_props': {
                'hidingSpot2': {
                    'name': 'hidingSpot2',
                    'image': 'ASHideSilhouette.png',
                    'hoverImage': 'ASHideSilhouetteHover.png',
                    'width': 84,
                    'height': 89,
                    'left': 896,
                    'top': 359,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'goIntoHidingBehindChair'
                    }
                }
            }
        },
        'n': {
            'name': 'NClassroom030',
            'image': 'R030-north.jpg',
        },
        's': {
            'name': 'SClassroom030',
            'image': 'R030-south.jpg'
        }
    }
}
