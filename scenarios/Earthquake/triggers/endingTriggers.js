'failedEarthquake' : {
	'events' : {
		'showConversation' : ['Did not survive.',null,true],
		'warpPlayer' : ['badEnding',0,0,12]
	},
	'enableTriggers' : ['inFailedEarthquake'],
	
},
'startReviewPrompt' : {
	'events' : {
		'showConversation' : ['Review Prompt',null,true]
	}
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
},
'inInjuredEnding' : {
	'disabled' : true,
	'events' : {
		'endGame': ['Game Over', 'You got badly injured during the evacuation.  But, after some time in the hospital you\'ll be ok.']
	}
},
'inBestEnding' : {
	'events' : {
		'endGame': ['Game Over', 'You successfully survived the earthquake and evacuated the building without injury. Good job!']
	}
}