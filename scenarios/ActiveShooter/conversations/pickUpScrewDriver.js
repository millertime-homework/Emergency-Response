'Pick up screw driver?': {
    '1': {
        'message': 'This looks like a good weapon.',
        'replies': {
            'Pick it up': '2',
            'Leave it': '0'
        }
    },
    '2': {
        'check': [{'objectivesInProgress': ['findWeapon'], 'goto': 3}],
        'triggers': ['takeScrewDriver']
    },
    '3': {
        'triggers': ['takeScrewDriverAndFight']
    }
}
