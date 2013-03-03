'New Book': {
    '1': {
        'message': 'This book is required for class.',
        'replies': {
            '[Pick up]': 2,
            '[Leave]': 0
        }
    },
    '2': {
        'check': [{'objectivesCompleted': ['dropOffLabWork'], 'goto': 3}],
        'triggers': ['pickUpBook']
    },
    '3': {
        'triggers': ['pickUpBook', 'getToClass']
    }
}