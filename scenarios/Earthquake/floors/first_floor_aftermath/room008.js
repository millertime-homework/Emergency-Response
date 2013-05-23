'room008': {
    'id': 'classroom008',
    'x': 0,
    'y': 0,
    '_walls': {
        'e': {
            'name': 'EClassroom008',
            'image': 'R000-east.jpg',
            'destination': {
                'x': 1
            },
            '_props': {
                'smBookcase' : {
                    'name' : 'smBookcase',
                    'image' : 'smBookcaseside.png',
                    'width': 200,
                    'height': 150,
                    'left': 75,
                    'top': 365
                },
                'heavy': {
                    'name': 'heavy',
                    'image': 'heavy-smashed2.png',
                    'width': 125,
                    'height': 35,
                    'left': 300,
                    'top': 475
                },
                'heavy-on-floor': {
                    'name': 'heavy',
                    'image': 'largeTVside.png',
                    'width': 100,
                    'height': 150,
                    'left': 200,
                    'top': 400
                },
                'door': {
                    'name': 'door',
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideLeftHover.png',
                    'width': 104,
                    'height': 236,
                    'top': 232,
                    'left': 966,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'w': {
            'name': 'WClassroom008',
            'image': 'R000-west.jpg'
        },
        'n': {
            'name': 'NClassroom008',
            'image': 'R000-north.jpg',
            '_props': {
                'smBookcase' : {
                    'name' : 'smBookcase',
                    'image' : 'smBookcase.png',
                    'width': 200,
                    'height': 150,
                    'left': 705,
                    'top': 330
                },
                'heavy': {
                    'name': 'heavy',
                    'image': 'heavy-smashed2.png',
                    'width': 200,
                    'height': 35,
                    'left': 760,
                    'top': 480
                },
                'heavy-on-floor': {
                    'name': 'heavy',
                    'image': 'largeTV.png',
                    'width': 200,
                    'height': 175,
                    'left': 760,
                    'top': 360
                }
            }
        },
        's': {
            'name': 'SClassroom008',
            'image': 'R000-south.jpg',
            '_props': {
                'evac_plan': {
                    'name': 'evac_plan',
                    'image': 'rectangle.png',
                    'hoverImage': 'rectangleGlow.png',
                    'width': 56,
                    'height': 50,
                    'left': 367,
                    'top': 285,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'evac_first_floor_detail'
                    }
                }
            }
        }
    }
}
