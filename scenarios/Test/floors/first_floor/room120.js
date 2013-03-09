'room120': {
    'id': 'hall120',
    'x': 1,
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall120',
            'image': 'R120-east.jpg'
        },
        'w': {
            'name': 'WHall120',
            'image': 'R120-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'UseDoor.png',
                    'openImage': 'up.png',
                    'width': 200,
                    'height': 354,
                    'left': 300,
                    'top': 200,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall120',
            'image': 'R120-north.jpg',
            'destination': {
                'y': 3
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
                        'conversationName': 'enterLoveDungeon'
                    }
                }
            }
        },
        'custom': {
            'name': 'custom',
            'image': 'apartment-e.jpg',
            'fakeDirection' : 'e',
            'destination': {
                'f': 'w'
            },
            'isCutscene' : true,
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
                        'conversationName': 'exitLoveDungeon'
                    }
                }
            }
        },
        's': {
            'name': 'SHall120',
            'image': 'R120-south.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'Info-TV': {
                    'name': 'Info-TV',
                    'image': 'info-tv-skew-right.png',
                    'width': 150,
                    'height': 104,
                    'left': 320,
                    'top': 190,
                },
                'fire2': {
                    'name': 'fire2',
                    'image': 'fire.png',
                    'width': 800,
                    'height': 400,
                    'left': 100,
                    'top': 100,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Fire 2'
                    },
                    'barrier': true,
                    'barrierMessage': 'There is a fire in the way'
                }
            }
        }
    }
}
