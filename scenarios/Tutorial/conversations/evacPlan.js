'evacPlan': {
    '1': {
        'check': [{'objectivesCompleted': ['findEvacPlan'], 'goto': 0}],
        'triggers': ['foundEvacPlan'],
        'message': 'Great! You found it! When you click an evacuation plan poster your mini map is marked with room numbers.',
        'replies': {
            'Next': 2
        }
    },
    '2': {
        'message': 'There is an evacuation plan for each floor of this school. Keep an eye out for them.',
        'replies': {
            'Next': 3
        }
    },
    '3': {
        'message': 'You\'ve now completed an objective! You can click the objective box in the upper right corner to see your completed objectives.',
        'replies': {
            'Next': 4
        }
    },
    '4': {
        'message': 'You will notice that the mini map on the right changes as you move. The arrow displays your direction and location on the map.',
        'replies': {
            'Next': 5
        }
    },
    '5': {
        'message': 'Take a look at the mini map while you travel, and see if you can get to room 110 in order to complete your next objective.',
        'replies': {
            'Okay': 0
        }
    }
}
