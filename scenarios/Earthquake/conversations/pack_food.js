'packFood': {
    '1': {
        'check': [{'has': ['Water', 'Flashlight', 'Breathing Mask', 'Whistle', 'First Aid Kit'], 'goto': 3}],
        'message': 'Food is important.',
        'replies': {
            'Pack in Go-Kit': '2',
            'Don\'t pack': '0'
        }
    },
    '2': {
        'triggers': ['takeFood']
    },
    '3': {
        'triggers': ['awardPackingGoKit', 'takeFood'],
        'message': 'Your Go-Kit is almost packed!',
        'replies': {
            'Pack the Food and get to school.': 4
        }
    },
    '4': {
        'triggers': ['gotoSchool']
    }
}
