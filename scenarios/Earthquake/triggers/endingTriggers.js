'beginFailedEarthquakeEnding' : {
    'events' : {
		'warpPlayer' : ['died',0,0,12]
	},
	'startTriggers' : ['failedEarthquake'],
	'enableTriggers' : ['inFailedEarthquake'],
	'disableTriggers': ['inBestEnding']
},
'failedEarthquake' : {
	'timeDelay' : 2000,
	'events' : {
		'showConversation' : ['Did not survive.',null,true,true],
	}
},
'startReviewPrompt' : {
	'events' : {
		'showConversation' : ['Review Prompt',null,true,true]
	}
},
'startObjectiveReview' : {
	'events' : {
		'showConversation' : ['Objective Review',null,true,true]
	}
},
'inFailedEarthquake' : {
	'disabled' : true,
	'events': {
        'endGame': ['Game Over', 'You didn\'t find cover soon enough and you were struck by falling debris!']
    }
},
'beginFailedPowerLinesEnding' : {
	'events' : {
		'warpPlayer' : ['died',0,0,12]
	},
	'enableTriggers': ['inFailedPowerLines'],
	'startTriggers':['failedPowerLines'],
	'disableTriggers': ['inBestEnding','inInjuredEnding']
},
'failedPowerLines' : {
	'timeDelay' : 2000,
	'events' : {
		'showConversation' : ['Killed by power lines.',null,true,true],
	}
},
'inFailedPowerLines' : {
	'disabled' : true,
	'events' : {
		'endGame': ['Game Over', 'When passing you accidentally got too close to the live power lines, which is a fatal mistake.']
	}
},
'inInjuredEnding' : {
	'disabled' : true,
	'events' : {
		'endGame': ['Game Over', 'You got badly injured during the evacuation.  But, after some time in the hospital you\'ll be ok.']
	},
    'lives' : Infinity
},
'inBestEnding' : {
	'events' : {
		'endGame': ['Game Over', 'You successfully survived the earthquake and evacuated the building without injury. Good job!']
	},
	'lives' : Infinity
}