'outsideBuilding': {
    'id': 'outside',
    'x': 0,
    'y': 0,
    '_triggers': ['escapeEnding', 'nearMissEnding', 'shotInOfficeEnding', 'shotInClassroomEnding',
                  'shotThroughOfficeWindowEnding', 'phoneRangEnding', 'lightsOnEnding', 'shooterSubduedPlayerInitiatedEnding',
                  'shooterSubduedGroupInitiatedEnding', 'youLiveOthersDiePlayerInitiatedEnding',
                  'youLiveOthersDieGroupInitiatedEnding', 'playerLivesShouldHaveHelpedEnding',
                  'deathToCowardsEnding', 'hideEnding', 'shotAtBottomOfElevatorEnding', 'ranAtShooterEnding',
                  'shotWhileHidingEnding', 'shotWhilePlayingDeadEnding', 'lostTheFightEnding', 'wonFightEnding',
                  'lightsOutEnding'],
    '_walls': {
        'survived': {
            'name': 'survived',
            'image': 'facingSchool.jpg',
            'isCutscene': true,
            '_props': {
                'shooter-and-cop': {
                    'name': 'shooter-and-cop',
                    'image': 'shooter-and-cop.png',
                    'width': 564,
                    'height': 800,
                    'left': 100,
                    'top': 100
                }
            }
        },
        'injured': {
            'name': 'injured',
            'image': 'facingSchool.jpg',
            'isCutscene': true,
            '_props': {
                'ambulance': {
                    'name': 'ambulance',
                    'image': 'ambulance.jpg',
                    'width': 634,
                    'height': 500,
                    'left': 200,
                    'top': 200
                }
            }
        },
        'died': {
            'name': 'died',
            'image': 'blackout.jpg',
            'isCutscene': true
        }
    }
}