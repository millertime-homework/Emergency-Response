'activatePassout' : {
	'showOnScreenMessage' : ['In activatePassout'],
	'enableTriggers' : ['passout'],
	'lives' : Infinity
},
'deactivatePassout' : {
	'abortTriggers' : ['passout'],
	'lives' : Infinity
},
'passout' : {
	 'showOnScreenMessage' : ['You are passingout'],
	 'disabled' : true,
	 'enableTriggers' : ['playerInjured']
}