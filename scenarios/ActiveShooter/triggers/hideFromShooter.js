'hideFromShooter' : {
    'events' : {
        'addToScene': ['UseDoor', 'hidingSpot011'],
        'setObjectives' : [['hideFromShooter', 'Choose what to do: Run Hide or Fight', 'turnOffLights', 'Turn off the lights.',
                            'pullDownWindowShade', 'Pull down the window shade', 'hideByDoor', 'Hide by the door', 'silencePhone',
                            'Silence your cell phone', 'lockTheDoor', 'Lock the door to the room.']],
        'showModal': ['BANG! BANG!','[You hear gunshots right outside the classroom door!]']
    },
    'enableTriggers' : ['turnedOffLights', 'pulledDownShade', 'hiddenByDoor', 'silencedPhone', 'lockedTheDoor', 'failedToHide',
                        'failedToTurnOffLights', 'failedToPullDownShade', 'failedToHideByDoor', 'failedToSilencePhone', 'failedToLockTheDoor',
                        'shooterCloseGetShot', 'chanceofEscape', 'abort'],
    'startTriggers' : ['ShootsThroughWalls011', 'hiddenFromShooter']
}
