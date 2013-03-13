'failedEarthquake' : {
	'events' : {
		'showConversation' : ['Did not survive.',null,true],
		'warpPlayer' : ['badEnding',0,0,12]
	},
	'enableTriggers' : ['inFailedEarthquake'],
	
},
'startObjectiveReview' : {
	'events' : {
		'showConversation' : ['Objective Review',null,true]
	}
},
'inFailedEarthquake' : {
	'disabled' : true
},
'failedToTakeCover' : {
    'events': {
        'endGame': ['Game Over', 'You didn\'t find cover soon enough and you were struck by falling debris!']
    }
},
'failedPowerLines' : {
	'events' : {
		'showConversation' : ['Killed by power lines.',null,true],
		'warpPlayer' : ['badEnding',0,0,12]
	},
	'enableTriggers' : ['inFailedPowerLines']
},
'inFailedPowerLines' : {
	'disabled' : true
},
'gameOverPowerLines' : {
    'events' : {
		'endGame': ['Game Over', 'When passing you accidentally got too close to the live power lines, which is a fatal mistake.']
	}
}