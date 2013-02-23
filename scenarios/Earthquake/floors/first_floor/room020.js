'room020': {
    'id': 'classroom020',
    'x': 0,
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EClassroom020',
            'image': 'R020-east.jpg',
            'destination': {
                'x': 1
            },
            '_props':{
                'screwdriver':{
                    'name':'screwdriver',
                    'image':'screwdriver.jpg',
                    'width': 50,
                    'height': 50,
                    'left': 250,
                    'top': 350,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'screwdriverconvo'
                    }
                },
                'pictureframeid':{
                    'name': 'pictureframeprop',
                    'image': 'pictureFrame.jpg',
                    'width': 67,
                    'height': 101,
                    'left': 100,
                    'top': 100,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'A picture frame'
                    }
                }
            }
        },
        'w': {
            'name': 'WClassroom020',
            'image': 'R020-west.jpg'
        },
        'n': {
            'name': 'NClassroom020',
            'image': 'R020-north.jpg',
        },
        's': {
            'name': 'SClassroom020',
            'image': 'R020-south.jpg'
        }
    }
}
