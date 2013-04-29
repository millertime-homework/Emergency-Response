'getChalkObjective': {
    'events': {
        'completeObjective': ['getToClass'],
        'setObjective': ['getChalkForTeacher', 'Get the chalk from the sturdy desk.']
    }
},
'takeChalk': {
    'events': {
        'takeFromScene' : [ {'name': 'Chalk', 'image': 'chalk.png', 'width':32, 'height':32 },
                            'chalk' ]
    }
},
'completeChalkObjective': {
    'events': {
        'completeObjective': ['getChalkForTeacher'],
        'removeInventory': ['Chalk']
    }
}
