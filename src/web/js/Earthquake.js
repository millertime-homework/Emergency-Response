earthquakeDef = {
    'name': 'Earthquake Scenario',
    '_floors': {
        'First Floor': {
            'z': 0,
            '_rooms': {
                /* 1,0,0 no images yet
                'room100': {
                    'id': 'hall100', 
                    'x': 1, 
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall100', 
                            'image': 'R100-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall100',
                            'image': 'R100-west.jpg'
                        },
                        'n': {
                            'name': 'NHall100',   
                            'image': 'R100-north.jpg',
                        },
                        's': {
                            'name': 'SHall100', 
                            'image': 'R100-south.jpg'
                        }
                    }
                },
                */
				'room200': {
                    'id': 'hall200', 
                    'x': 2, 
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall200', 
                            'image': 'R200-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'w': {
                            'name': 'WHall200',
                            'image': 'R200-west.jpg' /*, can't go to 1,0,0 it's commented out
                            'destination': {
                                'x': 1
                            }
                            */
                        },
                        'n': {
                            'name': 'NHall200',   
                            'image': 'R200-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SHall200', 
                            'image': 'R200-south.jpg'
                        }
                    }
                },
                'room300': {
                    'id': 'hall300', 
                    'x': 3, 
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall300', 
                            'image': 'R300-east.jpg',
                            'destination': {
                                'x': 4
                            }

                        },
                        'w': {
                            'name': 'WHall300',
                            'image': 'R300-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NHall300',   
                            'image': 'R300-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SHall300', 
                            'image': 'R300-south.jpg'
                        }
                    }
                },
				'room400': {
                    'id': 'hall400', 
                    'x': 4, 
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall400', 
                            'image': 'R400-east.jpg' /*, can't go to 5,0,0 it's commented out
                            'destination': {
                                'x': 5
                            }
                            */
                        },
                        'w': {
                            'name': 'WHall400',
                            'image': 'R400-west.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'n': {
                            'name': 'NHall400',   
                            'image': 'R400-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SHall400', 
                            'image': 'R400-south.jpg'
                        }
                    }
                },
                /* 5,0,0 no images yet
				'room500': {
                    'id': 'hall500', 
                    'x': 5, 
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall500', 
                            'image': 'R500-east.jpg',
                        },
                        'w': {
                            'name': 'WHall500',
                            'image': 'R500-west.jpg',
                            'destination': {
                                'x': 4
                            }
                        },
                        'n': {
                            'name': 'NHall500',   
                            'image': 'R500-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SHall500', 
                            'image': 'R500-south.jpg'
                        }
                    }
                },
                */
				'room110': {
                    'id': 'hall110', 
                    'x': 1, 
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall110', 
                            'image': 'R110-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall110',
                            'image': 'R110-west.jpg'
                        },
                        'n': {
                            'name': 'NHall110',   
                            'image': 'R110-north.jpg',
                        },
                        's': {
                            'name': 'SHall110', 
                            'image': 'R110-south.jpg'
                        }
                    }
                },
				'room210': {
                    'id': 'hall210', 
                    'x': 2, 
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall210', 
                            'image': 'R210-east.jpg',
                        },
                        'w': {
                            'name': 'WHall210',
                            'image': 'R210-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NHall210',   
                            'image': 'R210-north.jpg',
                            'destination': {
                                'y': 2
                            }
                        },
                        's': {
                            'name': 'SHall210', 
                            'image': 'R210-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                'room310': {
                    'id': 'hall310', 
                    'x': 3, 
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall310', 
                            'image': 'R310-east.jpg',
                        },
                        'w': {
                            'name': 'WHall310',
                            'image': 'R310-west.jpg'
                        },
                        'n': {
                            'name': 'NHall310',   
                            'image': 'R310-north.jpg',
                        },
                        's': {
                            'name': 'SHall310', 
                            'image': 'R310-south.jpg',
							'destination': {
                                'y': 0
                            }
                        }
                    }
                },
				'room410': {
                    'id': 'hall410', 
                    'x': 4, 
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall410', 
                            'image': 'R410-east.jpg',
                        },
                        'w': {
                            'name': 'WHall410',
                            'image': 'R410-west.jpg'
                        },
                        'n': {
                            'name': 'NHall410',   
                            'image': 'R410-north.jpg',
                            'destination': {
                                'y': 2
                            }
                        },
                        's': {
                            'name': 'SHall410', 
                            'image': 'R410-south.jpg',
							'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                /* 5,1,0 no images yet
				'room510': {
                    'id': 'hall510', 
                    'x': 5, 
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall510', 
                            'image': 'R510-east.jpg',
                        },
                        'w': {
                            'name': 'WHall510',
                            'image': 'R510-west.jpg'
                        },
                        'n': {
                            'name': 'NHall510',   
                            'image': 'R510-north.jpg',
                            'destination': {
                                'y': 2
                            }
                        },
                        's': {
                            'name': 'SHall510', 
                            'image': 'R510-south.jpg',
							'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                */
				'room120': {
                    'id': 'hall120', 
                    'x': 1, 
                    'y': 2,
                    '_triggers' : ['dolphinFound'],
                    '_walls': {
                        'e': {
                            'name': 'EHall120', 
                            'image': 'R120-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall120',
                            'image': 'R120-west.jpg',                            
                            '_clickables' : {
                                'dolphin' : {
                                    'image': 'dolphin.png',
                                    'hoverImage' : 'dolphinhover.png',
                                    'top' : 200,
                                    'left' : 200,
                                    'height': 256,
                                    'width' : 499,
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall120',   
                            'image': 'R120-north.jpg'
                        },
                        's': {
                            'name': 'SHall120', 
                            'image': 'R120-south.jpg'
                        }
                    }
                },
				'room220': {
                    'id': 'hall220', 
                    'x': 2, 
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall220', 
                            'image': 'R220-east.jpg' /*, can't go to 2,2,0 it's commented out
                            'destination': {
                                'x': 3
                            }
                            */
                        },
                        'w': {
                            'name': 'WHall220',
                            'image': 'R220-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NHall220',   
                            'image': 'R220-north.jpg',
                            'destination': {
                                'y': 3
                            }
                        },
                        's': {
                            'name': 'SHall220', 
                            'image': 'R220-south.jpg',
							'destination': {
                                'y': 1
                            }
                        }
                    }
                },
                /* 3,2,0 no images yet
                'room320': {
                    'id': 'hall320', 
                    'x': 3, 
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall320', 
                            'image': 'R320-east.jpg',
                            'destination': {
                                'x': 4
                            }
                        },
                        'w': {
                            'name': 'WHall320',
                            'image': 'R320-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NHall320',   
                            'image': 'R320-north.jpg'
                        },
                        's': {
                            'name': 'SHall320', 
                            'image': 'R320-south.jpg'
                        }
                    }
                },
                */
				'room420': {
                    'id': 'hall420', 
                    'x': 4, 
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall420', 
                            'image': 'R420-east.jpg' /*, can't go to 4,2,0 it's commented out
                            'destination': {
                                'x': 4
                            }
                            */
                        },
                        'w': {
                            'name': 'WHall420',
                            'image': 'R420-west.jpg' /*, can't go to 2,2,0 it's commented out
                            'destination': {
                                'x': 2
                            }
                            */
                        },
                        'n': {
                            'name': 'NHall420',   
                            'image': 'R420-north.jpg',
                            'destination': {
                                'y': 3
                            }
                        },
                        's': {
                            'name': 'SHall420', 
                            'image': 'R420-south.jpg',
							'destination': {
                                'y': 1
                            }
                        }
                    }
                },
                /* 5,2,0 no images yet
				'room520': {
                    'id': 'hall520', 
                    'x': 5, 
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall520', 
                            'image': 'R520-east.jpg'
                        },
                        'w': {
                            'name': 'WHall520',
                            'image': 'R520-west.jpg',
                            'destination': {
                                'x': 4
                            }
                        },
                        'n': {
                            'name': 'NHall520',   
                            'image': 'R520-north.jpg'
                        },
                        's': {
                            'name': 'SHall520', 
                            'image': 'R520-south.jpg',
							'destination': {
                                'y': 1
                            }
                        }
                    }
                },
                */
				'room130': {
                    'id': 'hall130', 
                    'x': 1, 
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall130', 
                            'image': 'R130-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall130',
                            'image': 'R130-west.jpg'
                        },
                        'n': {
                            'name': 'NHall130',   
                            'image': 'R130-north.jpg',
                        },
                        's': {
                            'name': 'SHall130', 
                            'image': 'R130-south.jpg'
                        }
                    }
                },
				'room230': {
                    'id': 'hall230', 
                    'x': 2, 
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall230', 
                            'image': 'R230-east.jpg'
                        },
                        'w': {
                            'name': 'WHall230',
                            'image': 'R230-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NHall230',   
                            'image': 'R230-north.jpg',
                            'destination': {
								'x': 2,
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SHall230', 
                            'image': 'R230-south.jpg',
                            'destination': {
                                'y': 2
                            }
                        }
                    }
                },
                /* 3,3,0 no images yet
                'room330': {
                    'id': 'hall330', 
                    'x': 3, 
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall330', 
                            'image': 'R330-east.jpg',
							'destination': {
                                'x': 4
                            }
                        },
                        'w': {
                            'name': 'WHall330',
                            'image': 'R330-west.jpg',
							'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NHall330',   
                            'image': 'R330-north.jpg',
							'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SHall330', 
                            'image': 'R330-south.jpg',
							'destination': {
                                'y': 2
                            }
                        }
                    }
                },
                */
				'room430': {
                    'id': 'hall430', 
                    'x': 4, 
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall430', 
                            'image': 'R430-east.jpg',
							'destination': {
                                'x': 5
                            }
                        },
                        'w': {
                            'name': 'WHall430',
                            'image': 'R430-west.jpg'
                        },
                        'n': {
                            'name': 'NHall430',   
                            'image': 'R430-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SHall430', 
                            'image': 'R430-south.jpg',
							'destination': {
                                'y': 2
                            }
                        }
                    }
                },
				'room530': {
                    'id': 'hall530', 
                    'x': 5, 
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall530', 
                            'image': 'R530-east.jpg',
                        },
                        'w': {
                            'name': 'WHall530',
                            'image': 'R530-west.jpg',
							'destination': {
                                'x': 4
                            }
                        },
                        'n': {
                            'name': 'NHall530',   
                            'image': 'R530-north.jpg' /*, can't go to 5,4,0 it's commented out
							'destination': {
								'x': 5,
                                'y': 4
                            }
                            */
                        },
                        's': {
                            'name': 'SHall530', 
                            'image': 'R530-south.jpg'
                        }
                    }
                },
                /* 0,4,0 no images yet
				'room040': {
                    'id': 'hall040', 
                    'x': 0, 
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall040', 
                            'image': 'R040-east.jpg',
							'destination': {
                                'x': 1
                            }
                        },
                        'w': {
                            'name': 'WHall040',
                            'image': 'R040-west.jpg'
                        },
                        'n': {
                            'name': 'NHall040',   
                            'image': 'R040-north.jpg'
                        },
                        's': {
                            'name': 'SHall040', 
                            'image': 'R040-south.jpg'
                        }
                    }
                },
                */
                /* 1,4,0 no images yet
				'room140': {
                    'id': 'hall140', 
                    'x': 1, 
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall140', 
                            'image': 'R140-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall140',
                            'image': 'R140-west.jpg',
                            'destination': {
                                'x': 0
                            }
                        },
                        'n': {
                            'name': 'NHall140',   
                            'image': 'R140-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SHall140', 
                            'image': 'R140-south.jpg'
                        }
                    }
                },
                */
                'room240': {						//Room Name
                    'id': 'hall240', 
                    'x': 2, 						//Room Location on a grid?
                    'y': 4,  
                    '_triggers' : ['sampleObjective'],
                    '_walls': {
                        'e': {
                            'name': 'EHall240', 
                            'image': 'R240-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'w': {
                            'name': 'WHall240',
                            'image': 'R240-west.jpg' /*, can't go to 1,4,0 it's commented out
                            'destination': {
                                'x': 1
                            }
                            */
                        },
                        'n': {
                            'name': 'NHall240',   
                            'image': 'R240-north.jpg'
                        },
                        's': {
                            'name': 'SHall240', 
                            'image': 'R240-south.jpg',
							'destination': {
                                'y': 3
                            }
                        }
                    }
                },
				'room340': {
                    'id': 'hall340', 
                    'x': 3, 
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall340', 
                            'image': 'R340-east.jpg',
                            'destination': {
                                'x': 4
                            }
                        },
                        'w': {
                            'name': 'WHall340',
                            'image': 'R340-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NHall340',   
                            'image': 'R340-north.jpg'
                        },
                        's': {
                            'name': 'SHall340', 
                            'image': 'R340-south.jpg'
                        }
                    }
                },
				'room440': {
                    'id': 'hall440', 
                    'x': 4, 
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall440', 
                            'image': 'R440-east.jpg' /*, can't go to 5,4,0 it's commented out
							'destination': {
                                'x': 5
                            }
                            */
                        },
                        'w': {
                            'name': 'WHall440',
                            'image': 'R440-west.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'n': {
                            'name': 'NHall440',   
                            'image': 'R440-north.jpg',
                        },
                        's': {
                            'name': 'SHall440', 
                            'image': 'R440-south.jpg',
                            'destination': {
                                'y': 3
                            }
                        }
                    }
                },
                /* 5,4,0 no images yet
				'room540': {
                    'id': 'hall540', 
                    'x': 5, 
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall540', 
                            'image': 'R540-east.jpg',
                            'destination': {
                                'x': 6
                            }
                        },
                        'w': {
                            'name': 'WHall540',
                            'image': 'R540-west.jpg',
                            'destination': {
                                'x': 4
                            }
                        },
                        'n': {
                            'name': 'NHall540',   
                            'image': 'R540-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SHall540', 
                            'image': 'R540-south.jpg',
							'destination': {
                                'x': 4,
								'y': 3
                            }
                        }
                    }
                },
                */
                /* 6,4,0 no images yet
				'room640': {
                    'id': 'hall640', 
                    'x': 6, 
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall640', 
                            'image': 'R640-east.jpg',
                        },
                        'w': {
                            'name': 'WHall640',
                            'image': 'R640-west.jpg',
                            'destination': {
                                'x': 5
                            }
                        },
                        'n': {
                            'name': 'NHall640',   
                            'image': 'R640-north.jpg',
                        },
                        's': {
                            'name': 'SHall640', 
                            'image': 'R640-south.jpg'
                        }
                    }
                },
                */
            }
        }
    },
    '_triggers' : {
        //This sample objective is started when you hit the room where it is included.
        //'moveTutorial' is the internal name of the objective used for objective tracking.
        //'Move somewhere' is the quest presented to the user.
        'sampleObjective' : {
            'event' : 'setObjective',
            'eventArgs' : ['moveTutorial', 'Move somewhere'],
            'startTriggers' : ['sampleObjectiveEnd']
        },
        //It starts sampleObjectiveEnd, which is triggered after the player moves. Completes 'moveTutorial' objective.
        //Player earns points, and starts a new objecive.
        'sampleObjectiveEnd' : {
            'event' : 'completeObjective',
            'eventArgs' : ['moveTutorial'],
            'exeAfterNMoves' : 1,
            'startTriggers' : ['add10Points', 'findTheDolphin'],
        },
        //The player is tasked with finding the dolphin. TODO: Add a requirement that the player must face
        //a certain direction to complete a trigger (IE, they must look at the dolphin, not just be on its tile)
        //'dolphinHunt' is the internal name of the objective used for objective tracking.
        //'Find the dolphin!' is the quest presented to the user.
        'findTheDolphin' : {
            'event' : 'setObjective',
            'eventArgs' : ['dolphinHunt', 'Find the dolphin!'],
            'enableTriggers' : ['dolphinFound'],
            'startTriggers' : ['dolphinHint']
        },
        //Starts disabled so it can't be triggered unless the player is on the dolphin quest
        'dolphinFound' : {
            'event' : 'completeObjective',
            'eventArgs' : ['dolphinHunt'],
            'disabled' : true,
            'startTriggers' : ['add10Points'],
            'abortTriggers' : ['dolphinHint']
        },
        //Triggered if the player is having trouble finding the dolphin. Note that because it is
        //aborted by dolphinFound, this only appears if the player takes too long to find the dolphin
        //You can override existing objectives with modified display text simply by reusing the
        //objective name.
        'dolphinHint' : {
            'event' : 'setObjective',
            'exeAfterNMoves' : 5,
            'eventArgs' : ['dolphinHunt', 'Find the dolphin! Hint: Look in a classroom.'],
        },
        //Generic add points trigger
        'add10Points' : {
            'event' : 'addPoints',
            'eventArgs' : [10],
            'lives' : 99999999
        }
    },
    '_player': {
        'x': 2,
        'y': 4,
        'z': 0,
        '_facing': 'n'
    },

};
