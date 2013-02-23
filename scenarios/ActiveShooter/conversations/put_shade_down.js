'putShadeDown' : {
    '1' : {
        'requires': {'objectivesNotCompleted':['pulledDownShade']},
        'message' : 'Put the blinds on this window down?',
        'replies': {
            'Yes, put them down.': '2',
            "Leave them alone.": '0'
        }
    },
    '2' : {
        'requires': {'objectivesInProgress':['pullDownWindowShade']},
        'triggers' : ['pulledDownShade']
    }
}
