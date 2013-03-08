'getToFrontDoors' : {
    'events': {
        'addToScene': ['UseDoor', 'hidingSpot011'],
        'setObjective': ['getToFrontDoors', 'Run Hide Fight'],
        'showModal': ['[Intercom]', 'Alert! There is a gunman in the mall next to the school.']
    },
    'startRandomTrigger': ['pathClear', 'pathNotClear'],
    'enableTriggers' : ['FrontDoorsReached']
}
