'packWater': {
    '1': {
        'check': [{'has': ['Flashlight', 'Food', 'Breathing Mask', 'Whistle', 'First Aid Kit'], 'goto': 3}],
        'message': 'Water is essential to life.',
        'replies': {
            'Pack in Go-Kit': '2',
            'Don\'t pack': '0'
        }
    },
    '2': {
        'triggers': ['takeWater']
    },
    '3': {
        'triggers': ['awardPackingGoKit', 'takeWater'],
        'message': 'Your Go-Kit is almost packed!',
        'replies': {
            'Pack the Water and get to school.': 4
        }
    },
    '4': {
        'triggers': ['gotoSchool']
    }
}
