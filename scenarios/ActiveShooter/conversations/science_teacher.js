'Science Teacher': {
    '1': {
        'check': [{'objectivesCompleted': ['dropOffLabWork'], 'goto': 4}],
        'message': 'Good morning! Did you finish the lab work?',
        'replies': {
            'Yes, I have it right here': 2,
            'No...': 0
        }
    },
    '2': {
        'check': [{'has': ['New Book'], 'goto': 3}],
        'triggers': ['giveLabWork', 'goPickUpBook'],
        'message': 'Great! Don\'t forget to grab your book in the library before your classes.',
        'replies': {
            'I won\'t, thanks.': 0
        }
    },
    '3': {
        'triggers': ['giveLabWork', 'getToClass'],
        'message': 'Great! Run off to class then.',
        'replies': {
            'Okay, see you later.': 0
        }
    },
    '4': {
        'message': 'Shouldn\'t you be in class?',
        'replies': {
            'Yes...': 0
        }
    }
}