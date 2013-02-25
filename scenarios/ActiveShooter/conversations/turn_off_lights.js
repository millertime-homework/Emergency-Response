'turnOffLights' : {
    '1' : {
        'message' : 'What do you want to do to the lights?',
        'replies': {
            'Turn them on.': '3',
            "Turn them off.": '2',
            'Play with the light switch': '4',
            'Leave it alone': '5'
        }
    },
    '2' : {
        'triggers' : ['turnedOffLights'],
        'requires': {'objectivesInProgress':['turnOffLights']}
    },
    '3' : {
        'requires': {'objectivesInProgress':['turnOffLights']}
    },
    '4' : {
        'requires': {'objectivesNotInProgress':['hideFromShooter']},
        'message' : 'The professor scolds you for goofing off.',
        'replies': {
            'Stop misbehaving': '0'
        }
    },
    '5' : {
        'requires': {'objectivesNotInProgress':['hideFromShooter']},
    }
}
