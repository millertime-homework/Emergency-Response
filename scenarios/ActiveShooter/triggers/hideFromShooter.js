'hideFromShooter' : {
    'events' : {
        'replaceProp': ['prof-bell', 'bell-hiding'],
        'setObjectives' : [['hideFromShooter', 'Choose what to do: Run Hide or Fight', 'turnOffLights', 'Turn off the lights.',
                            'pullDownWindowShade', 'Pull down the window shade', 'hideByDoor', 'Hide by the door', 'silencePhone',
                            'Silence your cell phone', 'lockTheDoor', 'Lock the door to the room.']],
        'showModal': ['BANG! BANG!','[You hear gunshots right outside the classroom door! Hint: You can hide in the classroom by clicking on Professor Bell who is hiding next to the door. You might need to do more than just hide to survive though! Click on items such as door handles and light switches to interact with them.]']
    },
    'enableTriggers' : ['turnedOffLights', 'pulledDownShade', 'hiddenByDoor', 'silencedPhone', 'lockedTheDoor', 'failedToHide',
                        'failedToTurnOffLights', 'failedToPullDownShade', 'failedToHideByDoor', 'failedToSilencePhone', 'failedToLockTheDoor',
                        'shooterCloseGetShot', 'chanceofEscape', 'abort', 'shooterEnters011', 'studentRunsFrom011'],
    'startTriggers' : ['failedToLockTheDoor', 'hiddenFromShooter']
}
