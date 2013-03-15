'outsideBuilding': {
    'id': 'outside',
    'x': 0,
    'y': 0,
    '_triggers' : ['electrocuteEnding', 'woodBeamEnding', 'debrisEnding', 'completeAvoidObstacles'],
    '_walls': {
        'survived': {
            'name': 'survived',
            'image': 'facingSchool.jpg',
            'isCutscene': true,
            '_props': {
                'coordinator': {
                    'name': 'coordinator',
                    'image': 'Responder4.png',
                    'width': 350,
                    'height': 736,
                    'left': 200,
                    'top': 150,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'Emergency Building Coordinator'
                    }
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
