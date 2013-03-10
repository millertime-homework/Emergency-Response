'hideFromShooter' : {
    'events' : {
        'addToScene': ['UseDoor', 'hidingSpot011'],
        'setObjectives' : [['hideFromShooter', 'Run Hide Fight', 'turnOffLights', 'Turn off the lights.',
                            'pullDownWindowShade', 'Pull down the window shade', 'hideByDoor', 'Hide by the door', 'silencePhone',
                            'Silence your cell phone', 'lockTheDoor', 'Lock the door to the room.']],
                            
        'showModal': ['BANG! BANG!','[You hear gunshots right outside the classroom door!]']
        
    },
    'enableTriggers' : ['turnedOffLights', 'pulledDownShade', 'hiddenByDoor', 'silencedPhone', 'lockedTheDoor', 'failedToHide',
                        'failedToTurnOffLights', 'failedToPullDownShade', 'failedToHideByDoor', 'failedToSilencePhone', 'failedToLockTheDoor',
                        'shooterCloseGetShot', 'chanceofEscape', 'abort', 'shooterEnters011'],
    
    'startTriggers' : ['failedToLockTheDoor', 'hiddenFromShooter']
},

'hideFromShooter_041' : {
    'events' : {
        'setObjectives' : [['lockTheDoor041', 'Prevent the shooter from getting into the room!', 'turnOffLights041', 'Turn off the lights in the NW room of the library.',
                            'pullDownWindowShade041', 'Pull down the window shades in the NW Room of the library', 'hideByDoor041', 'Hide by the door in the NW Room of the library']],
                            
        'showModal': ['You hear gunshots! They are close by, somehwere in the library! It looks like the door to this room might lock!']
    },
    'enableTriggers' : ['turnedOffLights041', 'pulledDownShade041', 'hiddenByDoor041', 'lockedTheDoor041', 'failedToHide041',
                        'failedToTurnOffLights041', 'failedToPullDownShade041', 'failedToHideByDoor041', 'failedToLockTheDoor041',
                        'shooterCloseGetShot041', 'shooterEnters041'],
    
    'startTriggers' : ['failedToLockTheDoor041', 'hiddenFromShooter041', 'hiddenFromShooter041']
}