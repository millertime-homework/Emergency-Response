'room100': {
    'id': 'hall100',
    'x': 1,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EHall100',
            'image': 'R100-east.jpg',
            'destination': {
                'x': 2
            }
        },
        'w': {
            'name': 'WHall100',
            'image': 'R100-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'shooter': {
                    'name': 'shooter',
                    'image': 'shooter.png',
                    'hoverImage': 'shooter-hover.png',
                    'width': 128,
                    'height': 256,
                    'left': 450,
                    'top': 255,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Shooter'
                    }
                },
                'shooter-downed': {
                    'name': 'shooter-downed',
                    'image': 'shooter-downed.png',
                    'width': 256,
                    'height': 128,
                    'left': 420,
                    'top': 325
                }
            }
        },
        'n': {
            'name': 'NHall100',
            'image': 'R100-north.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'Info-TV': {
                    'name': 'Info-TV',
                    'image': 'info-tv-skew-left.png',
                    'width': 150,
                    'height': 104,
                    'left': 650,
                    'top': 190
                },
                'Room110Sign': {
                    'name': 'Room110Sign',
                    'image': 'sign-room110-skew.png',
                    'width': 47,
                    'height': 39,
                    'left': 340,
                    'top': 320
                }
            }
        },
        's': {
            'name': 'SHall100',
            'image': 'R100-south.jpg',
            '_props': {
                'RHF_Poster': {
                    'name': 'RHF_Poster',
                    'image': 'RHF_Poster.png',
                    'width': 250,
                    'height': 312,
                    'left': 550,
                    'top': 180
                }
            }
        }
    }
}
