'pickUpBook': {
    '1': {
        'message': 'You\'ve just arrived at school. Class will be starting soon. ' +
                   'But you need to pick up a book from the library.',
        'replies': {
            'Okay': 0,
            'I don\'t know where the library is.': 2
        }
    },
    '2': {
        'message': 'It\'s on the second floor. The stairs are ' +
                   'directly in front of you.',
        'replies': {
            'Okay': 0
        }
    }
},
'pickUpBookHint': {
    '1': {
        'message': 'If you\'re having trouble finding the library look for an evacuation ' +
                   'plan poster on the wall.',
        'replies': {
            'Okay': 0,
            'Where are the evacuation plan posters?': 2,
            'I\'m still lost': 3
        }
    },
    '2': {
        'message': 'The first floor evacuation plan poster is next to the elevator. The ' +
                   'second floor poster is at the top of the stairs, and around the corner ' +
                   'to the left.',
        'replies': {
            'Okay': 0,
            'I\'m still lost': 3
        }
    },
    '3': {
        'message': 'Use your mini-map. The stairs are towards the south (down on the mini-map). ' +
                   'Once you\'re on the second floor, head north (up on the mini-map) to find the ' +
                   'library.',
        'replies': {
            'Okay': 0
        }
    }
}
