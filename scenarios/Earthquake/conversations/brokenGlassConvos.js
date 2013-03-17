        'Broken glass' : {
            '1':    {             
                'check'   : [{'triggersEnabled':['doorMoved'], 'goto': '2' }],
                'message' : 'Large shards of broken glass cover the hallway ahead.\n' +
                             'I can\'t walk over that in my sandals.',
                'replies' : {
                            'I\'ll need to figure out a way to cross' : '0'
                        }
                },
            '2' : {
                'message' : 'With the door covering the broken' + 
                ' glass you can now traverse the hallway safely.',
                'replies' : {
                    'Onward to the Area of Rescue.' : '0'
                }
            }
        },
        'Unhinged door' : {
            '1':{
                'message' : 'This door has come off of it\'s hinges in the earthquake',
                'replies' : {
                    'Move it to cover the glass.' : '2'
                }
            },
            '2':{
                'triggers':['moveDoor']
            }

        }