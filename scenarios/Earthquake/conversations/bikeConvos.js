'A Bike' : {
	'1':{
		'message' : 'A bike is leaning against the exit door.',
		'replies' : {
			'I wouldn\'t want to move someone else\'s property.' : '0',
			'Move the bike against the wall.' : '2'
		}
    },
    '2':{
        'triggers':['moveBike','moveBeam']
    }
}