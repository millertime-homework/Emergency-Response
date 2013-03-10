'lockableDoor2': {
    '1': {
        'check': [{'exists': ['door-open'], 'goto': '2'}, {'exists':['lock2'], 'goto':'3'}],
        'triggers': ['openDoor']
    },
    '2': {
        'triggers': ['closeDoor']
    },
    '3': {
        'triggers': ['doorIsLocked']
    }
}
