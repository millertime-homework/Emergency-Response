'outsideBuilding': {
     'id': 'outside',
     'x': 0,
     'y': 0,
	 '_triggers' : ['completeAvoidObstacles'],
     '_walls': {
          'facingSchool': {
              'name': 'facingSchool',
              'image': 'facingSchool.jpg',
              'isCutscene': true,
              '_props': {
                  'coordinator': {
                      'name': 'coordinator',
                      'image': 'policeman.png',
                      'width': 350,
                      'height': 441,
                      'left': 200,
                      'top': 300,
                      'action': 'showConversation',
                      'actionVariables': {
                           'conversationName': 'coordinatorConvo'
                      }
                  }
              }
          },
		  'badEnding' : {
		      'name' : 'badEnding',
			  'image' : 'blackout.jpg',
			  'isCutscene' : true
		  }
     }
}
