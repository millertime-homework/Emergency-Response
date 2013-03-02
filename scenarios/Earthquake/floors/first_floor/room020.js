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
			'_props':{
                'burner':{
                    'name':'burner',
                    'image':'bburner.png',
                    'width': 130,
                    'height': 225,
                    'left': 565,
                    'top': 190,
					'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Bunsen Burner'
                    },
				},
		        'rag':{
                    'name':'rag',
                    'image':'rag.png',
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
