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
                            'image': 'R310-west.jpg',
                            'destination': {
                                'z': 1
                            },
                        },
                        'n': {
                            'name': 'NHall310',   
                            'image': 'R310-north.jpg',
                            'destination': {
                                'x': 2,
                                'y': 3,
                                'z': 1,
                            },
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
        },
        'Second Floor': {
            'z': 1,
            '_rooms': {
                'room011': {
                    'id': 'class011',
                    'x': 0,
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EClass011',
                            'image': 'R011-east.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'w': {
                            'name': 'WClass011',
                            'image': 'R011-west.jpg',
                        },
                        'n': {
                            'name': 'NClass011',
                            'image': 'R011-north.jpg',
                        },
                        's': {
                            'name': 'SClass011',
                            'image': 'R011-south.jpg',
                        }
                    }
                },
                'room021': {
                    'id': 'class021',
                    'x': 0,
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EClass021',
                            'image': 'R021-east.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'w': {
                            'name': 'WClass021',
                            'image': 'R021-west.jpg',
                        },
                        'n': {
                            'name': 'NClass021',
                            'image': 'R021-north.jpg',
                        },
                        's': {
                            'name': 'SClass021',
                            'image': 'R021-south.jpg',
                        }
                    }
                },
                'room041': {
                    'id': 'office041',
                    'x': 0,
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EOffice041',
                            'image': 'R041-east.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'w': {
                            'name': 'WOffice041',
                            'image': 'R041-west.jpg',
                        },
                        'n': {
                            'name': 'NOffice041',
                            'image': 'R041-north.jpg',
                        },
                        's': {
                            'name': 'SOffice041',
                            'image': 'R041-south.jpg',
                        }
                    }
                },
                'room051': {
                    'id': 'office051',
                    'x': 0,
                    'y': 5,
                    '_walls': {
                        'e': {
                            'name': 'EOffice051',
                            'image': 'R051-east.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'w': {
                            'name': 'WOffice051',
                            'image': 'R051-west.jpg',
                        },
                        'n': {
                            'name': 'NOffice051',
                            'image': 'R051-north.jpg',
                        },
                        's': {
                            'name': 'SOffice051',
                            'image': 'R051-south.jpg',
                        }
                    }
                },
                'room101': {
                    'id': 'hall101',
                    'x': 1,
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall101',
                            'image': 'R101-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall101',
                            'image': 'R101-west.jpg',
                        },
                        'n': {
                            'name': 'NHall101',
                            'image': 'R101-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SHall101',
                            'image': 'R101-south.jpg',
                        }
                    }
                },
                'room111': {
                    'id': 'hall111',
                    'x': 1,
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall111',
                            'image': 'R111-east.jpg'
                        },
                        'w': {
                            'name': 'WHall111',
                            'image': 'R111-west.jpg',
                            'destination': {
                                'x': 0
                            }
                        },
                        'n': {
                            'name': 'NHall111',
                            'image': 'R111-north.jpg',
                            'destination': {
                                'y': 2
                            }
                        },
                        's': {
                            'name': 'SHall111',
                            'image': 'R111-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                'room121': {
                    'id': 'hall121',
                    'x': 1,
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall121',
                            'image': 'R121-east.jpg',
                            'destination': {
                                'x': 3,
                                'y': 1,
                                'z': 0
                            }
                        },
                        'w': {
                            'name': 'WHall121',
                            'image': 'R121-west.jpg',
                            'destination': {
                                'x': 0
                            }
                        },
                        'n': {
                            'name': 'NHall121',
                            'image': 'R121-north.jpg',
                            'destination': {
                                'y': 3
                            }
                        },
                        's': {
                            'name': 'SHall121',
                            'image': 'R121-south.jpg',
                            'destination': {
                                'y': 1
                            }
                        }
                    }
                },
                'room131': {
                    'id': 'hall131',
                    'x': 1,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall131',
                            'image': 'R131-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall131',
                            'image': 'R131-west.jpg'
                        },
                        'n': {
                            'name': 'NHall131',
                            'image': 'R131-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SHall131',
                            'image': 'R131-south.jpg',
                            'destination': {
                                'y': 2
                            }
                        }
                    }
                },
                'room141': {
                    'id': 'hall141',
                    'x': 1,
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall141',
                            'image': 'R141-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall141',
                            'image': 'R141-west.jpg',
                            'destination': {
                                'x': 0
                            }
                        },
                        'n': {
                            'name': 'NHall141',
                            'image': 'R141-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SHall141',
                            'image': 'R141-south.jpg',
                            'destination': {
                                'y': 3
                            }
                        }
                    }
                },
                'room151': {
                    'id': 'hall151',
                    'x': 1,
                    'y': 5,
                    '_walls': {
                        'e': {
                            'name': 'EHall151',
                            'image': 'R151-east.jpg'
                        },
                        'w': {
                            'name': 'WHall151',
                            'image': 'R151-west.jpg',
                            'destination': {
                                'x': 0
                            }
                        },
                        'n': {
                            'name': 'NHall151',
                            'image': 'R151-north.jpg'
                        },
                        's': {
                            'name': 'SHall151',
                            'image': 'R151-south.jpg',
                            'destination': {
                                'y': 4
                            }
                        }
                    }
                },
                'room201': {
                    'id': 'restroom201',
                    'x': 2,
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'ERestroom201',
                            'image': 'R201-east.jpg'
                        },
                        'w': {
                            'name': 'WRestroom201',
                            'image': 'R201-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NRestroom201',
                            'image': 'R201-north.jpg'
                        },
                        's': {
                            'name': 'SRestroom201',
                            'image': 'R201-south.jpg'
                        }
                    }
                },
                'room231': {
                    'id': 'hall231',
                    'x': 2,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall231',
                            'image': 'R231-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'w': {
                            'name': 'WHall231',
                            'image': 'R231-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NHall231',
                            'image': 'R231-north.jpg'
                        },
                        's': {
                            'name': 'SHall231',
                            'image': 'R231-south.jpg'
                        }
                    }
                },
                'room241': {
                    'id': 'library241',
                    'x': 2,
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary241',
                            'image': 'R241-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'w': {
                            'name': 'WLibrary241',
                            'image': 'R241-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NLibrary241',
                            'image': 'R241-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SLibrary241',
                            'image': 'R241-south.jpg'
                        }
                    }
                },
                'room251': {
                    'id': 'library251',
                    'x': 2,
                    'y': 5,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary251',
                            'image': 'R251-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'w': {
                            'name': 'WLibrary251',
                            'image': 'R251-west.jpg'
                        },
                        'n': {
                            'name': 'NLibrary251',
                            'image': 'R251-north.jpg'
                        },
                        's': {
                            'name': 'SLibrary251',
                            'image': 'R251-south.jpg',
                            'destination': {
                                'y': 4
                            }
                        }
                    }
                },
                'room301': {
                    'id': 'storage301',
                    'x': 3,
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EStorage301',
                            'image': 'R301-east.jpg'
                        },
                        'w': {
                            'name': 'WStorage301',
                            'image': 'R301-west.jpg'
                        },
                        'n': {
                            'name': 'NStorage301',
                            'image': 'R301-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SStorage301',
                            'image': 'R301-south.jpg'
                        }
                    }
                },
                'room311': {
                    'id': 'hall311',
                    'x': 3,
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall311',
                            'image': 'R311-east.jpg'
                        },
                        'w': {
                            'name': 'WHall311',
                            'image': 'R311-west.jpg',
                            'destination': {
                                'z': 0
                            }
                        },
                        'n': {
                            'name': 'NHall311',
                            'image': 'R311-north.jpg',
                            'destination': {
                                'y': 2
                            }
                        },
                        's': {
                            'name': 'SHall311',
                            'image': 'R311-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                'room321': {
                    'id': 'hall321',
                    'x': 3,
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall321',
                            'image': 'R321-east.jpg'
                        },
                        'w': {
                            'name': 'WHall321',
                            'image': 'R321-west.jpg',
                            'destination': {
                                'y': 1,
                                'z': 0,
                            }
                        },
                        'n': {
                            'name': 'NHall321',
                            'image': 'R321-north.jpg',
                            'destination': {
                                'y': 3
                            }
                        },
                        's': {
                            'name': 'SHall321',
                            'image': 'R321-south.jpg',
                            'destination': {
                                'y': 1
                            }
                        }
                    }
                },
                'room331': {
                    'id': 'hall331',
                    'x': 3,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall331',
                            'image': 'R331-east.jpg'
                        },
                        'w': {
                            'name': 'WHall331',
                            'image': 'R331-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NHall331',
                            'image': 'R331-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SHall331',
                            'image': 'R331-south.jpg',
                            'destination': {
                                'y': 2
                            }
                        }
                    }
                },
                'room341': {
                    'id': 'library341',
                    'x': 3,
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary341',
                            'image': 'R341-east.jpg'
                        },
                        'w': {
                            'name': 'WLibrary341',
                            'image': 'R341-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NLibrary341',
                            'image': 'R341-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SLibrary341',
                            'image': 'R341-south.jpg',
                            'destination': {
                                'y': 3
                            }
                        }
                    }
                },
                'room351': {
                    'id': 'library351',
                    'x': 3,
                    'y': 5,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary351',
                            'image': 'R351-east.jpg'
                        },
                        'w': {
                            'name': 'WLibrary351',
                            'image': 'R351-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NLibrary351',
                            'image': 'R351-north.jpg'
                        },
                        's': {
                            'name': 'SLibrary351',
                            'image': 'R351-south.jpg',
                            'destination': {
                                'y': 4
                            }
                        }
                    }
                }
            },
            'First Floor Aftermath': {
            'z': 8,
            '_rooms': {
                /* 1,0,8 no images yet
                'room108': {
                    'id': 'hall108', 
                    'x': 1, 
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall108', 
                            'image': 'R100-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall108',
                            'image': 'R100-west.jpg'
                        },
                        'n': {
                            'name': 'NHall108',   
                            'image': 'R100-north.jpg',
                        },
                        's': {
                            'name': 'SHall108', 
                            'image': 'R100-south.jpg'
                        }
                    }
                },
                */
                'room208': {
                    'id': 'hall208', 
                    'x': 2, 
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall208', 
                            'image': 'R200-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'w': {
                            'name': 'WHall208',
                            'image': 'R200-west.jpg' /*, can't go to 1,0,0 it's commented out
                            'destination': {
                                'x': 1
                            }
                            */
                        },
                        'n': {
                            'name': 'NHall208',   
                            'image': 'R200-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SHall208', 
                            'image': 'R200-south.jpg'
                        }
                    }
                },
                'room308': {
                    'id': 'hall308', 
                    'x': 3, 
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall308', 
                            'image': 'R300-east.jpg',
                            'destination': {
                                'x': 4
                            }

                        },
                        'w': {
                            'name': 'WHall308',
                            'image': 'R300-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NHall308',   
                            'image': 'R300-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SHall308', 
                            'image': 'R300-south.jpg'
                        }
                    }
                },
                'room408': {
                    'id': 'hall408', 
                    'x': 4, 
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall408', 
                            'image': 'R400-east.jpg' /*, can't go to 5,0,0 it's commented out
                            'destination': {
                                'x': 5
                            }
                            */
                        },
                        'w': {
                            'name': 'WHall408',
                            'image': 'R400-west.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'n': {
                            'name': 'NHall408',   
                            'image': 'R400-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SHall408', 
                            'image': 'R400-south.jpg'
                        }
                    }
                },
                /* 5,0,8 no images yet
                'room508': {
                    'id': 'hall508', 
                    'x': 5, 
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall508', 
                            'image': 'R500-east.jpg',
                        },
                        'w': {
                            'name': 'WHall508',
                            'image': 'R500-west.jpg',
                            'destination': {
                                'x': 4
                            }
                        },
                        'n': {
                            'name': 'NHall508',   
                            'image': 'R500-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SHall508', 
                            'image': 'R500-south.jpg'
                        }
                    }
                },
                */
                'room118': {
                    'id': 'hall118', 
                    'x': 1, 
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall118', 
                            'image': 'R110-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall118',
                            'image': 'R110-west.jpg'
                        },
                        'n': {
                            'name': 'NHall118',   
                            'image': 'R110-north.jpg',
                        },
                        's': {
                            'name': 'SHall118', 
                            'image': 'R110-south.jpg'
                        }
                    }
                },
                'room218': {
                    'id': 'hall218', 
                    'x': 2, 
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall218', 
                            'image': 'R210-east.jpg',
                        },
                        'w': {
                            'name': 'WHall218',
                            'image': 'R210-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NHall218',   
                            'image': 'R210-north.jpg',
                            'destination': {
                                'y': 2
                            }
                        },
                        's': {
                            'name': 'SHall218', 
                            'image': 'R210-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                'room318': {
                    'id': 'hall318', 
                    'x': 3, 
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall318', 
                            'image': 'R310-east.jpg',
                        },
                        'w': {
                            'name': 'WHall318',
                            'image': 'R310-west.jpg',
                            'destination': {
                                'z': 9
                            },
                        },
                        'n': {
                            'name': 'NHall318',   
                            'image': 'R310-north.jpg',
                            'destination': {
                                'x': 2,
                                'y': 3,
                                'z': 9,
                            },
                        },
                        's': {
                            'name': 'SHall318', 
                            'image': 'R310-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                'room418': {
                    'id': 'hall418', 
                    'x': 4, 
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall418', 
                            'image': 'R410-east.jpg',
                        },
                        'w': {
                            'name': 'WHall418',
                            'image': 'R410-west.jpg'
                        },
                        'n': {
                            'name': 'NHall418',   
                            'image': 'R410-north.jpg',
                            'destination': {
                                'y': 2
                            }
                        },
                        's': {
                            'name': 'SHall418', 
                            'image': 'R410-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                /* 5,1,8 no images yet
                'room518': {
                    'id': 'hall518', 
                    'x': 5, 
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall518', 
                            'image': 'R510-east.jpg',
                        },
                        'w': {
                            'name': 'WHall518',
                            'image': 'R510-west.jpg'
                        },
                        'n': {
                            'name': 'NHall518',   
                            'image': 'R510-north.jpg',
                            'destination': {
                                'y': 2
                            }
                        },
                        's': {
                            'name': 'SHall518', 
                            'image': 'R510-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                */
                'room128': {
                    'id': 'hall128', 
                    'x': 1, 
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall128', 
                            'image': 'R120-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall128',
                            'image': 'R120-west.jpg',                            
                        },
                        'n': {
                            'name': 'NHall128',   
                            'image': 'R120-north.jpg'
                        },
                        's': {
                            'name': 'SHall128', 
                            'image': 'R120-south.jpg'
                        }
                    }
                },
                'room228': {
                    'id': 'hall228', 
                    'x': 2, 
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall228', 
                            'image': 'R220-east.jpg' /*, can't go to 2,2,8 it's commented out
                            'destination': {
                                'x': 3
                            }
                            */
                        },
                        'w': {
                            'name': 'WHall228',
                            'image': 'R220-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NHall228',   
                            'image': 'R220-north.jpg',
                            'destination': {
                                'y': 3
                            }
                        },
                        's': {
                            'name': 'SHall228', 
                            'image': 'R220-south.jpg',
                            'destination': {
                                'y': 1
                            }
                        }
                    }
                },
                /* 3,2,8 no images yet
                'room328': {
                    'id': 'hall328', 
                    'x': 3, 
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall328', 
                            'image': 'R320-east.jpg',
                            'destination': {
                                'x': 4
                            }
                        },
                        'w': {
                            'name': 'WHall328',
                            'image': 'R320-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NHall328',   
                            'image': 'R320-north.jpg'
                        },
                        's': {
                            'name': 'SHall328', 
                            'image': 'R320-south.jpg'
                        }
                    }
                },
                */
                'room428': {
                    'id': 'hall428', 
                    'x': 4, 
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall428', 
                            'image': 'R420-east.jpg' /*, can't go to 4,2,8 it's commented out
                            'destination': {
                                'x': 4
                            }
                            */
                        },
                        'w': {
                            'name': 'WHall428',
                            'image': 'R420-west.jpg' /*, can't go to 2,2,0 it's commented out
                            'destination': {
                                'x': 2
                            }
                            */
                        },
                        'n': {
                            'name': 'NHall428',   
                            'image': 'R420-north.jpg',
                            'destination': {
                                'y': 3
                            }
                        },
                        's': {
                            'name': 'SHall428', 
                            'image': 'R420-south.jpg',
                            'destination': {
                                'y': 1
                            }
                        }
                    }
                },
                /* 5,2,8 no images yet
                'room528': {
                    'id': 'hall528', 
                    'x': 5, 
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall528', 
                            'image': 'R520-east.jpg'
                        },
                        'w': {
                            'name': 'WHall528',
                            'image': 'R520-west.jpg',
                            'destination': {
                                'x': 4
                            }
                        },
                        'n': {
                            'name': 'NHall528',   
                            'image': 'R520-north.jpg'
                        },
                        's': {
                            'name': 'SHall528', 
                            'image': 'R520-south.jpg',
                            'destination': {
                                'y': 1
                            }
                        }
                    }
                },
                */
                'room138': {
                    'id': 'hall138', 
                    'x': 1, 
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall138', 
                            'image': 'R130-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall138',
                            'image': 'R130-west.jpg'
                        },
                        'n': {
                            'name': 'NHall138',   
                            'image': 'R130-north.jpg',
                        },
                        's': {
                            'name': 'SHall138', 
                            'image': 'R130-south.jpg'
                        }
                    }
                },
                'room238': {
                    'id': 'hall238', 
                    'x': 2, 
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall238', 
                            'image': 'R230-east.jpg'
                        },
                        'w': {
                            'name': 'WHall238',
                            'image': 'R230-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NHall238',   
                            'image': 'R230-north.jpg',
                            'destination': {
                                'x': 2,
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SHall238', 
                            'image': 'R230-south.jpg',
                            'destination': {
                                'y': 2
                            }
                        }
                    }
                },
                /* 3,3,8 no images yet
                'room338': {
                    'id': 'hall338', 
                    'x': 3, 
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall338', 
                            'image': 'R330-east.jpg',
                            'destination': {
                                'x': 4
                            }
                        },
                        'w': {
                            'name': 'WHall338',
                            'image': 'R330-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NHall338',   
                            'image': 'R330-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SHall338', 
                            'image': 'R330-south.jpg',
                            'destination': {
                                'y': 2
                            }
                        }
                    }
                },
                */
                'room438': {
                    'id': 'hall438', 
                    'x': 4, 
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall438', 
                            'image': 'R430-east.jpg',
                            'destination': {
                                'x': 5
                            }
                        },
                        'w': {
                            'name': 'WHall438',
                            'image': 'R430-west.jpg'
                        },
                        'n': {
                            'name': 'NHall438',   
                            'image': 'R430-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SHall438', 
                            'image': 'R430-south.jpg',
                            'destination': {
                                'y': 2
                            }
                        }
                    }
                },
                'room538': {
                    'id': 'hall538', 
                    'x': 5, 
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall538', 
                            'image': 'R530-east.jpg',
                        },
                        'w': {
                            'name': 'WHall538',
                            'image': 'R530-west.jpg',
                            'destination': {
                                'x': 4
                            }
                        },
                        'n': {
                            'name': 'NHall538',   
                            'image': 'R530-north.jpg' /*, can't go to 5,4,8 it's commented out
                            'destination': {
                                'x': 5,
                                'y': 4
                            }
                            */
                        },
                        's': {
                            'name': 'SHall538', 
                            'image': 'R530-south.jpg'
                        }
                    }
                },
                /* 0,4,8 no images yet
                'room048': {
                    'id': 'hall048', 
                    'x': 0, 
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall048', 
                            'image': 'R040-east.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'w': {
                            'name': 'WHall048',
                            'image': 'R040-west.jpg'
                        },
                        'n': {
                            'name': 'NHall048',   
                            'image': 'R040-north.jpg'
                        },
                        's': {
                            'name': 'SHall048', 
                            'image': 'R040-south.jpg'
                        }
                    }
                },
                */
                /* 1,4,8 no images yet
                'room148': {
                    'id': 'hall148', 
                    'x': 1, 
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall148', 
                            'image': 'R140-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall148',
                            'image': 'R140-west.jpg',
                            'destination': {
                                'x': 0
                            }
                        },
                        'n': {
                            'name': 'NHall148',   
                            'image': 'R140-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SHall148', 
                            'image': 'R140-south.jpg'
                        }
                    }
                },
                */
                'room248': {
                    'id': 'hall248', 
                    'x': 2,
                    'y': 4,  
                    '_walls': {
                        'e': {
                            'name': 'EHall248', 
                            'image': 'R240-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'w': {
                            'name': 'WHall248',
                            'image': 'R240-west.jpg' /*, can't go to 1,4,0 it's commented out
                            'destination': {
                                'x': 1
                            }
                            */
                        },
                        'n': {
                            'name': 'NHall248',   
                            'image': 'R240-north.jpg'
                        },
                        's': {
                            'name': 'SHall248', 
                            'image': 'R240-south.jpg',
                            'destination': {
                                'y': 3
                            }
                        }
                    }
                },
                'room348': {
                    'id': 'hall348', 
                    'x': 3, 
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall348', 
                            'image': 'R340-east.jpg',
                            'destination': {
                                'x': 4
                            }
                        },
                        'w': {
                            'name': 'WHall348',
                            'image': 'R340-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NHall348',   
                            'image': 'R340-north.jpg'
                        },
                        's': {
                            'name': 'SHall348', 
                            'image': 'R340-south.jpg'
                        }
                    }
                },
                'room448': {
                    'id': 'hall448', 
                    'x': 4, 
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall448', 
                            'image': 'R440-east.jpg' /*, can't go to 5,4,8 it's commented out
                            'destination': {
                                'x': 5
                            }
                            */
                        },
                        'w': {
                            'name': 'WHall448',
                            'image': 'R440-west.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'n': {
                            'name': 'NHall448',   
                            'image': 'R440-north.jpg',
                        },
                        's': {
                            'name': 'SHall448', 
                            'image': 'R440-south.jpg',
                            'destination': {
                                'y': 3
                            }
                        }
                    }
                },
                /* 5,4,8 no images yet
                'room548': {
                    'id': 'hall548', 
                    'x': 5, 
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall548', 
                            'image': 'R540-east.jpg',
                            'destination': {
                                'x': 6
                            }
                        },
                        'w': {
                            'name': 'WHall548',
                            'image': 'R540-west.jpg',
                            'destination': {
                                'x': 4
                            }
                        },
                        'n': {
                            'name': 'NHall548',   
                            'image': 'R540-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SHall548', 
                            'image': 'R540-south.jpg',
                            'destination': {
                                'x': 4,
                                'y': 3
                            }
                        }
                    }
                },
                */
                /* 6,4,8 no images yet
                'room648': {
                    'id': 'hall648', 
                    'x': 6, 
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall648', 
                            'image': 'R640-east.jpg',
                        },
                        'w': {
                            'name': 'WHall648',
                            'image': 'R640-west.jpg',
                            'destination': {
                                'x': 5
                            }
                        },
                        'n': {
                            'name': 'NHall648',   
                            'image': 'R640-north.jpg',
                        },
                        's': {
                            'name': 'SHall648', 
                            'image': 'R640-south.jpg'
                        }
                    }
                },
                */
            }
        },
        'Second Floor Aftermath': {
            'z': 9,
            '_rooms': {
                'room019': {
                    'id': 'class019',
                    'x': 0,
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EClass019',
                            'image': 'R011-east.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'w': {
                            'name': 'WClass019',
                            'image': 'R011-west.jpg',
                        },
                        'n': {
                            'name': 'NClass019',
                            'image': 'R011-north.jpg',
                        },
                        's': {
                            'name': 'SClass019',
                            'image': 'R011-south.jpg',
                        }
                    }
                },
                'room029': {
                    'id': 'class029',
                    'x': 0,
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EClass029',
                            'image': 'R021-east.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'w': {
                            'name': 'WClass029',
                            'image': 'R021-west.jpg',
                        },
                        'n': {
                            'name': 'NClass029',
                            'image': 'R021-north.jpg',
                        },
                        's': {
                            'name': 'SClass029',
                            'image': 'R021-south.jpg',
                        }
                    }
                },
                'room049': {
                    'id': 'office049',
                    'x': 0,
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EOffice049',
                            'image': 'R041-east.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'w': {
                            'name': 'WOffice049',
                            'image': 'R041-west.jpg',
                        },
                        'n': {
                            'name': 'NOffice049',
                            'image': 'R041-north.jpg',
                        },
                        's': {
                            'name': 'SOffice049',
                            'image': 'R041-south.jpg',
                        }
                    }
                },
                'room059': {
                    'id': 'office059',
                    'x': 0,
                    'y': 5,
                    '_walls': {
                        'e': {
                            'name': 'EOffice059',
                            'image': 'R051-east.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'w': {
                            'name': 'WOffice059',
                            'image': 'R051-west.jpg',
                        },
                        'n': {
                            'name': 'NOffice059',
                            'image': 'R051-north.jpg',
                        },
                        's': {
                            'name': 'SOffice059',
                            'image': 'R051-south.jpg',
                        }
                    }
                },
                'room109': {
                    'id': 'hall109',
                    'x': 1,
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall109',
                            'image': 'R101-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall109',
                            'image': 'R101-west.jpg',
                        },
                        'n': {
                            'name': 'NHall109',
                            'image': 'R101-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SHall109',
                            'image': 'R101-south.jpg',
                        }
                    }
                },
                'room119': {
                    'id': 'hall119',
                    'x': 1,
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall119',
                            'image': 'R111-east.jpg'
                        },
                        'w': {
                            'name': 'WHall119',
                            'image': 'R111-west.jpg',
                            'destination': {
                                'x': 0
                            }
                        },
                        'n': {
                            'name': 'NHall119',
                            'image': 'R111-north.jpg',
                            'destination': {
                                'y': 2
                            }
                        },
                        's': {
                            'name': 'SHall119',
                            'image': 'R111-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                'room129': {
                    'id': 'hall129',
                    'x': 1,
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall129',
                            'image': 'R121-east.jpg',
                            'destination': {
                                'x': 3,
                                'y': 1,
                                'z': 8
                            }
                        },
                        'w': {
                            'name': 'WHall129',
                            'image': 'R121-west.jpg',
                            'destination': {
                                'x': 0
                            }
                        },
                        'n': {
                            'name': 'NHall129',
                            'image': 'R121-north.jpg',
                            'destination': {
                                'y': 3
                            }
                        },
                        's': {
                            'name': 'SHall129',
                            'image': 'R121-south.jpg',
                            'destination': {
                                'y': 1
                            }
                        }
                    }
                },
                'room139': {
                    'id': 'hall139',
                    'x': 1,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall139',
                            'image': 'R131-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall139',
                            'image': 'R131-west.jpg'
                        },
                        'n': {
                            'name': 'NHall139',
                            'image': 'R131-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SHall139',
                            'image': 'R131-south.jpg',
                            'destination': {
                                'y': 2
                            }
                        }
                    }
                },
                'room149': {
                    'id': 'hall149',
                    'x': 1,
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall149',
                            'image': 'R141-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall149',
                            'image': 'R141-west.jpg',
                            'destination': {
                                'x': 0
                            }
                        },
                        'n': {
                            'name': 'NHall149',
                            'image': 'R141-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SHall149',
                            'image': 'R141-south.jpg',
                            'destination': {
                                'y': 3
                            }
                        }
                    }
                },
                'room159': {
                    'id': 'hall159',
                    'x': 1,
                    'y': 5,
                    '_walls': {
                        'e': {
                            'name': 'EHall159',
                            'image': 'R151-east.jpg'
                        },
                        'w': {
                            'name': 'WHall159',
                            'image': 'R151-west.jpg',
                            'destination': {
                                'x': 0
                            }
                        },
                        'n': {
                            'name': 'NHall159',
                            'image': 'R151-north.jpg'
                        },
                        's': {
                            'name': 'SHall159',
                            'image': 'R151-south.jpg',
                            'destination': {
                                'y': 4
                            }
                        }
                    }
                },
                'room209': {
                    'id': 'restroom209',
                    'x': 2,
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'ERestroom209',
                            'image': 'R201-east.jpg'
                        },
                        'w': {
                            'name': 'WRestroom209',
                            'image': 'R201-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NRestroom209',
                            'image': 'R201-north.jpg'
                        },
                        's': {
                            'name': 'SRestroom209',
                            'image': 'R201-south.jpg'
                        }
                    }
                },
                'room239': {
                    'id': 'hall239',
                    'x': 2,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall239',
                            'image': 'R231-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'w': {
                            'name': 'WHall239',
                            'image': 'R231-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NHall239',
                            'image': 'R231-north.jpg'
                        },
                        's': {
                            'name': 'SHall239',
                            'image': 'R231-south.jpg'
                        }
                    }
                },
                'room249': {
                    'id': 'library249',
                    'x': 2,
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary249',
                            'image': 'R241-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'w': {
                            'name': 'WLibrary249',
                            'image': 'R241-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NLibrary249',
                            'image': 'R241-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SLibrary249',
                            'image': 'R241-south.jpg'
                        }
                    }
                },
                'room259': {
                    'id': 'library259',
                    'x': 2,
                    'y': 5,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary259',
                            'image': 'R251-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'w': {
                            'name': 'WLibrary259',
                            'image': 'R251-west.jpg'
                        },
                        'n': {
                            'name': 'NLibrary259',
                            'image': 'R251-north.jpg'
                        },
                        's': {
                            'name': 'SLibrary259',
                            'image': 'R251-south.jpg',
                            'destination': {
                                'y': 4
                            }
                        }
                    }
                },
                'room309': {
                    'id': 'storage309',
                    'x': 3,
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EStorage309',
                            'image': 'R301-east.jpg'
                        },
                        'w': {
                            'name': 'WStorage309',
                            'image': 'R301-west.jpg'
                        },
                        'n': {
                            'name': 'NStorage309',
                            'image': 'R301-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SStorage309',
                            'image': 'R301-south.jpg'
                        }
                    }
                },
                'room319': {
                    'id': 'hall319',
                    'x': 3,
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall319',
                            'image': 'R311-east.jpg'
                        },
                        'w': {
                            'name': 'WHall319',
                            'image': 'R311-west.jpg',
                            'destination': {
                                'z': 8
                            }
                        },
                        'n': {
                            'name': 'NHall319',
                            'image': 'R311-north.jpg',
                            'destination': {
                                'y': 2
                            }
                        },
                        's': {
                            'name': 'SHall319',
                            'image': 'R311-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                'room329': {
                    'id': 'hall329',
                    'x': 3,
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall329',
                            'image': 'R321-east.jpg'
                        },
                        'w': {
                            'name': 'WHall329',
                            'image': 'R321-west.jpg',
                            'destination': {
                                'y': 1,
                                'z': 8,
                            }
                        },
                        'n': {
                            'name': 'NHall329',
                            'image': 'R321-north.jpg',
                            'destination': {
                                'y': 3
                            }
                        },
                        's': {
                            'name': 'SHall329',
                            'image': 'R321-south.jpg',
                            'destination': {
                                'y': 1
                            }
                        }
                    }
                },
                'room339': {
                    'id': 'hall339',
                    'x': 3,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall339',
                            'image': 'R331-east.jpg'
                        },
                        'w': {
                            'name': 'WHall339',
                            'image': 'R331-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NHall339',
                            'image': 'R331-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SHall339',
                            'image': 'R331-south.jpg',
                            'destination': {
                                'y': 2
                            }
                        }
                    }
                },
                'room349': {
                    'id': 'library349',
                    'x': 3,
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary349',
                            'image': 'R341-east.jpg'
                        },
                        'w': {
                            'name': 'WLibrary349',
                            'image': 'R341-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NLibrary349',
                            'image': 'R341-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SLibrary349',
                            'image': 'R341-south.jpg',
                            'destination': {
                                'y': 3
                            }
                        }
                    }
                },
                'room359': {
                    'id': 'library359',
                    'x': 3,
                    'y': 5,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary359',
                            'image': 'R351-east.jpg'
                        },
                        'w': {
                            'name': 'WLibrary359',
                            'image': 'R351-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NLibrary359',
                            'image': 'R351-north.jpg'
                        },
                        's': {
                            'name': 'SLibrary359',
                            'image': 'R351-south.jpg',
                            'destination': {
                                'y': 4
                            }
                        }
                    }
                }
            }
        }
    },
    '_triggers' : {
    },
    '_player': {
        'x': 2,
        'y': 4,
        'z': 0,
        '_facing': 'n',
        'inventory': []
    },
};
