'Computer': {
    '1': {
        'message': 'Emergency Response Game',
        'replies': {
            '[Start Playing]': 2
        },
        'triggers' : ['stopHiComputer']
    },
    '2': {
        'message' : 'Choose a category',
        'replies' : {
            'Preparing the home for an earthquake.' : 3,
            'Responding to an earthquake.' : 12,
            'Creating a family reunification plan.' : 21,
            'I\'m done for now.' : 0
        },
        'triggers' : ['playingERG']
    },
    '3' : {
        'message' : 'Question 1: Large and/or heavy objects should be ...',
        'replies' : {
            'Placed on the top shelf to avoid bumping into them.' : 5,
            'Placed on the bottom shelf or secured to keep them from falling.' : 4,
            'Placed into storage so they can never hurt anybody.' : 5
        }
    },
    '4' : {
        'message' : 'Correct: Heavy objects should be stored on low shelves or secured with a strap.',
        'replies' : {
            'Keep playing' : 6,
            'I\'m done for now' : 0
        },
        'triggers' : ['scoreERGpoints']
    },
    '5' : {
        'message' : 'Incorrect: Heavy objects should be stored on low shelves or secured with a strap.',
        'replies' : {
            'Keep playing' : 6,
            'I\'m done for now' : 0
        }
    },
    '6' : {
        'message' : 'Question 2: Flammable objects should be stored ... ',
        'replies' : {
            'In a yellow locking cabinet with acids.' : 8,
            'Near the stove or fireplace.' : 8,
            'In a dry place away from heat sources.' : 7
        }
    },
    '7' : {
        'message' : 'Correct: Flammable objects should be kept away from heat sources.',
        'replies' : {
            'Keep playing' : 9,
            'I\'m done for now' : 0
        },
        'triggers' : ['scoreERGpoints']
    },
    '8' : {
        'message' : 'Incorrect: Flammable objects should be kept away from heat sources.',
        'replies' : {
            'Keep playing' : 9,
            'I\'m done for now' : 0
        }
    },
    '9' : {
        'message' : 'It is important to have professionals ...',
        'replies' : {
            'Clean and repair chimneys, vents, and electrical wiring.' : 10,
            'Look over your car for hazardous material.' : 11,
            'I can do it myself, professionals aren\'t important.' : 11
        }
    },
    '10' : {
        'message' : 'Correct: Use professionals to repair major or dangerous items in the home.',
        'replies' : {
            'Back to the menu' : 2,
            'I\'m done for now' : 0
        },
        'triggers' : ['scoreERGpoints']
    },
    '11' : {
        'message' : 'Incorrect: Use professionals to repair major or dangerous items in the home.',
        'replies' : {
            'Back to the menu' : 2,
            'I\'m done for now' : 0
        }
    },
    '12' : {
        'message' : 'Question 1: If you are in your office or school during an earthquake you should ... ',
        'replies' : {
            'Hide under a big sturdy object and hold on until the quake stops.' : 13,
            'Run as fast as you can toward the exit.' : 14,
            'Stand perfectly still and hope the earthquake doesn\'t see you.' : 14
        }
    },
    '13' : {
        'message' : 'Correct: Take cover under a study object, hold on, and wait it out.',
        'replies' : {
            'Keep playing.' : 15,
            'I\'m done for now' : 0
        },
        'triggers' : ['scoreERGpoints']
    },
    '14' : {
        'message' : 'Incorrect: Take cover under a study object, hold on, and wait it out.',
        'replies' : {
            'Keep playing.' : 15,
            'I\'m done for now' : 0
        }
    },
    '15' : {
        'message' : 'Question 2: When lying in bed and an earthquake occurs you should... ',
        'replies' : {
            'Head outside as quickly as you can' : 17,
            'Continue to sleep through it.' : 17,
            'Roll onto your stomach and place a pillow over your head.' : 16
        }
    },
    '16' : {
        'message' : 'Correct: Lie on your stomach and use a pillow to cover your head.',
        'replies' : {
            'Keep playing.' : 18,
            'I\'m done for now' : 0
        },
        'triggers' : ['scoreERGpoints']
    },
    '17' : {
        'message' : 'Incorrect: Lie on your stomach and use a pillow to cover your head.',
        'replies' : {
            'Keep playing.' : 18,
            'I\'m done for now' : 0
        }
    },
    '18' : {
        'message' : 'Question 3: You\'re in your car when an earthquake hits, you ...',
        'replies' : {
            'Pull over away from overpasses or power lines and hold on.' : 19,
            'Drive faster so you can escape the quake.' : 20,
            'Get out of the car and run.' : 20
        }
    },
    '19' : {
        'message' : 'Correct: Pull your car over in a safe place',
        'replies' : {
            'Back to the menu' : 2,
            'I\'m done for now' : 0
        },
        'triggers' : ['scoreERGpoints']
    },
    '20' : {
        'message' : 'Incorrect: Pull your car over in a safe place',
        'replies' : {
            'Back to the menu' : 2,
            'I\'m done for now' : 0
        }
    },
    '21' : {
        'message' : 'Question 1: Disaster plans should ...',
        'replies' : {
            'Be a mystery' : 23,
            'Be known and practiced before disaster strikes.' : 22,
            'Be left to the professionals.' : 23
        }
    },
    '22' : {
        'message' : 'Correct: You should know the disaster plans of all your family members\' work or school. Practice using them frequently.',
        'replies' : {
            'Keep playing.' : 24,
            'I\'m done for now' : 0
        },
        'triggers' : ['scoreERGpoints']
    },
    '23' : {
        'message' : 'Incorrect: You should know the disaster plans of all your family members\' work or school. Practice using them frequently.',
        'replies' : {
            'Keep playing.' : 24,
            'I\'m done for now' : 0
        }
    },
    '24' : {
        'message' : 'Question 2: A family reunification location should be ...',
        'replies' : {
            'Designated ahead of time and given to all family members.' : 25,
            'Ignored.' : 26,
            'Assigned by the emergency personnel.' : 26
        }
    },
    '25' : {
        'message' : 'Correct: Family gathering points should be designated in case of a disaster.',
        'replies' : {
            'Keep playing.' : 27,
            'I\'m done for now' : 0
        },
        'triggers' : ['scoreERGpoints']
    },
    '26' : {
        'message' : 'Incorrect: Family gathering points should be designated in case of a disaster.',
        'replies' : {
            'Keep playing.' : 27,
            'I\'m done for now' : 0
        }
    },
    '27' : {
        'message' : 'Question 3: Communicating during an emergency should ...',
        'replies' : {
            'Be done using only cell phones because the phone lines will be down.' : 29,
            'Be through a designated out of town relative or friend.' : 28,
            'Not be worried about, everyone will be able to communicate.' : 29
        }
    },
    '28' : {
        'message' : 'Correct: Designate an out of town relative or friend to coordinate family communications.',
        'replies' : {
            'Back to the menu' : 2,
            'I\'m done for now' : 0
        },
        'triggers' : ['scoreERGpoints']
    },
    '29' : {
        'message' : 'Incorrect: Designate an out of town relative or friend to coordinate family communications.',
        'replies' : {
            'Back to the menu' : 2,
            'I\'m done for now' : 0
        }
    }
}
