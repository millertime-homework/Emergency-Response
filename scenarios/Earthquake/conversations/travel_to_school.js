'travelToSchool': {
    '1': {
        'check': [{'objectivesInProgress': ['travelToSchool'], 'goto': 3 }],
        'message': 'Are you ready to leave for school?',
        'replies': {
            'Yes': 2,
            'No': 0
        }
    },
    '2': {
        'triggers':['gotoSchool']
    },
    '3': {
        'message': 'You look ready for the world. Would you like to go to school?',
        'replies': {
            'Yes': 4,
            'No': 0
        }
    },
    '4': {
        'triggers':['gotoSchool']
    }
}
