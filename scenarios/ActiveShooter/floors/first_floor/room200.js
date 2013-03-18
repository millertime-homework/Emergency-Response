'room200': {
    'id': 'hall200',
    'x': 2,
    'y': 0,
    'annotation': 'AnnotationExit.png',
    '_triggers' : ['getShotAt', 'goPickUpBook',
                   'hideFirstFloorRoomAnnotations', 'hideSecondFloorRoomAnnotations'],
    '_walls': {
        'e': {
            'name': 'EHall200',
            'image': 'R200-east.jpg',
            'destination': {
                'x': 3
            }
        },
        'w': {
            'name': 'WHall200',
            'image': 'R200-west.jpg',
            'destination': {
                'x': 1
            }
        },
        'n': {
            'name': 'NHall200',
            'image': 'R200-north.jpg',
            'destination': {
                'y': 1
            },
            '_props': {
                'Fire-Extinguisher': {
                    'name': 'Fire-Extinguisher',
                    'image': 'fire-extinguisher.png',
                    'width': 20,
                    'height': 20,
                    'left': 450,
                    'top': 300
                }
            }
        },
        's': {
            'name': 'SHall200',
            'image': 'R200-south.jpg',
            '_props': {
                'UseDoor':{
                    'name': 'UseDoor',
                    'image': 'door.png',
                    'hoverImage': 'doorHover.png',
                    'width': 78,
                    'height': 190,
                    'left' : 470,
                    'top': 245,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'exit_school'
                    }
                }
            }
        }
    }
}
