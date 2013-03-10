'getToFrontDoors' : {
    'events': {
        'addToScene': ['UseDoor', 'hidingSpot011'],
        'setObjective': ['getToFrontDoors', 'Choose what to do: Run Hide or Fight'],
        'showModal': ['[Intercom]', 'Alert! There is a gunman in the mall next to the school.']
    },
    'startRandomTrigger': ['pathClear', 'pathNotClear'],
    'enableTriggers' : ['FrontDoorsReached']
}
