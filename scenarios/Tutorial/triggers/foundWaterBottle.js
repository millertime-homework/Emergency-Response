'foundWaterBottle': {
    'startTriggers': ['showTutorial'],
    'events': {
        'completeObjective': ['findBottle'],
        'takeFromScene': [{'name':'Water Bottle', 'image': 'waterbottle.png', 'width': 30, 'height': 30},
                          'waterBottle']
    }
}
