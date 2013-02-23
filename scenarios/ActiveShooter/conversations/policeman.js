'policeman': {
    '1': {
        'triggers': ['escaped'],
        'message': 'Freeze! Put your hands where I can see them!',
        'replies': {
            '[Put hands in the air]': 2,
            '[Approach the officer]': 3
        }
    },
    '2': {
        'triggers': ['survived']
    },
    '3': {
        'triggers': ['shotByPolice']
    }
}
