'lockDoor' : {
    '1' : {
        'requires': {'objectivesNotCompleted':['lockedTheDoor']},
        'message' : 'Lock the door?',
        'replies': {
            'Yes, lock it.': '3',
            'Yes.': '2',
            "No.": '0'
        }
    },
    '2' : {
        'requires': {'objectivesInProgress':['lockTheDoor']},
        'triggers' : ['lockedTheDoor']
    },
    '3' : {
        'requires': {'objectivesInProgress':['lockTheDoorAgain']},
        'triggers' : ['lockedTheDoorAgain']
    }
}
