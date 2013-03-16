'completeAvoidObstacles' : {
	'events' : {
		'completeObjective' : ['avoidObstacles'],
		'addPoints' : 30
	}
},
'failAvoidObstacles' : {
	'events' : {
		'failObjective' : ['avoidObstacles'],
		'addToScene' : ['ambulance']
	},
	'disableTriggers' : ['completeAvoidObstacles','inBestEnding'],
	'enableTriggers'  : ['inInjuredEnding']
},