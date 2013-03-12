'You Enter a Small Office': {
    '1': {
        'message': '[You enter the room and immediately noticed 2 students whispering in the corner. One of them comes up to you] \"Hey, what\'s going on out there? We\'re staying right here untill everything cools down. [You look around the room. It\'s a pretty good place to hide except that the there is no lock on the door.',
        'replies': {
            'Yeah, good idea. I think the shooter is close by, we better just stay put until help arives.' : 2,
            'Hey, I don\'t think this is a good idea. We should try to find a room with a lock on the door.' : 3,
        }
    },
    '2': {
        'message': '[The three of you wait in silence for help to arrive. The minutes tick by, seeming like hours. Then suddenly, everyone freezes. You can clearly hear the sound of someone reloading a gun right outside the office door.',
        'replies':{
            'Oh no! What should we do?' : 4,
            'Ok, everyone stay calm, let\'s just stay put.' : 5,
            'Ok, everyone very quietly look for a weapon. If the shooter comes in we\'re going to have to fight them' : 6
        }
    },
    '3': {
        'message': '[The students agree to go with you, Just as you\'re about to leave one of the students says] \"Wait! I hear something.\" [Everyone freezes, you can clearly hear the someone reloading a gun somewhere in the library]',
        'replies':{
            'Oh no! What should we do?' : 4,
            'Ok, everyone stay calm, let\'s just stay put.' : 5,
            'Ok, everyone very quietly look for a weapon. If the shooter comes in we\'re going to have to fight them' : 6
        }
    },
    '4':{
        'message': '[One of the students shouts] \"I don\'t know!\" [His face turns pale as he realizes his mistake. You can hear the shooter approaching!]',
        'replies':{
            'Every one hide!' : 7,
            'Quick find a weapon!' : 8
        }
    },
    '5':{
        'message': '[You listen at the door. The shooter seems to be right outside.]',
        'replies':{
            '[Exit Conversation]' : 0
        },
        'triggers': ['turnedOffLights031']
    },
    '6':{
        'message': '[You listen at the door. The shooter seems to be right outside.]',
        'replies':{
            '[Exit Conversation]' : 0
        },
        'triggers': ['turnedOffLights031', 'studentsGetWeapons031']
    },
    '7':{
        'message' : '[The Shooter Is Approaching!]',
        'replies':{
            '[Exit Conversation]' : 0
        },
        'triggers': ['shooterApproaches031']
    },
    '8':{
        'message' : '[The Shooter Is Approaching!]',
        'replies':{
            '[Exit Conversation]' : 0
        },
        'triggers': ['studentsGetWeapons031', 'shooterApproaches031']
    }
}
