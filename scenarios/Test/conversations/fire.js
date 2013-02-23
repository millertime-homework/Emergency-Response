'Fire': {
    '1': {
        'message': 'Oh no there is a fire in the way!',
        'replies': {
            'Extinguish': '3'
        }
    },
    '3': {
        'triggers': ['useFireExtinguisher'],
        'requires': {'has': ['Fire Extinguisher']}
        // or use 'check': [{'has': ['Fire Extinguisher'], 'goto': '2'}]
    }
}
