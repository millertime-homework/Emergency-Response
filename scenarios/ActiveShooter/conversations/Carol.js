'Carol': {
    '1': {
        'check': [{'objectivesInProgress': ['studentsGatherWeapons031'], 'goto': 2},
                  {'objectivesCompleted': ['studentsGatherWeapons031'], 'goto': 3}],
        'message': 'Hi there. Are you lost?',
        'replies': {
            'Yes': 4,
            'No, but thank you.': 0
        }
    },
    '2': {
        'message': 'We better get ready in case the shooter comes in the room. We should find weapons.',
        'replies': {
            '[Exit Conversation]': 0
        }
    },
    '3': {
        'message': 'Okay let\'s attack together! Be violent and aggressive!',
        'replies': {
            '[Exit Conversation]': 0
        }
    },
    '4': {
        'check': [{'objectivesInProgress': ['pickUpBook'], 'goto': 5}],
        'message': 'Try to find a map of the school on one of the walls nearby. It will show the room numbers.',
        'replies': {
            'Okay, thank you.': 0
        }
    },
    '5': {
        'message': 'Are you looking for the library? You just missed it! Go back out the door. The textbooks are in the northeast corner.',
        'replies': {
            'Thank you!': 0
        }
    }
}