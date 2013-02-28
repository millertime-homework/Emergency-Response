'getToFrontDoors' : {
    'events': {
        'addToScene': ['UseDoor', 'hidingSpot', 'hidingSpot2', 'shooter220S'],
        'setObjective': ['getToFrontDoors', 'Go to the front doors of the school and get out of the building'],
        'showModal': ['[Intercom]', 'Alert! There is a gunman in the mall next to the school.']
    },
    'enableTriggers' : ['getShotAt', 'FrontDoorsReached', 'shotInStairwell']
}
