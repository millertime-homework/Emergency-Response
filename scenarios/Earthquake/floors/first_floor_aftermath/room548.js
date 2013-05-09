'room548': {
    'id': 'hall548',
    'x': 5,
    'y': 4,
    '_triggers' : ['footInjury'],
    'annotation': 'AnnotationExit.png',
    '_walls': {
        'e': {
            'name': 'EHall548',
            'image': 'R540-east.jpg',
            '_props': {
                'east-exit': {
                    'name': 'east-exit',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 126,
                    'height': 297,
                    'left': 460,
                    'top': 196,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Exit Building'
                    }
                }
            }
        },
        'w': {
            'name': 'WHall548',
            'image': 'R540-west.jpg',
            'destination': {
                'x': 4
            },
            '_props' : {
                'wheelchair':{
                    'name':'the_wheelchair',
                    'image':'manLeft.png',
                    'width':30,
                    'height':30,
                    'left': 540,
                    'top': 300
                },
                'brokenGlass': {
                    'name': 'brokenGlass',
                    'image': 'brokenGlass.png',
                    'width': 130,
                    'height': 75,
                    'left': 490,
                    'top': 330,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Broken glass'
                    }
                },
                'bridgeDoor': {
                    'name': 'bridgeDoor',
                    'image': 'doordown.png',
                    'width': 78,
                    'height': 65,
                    'left': 505,
                    'top': 330,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Broken glass'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall548',
            'image': 'R540-north.jpg'
        },
        's': {
            'name': 'SHall548',
            'image': 'R540-south.jpg'
        }
    }
}
