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
        'w': {
            'name': 'WHall140',
            'image': 'R140-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'crowbar': {
                    'name': 'crowbar',
                    'image': 'crowbar.png',
                    'hoverImage': 'crowbar-hover.png',
                    'width': 200,
                    'height': 135,
                    'left': 400,
                    'top': 377,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Crowbar'
                    }
                }
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
                'RHF_Poster': {
                    'name': 'RHF_Poster',
                    'image': 'RHF_Poster.png',
                    'width': 8,
                    'height': 11,
                    'left': 554,
                    'top': 291
                }
            }
        }
    }
}
