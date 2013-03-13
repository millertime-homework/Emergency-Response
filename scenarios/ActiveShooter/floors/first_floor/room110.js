'room110': {
    'id': 'hall110',
    'x': 1,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall110',
            'image': 'R110-east.jpg',
            '_props': {
                'Info-TV': {
                    'name': 'Info-TV',
                    'image': 'info-tv.png',
                    'hoverImage': 'info-tvHover.png',
                    'width': 370,
                    'height': 217,
                    'left': 200,
                    'top': 50,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Info TV'
                    }
                }
            }
        },
        'w': {
            'name': 'WHall110',
            'image': 'R110-west.jpg'
        },
        'n': {
            'name': 'NHall110',
            'image': 'R110-north.jpg',
            'destination': {
                'y': 2
            }
        },
        's': {
            'name': 'SHall110',
            'image': 'R110-south.jpg',
            'destination': {
                'y': 0
            },
            '_props': {
                'RHF_Poster': {
                    'name': 'RHF_Poster',
                    'image': 'RHF_Poster.png',
                    'width': 102,
                    'height': 128,
                    'left': 550,
                    'top': 220
                }
            }
        }
    }
}
