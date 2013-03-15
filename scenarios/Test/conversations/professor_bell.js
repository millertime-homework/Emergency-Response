'Professor Bell': {
    '1': {
        'triggers': ['fireAppears'],
        'check': [{'objectivesCompleted': ['takeTheQuiz'], 'goto': '10'},
                {'has':['Fire Extinguisher'], 'goto':'11'}],
        'message': 'Good morning! Class is starting soon!.',
        'replies': {
            'Where is the fire extinguisher': 5,
            'I\'ll go sit down': 2,
            'I\'ll skip the lecture and take the quiz': 3,
            'I\'ve already taken the quiz': 0,
            'Don\'t play with those matches...': 4,
        }
    },
    '2': {
        'triggers': ['getToClass'],
        'requires': {'triggersEnabled':['getToClass']}
    },
    '3': {
        'triggers': ['skipToTheQuiz'],
        'requires': {'triggersEnabled':['skipToTheQuiz']}
    },
    '4': {
        'triggers': ['lightProfOnFire']
    },
    '5': {
        'requires': {'hasNot': ['Fire Extinguisher']},
        'message': 'By the elevators'
    },
    '10': {
        'message': 'Congratulations!  You have completed the quiz!'
    },
    '11': {
        'check': [{'objectivesCompleted':['moveTutorial'], 'goto':'12'}],
        'message': 'You have the fire extinguisher but have not gotten the "move somewhere" objective'
    },
    '12': {
        'message': "You've already moved somewhere."
    }
}
