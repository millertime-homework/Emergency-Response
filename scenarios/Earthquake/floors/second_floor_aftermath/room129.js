'room129': {
    'id': 'hall129',
    'x': 1,
    'y': 2,
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
                    'image': 'doorOutsideRight.png',
                    'openImage': 'doorOpen.png',
                    'hoverImage': 'doorOutsideRightHover.png',
                    'width': 225,
                    'height': 604,
                    'top': 169,
                    'left': 445,
                    'barrier': true,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'door',
                        'isAnAction': true
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
