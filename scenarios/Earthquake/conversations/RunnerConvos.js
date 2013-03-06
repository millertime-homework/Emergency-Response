'Lindsey' : {
	'1': {
		'message' : 'She is running for the main entrance, but she is close enough to hear you.',
		'replies' : {
			'Let her find her own way out of this mess.' : 3,
			'Yell to her: Hey that exit is blocked off. We\'ve got to use an exit in back.' : 2
		},
		'triggers' : ['TalktoRunner']
	},
	'2' : {
		'message' : 'Thank you so much.  I just want to get out of here.  I\'ll be ok from here.[Add she runs toward the rear exits.]',
		'replies' : {
			'Great, I\'m glad to have helped.' : 3
		}
	},
	'3' : {
		'triggers' : ['removeRunner']
	}

}