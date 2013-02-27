'room210': {
    'id': 'hall210',
    'x': 2,
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall210',
            'image': 'R210-east.jpg',
        },
        'w': {
            'name': 'WHall210',
            'image': 'R210-west.jpg',
            '_props': {
                'Fire-Extinguisher': {
                    'name': 'Fire-Extinguisher',
                    'image': 'fire-extinguisher.png',
                    'width': 190,
                    'height': 190,
                    'left': 800,
                    'top': 300,
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
                'y': 2
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
            },
            '_props': {
                'prof-bell': {
                    'name': 'prof-bell',
                    'image': 'prof_bell.png',
                    'width': 150,
                    'height': 266,
                    'left': 280,
                    'top': 315
                },
                'prof-bell-on-fire': {
                    'name': 'prof-bell-on-fire',
                    'image': 'prof_bell_on_fire.png',
                    'width': 150,
                    'height': 266,
                    'left': 280,
                    'top': 315,
                }
            }
        }
    }
}
