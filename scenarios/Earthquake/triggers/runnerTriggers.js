'lukeRunsPast' : {
    'disabled' : true,
	'events' : {
		'warpPlayer' : ['Runscene'],
		'showOnScreenMessage' : ['As your moving down the hallway a man comes out of a nearby classroom and runs past you.']
	},
	'startTriggers': ['HePasses'],
},
'HePasses' : {
	'timeDelay' : 4000,
	'events' : {
		'warpPlayer': ['n'],
        'showOnScreenMessage': ['If you hurry you can catch him back down the hall.'],
		'addToScene' : ['Luke2']
	},
	'startTriggers' : ['RunnerTimer']
},
'RunnerTimer' : {
    'lives': Infinity,
	'timeDelay' : 20000,
	'events' : {
		'removeFromScene' : ['Luke2'],
		'showOnScreenMessage': ['He\'s gone too far to catch now.'] 
	}
},
'TalktoRunner' : {
	'abortTriggers' : ['RunnerTimer']
},
'removeRunner' : {
    'lives': Infinity,
	'events' : {
		'removeFromScene' : ['Luke2'],
	}
}