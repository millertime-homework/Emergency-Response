'James': {
    '1': {
        'check'  :[{'triggersEnabled':['wheelChair00'], 'goto':'3'}],
        'message': 'You see a man attempting to get into a wheelchair.',
        'replies': {
            'Rush over and assist him back into the wheelchair.': 2,
            'Ask the man if he needs help.': 3
        }
    },
    '2': {
        'message': 'Ouch, I think you\' injured my back.  You have' +
            'to check with a person before moving them.' +
            'be more careful next time (He heads away from you toward the exit.) ',
        'replies' : {
            '...':0
        },
        'triggers': ['wheelChair02']
    },
    '3': {
        'message': 'I could use your help, thank you. '+
            ' Please lock my chair and then help me into it.',
        'replies': {
            'Carefully help him into the wheelchair.':4,
            'Lock the wheelchair.': 6
        },
        'triggers': ['wheelChair01']
    },
    '4' : {
        'check'  :[{'triggersEnabled':['chairLocked'], 'goto' :'5'}],
        'message' : '(He falls to the floor as the chair rolls backwards)' +
            'Ouch, that hurts.  I told you the chair has to be locked' +
            ' before you can help me into it.',
        'replies' : {
            'Lock the wheelchair.': 6
        },
        'triggers': ['wheelChair03']
    },
    '5': {
        'message': 'Thank you for your help' +
            ' (He heads off toward the exit)',
        'replies': {
            'You\'re welcome!':0
        },
        'triggers': ['wheelChairEnd','savedJames']
    },
	'6' : {
		'message' : 'The wheelchair is now locked.',
		'replies' : {
			'Carefully help him into the wheelchair.':4
		},
		'triggers': ['lockChair']
	}
}
