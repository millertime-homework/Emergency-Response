'Smoke' : {
    '1' : {
        'check'   : [{'has':['Breathing Mask'], 'goto' : '2'},
                     {'triggersEnabled' : ['clothIsWet'], 'goto' : '3'}],
        'message' : 'The hallway ahead is filled with smoke.' +
            'You will need something to protect you from the smoke to pass.',
        'replies' : {
            'Cough... Cough' : '0'
        }
    },
    '2' : {
        'message' : 'The hallway ahead is filled with smoke.',
        'replies' : {
            'Good thing my go kit has a breathing mask.  I can crawl while wearing it and be safe.' : '4'
        }
    },
    '3' : {
        'message' : 'The hallway ahead is filled with smoke.',
        'replies' : {
            'I can use my wet shirt to protect me as I crawl under the smoke.' : '4'
        }
    },
    '4' : {
        'triggers' : ['clearSmoke']
    }
},
'WallWater' : {
    '1': {
        'message' : 'A pipe must have burst in the ceiling. The water is leaking down the wall.',
        'replies' : {
            'Eww, I don\'t know where that water has been.' : '0',
            'I could use the water to soak my shirt. The I could cover my face with it to protect me from the smoke.' : '2'
        }
    },
    '2' : {
        'triggers' : ['wetTheCloth']
    }
}
