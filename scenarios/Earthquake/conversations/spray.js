'Spray': {
    '1':{
		'check' : [{'exists': ['rag'], 'goto': '3'}],
        'message': 'This cleaning spray is warm with the heat of the burner.',
        'replies': {
            'Leave it for the owner to move': 0,
            'Move it to the cabinets.': 2
        }
    },
    '2':{
        'triggers':['moveSpray','completeHeat']
    },
	'3':{
        'message': 'This cleaning spray is warm with the heat of the burner.',
        'replies': {
            'Leave it for the owner to move': 0,
            'Move it to the cabinets.': 4
        }
    },
	'4':{
        'triggers':['moveSpray']
    }
}
