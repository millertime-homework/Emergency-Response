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
					  'image': 'ambulance.jpg', 
					  'width': 634, 
					  'height': 500, 
					  'left': 200, 
					  'top': 200 
                  },
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
		  'died' : {
		      'name' : 'badEnding',
			  'image' : 'blackout.jpg',
			  'isCutscene' : true,
			  '_triggers' : ['failEvacuate']
		  }
     }
}
