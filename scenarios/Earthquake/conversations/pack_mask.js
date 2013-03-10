'packMask': {
    '1': {
        'check': [{'has': ['Water', 'Flashlight', 'Food', 'Whistle', 'First Aid Kit'], 'goto': 3}],
        'message': 'Many emergency situations can involve airborne debris that can cause serious breathing issues.',
        'replies': {
            'Pack in Go-Kit': '2',
            'Don\'t pack': '0'
        }
    },
    '2': {
        'triggers': ['takeMask']
    },
    '3': {
        'triggers': ['awardPackingGoKit', 'takeMask'],
        'message': 'Your Go-Kit is almost packed!',
        'replies': {
            'Pack the N-97 Breathing Mask and get to school.': 4
        }
    },
    '4': {
        'triggers': ['gotoSchool']
    }
}
