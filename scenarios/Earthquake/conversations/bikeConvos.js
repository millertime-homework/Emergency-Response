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
},
'A Bike against the wall' : {
	'1' : {
		'message' : 'The bike now rests propped up against the wall.',
		'replies' : {
			'Excellent, it\'s all safe now.' : 0
		}
	}
},
'A Mangled Bike' : {
	'1' : {
		'message' : 'A mangled bike pinned by a fallen beam blocks this exit making it impossible to use.',
		'replies' : {
			'If someone hadn\'t left their bike blocking the exit.' : '0'
		}
	}
},
'A Bike against the wall.' : {
	'1' : {
		'message' : 'A bike leans against the wall safely.',
		'replies' : {
			'I\'m glad I moved it to a safer spot.  That beam would\'ve damaged it.' : '0'
		}
	}
}
