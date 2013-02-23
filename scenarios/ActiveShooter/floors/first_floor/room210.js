'room210': {
    'id': 'hall210',
    'x': 2,
    'y': 1,
    '_walls': {
        /* To allow player to 'move-up' */
        'u': {
            'destination': {
                'x': 3, // this will change when 2nd floor layout changes
                'z': 1
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
                'elevator-button': {
                    'name': 'elevator-up',
                    'image': 'elevator-up.png',
                    'hoverImage': 'elevator-up-hover.png',
                    'width': 54,
                    'height': 55,
                    'left': 876,
                    'top': 365,
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
