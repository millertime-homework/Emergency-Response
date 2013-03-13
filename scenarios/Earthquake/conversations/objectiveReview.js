'Review Prompt' : {
	'1' : {
		'message' : 'You survived the earthquake!',
		'replies' : {
			'I would like to know what I could do better for next time.' : 2,
			'I\'m ready to play again.' : 3
		},
	},
	'2' :{
		'triggers' : ['startObjectiveReview']
	},
	'3' : {
		'triggers' : ['inInjuredEnding','inBestEnding']
	}
},
'Objective Review' : {
	'1' : {
	    'check' : [ {'objectivesCompleted':['packForSchool'], 'goto': '2'}],
		'message' : 'A Go-Kit is an important tool to have in case a disaster strikes.' +  
		            ' A Go-Kit should contain first aid, basic supplies like food and water,' +
					'plus essential tools like a flashlight or a whistle to help in tough situations.' +
					' Keep one accessible to you in your normal daily routine and you’ll always be prepared.',
		'replies' : {
			'To do better in this simulation; Pack a complete Go-Kit before heading to school.' : 2,
			'I\'m done with this review' : 9
		}
	},
	'2' : {
	    'check' : [ {'objectivesCompleted':['moveHeavyObjects'], 'goto': '3'}],
		'message' : 'Things fall in an earthquake.  Make sure the heavy objects are stored close to ' +
		            'the ground so they do not become hazards should you need to evacuate. ',
		'replies' : {
			'To do better in this simulation; Help prepare the school for an earthquake by making a heavy object safer.' : 3,
			'I\'m done with this review' : 9
		}			
	},
	'3' : {
	    'check' : [ {'objectivesCompleted':['awayFromHeat'], 'goto': '4'}],
		'message' : 'Flammable objects should never be stored near a heat source.  '+
		            'In the chaos of an earthquake these things become more of a fire hazard.  '+
					'Dealing with a fire is stressful enough, it’s not something you want to deal '+
					'with just after an earthquake.',
		'replies' : {
			'To do better in this simulation; Help prepare the school for an earthquake by moving flammable objects away from heat sources.' : 4,
			'I\'m done with this review' : 9
		}			
	},
	'4' : {
	    'check' : [{'objectivesCompleted':['fixPlaque'], 'goto': '5'}],
		'message' : 'The violent movement of an earthquake can cause pictures and bookcases that are not properly ' +
		            'secured to fall and break.  This creates more obstacles for you to overcome when evacuating.  '+
					'Make sure your evacuation route is as clear as possible by fastening pictures and bookcase straps '+
					'to the stud in the wall.',
		'replies' : {
			'To do better in this simulation; Help prepare the school for an earthquake by making sure a plaque is secure.' : 5,
			'I\'m done with this review' : 9
		}					
	},
    '5' : {
		'check' : [{'objectivesCompleted':['moveBike'], 'goto': '6'}],
		'message' : 'Evacuating from the building after an earthquake is the most important objective.  '+
		            'Avoid blocking exits to ensure the easiest evacuation possible. ',
	    'replies' : {
			'To do better in this simulation; Help prepare the school for an earthquake by moving objects blocking the exits.' : 6,
			'I\'m done with this review' : 9
		}
	},
	'6' : {
		'check' : [{'objectivesCompleted':['saveJames'], 'goto': '7'}],
		'message' : 'People get wounded in earthquakes.  Help people you think are in need of assistance '+
		            'if it is safe to do so.',
        'replies' : {
			'To do better in this simulation; Assist another survivor when it is safe to do so.' : 7,
			'I\'m done with this review' : 9
		}
	},
    '7' : {
	    'check' : [{'objectivesCompleted':['saveXavier'], 'goto': '8'}],
		'message' : 'Some people get so badly injured in an earthquake that evacuating them ' +
		            'outside the building isn’t possible without proper equipment.  '+
					'If you can, help these people to a clearly marked area of rescue.  '+
					'When no area of rescue is available move them to the landing of a stair case.',
		'replies' : {
			'To do better in this simulation; Help a fellow survivor to the area of rescue.' : 8,
			'I\'m done with this review' : 9
		}
	},
	'8' : {
    	    'check' : [{'objectivesCompleted':['saveXavier'], 'goto': '9'}],
			'message' : 'A lot is going on just after an earthquake.  ' +
			            'If you see someone panicked or heading toward an exit you '+
						'know is blocked, try to calm them down and finish evacuating together.',
		'replies' : {
			'To do better in this simulation; Point direct other survivors towards exits that may be usable.' : 9,
			'I\'m done with this review' : 9
		}	
	},
	'9' : {
		'check' : [{'triggersDisabled':['inFailedEarthquake'], 'goto': '10'}],
		'triggers' : ['failedToTakeCover']
	},
	'10' : {
		'check' : [{'triggersDisabled':['inFailedPowerLines'], 'goto': '11'}],
		'triggers' : ['gameOverPowerLines']
	},
	'11' : {
		'check' : [{'triggersDisabled':['inInjuredEnding'], 'goto': '12'}],
		'triggers' : ['inInjuredEnding']
	},
	'12' : {
		'triggers' : ['inBestEnding']
	}
}
