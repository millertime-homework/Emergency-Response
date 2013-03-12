'The Shooter Has Entered the Room': {
    '1': {
        'message': '[The shooter bursts into the room]',
        'replies':{
            'Try to hide' : 2,
            'Play dead' : 3,
            'Fight the shooter' : 4,
           // 'Charge the shooter with your weapon!' : 5,
          //  'The other students are armed, help them subdue the shooter!' : 6,
         //   'Everyone has something to fight with. Fight the shooter!' : 7
        }
    },
    '2': {
        'triggers' : ['shooterKillsHidingPlayer031']
    },
    '3':{
        'triggers' : ['shooterWoundsPlayer031']
    },
    '4':{
        //
       // 'check': [{'has': ['Flashlight'], 'hasNot': ['Fire Extinguisher'], 'goto': 2},
       //   {'triggersEnabled': ['doSomething'], 'goto': 3}],
        //    'message': 'Something.'
        'check': [{'objectivesCompleted': ['findWeapon'], 'goto': 5 },
                  {'objectivesCompleted': ['studentsGatherWeapons031'], 'goto': 5}],
        //'requires': {'objectivesNotCompleted':['findWeapon']},
        'triggers': ['playerDiesNoWeapons']
    },
    '5':{
      //  'requires': {'objectivesCompleted':['findWeapon']},
      //  'requires': {'objectivesNotCompleted':['studentsGatherWeapons031']},
        'triggers': ['playerSubduesShooter031']
    },
    '6':{
        'requires': {'objectivesCompleted':['studentsGatherWeapons031']},
        'requires': {'objectivesNotCompleted':['findWeapon']},
        'triggers': ['playerSubduesShooter031']
    },
    '7':{
        'requires': {'objectivesCompleted':['studentsGatherWeapons031','findWeapon']},
        'triggers': ['playerSubduesShooter031']
    }
}
