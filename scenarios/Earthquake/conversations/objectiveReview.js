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
					' a face mask, first aid plus items like a flashlight and a whistle.' +
					' Keep one accessible to you in your normal daily routine and you\'ll always be prepared.',
		'replies' : {
			'To do better in this simulation; Pack a complete Go-Kit before heading to school.' : 2,
			'I\'m done with this review' : 9
		}
	},
	'2' : {
	    'check' : [ {'objectivesCompleted':['moveHeavyObjects'], 'goto': '3'}],
		'message' : 'Things fall in an earthquake.  Make sure the heavy objects are stored close to ' +
		            'the ground so they do not become hazardous during an evacuation. ',
		'replies' : {
			'To do better in this simulation; Help prepare the school for an earthquake by moving a heavy  object' : 3,
			'I\'m done with this review' : 9
		}			
	},
	'3' : {
	    'check' : [ {'objectivesCompleted':['awayFromHeat'], 'goto': '4'}],
		'message' : 'Flammable objects should never be stored near a heat source.  '+
		            'Whan an earthquake strikes, they can create a fire hazard.  ',
		'replies' : {
			'To do better in this simulation; Help prepare the school for an earthquake by moving flammable objects away from heat sources.' : 4,
			'I\'m done with this review' : 9
		}			
	},
	'4' : {
	    'check' : [{'objectivesCompleted':['fixPlaque'], 'goto': '5'}],
		'message' : 'The violent movement of an earthquake can cause pictures and bookcases that are not properly ' +
		            'secured to fall and break - creating additional obstacles during evacuating.  '+
					'Make sure your evacuation route is as clear as possible by fastening pictures and bookcase straps '+
					'to the stud in the wall.',
		'replies' : {
			'To challenge yourself in this simulation; Help prepare the school for an earthquake by securing a large wall plaque.' : 5,
			'I\'m done with this review' : 9
		}					
	},
    '5' : {
		'check' : [{'objectivesCompleted':['moveBike'], 'goto': '6'}],
		'message' : 'Evacuating from the building after an earthquake is critical.  '+
		            'Avoid blocking exits to ensure the easiest evacuation possible. ',
	    'replies' : {
			'To master in this simulation; Help prepare the school for an earthquake by moving objects blocking the exits.' : 6,
			'I\'m done with this review' : 9
		}
	},
	'6' : {
		'check' : [{'objectivesCompleted':['saveJames'], 'goto': '7'}],
		'message' : 'Earthquakes create victims.  Help people who are in need of assistance '+
		            'if it is safe to do so.',
        'replies' : {
			'To improve in this simulation; Assist another survivor when it is safe to do so.' : 7,
			'I\'m done with this review' : 9
		}
	},
    '7' : {
	    'check' : [{'objectivesCompleted':['saveXavier'], 'goto': '8'}],
		'message' : 'Some people get so badly injured in an earthquake that evacuating them ' +
		            'outside the building isn\'t possible without proper training and equipment.  '+
					'If you can, help these people to a clearly marked Area of Rescue,  '+
					'usually located at the top of a stair case.',
		'replies' : {
			'To do better in this simulation; Help a fellow survivor to the Area of Rescue.' : 8,
			'I\'m done with this review' : 9
		}
	},
	'8' : {
    	    'check' : [{'objectivesCompleted':['saveXavier'], 'goto': '9'}],
			'message' : 'Chaos often follows an earthquake.  ' +
			            'If you see someone panicked or heading toward a blocked exit, '+
						'try to calm them down and help them evacuating.',
		'replies' : {
			'To improve your performance by directing others towards exits.' : 9,
			'I\'m done with this review' : 9
		}	
	},
	'9' : {
		'triggers' : ['inFailedEarthquake','inFailedPowerLines','inInjuredEnding','inBestEnding']
	}
}
