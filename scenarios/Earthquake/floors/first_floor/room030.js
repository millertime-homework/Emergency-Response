'room030': {
    'id': 'classroom030',
    'x': 0,
    'y': 3,
    '_walls': {
        'e': {
            'name': 'EClassroom030',
            'image': 'R030-east.jpg',
            'destination': {
                'x': 1
            }
        },
        'w': {
            'name': 'WClassroom030',
            'image': 'R030-west.jpg',
            '_props': {
                'stove': {
                    'name': 'stove',
                    'image': 'stove.jpg',
                    'width': 150,
                    'height': 150,
                    'left': 250,
                    'top': 350,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'stoveConvo'
                    }
                },
                'bugSpray':{
                    'name':'bugSpray',
                    'image':'spray.jpg',
                    'width':150,
                    'height':150,
                    'left': 350,
                    'top': 200,
                    'action':'showConversation',
                    'actionVariables': {
                        'conversationName' : 'sprayConvo'
                    }
                },
                'rag':{
                    'name':'rag',
                    'image':'rag.jpg',
                    'width':150,
                    'height':150,
                    'left': 200,
                    'top': 200,
                    'action':'showConversation',
                    'actionVariables': {
                        'conversationName' : 'ragConvo'
                    }
                }
            }
        },
        'n': {
            'name': 'NClassroom030',
            'image': 'R030-north.jpg',
            '_props': {
                'computer': {
                    'name': 'computer',
                    'image': 'computer.png',
                    'width': 250,
                    'height': 255,
                    'left': 400,
                    'top': 200,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Computer'
                    }
                }
            }
        },
        's': {
            'name': 'SClassroom030',
            'image': 'R030-south.jpg'
        }
    }
}