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
},
'doorR011': {
    '1': {
        'check': [{'exists': ['door-open'], 'goto': '2'}, {'exists':['lock2'], 'goto':'3'}],
        'triggers': ['openDoorR011']
    },
    '2': {
        'triggers': ['closeDoorR011']
    },
    '3': {
        'triggers': ['doorIsLocked']
    }
},
'doorR041': {
    '1': {
        'check': [{'exists': ['door-open'], 'goto': '2'}, {'exists':['lock2'], 'goto':'3'}],
        'triggers': ['openDoorR041']
    },
    '2': {
        'triggers': ['closeDoorR041']
    },
    '3': {
        'triggers': ['doorIsLocked']
    }
}
