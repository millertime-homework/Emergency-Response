'evacPlan': {
    '1': {
        'check': [{'objectivesCompleted': ['findEvacPlan'], 'goto': 0}],
        'triggers': ['foundEvacPlan'],
        'message': 'Great! You found it! When you click an evacuation plan poster your mini map is marked with room numbers.',
        'replies': {
            'Okay': 2
        }
    },
    '2': {
        'message': 'There is an evacuation plan for each floor of this school. Keep an eye out for them.',
        'replies': {
            'Okay': 3
        }
    },
    '3': {
        'message': 'You\'ve completed an objective! You can click the objective box to see your completed objectives.',
        'replies': {
            'Okay': 4
        }
    },
    '4': {
        'message': 'Use your mini map to complete your next objective.',
        'replies': {
            'Okay': 0
        }
    }
}
