'room411': {
    'id': 'room411',
    'x': 4,
    'y': 1,
    '_triggers': ['groupAttack411'],
    '_walls': {
        'e': {
            'name': 'ERoom411',
            'image': 'R411-east.jpg'
        },
        'w': {
            'name': 'WRoom411',
            'image': 'R411-west.jpg',
            'destination': {
                'x': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'UseDoor.png',
                    'openImage': 'blank.png',
                    'width': 140,
                    'height': 240,
                    'left': 500,
                    'top': 250,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'n': {
            'name': 'NRoom411',
            'image': 'R411-north.jpg'
        },
        's': {
            'name': 'SRoom411',
            'image': 'R411-south.jpg'
        },
        'entryScene': {
            'name': 'WRoom411',
            'image': 'R411-west.jpg',
            'fakeDirection' : 'w',
            'isCutscene': true,
            '_props': {
                'group-of-people': {
                    'name': 'group-of-people',
                    'image': 'GroupOfPeople.png',
                    'width': 199,
                    'height': 249,
                    'left': 600,
                    'top': 230
                }
            }
        },
        'shooterEntersScene': {
            'name': 'WRoom411',
            'image': 'R411-west.jpg',
            'fakeDirection' : 'w',
            'isCutscene': true,
            '_props': {
                'group-of-people-reacting': {
                    'name': 'group-of-people-reacting',
                    'image': 'GroupOfPeopleReacting.png',
                    'width': 172,
                    'height': 265,
                    'left': 600,
                    'top': 230
                },
                'da-shootah': {
                    'name': 'da-shootah',
                    'image': 'shooter.png',
                    'width': 90,
                    'height': 256,
                    'left': 460,
                    'top': 250
                }
            }
        }
    }
}
