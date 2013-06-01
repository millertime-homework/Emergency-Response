'room411': {
    'id': 'room411',
    'x': 4,
    'y': 1,
    '_triggers': ['groupAttack411'],
    '_walls': {
        'attackShooter': {
            'name': 'attackShooter',
            'image': 'R411-west.jpg',
            'fakeDirection': 'w',
            'isCutscene': true,
            '_props': {
                'peopleWeaponsReady': {
                    'name': 'peopleWeaponsReady',
                    'image': 'peopleWeaponsReady.png',
                    'width': 219,
                    'height': 310,
                    'top': 273,
                    'left': 556
                },
                'shooterReact': {
                    'name': 'shooterReact',
                    'image': 'shooterRight.png',
                    'width': 260,
                    'height': 325,
                    'top': 287,
                    'left': 260
                }
            }
        },
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
                    'top': 256,
                    'left': 693
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
        'shooterDowned': {
            'name': 'shooterDowned',
            'image': 'R411-west.jpg',
            'fakeDirection': 'w',
            'isCutscene': true,
            '_props': {
                'peopleAttack': {
                    'name': 'peopleAttack',
                    'image': 'peopleAttack.png',
                    'width': 251,
                    'height': 352,
                    'top': 237,
                    'left': 441
                },
                'shooterDowned': {
                    'name': 'shooterDowned',
                    'image': 'shooterDowned.png',
                    'width': 283,
                    'height': 162,
                    'top': 387,
                    'left': 196
                }
            }
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
                    'top': 281,
                    'left': 511
                },
                'group-of-people-reacting': {
                    'name': 'group-of-people-reacting',
                    'image': 'peopleReacting.png',
                    'width': 235,
                    'height': 310,
                    'top': 253,
                    'left': 676
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