'girlRunspast' : {
	'events' : {
		'warpPlayer' : ['Runscene'],
		'showOnScreenMessage' : ['As you move down the hallway a woman comes out of a nearby classroom and runs past you.']
	},
	'startTriggers': ['ShePasses'],
},
'ShePasses' : {
	'timeDelay' : 5000,
	'events' : {
		'warpPlayer': ['n'],
        'showOnScreenMessage': ['If you hurry you can catch her back down the hall.'],
		'addToScene' : ['GirlRunner2']
	},
	'startTriggers' : ['RunnerTimer']
},
'RunnerTimer' : {
    'lives': Infinity,
	'timeDelay' : 20000,
	'events' : {
		'removeFromScene' : ['GirlRunner2']
	}
},
'TalktoRunner' : {
	'abortTriggers' : ['RunnerTimer']
},
'removeRunner' : {
    'lives': Infinity,
	'events' : {
		'removeFromScene' : ['GirlRunner2']
	}
}