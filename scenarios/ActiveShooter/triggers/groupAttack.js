'groupAttack411': {
    'events': {
        'warpPlayer': ['entryScene'],
        'showOnScreenMessage': ['You enter the room, turn to face the door, and see a group of people.']
    },
    'startTriggers': ['shooterEnters']
},
'shooterEnters': {
    'timeDelay': 6000,
    'events': {
        'warpPlayer': ['shooterEntersScene'],
        'showOnScreenMessage': ['Unfortunately, the shooter saw you enter the room and bursts in...', 4]
    },
    'startRandomTrigger': ['playerInitiatesAttack', 'groupInitiatesAttack']
},
'playerInitiatesAttack': {
    'timeDelay': 5000,
    'events': {
        'showConversation': ['playerInitiatesAttack', null, true]
    }
},
'groupInitiatesAttack': {
    'timeDelay': 5000,
    'events': {
        'showConversation': ['groupInitiatesAttack', null, true]
    }
},
'shooterSubduedPlayerInitiated': {
    'events': {
        'endGame': ['You win!', "You made the best of a bad situation. With nowhere to run and no one else willing to take the lead, you encouraged the group to swarm, disarm and subdue the shooter. Good work!"]
    }
},
'shooterSubduedGroupInitiated': {
    'events': {
        'endGame': ['You win!', "You made the best of a bad situation. With nowhere to run and no place to hide, you joined your fellow students and successfully subdued the shooter. Good work!"]
    }
},
'youLiveOthersDiePlayerInitiated': {
    'events': {
        'endGame': ['You survived', "Your decision to lay down on the floor and pretend to be dead worked and you survived. Many others were not so fortunate. With no other options, the trapped group should have attempted to stop the shooter with physical force."]
    }
},
'youLiveOthersDieGroupInitiated': {
    'events': {
        'endGame': ['You survived', "Your decision to lay down on the floor and pretend to be dead worked and you survived. Many others were not so fortunate. Their attempt to subdue the shooter was not successful and many students were killed or injured. Perhaps with your help they might have fared better."]
    }
},
'playerLivesShouldHaveHelped': {
    'events': {
        'endGame': ['You survived', "Trapped in a room with no place to hide, the other students quickly decided to attack the shooter. The succeeded, but your help could have been the deciding factor. You should have helped your fellow students."]
    }
},
'deathToCowards': {
    'events': {
        'endGame': ['You died.', 'Trapped in a confined space with a group of people as you were, you should have attempted to disarm the shooter as a group. Instead, nobody took action, and many were killed.']
    }
}