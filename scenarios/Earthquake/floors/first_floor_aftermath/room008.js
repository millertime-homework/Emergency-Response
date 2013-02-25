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
                'mrs-wheelchair': {
                    'name': 'mrs_wheelchair',
                    'image': 'mrs_wheelchair.png',
                    'width': 150,
                    'height': 150,
                    'left': 250,
                    'top': 350,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Mrs Wheelchair'
                    }
                },
                'wheelchair':{
                    'name':'the_wheelchair',
                    'image':'wheelchair.png',
                    'width':150,
                    'height':150,
                    'left': 350,
                    'top': 200,
                    'action':'showConversation',
                    'actionVariables': {
                        'conversationName' : 'wheelchair'
                    }
                }
            }
        },
        's': {
            'name': 'SClassroom008',
            'image': 'R000-south.jpg'
        }
    }
}
