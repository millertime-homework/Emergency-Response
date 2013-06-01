'playerInitiatesAttack' : {
    '1' : {
        'message' : 'Though you only have a moment to react, it is obvious that you cannot hide, and that everyone else in the room is frozen in terror.',
        'replies': {
            'Charge the shooter, shouting at everyone else in the room to do the same thing.': '2',
            "Play dead, maybe the shooter won't notice you.": '3',
            "Cower in fear.": '4'
        }
    },
    '2' : {
        'triggers' : ['playerBeginAttack']
    },
    '3' : {
        'triggers' : ['youLiveOthersDiePlayerInitiated']
    },
    '4' : {
        'triggers' : ['deathToCowards']
    }
},
'groupInitiatesAttack' : {
    '1' : {
        'message' : 'The shooter bursts in. Another student, realizing there is no where to hide, immediately swarms the attacker and shouts at everyone to join in.',
        'replies': {
            'Help subdue the shooter.': '2',
            "Do nothing. It looks like the other students can handle the situation.": '3',
            "Play dead. If the other students fail, hopefully the shooter won't notice you.": '4',
            "Cower in fear.": '5'
        }
    },
    '2' : {
        'triggers' : ['groupBeginAttack']
    },
    '4' : {
        'triggers' : ['youLiveOthersDieGroupInitiated']
    },
    '3' : {
        'triggers' : ['playerLivesShouldHaveHelped']
    },
    '5' : {
        'triggers' : ['deathToCowards']
    }
}
