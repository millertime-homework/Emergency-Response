'Rag': {
    '1':{
	    'check' : [{'exists': ['bugSpray'], 'goto': '3'}],
        'message': 'There is a rag lying near the burner.',
        'replies': {
            'Leave it were it is.' : 0,
            'Move it to a safer place' : 2
        }
    },
    '2':{
        'triggers':['moveRag','completeHeat']
    },
	'3':{
        'message': 'There is a rag lying near the burner.',
        'replies': {
            'Leave it were it is.' : 0,
            'Move it to a safer place' : 4
        }
    },
	'4':{
        'triggers':['moveRag']
    }
}
