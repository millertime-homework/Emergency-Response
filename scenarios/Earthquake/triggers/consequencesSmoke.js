'activatePassout' : {
	'enableTriggers' : ['passout'],
	'disableTriggers' : ['aftershock'],
	'lives' : Infinity
},
'deactivatePassout' : {
	'disableTriggers' : ['passout'],
	'enableTriggers' : ['aftershock'],
	'lives' : Infinity
},
'passout' : {
	'timeDelay' : 250,
	'enableTriggers' : ['playerInjured'],
	'startTriggers' : ['wakeup','failAvoidObstacles'],
    'events' : {
	    'warpPlayer' : ['blackout',3,3,8],
		'showOnScreenMessage' : ['The smoke clouds your vision as you wade through it.  Your lungs heave.  You collaspe to the floor and black out.']
	},
	'disabled' : true,
	'disableTriggers' : ['passout'],
	'lives' : Infinity
},
'wakeup' : {
	'timeDelay' : 5000,
	'events' : {
		'warpPlayer' : ['n'],
		'showOnScreenMessage' : ['You wake up some time later still coughing, but alive.']
	},
	'lives' : Infinity
}