'lockDoor' : {
    '1' : {
        'requires': {'objectivesNotCompleted':['lockedTheDoor']},
        'message' : 'Lock the door?',
        'replies': {
            'Yes.': '2',
            "No.": '0'
        }
    },
    '2' : {
        'requires': {'objectivesInProgress':['lockTheDoor']},
        'triggers' : ['lockedTheDoor']
    }
}
