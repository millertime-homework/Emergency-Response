'foundClassroom': {
    '1': {
        'check': [{'objectivesInProgress': ['findClassroom'], 'goto': 2}]
    },
    '2': {
        'message': 'You found Room 110! Look for a water bottle on a desk in here and click on it.',
        'replies': {
            'Okay': 3
        }
    },
    '3': {
        'triggers': ['foundClassroom']        
    }
}
