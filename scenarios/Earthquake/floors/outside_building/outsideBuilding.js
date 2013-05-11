'outsideBuilding': {
     'id': 'outside',
     'x': 0,
     'y': 0,
     '_triggers' : ['completeAvoidObstacles','failAftermathObjectives'],
     '_walls': {
          'outsideBuilding': {
              'name': 'facingSchool',
              'image': 'facingSchool.jpg',
              'isCutscene': true,
              '_triggers' : ['startEBCconvo'],
              '_props': {
                  'ambulance': {
                      'name': 'ambulance',
                      'image': 'ambulance.png',
                      'width': 634,
                      'height': 500,
                      'left': 200,
                      'top': 100
                  },
                  'coordinator': {
                      'name': 'coordinator',
                      'image': 'responder.png',
                      'width': 350,
                      'height': 734,
                      'left': 375,
                      'top': 250,
                      'action': 'showConversation',
                      'actionVariables': {
                           'conversationName': 'Emergency Building Coordinator'
                      }
                  }
              }
          },
          'died' : {
              'name' : 'badEnding',
              'image' : 'dead.jpg',
              'isCutscene' : true,
              '_triggers' : ['failEvacuate']
          }
     }
}
