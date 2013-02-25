'ExitSchool':{
    '1':{
        'triggers': ['FrontDoorsReached'],
        'message' : 'The Door has been locked!',
        'replies':{
            'Break Down The Door!' : 2,
            'Go Hide' : 7
        }
    },
    '2':{
        'message' : 'You start to throw yourself against the door. It appears to be locked with a chain from the outside. The door doesn\'t seem to be budging!',
        'replies':{
            'Continue to try and break down the door': 3,
            'Leave the door and go hide': 4
        }
    },
    '3':{
        'message' : 'The door seems to be giving way, but you can hear gun shots just around the corner to the north. The active shooter is very close!',
        'replies' : {
            'Too late now, I\'m committed. Continue to break down the front door': 5,
            'Abandon the door and go hide' : 7
        }                
    },
    '4':{
        'message': 'Ok, you\'ve only lost a little bit of time. You can hear the shooter approaching down the hallway to the north. Quick! Find a hiding place.',
        'replies' : {
            '[Exit Conversation]' : 7
        }
    },
    '5':{
        'triggers': ['shotAtFrontDoor']
    },
    '6':{
        'message': 'You don\'t have much time. The shooter is really close. Hide quickly!',
        'replies' : {
            '[Exit Conversation]': 7
        }
    },
    '7': {
        'triggers': ['goHide']
    }
}
