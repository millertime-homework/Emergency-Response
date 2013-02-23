'Shooter': {
    '1': {
        'check': [{'objectivesInProgress': ['attackShooter'], 'goto': '2'}],
        'message': 'WELL HELLO THERE!',
        'replies': {
            'Run away': 0
        }
    },
    '2': {
        'message': 'This stupid gun! I can\'t believe it\'s jamming!',
        'replies': {
            'ATTACK!!!': 3,
            'Try to incapacitate': 4,
            'Run away': 0
        }
    },
    '3': {
        'requires': {'has': ['crowbar']},
        'message': 'OUCH! Grr!',
        'replies': {
            'ATTACK!!!': 5,
            'Run away': 0
        }
    },
    '4': {
        'requires': {'has': ['crowbar']},
        'triggers': ['knockedOutByShooter']
    },
    '5': {
        'triggers': ['takeDownShooter']
    }
}
