'Crowbar': {
    '1': {
        'message': 'Pick up crowbar?',
        'replies': {
            'Pick up': 2,
            'Leave': 0
        }
    },
    '2': {
        'requires': {'objectivesInProgress': ['getWeapon']},
        'triggers': ['takeCrowbar']
    }
}
