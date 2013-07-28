'foundClassroom': {
    '1': {
        'check': [{'objectivesInProgress': ['findClassroom'], 'goto': 2}]
    },
    '2': {
        'message': 'You found Room 110! Now click on the door to open it.',
        'replies': {
            'Okay': 3
        }
    },
    '3': {
        'message': 'Once you\'ve opened the door, you can enter by pressing the forward arrow or the up key on your keyboard.',
        'replies': {
            'Okay': 4
        }
    },
    '4': {
        'triggers': ['foundClassroom']        
    }
}
