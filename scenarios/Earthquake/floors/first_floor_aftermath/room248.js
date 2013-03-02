'room248': {
    'id': 'hall248', 
    'x': 2, 
    'y': 4,
    '_walls': {
        'e': {
            'name': 'EHall248', 
            'image': 'R240-east.jpg',
            'destination': {
                'x': 3
            }
        },
        'w': {
            'name': 'WHall248',
            'image': 'R240-west.jpg',
            'destination': {
                'x': 1
            },
			'_props': {
                'mrs-wheelchair': {
                    'name': 'mrs_wheelchair',
                    'image': 'mrs_wheelchair.png',
                    'width': 150,
                    'height': 150,
                    'left': 300,
                    'top': 400,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Mrs Lydia'
                    }
                },
                'wheelchair':{
                    'name':'the_wheelchair',
                    'image':'wheelchair.png',
                    'width':150,
                    'height':150,
                    'left': 500,
                    'top': 300,
                    'action':'showConversation',
                    'actionVariables': {
                        'conversationName' : 'wheelchair'
                    }
                }
            }
        },
        'n': {
            'name': 'NHall248',   
            'image': 'R240-north.jpg'
        },
        's': {
            'name': 'SHall248', 
            'image': 'R240-south.jpg'
        }
    }
}
