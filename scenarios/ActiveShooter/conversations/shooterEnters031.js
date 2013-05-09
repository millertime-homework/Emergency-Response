'shooterEntersRoom': {
    '1': {
        'message': '[The shooter bursts into the room. What do you do?]',
        'replies':{
            'Try to hide' : 2,
            'Play dead' : 3,
            'Fight the shooter' : 4
        }
    },
    '2': {
        'triggers' : ['shooterKillsHidingPlayer031']
    },
    '3':{
        'triggers' : ['shooterWoundsPlayer031']
    },
    '4':{
        'triggers': ['playerSubduesShooter031']
    }
}
