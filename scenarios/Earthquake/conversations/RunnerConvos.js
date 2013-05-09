'Luke' : {
    '1': {
        'message' : 'He is running for the main entrance, but he is close enough to hear you.',
        'replies' : {
            'Let him find him own way out of this mess.' : 3,
            'Tell him: Hey that exit is blocked off. We\'ve got to use an exit in back.' : 2
        },
        'triggers' : ['TalktoRunner']
    },
    '2' : {
        'message' : 'Thank you so much.  I just want to get out of here.  I\'ll be ok from here.[Add he runs toward the rear exits.]',
        'replies' : {
            'Great, I\'m glad to have helped.' : 3
        }
    },
    '3' : {
        'triggers' : ['removeRunner']
    }

}
