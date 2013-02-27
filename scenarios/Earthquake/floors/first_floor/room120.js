'room120': {
    'id': 'hall120', 
    'x': 1, 
    'y': 2,
    '_walls': {
        'e': {
            'name': 'EHall120', 
            'image': 'R120-east.jpg'
        },
        'w': {
            'name': 'WHall120',
            'image': 'R120-west.jpg',
            'destination': {
                'x': 0
            },
            '_props': {
                'xavier': {
                    'name': 'xavier',
                    'image': 'prof_bell.png',
                    'width': 200,
                    'height': 354,
                    'left': 600,
                    'top': 290,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Professor Xavier'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall120',   
            'image': 'R120-north.jpg',
            'destination': {
                'y': 3
            }
        },
        's': {
            'name': 'SHall120', 
            'image': 'R120-south.jpg',
            'destination': {
                'y': 1
            }
        }
    }
}
