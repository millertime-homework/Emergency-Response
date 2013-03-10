'hideFromShooter' : {
    'events' : {
        'addToScene': ['hidingSpot', 'hidingStudent1', 'hidingStudent2', 'hidingStudent3'],
        
        'setObjectives' : [['hideFromShooter', 'The shooter is very close.', 'turnOffLights', 'Turn off the lights.',
                            'pullDownWindowShade', 'Pull down the window shade', 'hideByDoor', 'Hide by the door', 'silencePhone',
                            'Silence your cell phone', 'lockTheDoor', 'Lock the door to the room.']],
                            
        'showModal': ['BANG! BANG!','[You hear gunshots right outside the classroom door!]']
        
    },
    'enableTriggers' : ['turnedOffLights', 'pulledDownShade', 'hiddenByDoor', 'silencedPhone', 'lockedTheDoor', 'failedToHide',
                        'failedToTurnOffLights', 'failedToPullDownShade', 'failedToHideByDoor', 'failedToSilencePhone', 'failedToLockTheDoor',
                        'shooterCloseGetShot', 'chanceofEscape', 'abort', 'shooterEnters011'],
    
    'startTriggers' : ['ShootsThroughWalls011', 'shooterEnters011', 'hiddenFromShooter']
}
