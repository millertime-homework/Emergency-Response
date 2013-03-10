'Mrs Lydia': {
    '1': {
        'check'  :[{'triggersEnabled':['wheelChair00'], 'goto':'3'}],
        'message': 'You see a woman struggling to get into a wheelchair.',
        'replies': {
            'Rush over and put her back into the wheelchair.': 2,
            'Ask the woman if she needs help.': 3,
            'Examine the scene.': 0
        }
    },
    '2': {
        'message': 'Ouch, I think you\' injured my back.  You have' +
            'to check with a disabled person before moving them.' +
            'be more careful next time (She wheels away from you toward the exit.) ',
        'replies' : {
            '...':0
        },
        'triggers': ['wheelChair02']
    },
    '3': {
        'message': 'I could use your help, thank you. '+
            ' Please lift me carefully and place me into my wheelchair' +
            ' And, please be sure to lock it in place',
        'replies': {
            'Carefully place her into the wheelchair.':4,
            'Examine the scene.':0
        },
        'triggers': ['wheelChair01']
    },
    '4' : {
        'check'  :[{'triggersEnabled':['chairLocked'], 'goto' :'5'}],
        'message' : '(She falls to the floor as the chair rolls backwards)' +
            'Ouch, that hurts.  I told you the chair has to be locked' +
            ' before you can help me into it.',
        'replies' : {
            'Examine the scene.' : 0
        },
        'triggers': ['wheelChair03']
    },
    '5': {
        'message': 'Thank you for your help' +
            ' (She wheels away toward the exit)',
        'replies': {
            'You\'re welcome!':0
        },
        'triggers': ['wheelChairEnd','savedJames']
    }
}
