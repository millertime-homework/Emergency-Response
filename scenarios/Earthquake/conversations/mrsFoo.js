'Mrs Foo': {
    '1': {
        'message': 'Hello PLAYERNAME!',
        'replies': {
            'Hi, Mrs. Foo.': 2
        },
        'triggers' : ['completeSpeakWithFoo','stopHiFoo']
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
