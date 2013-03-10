'packFirstAidKit': {
    '1': {
        'check': [{'has': ['Water','Flashlight', 'Food', 'Breathing Mask', 'Whistle'], 'goto': 3}],
        'message': 'Even small injuries left untreated can become life-threatening in emergency situations.',
        'replies': {
            'Pack in Go-Kit': '2',
            'Don\'t pack': '0'
        }
    },
    '2': {
        'triggers': ['takeFirstAidKit']
    },
    '3': {
        'triggers': ['awardPackingGoKit', 'takeFirstAidKit'],
        'message': 'Your Go-Kit is almost packed!',
        'replies': {
            'Take First Aid Kit and get to school': 4
        }
    },
    '4': {
        'triggers': ['gotoSchool']
    }
}
