'room210': {
    'id': 'hall210',
    'x': 2,
    'y': 1,
    '_triggers' : ['shotInStairwell'],
    '_walls': {
        /* To allow player to 'move-up' */
        'u': {
            'destination': {
                'z': 1,
                'f': 'w'
            }
        },
        'e': {
            'name': 'EHall210',
            'image': 'R210-east.jpg'
        },
        'w': {
            'name': 'WHall210',
            'image': 'R210-west.jpg',
            '_props': {
                'elevator-up': {
                    'name': 'elevator-up',
                    'image': 'elevator-up.png',
                    'hoverImage': 'elevator-up-hover.png',
                    'width': 43,
                    'height': 24,
                    'left': 830,
                    'top': 360,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Elevator Up'
                    }
                },
                'Fire-Extinguisher': {
                    'name': 'Fire-Extinguisher',
                    'image': 'fire-extinguisher.png',
                    'width': 190,
                    'height': 190,
                    'left': 800,
                    'top': 50,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Fire Extinguisher'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall210',
            'image': 'R210-north.jpg',
            'destination': {
                'y': 2,
            },
            '_props': {
                'Fire-Extinguisher': {
                    'name': 'Fire-Extinguisher',
                    'image': 'fire-extinguisher.png',
                    'width': 190,
                    'height': 190,
                    'left': 100,
                    'top': 300,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Fire Extinguisher'
                    }
                }
            }
        },
        's': {
            'name': 'SHall210',
            'image': 'R210-south.jpg',
            'destination': {
                'y': 0
            }
        }
    }
}
