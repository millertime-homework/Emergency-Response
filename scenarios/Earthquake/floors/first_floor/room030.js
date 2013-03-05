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
			'_props': {
				'desk' : {
					'name' : 'desk',
					'image' : 'sturdy-desk.png',
					'width': 340,
                    'height': 185,
                    'left': 550,
                    'top': 400
				},
                'computer': {
                    'name': 'computer',
                    'image': 'computer.png',
                    'width': 125,
                    'height': 140,
                    'left': 660,
                    'top': 295,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Computer'
                    }
                }
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
        },
        's': {
            'name': 'SClassroom030',
            'image': 'R030-south.jpg'
        }
    }
}
