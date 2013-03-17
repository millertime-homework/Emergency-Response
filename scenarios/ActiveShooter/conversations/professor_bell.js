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
        'check': [{'objectivesInProgress': ['lockTheDoor'], 'goto': 3},
                  {'objectivesInProgress': ['lockTheDoorAgain'], 'goto': 3},
                  {'objectivesInProgress': ['turnOffLights'], 'goto': 4},
                  {'objectivesInProgress': ['pullDownWindowShade'], 'goto': 5},
                  {'objectivesInProgress': ['silencePhone'], 'goto': 6}],
        'message': 'Come hide on the floor next to the door where he won\'t be able to see you!',
        'replies': {
            '[Lie down on the floor and hide]': 2,
            'No way!': 0
        }
    },
    '2': {
        'triggers': ['hiddenByDoor']
    },
    '3': {
        'message': 'The door is unlocked! Quick, lock the door before he comes in here! '+
                   'Click the door handle to lock the door.',
        'replies': {
            'Okay I\'ll go lock the door.': 0,
            'No! [Lie down on the floor and hide]': 7
        }
    },
    '4': {
        'message': 'The lights are still on! Quick, turn them off before he sees us! '+
                   'Click on the light switches to turn them off.',
        'replies': {
            'Okay I\'ll go turn off the lights.': 0,
            'No! [Lie down on the floor and hide]': 7
        }
    },
    '5': {
        'message': 'The window shade is still open! Quick, pull it down so he can\'t see us through the window! '+
                   'Click the window shade to pull it down.',
        'replies': {
            'Okay I\'ll go cover the window.': 0,
            'No! [Lie down on the floor and hide]': 7
        }
    },
    '6': {
        'message': 'Your cell phone should be silenced or the shooter may hear it ring! '+
                   'Hover over your phone, then move your mouse to the Ringer menu and click Off.',
        'replies': {
            'Okay I\'ll make sure my phone is silenced.': 0,
            'No! [Lie down on the floor and hide]': 7
        }
    },
    '7': {
        'requires': {'objectivesInProgress': ['hideFromShooter']},
        'triggers': ['hiddenByDoor']
    }
}
