'packFlashlight': {
    '1': {
        'check': [{'has': ['Water', 'Food', 'Breathing Mask', 'Whistle', 'First Aid Kit'], 'goto': 3}],
        'message': 'Flashlights are indispensable tools in emergency situations.',
        'replies': {
            'Pack in Go-Kit': '2',
            'Don\'t pack' : '0'
        }
    },
    '2': {
        'triggers': ['takeFlashlight']
    },
    '3': {
        'triggers': ['awardPackingGoKit', 'takeFlashlight'],
        'message': 'Your Go-Kit is almost packed!',
        'replies': {
            'Pack the Flashlight and get to school.': 0
        }
    }
}
