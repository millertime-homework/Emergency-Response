'getToFrontDoors' : {
    'events': {
        'addToScene': ['UseDoor', 'hidingSpot011'],
        'setObjectives': [['getToFrontDoors', 'Choose what to do: Run Hide or Fight', 'turnOffLights', 'Turn off the lights.',
                            'pullDownWindowShade', 'Pull down the window shade', 'hideByDoor', 'Hide by the door', 'silencePhone',
                            'Silence your cell phone', 'lockTheDoor', 'Lock the door to the room.']],
        'showModal': ['[Intercom]', 'Alert! There is a gunman in the mall next to the school. [Professor Bell and the other students decide to try and get to the front doors and leave the area.]']
    },
    'enableTriggers' : ['turnedOffLights', 'pulledDownShade', 'hiddenByDoor', 'silencedPhone', 'lockedTheDoorAlone'],
    'startRandomTrigger': ['pathNotClear', 'pathClear'],
    'startTriggers' : ['hiddenFromShooter']
}