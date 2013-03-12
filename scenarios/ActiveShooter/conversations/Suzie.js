'Suzie': {
    '1': {
        'message': 'Hey, what\'s going on out there? We\'re staying right here untill everything cools down.',
        'replies': {
            'Yeah, good idea. I think the shooter is close by, we better just stay put until help arives.' : 2,
            'Hey, I don\'t think this is a good idea. We should try to find a room with a lock on the door.' : 3,
        }
    },
    '2': {
        'message': 'Wait... I hear something. The shooter is right outside the door. I can hear him reloading.',
        'replies':{
            'Ok, everyone stay calm, let\'s just stay put.' : 5,
            'Ok, everyone very quietly look for a weapon. If the shooter comes in we\'re going to have to fight them' : 6
        }
    },
    '3': {
        'message': 'Wait! I hear something. [Everyone freezes, you can clearly hear someone reloading a gun right outside the door]',
        'replies':{
            'Ok, everyone stay calm, let\'s just stay put.' : 5,
            'Ok, everyone very quietly look for a weapon. If the shooter comes in we\'re going to have to fight them' : 6
        }
    },
    '5':{
        'message': 'I can hear the shooter. Hes walking towards the room!',
        'replies':{
            '[Exit Conversation]' : 0
        },
        'triggers': ['shooterApproaches031']
    },
    '6':{
        'message': '[You listen at the door. The shooter seems to be right outside.]',
        'replies':{
            '[Exit Conversation]' : 0
        },
        'triggers': ['shooterApproaches031', 'studentsGetWeapons031']
    }
}