'hiComputer' : {
    'timeDelay' : 2000,
	'events' : {
		'showConversation' : ['Computer',null,true,true]
	},
	'startTriggers' : ['scoreERGpoints'],
    'deleteTriggers': ['hiComputer'],
    'lives': Infinity
},
'stopHiComputer' : {
	'abortTriggers' : ['hiComputer']
}