'door2': {
    '1': {
        'check': [{'exists': ['door2-open'], 'goto': '2'}],
        'triggers': ['openDoor2']
    },
    '2': {
        'triggers': ['closeDoor2']
    }
}
