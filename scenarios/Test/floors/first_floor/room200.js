'room200': {
    'id': 'hall200',
    'x': 2,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EHall200',
            'image': 'R200-east.jpg',
            'destination': {
                'x': 3
            },
            '_props': {
                'prof-bell': {
                    'name': 'prof-bell',
                    'image': 'prof_bell.png',
                    'width': 200,
                    'height': 354,
                    'left': 100,
                    'top': 257,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Professor Bell'
                    }
                },
                'prof-bell-on-fire': {
                    'name': 'prof-bell-on-fire',
                    'image': 'prof_bell_on_fire.png',
                    'width': 200,
                    'height': 354,
                    'left': 100,
                    'top': 257,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Professor Bell On Fire'
                    }
                }
            }
        },
        'w': {
            'name': 'WHall200',
            'image': 'R200-west.jpg',
            'destination': {
                'x': 1
            }
        },
        'n': {
            'name': 'NHall200',
            'image': 'R200-north.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'prof-bell': {
                    'name': 'prof-bell',
                    'image': 'prof_bell.png',
                    'width': 200,
                    'height': 354,
                    'left': 900,
                    'top': 257,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Professor Bell'
                    },
                },
                'prof-bell-on-fire': {
                    'name': 'prof-bell-on-fire',
                    'image': 'prof_bell_on_fire.png',
                    'width': 200,
                    'height': 354,
                    'left': 900,
                    'top': 257,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Professor Bell On Fire'
                    }
                },
                'Fire-Extinguisher': {
                    'name': 'Fire-Extinguisher',
                    'image': 'fire-extinguisher.png',
                    'width': 20,
                    'height': 20,
                    'left': 450,
                    'top': 300
                }
            }
        },
        's': {
            'name': 'SHall200',
            'image': 'R200-south.jpg'
        }
    }
}
