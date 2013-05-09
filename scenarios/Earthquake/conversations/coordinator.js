'Emergency Building Coordinator' : {
    '1' : {
        'message' : 'Hey we\'ve got a survivor here!  I\'m the Emergency Building Coordinator on duty today.  '+
                    'My job is to coordinate emergency response efforts by gathering information and helping victims.  ' +
                    'Please tell me your name so I can register your status as a survivor. We record this information to assist families in reunification.',
        'replies' : {
            'I tell her my name.' : 2
        },
        'triggers' : ['killstartEBC']
    },
    '2' : {
        'check' : [ {'objectivesCompleted':['saveXavier'], 'goto': '3'}],
        'message' : 'Ok, We\'ve setup an Assembly Area right over there, head that way and we\'ll try to let your family know you\'re alright.',
        'replies' : {
            'Go to the Assembly Area.' : 5
        }
    },
    '3' : {
        'message' : 'Ok, We\'ve setup an Assembly Area right over there head that way and we\'ll try to let your family know you\'re alright.',
        'replies' : {
            'Tell her that Professor Xavier is at the Area of Rescue on the 2nd floor.' : 4,
            'Go to the Assembly Area.' : 5
        }
    },
    '4' : {
        'message' : 'Oh? I\'m glad the Professor is alive; I\'ll let the firefighters know he is waiting for assistance. I hope he\'ll be ok.',
        'replies' : {
            'Go to the Assembly Area.' : 5
        }
    },
    '5' : {
        'triggers' : ['startReviewPrompt']
    }
}
