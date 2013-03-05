'Elevator Down': {
    '1': {
        'message': 'Go downstairs?',
        'replies': {
            'Yes': 2,
            'No': 0
        }
    },
    '2': {
        'triggers': ['elevatorDown']
    }
},
'Elevator Up': {
    '1': {
        'message': 'Go upstairs?',
        'replies': {
            'Yes': 2,
            'No': 0
        }
    },
    '2': {
        'triggers': ['elevatorUp']
    }
},
'Aftermath Elevator': {
    '1': {
        'message': 'The elevator is out of service.',
        'replies': {
            'I will take the stairs.': 0
        }
    }
}
