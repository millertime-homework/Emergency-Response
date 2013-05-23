'room031': {
    'id': 'office031',
    'x': 0,
    'y': 3,
    '_triggers': ['librarySouthOfficeEventsStart'],
    '_walls': {
        'e': {
            'name': 'EOffice031',
            'image': 'R031-east.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 191,
                    'height': 487,
                    'top': 192,
                    'left': 461,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door',
                        'isAnAction': true
                    }
                },
                'doorHandle031': {
                    'name': 'doorHandle031',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 28,
                    'height': 81,
                    'top': 385,
                    'left': 479,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'lockDoor',
                        'isAnAction': true
                    }
                },
                'lightSwitch031': {
                    'name': 'lightSwitch031',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 57,
                    'height': 36,
                    'top': 405,
                    'left': 356,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'turnOffLights031',
                        'isAnAction': true
                    }
                }
            }
        },
        'n': {
            'name': 'NOffice031',
            'image': 'R031-north.jpg'
        },
        's': {
            'name': 'SOffice031',
            'image': 'R031-south.jpg',
            '_props': {
            }
        },
        'w': {
            'name': 'WOffice031',
            'image': 'R031-west.jpg',
            '_props': {
                'screwdriver031': {
                    'name': 'screwdriver031',
                    'image': 'screwdriver.png',
                    'hoverImage': 'screwdriverHover.png',
                    'width': 55,
                    'height': 33,
                    'top': 475,
                    'left': 350,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Pick up screw driver?'
                    }
                },
                'student1SWLib': {
                    'name': 'student1SWLib',
                    'image': 'student1SWLib.png',
                    'hoverImage': 'student1SWLib.png',
                    'width': 200,
                    'height': 600,
                    'top': 200,
                    'left': 400,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'She'
                    }
                },
                'student2SWLib': {
                    'name': 'student2SWLib',
                    'image': 'student2SWLib.png',
                    'hoverImage': 'student2SWLib.png',
                    'width': 200,
                    'height': 600,
                    'top': 200,
                    'left': 700,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Carol'
                    }
                }
            }
        }
    }
}