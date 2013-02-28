'door': {
    '1': {
        //'check': [{'exists': 'door-open', 'goto': '2'}],
        'triggers': ['openDoor'], 'message': 'open'
    },
    '2': {
        'triggers': ['closeDoor']
    }
}
