'Did not survive.' : {
	'1' : {
		'message' : 'You failed to take cover during the earthquake.  As a result you were fatally wounded by a falling object.  You can protect yourself during an actual earthquake following three simple steps: Drop, Cover, Hold.  First, get low to the ground.  Next, find a sturdy object to hide under.  Last, hold on until the shaking stops and it is safe to evacuate the building.',
		'replies' : {
			'I would like to know what I could do better for next time.' : 2,
			'I\'m ready to play again.' : 3
		},
	},
	'2' :{
		'triggers' : ['startObjectiveReview']
	},
	'3' : {
		'triggers' : ['inFailedEarthquake']
	}
}