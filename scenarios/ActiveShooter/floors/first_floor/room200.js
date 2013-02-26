'room200': {
    'id': 'hall200',
    'x': 2,
    'y': 0,
    '_triggers' : ['getToClass'],
    '_walls': {
        'e': {
            'name': 'EHall200',
            'image': 'R200-east.jpg',
            'destination': {
                'x': 3
            }
        },
        'w': {
            'name': 'WHall200',
            'image': 'R200-west.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'RHF_Poster': {
                    'name': 'RHF_Poster',
                    'image': 'RHF_Poster-skew.png',
                    'width': 35,
                    'height': 100,
                    'left': 420,
                    'top': 250
                },
                'Room110Sign' : {
                    'name': 'Room110Sign',
                    'image': 'sign-room110.png',
                    'width': 19,
                    'height': 10,
                    'left' : 670,
                    'top': 305
                }
            }
        },
        'n': {
            'name': 'NHall200',
            'image': 'R200-north.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
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
            'image': 'R200-south.jpg',
            '_props': {
                'UseDoor':{
                    'name': 'UseDoor',
                    'image': 'UseDoor.png',
                    'hoverImage': 'hoverUseDoor.png',
                    'width': 78,
                    'height': 190,
                    'left' : 470,
                    'top': 245,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'ExitSchool'
                    }
                },
                'policeman': {
                    'name': 'policeman',
                    'image': 'policeman.png',
                    'hoverImage': 'policeman-hover.png',
                    'width': 250,
                    'height': 441,
                    'left': 500,
                    'top': 170,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'policeman'
                    }
                }
            }
        }
    }
}
