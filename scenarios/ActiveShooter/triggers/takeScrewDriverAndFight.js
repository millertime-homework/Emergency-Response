'takeScrewDriverAndFight': {
    'events': {
        'addPoints' : [100],
        'takeFromScene' : [ {'name': 'Screwdriver', 'image': 'screwdriver.png', 'width':100, 'height':66 },
                          'screwdriver031' ],
        'completeObjective' : ['findWeapon'],
        'showConversation' : ['shooterEntersRoom', null, true, true]
    },
    'abortTriggers' : ['shooterApproaches031']
}
