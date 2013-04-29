'Professor Xavier': {
    '1': {
        'triggers': ['getChalkObjective','stopHiXavier'],
        'check': [
            {'objectivesInProgress': ['surviveEarthquake'], 'goto': '0'},
            {'has':['Chalk'], 'goto': 2},
            {'objectivesCompleted':['getChalkForTeacher'], 'goto': '3'}
        ],
        'message': 'Welcome! Before we get started, could you please hand me my chalk from that VERY sturdy and safe desk?',
        'replies': {
            'Of course.': 0
        }
    },
    '2': {
        'triggers': ['completeChalkObjective'],
        'message': 'Thank you! Okay, so today we\'ll be covering chapter.... wait, did you feel that?',
        'replies': {
            'Yes.... what was that?': 3
        }
    },
    '3': {
        'triggers': ['shakeThingsUp'],
        'message': 'It\'s an earthquake!! Quick, get under something sturdy!',
        'replies': {
            'Okay I\'ll look for something sturdy to click on': 0
        }
    }
}
