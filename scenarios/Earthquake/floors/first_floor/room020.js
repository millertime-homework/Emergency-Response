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
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 106,
                    'height': 246,
                    'top': 228,
                    'left': 453,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
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
            '_props':{
                'burner':{
                    'name':'burner',
                    'image':'bburner.png',
                    'hoverImage':'bburnerHover.png',
                    'width': 130,
                    'height': 225,
                    'left': 565,
                    'top': 190,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Bunsen Burner'
                    }
                },
                'rag':{
                    'name':'rag',
                    'image':'rag.png',
                    'hoverImage':'ragHover.png',
                    'width':160,
                    'height':50,
                    'left': 650,
                    'top': 385,
                    'action':'showConversation',
                    'actionVariables': {
                        'conversationName' : 'Rag'
                    }
                },
                'bugSpray':{
                    'name':'bugSpray',
                    'image':'spray.png',
                    'hoverImage':'sprayHover.png',
                    'width':42,
                    'height':140,
                    'left': 525,
                    'top': 275,
                    'action':'showConversation',
                    'actionVariables': {
                        'conversationName' : 'Spray'
                    }
                }
            }
        },
        's': {
            'name': 'SClassroom020',
            'image': 'R020-south.jpg'
        }
    }
}
