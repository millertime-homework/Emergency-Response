'activateFootInjury' : {
	'enableTriggers' : ['playerInjured','footInjury'],
	'startTriggers' : ['failAvoidObstacles'],
	'events' : {
		'showOnScreenMessage' : ['Ouch! Glass cuts through the sandals slicing your feet.'],
	}
} ,
'footInjury' : {
	'disabled' : true,
	'lives' : Infinity,
	'events' : {
		'showOnScreenMessage' : ['Ouch, the glass is digging into my feet']
	}
}