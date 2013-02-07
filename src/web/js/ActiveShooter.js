activeShooterDef = {
    'name': 'Active Shooter Scenario',
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
                            },
                            '_props': {
                                'prof-bell': {
                                    'name': 'prof-bell',
                                    'image': 'prof_bell.png',
                                    'width': 50,
                                    'height': 89,
                                    'left': 480,
                                    'top': 285
                                },
                                'prof-bell-on-fire': {
                                    'name': 'prof-bell-on-fire',
                                    'image': 'prof_bell_on_fire.png',
                                    'width': 50,
                                    'height': 89,
                                    'left': 480,
                                    'top': 285
                                }
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
                            },
                            '_props': {
                                'Info-TV': {
                                    'name': 'Info-TV',
                                    'image': 'info-tv-skew-left.png',
                                    'width': 150,
                                    'height': 104,
                                    'left': 650,
                                    'top': 190,
                                }
                            }
                        },
                        's': {
                            'name': 'SHall200',
                            'image': 'R200-south.jpg'
                        }
                    },
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
                            },
                            '_props': {
                                'prof-bell': {
                                    'name': 'prof-bell',
                                    'image': 'prof_bell.png',
                                    'width': 200,
                                    'height': 354,
                                    'left': 100,
                                    'top': 257,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Professor Bell'
                                    }
                                },
                                'prof-bell-on-fire': {
                                    'name': 'prof-bell-on-fire',
                                    'image': 'prof_bell_on_fire.png',
                                    'width': 200,
                                    'height': 354,
                                    'left': 100,
                                    'top': 257,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Professor Bell On Fire'
                                    }
                                }
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
                            },
                            '_props': {
                                'prof-bell': {
                                    'name': 'prof-bell',
                                    'image': 'prof_bell.png',
                                    'width': 200,
                                    'height': 354,
                                    'left': 900,
                                    'top': 257,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Professor Bell'
                                    },
                                },
                                'prof-bell-on-fire': {
                                    'name': 'prof-bell-on-fire',
                                    'image': 'prof_bell_on_fire.png',
                                    'width': 200,
                                    'height': 354,
                                    'left': 900,
                                    'top': 257,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Professor Bell On Fire'
                                    }
                                },
                                'Fire-Extinguisher': {
                                    'name': 'Fire-Extinguisher',
                                    'image': 'fire-extinguisher.png',
                                    'width': 20,
                                    'height': 20,
                                    'left': 450,
                                    'top': 300
                                }
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
                            },
                            '_props': {
                                'prof-bell': {
                                    'name': 'prof-bell',
                                    'image': 'prof_bell.png',
                                    'width': 75,
                                    'height': 133,
                                    'left': 630,
                                    'top': 315
                                },
                                'prof-bell-on-fire': {
                                    'name': 'prof-bell-on-fire',
                                    'image': 'prof_bell_on_fire.png',
                                    'width': 75,
                                    'height': 133,
                                    'left': 630,
                                    'top': 315
                                }
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
                            '_props': {
                                'Info-TV': {
                                    'name': 'Info-TV',
                                    'image': 'info-tv.png',
                                    'width': 370,
                                    'height': 217,
                                    'left': 200,
                                    'top': 50,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Info TV'
                                    }
                                }
                            }
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
                            '_props': {
                                'Fire-Extinguisher': {
                                    'name': 'Fire-Extinguisher',
                                    'image': 'fire-extinguisher.png',
                                    'width': 190,
                                    'height': 190,
                                    'left': 800,
                                    'top': 300,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Fire Extinguisher'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall310',
                            'image': 'R310-north.jpg',
                            '_props': {
                                'Fire-Extinguisher': {
                                    'name': 'Fire-Extinguisher',
                                    'image': 'fire-extinguisher.png',
                                    'width': 190,
                                    'height': 190,
                                    'left': 100,
                                    'top': 300,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Fire Extinguisher'
                                    }
                                }
                            }
                        },
                        's': {
                            'name': 'SHall310',
                            'image': 'R310-south.jpg',
                            'destination': {
                                'y': 0
                            },
                            '_props': {
                                'prof-bell': {
                                    'name': 'prof-bell',
                                    'image': 'prof_bell.png',
                                    'width': 150,
                                    'height': 266,
                                    'left': 280,
                                    'top': 315
                                },
                                'prof-bell-on-fire': {
                                    'name': 'prof-bell-on-fire',
                                    'image': 'prof_bell_on_fire.png',
                                    'width': 150,
                                    'height': 266,
                                    'left': 280,
                                    'top': 315,
                                }
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
                            '_props': {
                                'fire1': {
                                    'name': 'fire1',
                                    'image': 'fire.png',
                                    'width': 800,
                                    'height': 400,
                                    'left': 100,
                                    'top': 100,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Fire'
                                    },
                                    'barrier': true
                                }
                            },
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
                            },
							'_props' : {
                                'Dr_Smiley' : {
                                    'image': 'Dr_Smiley.png',
                                    'hoverImage' : 'smileyhover.png',
                                    'top' : 200,
                                    'left' : 200,
                                    'height': 256,
                                    'width' : 256,
									'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Bell_Conversation_1',
									}
								}
                            },
                            
                        },
                        'w': {
                            'name': 'WHall120',
                            'image': 'R120-west.jpg',
                            '_props' : {
                                'Jimmy' : {
                                    'image': 'Jim.png',
									'hoverImage' : 'hoverJim.png',
                                    'top' : 200,
                                    'left' : 50,
                                    'height': 256,
                                    'width' : 256,
									'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Jimmy_Conversation_1'
									}
								},						
								'Jerome' : {
                                    'image': 'Jerome.png',
									'hoverImage' : 'hoverJerome.png',
                                    'top' : 200,
                                    'left' : 450,
                                    'height': 256,
                                    'width' : 256,
									'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Jerome_Conversation_1'
									}
								},
								'Maria' : {
                                    'image': 'Maria.png',
									'hoverImage' : 'hoverMaria.png',
                                    'top' : 200,
                                    'left' : 825,
                                    'height': 256,
                                    'width' : 256,
									'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Maria_Conversation_1'
									}
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
                            },
                            '_props': {
                                'Info-TV': {
                                    'name': 'Info-TV',
                                    'image': 'info-tv-skew-right.png',
                                    'width': 150,
                                    'height': 104,
                                    'left': 320,
                                    'top': 190,
                                }
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
                            '_props': {
                                'fire1': {
                                    'name': 'fire1',
                                    'image': 'fire.png',
                                    'width': 800,
                                    'height': 400,
                                    'left': 100,
                                    'top': 100,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Fire'
                                    },
                                    'barrier': true
                                }
                            },
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
                    '_triggers': ['gotToClass'],
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
                'room240': {                        //Room Name
                    'id': 'hall240',
                    'x': 2,                         //Room Location on a grid?
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
        }
    },
    '_conversations': {
		'Bell_Conversation_1': {
			'1': {
				'message' : 'Good morning, today we are going over how to respond to an active shooter scenario. Class will not start for another 5 minutes so feel free to walk around the school or talk to other students.',
				'replies': {
					'Skip ahead to the lecture' : '2',
					'Skip ahead to the quiz' : '3',
					'Skip ahead to after the quiz.' : '4'
				}
			}
		},
        'Fire Extinguisher': {
            '1': {
                'message': 'This is a fire extinguisher.',
                'replies': {
                    'Pick it up': '2'
                }
            },
            '2': {
                'triggers': ['takeFireExtinguisher']
            }
        },
        'Fire': {
            '1': {
                'message': 'Oh no there is a fire in the way!',
                'replies': {
                    'Extinguish': '3'
                }
            },
            '3': {
                'triggers': ['useFireExtinguisher'],
                'requires': {'has': ['Fire Extinguisher']}
                // or use 'check': [{'has': ['Fire Extinguisher'], 'goto': '2'}]
            }
        },
        'Info TV': {
            '1': {
                'message': 'What should you do in emergency situations? Stay tuned!',
                'replies': {
                    '(keep watching)': 2,
                    '(walk away)': 0
                }
            },
            '2': {
                'message': 'When there is an active shooter in the building what are your three options?',
                'replies': {
                    '(keep watching)': 3,
                    '(walk away)': 0
                }
            },
            '3': {
                'message': 'The first is run. Encourage others to do so as well.',
                'replies': {
                    '(keep watching)': 4,
                    '(walk away)': 0
                }
            },
            '4': {
                'message': 'The second is hide. Remember to look for protective cover, not just concealment.',
                'replies': {
                    '(keep watching)': 5,
                    '(walk away)': 0
                }
            },
            '5': {
                'message': 'The third is fight. Be violent and aggressive. Commit to this decision. Get help from others and attack as a group.',
                'replies': {
                    '(keep watching)': 6,
                    '(walk away)': 0
                }
            },
            '6': {
                'message': 'Run. Hide. Fight!',
                'replies': {
                    'I am prepared!': 0
                }
            }
        },
        'Professor Bell': {
            '1': {
                'triggers': ['fireAppears'],
                'check': [{'objectivesCompleted': ['takeTheQuiz'], 'goto': '10'}],
                'message': 'Good morning! Class is starting soon!.',
                'replies': {
                    'I\'ll go sit down': 2,
                    'I\'ll skip the lecture and take the quiz': 3,
                    'I\'ve already taken the quiz': 0,
                    'Don\'t play with those matches...': 4,
                }
            },
            '2': {
                'triggers': ['getToClass'],
                'requires': {'triggersEnabled':['getToClass']}
            },
            '3': {
                'triggers': ['skipToTheQuiz'],
                'requires': {'triggersEnabled':['skipToTheQuiz']}
            },
            '4': {
                'triggers': ['lightProfOnFire']
            },
            '10': {
                'message': 'Congratulations!  You have completed the quiz!'
            }
        },
        'Professor Bell On Fire': {
            '1' : {
                'checkInventory': [{'has': ['Fire Extinguisher'], 'goto': '2'}],
                'message': 'Help!!!! I\'M ON FIRE! GET AN EXTINGUISHER!',
                'replies': {}
            },
            '2': {
                'message': 'USE YOUR EXTINGUISHER!! HURRY!',
                'replies': {
                    'Extinguish': 3,
                }
            },
            '3': {
                'triggers': ['extinguishProf']
            }
        },
        // Jimmy Conversation
        'Jimmy_Conversation_1': {
			'1': {
				'message' : 'Hi, I\'m Jimmy, how\'s it going?',
				'replies': {
					'Good, thanks! Do you know where the bathroom is?' : '2',
					'I\m doing swell. You don\'t know where the library is by any chance do you?' : '3',
					'Good Thanks. [Exit Conversation]' : '4'			
				}
			},
            '2': {
				'message' : 'Yeah, head out the classroom door and go left. The bathroom is at the end of the hall on the right.',
				'replies' :{
					'You don\'t know where the library is by any chance do you?' : '3',
					'Ok, thanks. [Exit Conversation]' : '4'
				}
			},
			'3': {
				'message' : 'Yeah go back to the front of the school and look for the stairs. The library is at the top of them.',
				'replies' :{
					'Do you know where the bathroom is?' : '2',
					'Ok, thanks. [Exit Conversation]' : '4'
				}
			}
		},
		//Maria Conversation
		'Maria_Conversation_1': {
			'1': {
				'message' : 'Hi, I\'m Maria, how\'s it going?',
				'replies': {
					'Good, thanks! Do you know where the bathroom is?' : '2',
					'I\m doing swell. You don\'t know where the library is by any chance do you?' : '3',
					'Good Thanks. [Exit Conversation]' : '4'			
				}
			},
			'2': {
				'message' : 'Yeah, head out the classroom door and go left. The bathroom is at the end of the hall on the right.',
				'replies' :{
					'You don\'t know where the library is by any chance do you?' : '3',
					'Ok, thanks. [Exit Conversation]' : '4'
				}
			},
			'3': {
				'message' : 'Yeah go back to the front of the school and look for the stairs. The library is at the top of them.',
				'replies' :{
					'Do you know where the bathroom is?' : '2',
					'Ok, thanks. [Exit Conversation]' : '4'
				}
			}
			
		},
        //Jerome Conversation
        'Jerome_Conversation_1': {
            '1': {
				'message' : 'Hi, I\'m Jerome, are you ready for the quiz?',
				'replies': {
					'Quiz, what quiz?' : '2',
					'Yeah, what about you?' : '3',
					'Yeah, thanks. Good luck. [Exit Conversation]' : '4'			
				}
			},
			'2': {
				'message' : 'There\'s a quiz after the lecture today. Here\'s a study guide to help you prepare for it. (Look in your inventory)',
				'replies' :{
					'Thanks a lot, do you want to study for it realy quick?' : '5',
					'Oh, thanks. [Exit Conversation]' : '4'
				}
			},
			'3': {
				'message' : 'Yeah, I\'m pretty much ready. I\'m just trying to remember the 3 action words that describe how to react to an active shooter scenario. Do you remember what they are?',
				'replies' :{
					'Yeah, they\'re Stop, Run and Fight?' : '7',
					'Oh yeah, I got this one, The\'re Stop, Drop and Roll.' : '7',
					'Oh you\'re talking about Run Hide and Fight' : '6',
				}
			},
			'5': {
				'message' : 'Yeah sure. I\'m actually trying to remember the 3 action words that describe how to react to an active shooter scenario. Do you remember what they are?',
				'replies' :{
					'Yeah, they\'re Stop, Run and Fight?' : '7',
					'Oh yeah, I got this one, The\'re Stop, Drop and Roll.' : '7',
					'Oh you\'re talking about Run Hide and Fight' : '6',
				}
			},
			'6': {
				'message': 'Oh, yeah you\'re right, thanks',
				'replies' : {
					'No problem, do you have any other questions I can help answer?' : '8',
					'Great! Well, I better get going. Good luck on the quiz [Exit Conversation]' : '4'
				}
			},
			'7': {
				'message': 'Hmmm, actually if you look at the study guide the 3 action words are Run Hide and Fight',
				'replies' : {
					'Oh, you\'re right. Do you have any other questions I can help answer?' : '8',
					'Oh yeah, you\'re right. Well I need to get going. Good luck on the quiz [Exit Conversation]' : '4'
				}
			},
			'8':{
				'message' : 'Sure, what are some good places to hide from an active shooter',
				'replies' : {
					'Hiding is never a good idea' : '9',
					'You could hide in a closet with a door that locks.' : '10',
					'I don\'nt know, maybe under a chair or something.' : '11',
				}
			},
			'9':{
				'message' : 'Actually if you aren\'t able to run from the shooter, hiding is what you should try to do next. Remember the 3 action words? Run, Hide, Fight?',
				'replies' : {
					'Oh, you\'re right. Ok, well I should get going. Good luck on the quiz. [Exit Conversation]' : '4',
				}
			},
			'10':{
				'message' : 'Yeah, you\'re right. Thanks.',
				'replies' : {
					'Great! Well I have to go now. Good luck. [Exit Conversation]' : '4',
				}
			},
			'11':{
				'message' : 'That doesn\'t seem like a very good place to hide. Maybe you could hide in a closet or underneath a a big sturdy desk.',
				'replies' : {
					'Yeah, you\'re probably right. Well, I should go. Thanks and good luck on the quiz. [Exit Conversation]' : '4'
				}
			}
		},
    },
    '_triggers': {
		//The first objective.
        'See_Professor' : {
            'events' : {
				'setObjective' : ['talkToProfessor', 'Go talk to Professor Bell in room 120']
            }
		},
        'lightProfOnFire': {
            'events': {
                'replaceProp': ['prof-bell', 'prof-bell-on-fire']
            },
            'lives': Infinity
        },
        'extinguishProf': {
            'events' : {
                'replaceProp': ['prof-bell-on-fire', 'prof-bell']
            },
            'lives': Infinity
        },
        'fireAppears': {
            'events': {
                'addToScene': ['fire1']
            }
        },
        'takeFireExtinguisher': {
            'events': {
                'takeFromScene' : [ {'name': 'Fire Extinguisher', 'image': 'fire-extinguisher.png', 'width':32, 'height':32 },
                                    'Fire-Extinguisher' ]
            }
        },
        'useFireExtinguisher': {
            'events': {
                //'addToScene': ['Fire-Extinguisher'],
                'removeFromScene': ['fire1']
            }
        },
        /* Professor Bell gives 'Get to class' objective. Upon arrival at class, the lecture begins. */
        'getToClass': {
            'events': {
                'setObjective': ['getToClass', 'Get to class for the lecture']
            },
            'enableTriggers': ['gotToClass']
        },
        /* For now, the lecture ends by leaving the room */
        'gotToClass': {
            'events': {
                'completeObjective': ['getToClass'],
            },
            'disabled': true,
        },
    },
    'inactiveProps': ['fire1', 'prof-bell-on-fire'],
    '_player': {
        'x': 3,
        'y': 0,
        'z': 0,
        '_facing': 'n',
        'inventory': []
    },
};
