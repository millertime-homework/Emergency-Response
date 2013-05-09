'room129': {
    'id': 'hall129',
    'x': 1,
    'y': 2,
    'annotation': 'AnnotationStairs.png',
    '_walls': {
        'e': {
            'name': 'EHall129',
            'image': 'R121-east.jpg',
            'destination': {
                'x': 2,
                'z': 8
            }
        },
        'w': {
            'name': 'WHall129',
            'image': 'R121-west.jpg',
            'destination': {
                'x': 0
            },
            '_props' : {
                'aorSign' : {
                    'name' : 'aorSign',
                    'image' : 'AreaRescueSign.png',
                    'width' : 125,
                    'height': 75,
                    'left': 280,
                    'top': 325
                }
            }
        },
        'n': {
            'name': 'NHall129',
            'image': 'R121-north.jpg',
            'destination': {
                'y': 3
            },
            '_props': {
                'door': {
                    'name': 'door',
                    'image': 'door.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorHover.png',
                    'width': 280,
                    'height': 500,
                    'left': 420,
                    'top': 160,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door'
                    }
                }
            }
        },
        's': {
            'name': 'SHall129',
            'image': 'R121-south.jpg',
            'destination': {
                'y': 1
            },
            '_props' : {
                'ProfXavAoR': {
                    'name': 'ProfXavAoR',
                    'image': 'XavHurt.png',
                    'width': 300,
                    'height': 150,
                    'left': 400,
                    'top': 400,
                    'action': 'showConversation',
                    'actionVariables':{
                        'conversationName': 'Injured Professor'
                    }
                }
            }
        }
    }
}
