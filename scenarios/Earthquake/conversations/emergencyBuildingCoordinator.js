'Emergency Building Coordinator' : {
	'1' : {
		'message' : 'Hey we\’ve got a survivor here!  I\’m the Emergency Building Coordinator on duty today.  '+
		            'My job is to coordinate the efforts of gathering and helping victims of events like this.  ' + 
		            'Please tell me your name so I can register your status as a survivor.',
		'replies' : {
			'I tell her my name.' : 2
		},
		'triggers' : ['killstartEBC']
	},
	'2' : {
		'check' : [ {'objectivesCompleted':['saveXavier'], 'goto': '3'}],
		'message' : 'Ok, We\’ve setup an Assembly Area right over there head that way and we\’ll try to let your family know you\’re alright.',
		'replies' : {
			'Go to the Assembly Area.' : 5
		}
	},
	'3' : {
		'message' : 'Ok, We\’ve setup an Assembly Area right over there head that way and we\’ll try to let your family know you\’re alright.',
		'replies' : {
			'Tell her that Professor Xavier is at the area of rescue on the 2nd floor.' : 4,
			'Go to the Assembly Area.' : 5
		}
	},
	'4' : { 
		'message' : 'Oh? I\’m glad the Professor is alive; I\’ll let the firefighters know where he is.  Some victims of earthquakes come out of the event with new disabilities.  I hope he\’ll be ok.',
		'replies' : {
			'Go to the Assembly Area.' : 5
		}
	},
	'5' : {
	    'triggers' : ['startReviewPrompt']
	}
}