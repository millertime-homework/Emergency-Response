'Professor Bell': {
    '1': {
        'triggers':['disablePBAutoConversation'],
        'message': 'Good morning! Class is starting, have a seat.',
        'replies': {
            '[Sit down]' : 2
        }
    },
    '2': {
        'triggers': ['gotToClass']
    }
},
'Professor Bell is hiding': {
    '1': {
        'message': 'Come hide on the floor next to the door where he won\'t be able to see you!',
        'replies': {
            '[Hide]': 2,
            'No way!': 0
        }
    },
    '2': {
        'triggers': ['hiddenByDoor']
    }
}
