'activateElectrocute' : {
	'enableTriggers' : ['electrocute'],
	'lives' : Infinity
},
'deactivateElectrocute' : {
	'disableTriggers' : ['electrocute'],
	'lives' : Infinity
},
'electrocute' : {
	'disabled' : true,
	'lives' : Infinity,
	'startTriggers' : ['failAvoidObstacles'],
	'events' : {
		'endGame': ['Game Over', 'When passing you accidentally got too close to the live power lines, which is a fatal mistake.'],
	}
}