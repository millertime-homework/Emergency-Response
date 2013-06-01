'Rachel': {
    '1': {
        'message': 'I can\'t talk right now. I\'m trying to organize my notes.',
        'replies': {
            'Okay': 0
        }
    }
},
'Scared Student': {
    '1': {
        'message': 'I\'m scared. He\'s going to find us!',
        'replies': {
            'It\'ll be okay. We just need to hide and stay quiet.': 0
        }
    }
},
'Really Scared Student': {
    '1': {
        'message': 'He walked down the hall. I think I can get to the stairs. ' +
                   'I can\'t just sit here and wait for him to come back!',
        'replies': {
            'The professor said to stay here!': 2
        }
    },
    '2': {
        'message': 'You can stay here and hide and lock the door behind me, ' +
                   'or you can follow me downstairs and get out of here.',
        'replies': {
            'I... I don\'t know': 3
        }
    },
    '3': {
        'triggers': ['studentRunsOff']
    }
},
'Wounded Student': {
    '1': {
        'message': 'He\'s nearby. I\'m hurt, can you send help if you make it out?',
        'replies': {
            'Yes, I will tell the police where you are!': 0
        }
    }
}
