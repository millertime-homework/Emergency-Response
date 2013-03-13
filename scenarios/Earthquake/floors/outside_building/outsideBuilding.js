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
			  '_triggers' : ['startEBCconvo'],
              '_props': {
                  'coordinator': {
                      'name': 'coordinator',
                      'image': 'responder4.png',
                      'width': 350,
                      'height': 734,
                      'left': 125,
                      'top': 250,
                      'action': 'showConversation',
                      'actionVariables': {
                           'conversationName': 'Emergency Building Coordinator'
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
