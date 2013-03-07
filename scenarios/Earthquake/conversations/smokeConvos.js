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
                    'I can use this wet cloth to protect me as I crawl under the smoke.' : '4'
                }
            },
            '4' : {
                'triggers' : ['clearSmoke']
            }
        },
        'Puddle' : { 
            '1': {
                'check'   : [{'has':['A cloth'], 'goto' : '2'}],
                'message' : 'A pipe has burst through the floor.  It\'s leaking has created a puddle.',
                'replies' : {
                      'Eww, I don\'t know where that water has been.' : '0'
                }
            },
            '2': {
                'message' : 'A pipe has burst through the floor.  It\'s leaking has created a puddle.',
                'replies' : {
                      'Eww, I don\'t know where that water has been.' : '0',
                      'I could use the water to soak this cloth to protect from the smoke.' : '3'
                } 
            },
            '3' : {
                'triggers' : ['wetTheCloth']
            }
        },
        'A cloth' : {
            '1': {
                'check' : [{'has':['Water'], 'goto': '3'}],
                'message' : 'A cloth lies on the ground nearby.  Perhaps it will be of use later',
                'replies' : {
                    'Nope a random piece of cloth is always useless.' : '0',
                    'I\'ll take it, it may come in handy.' : '2'
                }
            },
            '2' : {
                'triggers' : ['takeCloth']
            },
            '3' : {
                'message' : 'A cloth lies on the ground nearby.',
                'replies' : {
                    'Nope a random piece of cloth is always useless.' : '0',
                    'I could put water on it to protect me from the smoke' : '4'
                }
            },
            '4' : {
                'triggers' : ['wetTheCloth']
            }
        }
