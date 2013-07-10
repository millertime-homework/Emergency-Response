'Mrs Anderson': {
    '1': {
        'message': 'Hello!',
        'replies': {
            'Hi, Mrs. Anderson.': 2
        },
        'triggers' : ['completeSpeakWithAnderson','stopHiAnderson']
    },
    '2': {
        'message': 'You should really try out the Emergency Response Game on my computer!',
        'replies': {
            'Okay': 3,
            'No thanks': 0
        }
    },
    '3': {
        'triggers': ['playtheERG']
    }
}
