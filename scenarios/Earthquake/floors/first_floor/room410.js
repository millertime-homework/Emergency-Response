'room410': {
    'id': 'hall410', 
    'x': 4, 
    'y': 1,
    '_walls': {
        'e': {
            'name': 'EHall410', 
            'image': 'R410-east.jpg',
			'_props':{
                'screwdriver':{
                    'name':'screwdriver',
                    'image':'screwdriver.png',
                    'width': 50,
                    'height': 50,
                    'left': 255,
                    'top': 470,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'screwdriverconvo'
                    }
                },
            }
        },
        'w': {
            'name': 'WHall410',
            'image': 'R410-west.jpg'
        },
        'n': {
            'name': 'NHall410',   
            'image': 'R410-north.jpg',
            'destination': {
                'y': 2
            }
        },
        's': {
            'name': 'SHall410', 
            'image': 'R410-south.jpg',
            'destination': {
                'y': 0
            }
        }
    }
}
