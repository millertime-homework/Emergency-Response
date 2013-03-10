'packWhistle': {
    '1': {
        'check': [{'has': ['Water', 'Flashlight', 'Food', 'Breathing Mask', 'First Aid Kit'], 'goto': 3}],
        'message': 'Sometimes it\'s easier to be heard than seen.',
        'replies': {
            'Pack in Go-Kit': '2',
            'Don\'t pack': '0'
        }
    },
    '2': {
        'triggers': ['takeWhistle']
    },
    '3': {
        'triggers': ['awardPackingGoKit', 'takeWhistle'],
        'message': 'Your Go-Kit is almost packed!',
        'replies': {
            'Pack the Whistle and get to school.': 4
        }
    },
    '4': {
        'triggers': ['gotoSchool']
    }
}
