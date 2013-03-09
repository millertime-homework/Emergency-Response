'girlRunspast' : {
	'events' : {
		'warpPlayer' : ['Runscene'],
<<<<<<< HEAD
		'showOnScreenMessage' : ['As your moving down the hallway a man comes out of a nearby classroom and runs past you.']
=======
		'showOnScreenMessage' : ['As you move down the hallway a woman comes out of a nearby classroom and runs past you.']
>>>>>>> 9a15a346d6e9dac8a9304993f8b8b0d61eff5299
	},
	'startTriggers': ['ShePasses'],
},
'ShePasses' : {
<<<<<<< HEAD
	'timeDelay' : 4000,
	'events' : {
		'warpPlayer': ['n'],
        'showOnScreenMessage': ['If you hurry you can catch him back down the hall.'],
=======
	'timeDelay' : 5000,
	'events' : {
		'warpPlayer': ['n'],
        'showOnScreenMessage': ['If you hurry you can catch her back down the hall.'],
>>>>>>> 9a15a346d6e9dac8a9304993f8b8b0d61eff5299
		'addToScene' : ['GirlRunner2']
	},
	'startTriggers' : ['RunnerTimer']
},
'RunnerTimer' : {
    'lives': Infinity,
	'timeDelay' : 20000,
	'events' : {
<<<<<<< HEAD
		'removeFromScene' : ['GirlRunner2'],
		'showOnScreenMessage': ['He\'s gone too far to catch now.'] 
=======
		'removeFromScene' : ['GirlRunner2']
>>>>>>> 9a15a346d6e9dac8a9304993f8b8b0d61eff5299
	}
},
'TalktoRunner' : {
	'abortTriggers' : ['RunnerTimer']
},
'removeRunner' : {
    'lives': Infinity,
	'events' : {
<<<<<<< HEAD
		'removeFromScene' : ['GirlRunner2'],
=======
		'removeFromScene' : ['GirlRunner2']
>>>>>>> 9a15a346d6e9dac8a9304993f8b8b0d61eff5299
	}
}