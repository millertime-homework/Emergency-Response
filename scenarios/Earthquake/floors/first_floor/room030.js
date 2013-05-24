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
            },
            '_triggers' : ['hiComputer', 'walkedAwayFromConversation'],
            '_props': {
                'desk' : {
                    'name' : 'desk',
                    'image' : 'sturdy-desk.png',
                    'width': 340,
                    'height': 185,
                    'left': 250,
                    'top': 400
                },
                'computer': {
                    'name': 'computer',
                    'image': 'computer.png',
                    'hoverImage': 'computerHover.png',
                    'width': 125,
                    'height': 140,
                    'left': 360,
                    'top': 295,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Computer',
                        'isAnAction': true
                    }
                },
                'door': {
                    'name': 'door',
                    'image': 'doorInsideLeft.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorInsideLeftHover.png',
                    'width': 106,
                    'height': 247,
                    'top': 228,
                    'left': 659,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'w': {
            'name': 'WClassroom030',
            'image': 'R030-west.jpg'
        },
        'n': {
            'name': 'NClassroom030',
            'image': 'R030-north.jpg'
        },
        's': {
            'name': 'SClassroom030',
            'image': 'R030-south.jpg'
        }
    }
}
