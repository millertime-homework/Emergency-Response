'getChalkObjective': {
    'events': {
        'completeObjective': ['getToClass'],
        'setObjective': ['getChalkForTeacher', 'Get the chalk from the sturdy desk.']
    }
},
'completeChalkObjective': {
    'events': {
        'completeObjective': ['getChalkForTeacher'],
        'removeInventory': ['Chalk']
    }
},
'giveProfChalk': {
    'timeDelay': 100,
    'events': {
        'showConversation': ['Professor Xavier', 4, false, false]
    }
}
