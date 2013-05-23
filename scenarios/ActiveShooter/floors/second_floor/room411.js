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
        'entryScene': {
            'name': 'WRoom411',
            'image': 'R411-west.jpg',
            'fakeDirection': 'w',
            'isCutscene': true,
            '_props': {
                'group-of-people': {
                    'name': 'group-of-people',
                    'image': 'GroupOfPeople.png',
                    'width': 199,
                    'height': 249,
                    'top': 230,
                    'left': 600
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
        'shooterEntersScene': {
            'name': 'WRoom411',
            'image': 'R411-west.jpg',
            'fakeDirection': 'w',
            'isCutscene': true,
            '_props': {
                'da-shootah': {
                    'name': 'da-shootah',
                    'image': 'shooter.png',
                    'width': 74,
                    'height': 226,
                    'top': 269,
                    'left': 488
                },
                'group-of-people-reacting': {
                    'name': 'group-of-people-reacting',
                    'image': 'GroupOfPeopleReacting.png',
                    'width': 172,
                    'height': 265,
                    'top': 289,
                    'left': 592
                }
            }
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
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideLeftHover.png',
                    'width': 79,
                    'height': 188,
                    'top': 259,
                    'left': 519,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door',
                        'isAnAction': true
                    }
                }
            }
        }
    }
}