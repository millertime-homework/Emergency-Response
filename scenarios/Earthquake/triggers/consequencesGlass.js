'activateFootInjury' : {
	'enableTriggers' : ['playerInjured','footInjury'],
	'events' : {
		'showOnScreenMessage' : ['Ouch! Glass cuts through the sandals slicing your feet.'],
		'failObjective' : ['avoidObstacles']
	}
} ,
'footInjury' : {
	'disabled' : true,
	'lives' : Infinity,
	'events' : {
		'showOnScreenMessage' : ['Ouch, the glass is digging into my feet']
	}
}