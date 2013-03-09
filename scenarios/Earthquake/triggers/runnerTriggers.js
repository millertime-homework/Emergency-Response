'girlRunspast' : {
	'events' : {
		'warpPlayer' : ['Runscene'],
		'showOnScreenMessage' : ['As your moving down the hallway a man comes out of a nearby classroom and runs past you.']
	},
	'startTriggers': ['ShePasses'],
},
'ShePasses' : {
	'timeDelay' : 4000,
	'events' : {
		'warpPlayer': ['n'],
        'showOnScreenMessage': ['If you hurry you can catch him back down the hall.'],
		'addToScene' : ['GirlRunner2']
	},
	'startTriggers' : ['RunnerTimer']
},
'RunnerTimer' : {
    'lives': Infinity,
	'timeDelay' : 20000,
	'events' : {
		'removeFromScene' : ['GirlRunner2'],
		'showOnScreenMessage': ['He\'s gone too far to catch now.'] 
	}
},
'TalktoRunner' : {
	'abortTriggers' : ['RunnerTimer']
},
'removeRunner' : {
    'lives': Infinity,
	'events' : {
		'removeFromScene' : ['GirlRunner2'],
	}
}