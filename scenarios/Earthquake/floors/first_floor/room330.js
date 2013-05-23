'room330': {
    'id': 'hall330', 
    'x': 3, 
    'y': 3,
    '_walls': {
        'e': {
            'name': 'EHall330', 
            'image': 'R330-east.jpg'
        },
        'w': {
            'name': 'WHall330',
            'image': 'R330-west.jpg',
            'destination': {
                'x': 2
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 229,
                    'height': 544,
                    'top': 137,
                    'left': 319,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall330',   
            'image': 'R330-north.jpg',
            'destination': {
                'y': 4
            }
        },
        's': {
            'name': 'SHall330', 
            'image': 'R330-south.jpg',
            'destination': {
                'y': 2
            }
        }
    }
}
