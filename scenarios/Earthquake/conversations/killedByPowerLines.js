'Killed by power lines.' : {
	'1' : {
		'message' : 'You failed to avoid a fatal obstacle.  During an earthquake evacuation it is important to '+
		            'remain calm and think about the situation.',
		'replies' : {
			'I would like to know what I could do better for next time.' : 2,
			'I\'m ready to play again.' : 3
		},
	},	
    '2' :{
		'triggers' : ['startObjectiveReview']
	},
	'3' : {
		'triggers' : ['inFailedPowerLines']
	}
}