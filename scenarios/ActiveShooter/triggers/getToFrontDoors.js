'getToFrontDoors' : {
    'events': {
        'addToScene': ['UseDoor'],
        'setObjectives': [['getToFrontDoors', 'Choose what to do: Run Hide or Fight', 'turnOffLights', 'Turn off the lights.',
                            'pullDownWindowShade', 'Pull down the window shade', 'hideByDoor', 'Hide by the door', 'silencePhone',
                            'Silence your cell phone', 'lockTheDoor', 'Lock the door to the room.']],
        'showModal': ['[Intercom]', 'Alert! There is a gunman in the mall next to the school. [Some of the students decide to try and get to the front doors and leave the area. Professor Bell has decided to stay. You can shoose to hide in the classroom with Professor Bell by clicking on him next to the door.]'],
        'replaceProp': ['prof-bell', 'bell-hiding']
    },
    'enableTriggers' : ['turnedOffLights', 'pulledDownShade', 'hiddenByDoor', 'silencedPhone', 'lockedTheDoorAlone'],
    'startRandomTrigger': ['pathClear', 'pathNotClear'],
    'startTriggers' : ['hiddenFromShooter', 'WinAloneIn011']
}
