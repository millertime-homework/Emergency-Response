'Apartment': {
    'id': 'apartment',
    'x': 0,
    'y': 0,
    '_triggers' : ['packForSchool'],
    '_walls': {
        'n': {
            'name': 'apartment-n',
            'image': 'apartment-n.jpg',
            'destination': {
                'y': 1
            }
        },
        's': {
            'name': 'apartment-s',
            'image': 'apartment-s.jpg',
            '_props': {
                'door': {
                    'name': 'Exit to School',
                    'image': 'blank.png',
                    'top': 160,
                    'left': 470,
                    'width': 180,
                    'height': 390,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'travelToSchool'
                    },
                    'destination': {
                        'x': 2,
                        'y': 0,
                        'z': 0,
                        '_facing': 'n'
                    }
                }
            },
            'destination': {
                'x': 2,
                'y': 0,
                'z': 0,
                '_facing': 'n'
            }
        },
        'e': {
            'name': 'apartment-e',
            'image': 'apartment-e.jpg',
        },
        'w': {
            'name': 'apartment-w',
            'image': 'apartment-w.jpg',
        }
    }
}
