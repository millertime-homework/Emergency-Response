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
                        },
                        'w': {
                            'name': 'WHall200',
                            'image': 'R200-west.jpg', /* can't go to 1,0,0 it's commented out
                            'destination': {
                                'x': 1
                            }
                            */
                            '_props': {
                                'shooter': {
                                    'name': 'shooter',
                                    'image': 'shooter.png',
                                    'hoverImage': 'shooter-hover.png',
                                    'width': 128,
                                    'height': 256,
                                    'left': 450,
                                    'top': 255,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Shooter'
                                    }
                                },
                                'shooter-downed': {
                                    'name': 'shooter-downed',
                                    'image': 'shooter-downed.png',
                                    'width': 256,
                                    'height': 128,
                                    'left': 420,
                                    'top': 325,
                                },
                            }
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
                                },
                                'Room110Sign': {
                                    'name': 'Room110Sign',
                                    'image': 'sign-room110-skew.png',
                                    'width': 47,
                                    'height': 39,
                                    'left': 340,
                                    'top': 320,
                                }
                            }
                        },
                        's': {
                            'name': 'SHall200',
                            'image': 'R200-south.jpg',
                            '_props': {
                                'RHF_Poster': {
                                    'name': 'RHF_Poster',
                                    'image': 'RHF_Poster.png',
                                    'width': 350,
                                    'height': 438,
                                    'left': 400,
                                    'top': 60,
                                   
                                }
                            }
                        }
                    },
                },
                'room300': {
                    'id': 'hall300',
                    'x': 3,
                    'y': 0,
                    '_triggers' : ['getToClass'],
                    '_walls': {
                        'e': {
                            'name': 'EHall300',
                            'image': 'R300-east.jpg',
                            'destination': {
                                'x': 4
                            },
                        },
                        'w': {
                            'name': 'WHall300',
                            'image': 'R300-west.jpg',
                            'destination': {
                                'x': 2
                            },
                            '_props': {
                                'RHF_Poster': {
                                    'name': 'RHF_Poster',
                                    'image': 'RHF_Poster-skew.png',
                                    'width': 64,
                                    'height': 103,
                                    'left': 420,
                                    'top': 250,
                                },
                                'Room110Sign' : {
                                    'name': 'Room110Sign',
                                    'image': 'sign-room110.png',
                                    'width': 19,
                                    'height': 10,
                                    'left' : 670,
                                    'top': 305,
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall300',
                            'image': 'R300-north.jpg',
                            'destination': {
                                'y': 1
                            },
                            '_props': {
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
                            'image': 'R300-south.jpg',
                            '_props': {
                                'UseDoor':{
                                    'name': 'UseDoor',
                                    'image': 'UseDoor.png',
                                    'hoverImage': 'hoverUseDoor.png',
                                    'width': 78,
                                    'height': 190,
                                    'left' : 470,
                                    'top': 245,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'ExitSchool'
                                    }
                                },
                                'policeman': {
                                    'name': 'policeman',
                                    'image': 'policeman.png',
                                    'hoverImage': 'policeman-hover.png',
                                    'width': 250,
                                    'height': 441,
                                    'left': 500,
                                    'top': 170,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'policeman'
                                    }
                                }
                            }
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
                            },
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
                            },
                            '_props': {
                                'Room110Sign' : {
                                    'name': 'Room110Sign',
                                    'image': 'sign-room110.png',
                                    'width': 78,
                                    'height': 39,
                                    'left' : 650,
                                    'top': 375,
                                }
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
                            },
                            '_props': {
                                'RHF_Poster': {
                                    'name': 'RHF_Poster',
                                    'image': 'RHF_Poster.png',
                                    'width': 140,
                                    'height': 175,
                                    'left': 500,
                                    'top': 220,
                                   
                                }
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
                            'destination': {
                                'x': 2,
                                'y': 3,
                                'z': 1,
                            },
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
                            },                            
                        },
                        'w': {
                            'name': 'WHall120',
                            'image': 'R120-west.jpg',
                        },
                        'n': {
                            'name': 'NHall120',
                            'image': 'R120-north.jpg',
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
                    '_triggers' : ['shooterInHallToRight'],
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
                            },
                            '_props': {
                                'Room120Sign' : {
                                    'name': 'Room120Sign',
                                    'image': 'sign-room120.png',
                                    'width': 80,
                                    'height': 43,
                                    'left' : 585,
                                    'top': 365,
                                }
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
                        's': {
                            'name': 'EHall130',
                            'image': 'R130-east.jpg',
                        },
                        'n': {
                            'name': 'WHall130',
                            'image': 'R130-west.jpg',
                            '_props': {
                                'prof-bell': {
                                    'name': 'prof-bell',
                                    'image': 'prof_bell.png',
                                    'width': 80,
                                    'height': 150,
                                    'left': 500,
                                    'top': 270,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Professor Bell'
                                    }
                                }
                            }
                        },
                        'e': {
                            'name': 'NHall130',
                            'image': 'R130-north.jpg',
                            '_props': {
                                'doorShade': {
                                    'name': 'doorShade',
                                    'image': 'ASshadeUp.png',
                                    'hoverImage': 'ASshadeUpHover.png',
                                    'width': 36,
                                    'height': 36,
                                    'left': 1015,
                                    'top': 281,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'putShadeDown'
                                    }
                                },
                                'doorShadeDown': {
                                    'name': 'doorShadeDown',
                                    'image': 'ASshadeDown.png',
                                    'hoverImage': 'ASshadeDownHover.png',
                                    'width': 36,
                                    'height': 36,
                                    'left': 1015,
                                    'top': 281,
                                },
                                'doorHandle': {
                                    'name': 'doorHandle',
                                    'image': 'ASDoorHandle.png',
                                    'hoverImage': 'ASDoorHandleHover.png',
                                    'width': 17,
                                    'height': 25,
                                    'left': 1007,
                                    'top': 339,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'lockDoor'
                                    }
                                },
                                'doorHandleDone': {
                                    'name': 'doorHandle',
                                    'image': 'ASDoorHandle.png',
                                    'hoverImage': 'ASDoorHandleHover.png',
                                    'width': 17,
                                    'height': 25,
                                    'left': 1007,
                                    'top': 339,
                                },
                                'lightSwitch': {
                                    'name': 'lightSwitch',
                                    'image': 'ASLightSwitch.png',
                                    'hoverImage': 'ASLightSwitchHover.png',
                                    'width': 27,
                                    'height': 21,
                                    'left': 945,
                                    'top': 307,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'turnOffLights'
                                    }
                                },
                                'lightSwitchDone': {
                                    'name': 'lightSwitch',
                                    'image': 'ASLightSwitch.png',
                                    'hoverImage': 'ASLightSwitchHover.png',
                                    'width': 27,
                                    'height': 21,
                                    'left': 945,
                                    'top': 307
                                },
                                'hidingSpot': {
                                    'name': 'hidingSpot',
                                    'image': 'ASHideSilhouette.png',
                                    'hoverImage': 'ASHideSilhouetteHover.png',
                                    'width': 84,
                                    'height': 89,
                                    'left': 896,
                                    'top': 359,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'goIntoHiding'
                                    }
                                }
                            },
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
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
                            },
                            '_props': {
                                'Room130Sign' : {
                                    'name': 'Room130Sign',
                                    'image': 'sign-room130.png',
                                    'width': 79,
                                    'height': 42,
                                    'left' : 725,
                                    'top': 375,
                                }
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
                            },
                            '_props': {
                                'HidingPlace' : {
                                    'name': 'HidingPlace',
                                    'image': 'hiding-place.png',
                                    'hoverImage': 'hiding-place-hover.png',
                                    'width': 90,
                                    'height': 40,
                                    'left' : 470,
                                    'top': 335,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Hide'
                                    }
                                }
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
                            'image': 'R530-south.jpg',
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
                    '_triggers' : ['shooterInHallToLeft'],
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
                            'image': 'R240-west.jpg', /* can't go to 1,4,0 it's commented out
                            'destination': {
                                'x': 1
                            }
                            */
                            '_props': {
                                'crowbar': {
                                    'name': 'crowbar',
                                    'image': 'crowbar.png',
                                    'hoverImage': 'crowbar-hover.png',
                                    'width': 200,
                                    'height': 134,
                                    'left': 400,
                                    'top': 377,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Crowbar',
                                    }
                                }
                            },
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
                            },
                            '_props': {
                                'Room130Sign': {
                                    'name': 'Room130Sign',
                                    'image': 'sign-room130-skew.png',
                                    'width': 50,
                                    'height': 40,
                                    'left': 800,
                                    'top': 350,
                                }
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
                            },
                            '_props': {
                                'crowbar': {
                                    'name': 'crowbar',
                                    'image': 'crowbar.png',
                                    'hoverImage': 'crowbar-hover.png',
                                    'width': 72,
                                    'height': 48,
                                    'left': 500,
                                    'top': 320,
                                }
                            },
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
                                'z': 0
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
            }
        }
    },
    '_conversations': {
        'goIntoHiding' : {
            '1' : {
                'message' : 'This looks like it would be a good place to hide. If the shooter were to look into the room it would be difficult to see you here.',
                'replies': {
                    'Hide here': '2',
                    "Don't hide.": '0'
                }
            },
            '2' : {
                'triggers' : ['hiddenByDoor']
            }
        },
        'putShadeDown' : {
            '1' : {
                'requires': {'objectivesNotCompleted':['pulledDownShade']},
                'message' : 'Put the blinds on this window down?',
                'replies': {
                    'Yes, put them down.': '2',
                    "Leave them alone.": '0'
                }
            },
            '2' : {
                'requires': {'objectivesInProgress':['pullDownWindowShade']},
                'triggers' : ['pulledDownShade']
            }
        },
        'lockDoor' : {
            '1' : {
                'requires': {'objectivesNotCompleted':['lockedTheDoor']},
                'message' : 'Lock the door?',
                'replies': {
                    'Yes.': '2',
                    "No.": '0'
                }
            },
            '2' : {
                'requires': {'objectivesInProgress':['lockTheDoor']},
                'triggers' : ['lockedTheDoor']
            }
        },
        'turnOffLights' : {
            '1' : {
                'message' : 'What do you want to do to the lights?',
                'replies': {
                    'Turn them on.': '3',
                    "Turn them off.": '2',
                    'Play with the light switch': '4',
                    'Leave it alone': '5'
                }
            },
            '2' : {
                'triggers' : ['turnedOffLights'],
                'requires': {'objectivesInProgress':['turnOffLights']}
            },
            '3' : {
                'requires': {'objectivesInProgress':['turnOffLights']}
            },
            '4' : {
                'requires': {'objectivesNotInProgress':['hideFromShooter']},
                'message' : 'The professor scolds you for goofing off.',
                'replies': {
                    'Stop misbehaving': '0'
                }
            },
            '5' : {
                'requires': {'objectivesNotInProgress':['hideFromShooter']},
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
                'triggers': ['gotToClass'],
                'message': 'Good morning! Class is starting, have a seat. Today we\'re going over... [Bang!]... [Bang! Bang!]. What? What is that. That sounds like gun fire. [Professor Bell goes to the class room door and peers out.] Quickly, everyone get out. I think we can make it to the front doors.',
                'replies': {
                    'No way! I\'m staying right here.': 0,
                    'Ok, let\'s go!' : 2,
                }
            },
            '2': {
                'triggers': ['activateShooter']
            },
        },
        'ExitSchool':{
            '1':{
                'triggers': ['FrontDoorsReached'],
                'message' : 'The Door has been locked!',
                'replies':{
                    'Break Down The Door!' : 2,
                    'Go Hide' : 7,
                }
            },
            '2':{

                'message' : 'You start to throw yourself against the door. It appears to be locked with a chain from the outside. The door doesn\'t seem to be budging!',
                'replies':{
                    'Continue to try and break down the door': 3,
                    'Leave the door and go hide': 4,
                }
            },
            '3':{
                'message' : 'The door seems to be giving way, but you can hear gun shots just around the corner to the north. The active shooter is very close!',
                'replies' : {
                    'Too late now, I\'m committed. Continue to break down the front door': 5,
                    'Abandon the door and go hide' : 7,
                    }                
            },
            '4':{
                'message': 'Ok, you\'ve only lost a little bit of time. You can hear the shooter approaching down the hallway to the north. Quick! Find a hiding place.',
                'replies' : {
                    '[Exit Conversation]' : 7,
                }
            },
            '5':{
                'triggers': ['shotAtFrontDoor'],
            },
            '6':{
                'message': 'You don\'t have much time. The shooter is really close. Hide quickly!',
                'replies' : {
                    '[Exit Conversation]': 7,
                }
            },
            '7': {
                'triggers': ['goHide'],
            }
        },       
        'Crowbar': {
            '1': {
                'message': 'Pick up crowbar?',
                'replies': {
                    'Pick up': 2,
                    'Leave': 0,
                }
            },
            '2': {
                'requires': {'objectivesInProgress': ['getWeapon']},
                'triggers': ['takeCrowbar'],
            },
        },
        'Shooter': {
            '1': {
                'check': [{'objectivesInProgress': ['attackShooter'], 'goto': '2'}],
                'message': 'WELL HELLO THERE!',
                'replies': {
                    'Run away': 0,
                }
            },
            '2': {
                'message': 'This stupid gun! I can\'t believe it\'s jamming!',
                'replies': {
                    'ATTACK!!!': 3,
                    'Try to incapacitate': 4,
                    'Run away': 0,
                }
            },
            '3': {
                'requires': {'has': ['crowbar']},
                'message': 'OUCH! Grr!',
                'replies': {
                    'ATTACK!!!': 5,
                    'Run away': 0,
                }
            },
            '4': {
                'requires': {'has': ['crowbar']},
                'triggers': ['knockedOutByShooter'],
            },
            '5': {
                'triggers': ['takeDownShooter'],
            },
        },
        'policeman': {
            '1': {
                'triggers': ['escaped'],
                'message': 'Freeze! Put your hands where I can see them!',
                'replies': {
                    '[Put hands in the air]': 2,
                    '[Approach the officer]': 3,
                }
            },
            '2': {
                'triggers': ['survived'],
            },
            '3': {
                'triggers': ['shotByPolice'],
            }
        },
        'Hide':{
            '1':{
                'triggers': ['foundHidingPlace'],
            }
        },
    },
    '_triggers': {
        'hideFromShooter' : {
            'events' : {
                'addToScene': ['hidingSpot'],
                'setObjectives' : [['hideFromShooter', 'The shooter is very close.', 'turnOffLights', 'Turn off the lights.',
                        'pullDownWindowShade', 'Pull down the window shade', 'hideByDoor', 'Hide by the door', 'silencePhone',
                        'Silence your cell phone', 'lockTheDoor', 'Lock the door to the room.']]
            },
            'startTriggers' : ['hiddenFromShooter'],
            'enableTriggers' : ['turnedOffLights', 'pulledDownShade', 'hiddenByDoor', 'silencedPhone', 'lockedTheDoor', 'failedToHide',
                    'failedToTurnOffLights', 'failedToPullDownShade', 'failedToHideByDoor', 'failedToSilencePhone', 'failedToLockTheDoor',
                    'shooterInHallToRight', 'shooterInHallToLeft']
        },
        'hiddenFromShooter' : {
            'waitForObjectiveCompletions' : ['turnOffLights', 'pullDownWindowShade', 'hideByDoor', 'silencePhone'],
            'events' : {
                'addPoints' : [60],
                'completeObjective' : ['hideFromShooter'],
                'endGame' : ['You successfully hid from the shooter', "You took decisive action in preparing yourself and your surroundings to maximize the effectiveness of your hiding spot. The shooter was not able to find you before the police arrived to apprehend him. Nice work!"]
            },
            'deleteTriggers' : ['failedToHide']
        },
        'turnedOffLights' : {
            'disabled' : true,
            'events' : {
                'addPoints' : [10],
                'completeObjective' : ['turnOffLights'],
                'replaceProp': ['lightSwitch', 'lightSwitchDone']
            },
            'deleteTriggers' : ['failedToTurnOffLights'],
        },
        'pulledDownShade' : {
            'disabled' : true,
            'events' : {
                'addPoints' : [10],
                'completeObjective' : ['pullDownWindowShade'],
                'replaceProp': ['doorShade', 'doorShadeDown']
            },
            'deleteTriggers' : ['failedToPullDownShade'],
        },
        'hiddenByDoor' : {
            'disabled' : true,
            'events' : {
                'addPoints' : [10],
                'completeObjective' : ['hideByDoor']
            },
            'deleteTriggers' : ['failedToHideByDoor'],
            'startTriggers' : ['failedToTurnOffLights', 'failedToPullDownShade', 'failedToSilencePhone']
        },
        'silencedPhone' : {
            'disabled' : true,
            'events' : {
                'addPoints' : [10],
                'completeObjective' : ['silencePhone']
            },
            'deleteTriggers' : ['failedToSilencePhone'],
        },
        'lockedTheDoor' : {
            'disabled' : true,
            'events' : {
                'addPoints' : [10],
                'completeObjective' : ['lockTheDoor'],
                'replaceProp': ['doorHandle', 'doorHandleDone']
            },
            'deleteTriggers' : ['failedToLockTheDoor'],
        },
        'failedToTurnOffLights' : {
            'disabled' : true,
            'events' : {
                'endGame': ['Game Over', "Although you took action and attempted to hide, because you did not turn off the lights, the room caught the eye of the shooter, who kicked down the door and stormed into the room. You were critically wounded."],
            }
        },
        'failedToPullDownShade' : {
            'disabled' : true,
            'events' : {
                'endGame': ['Game Over', "You didn't pull down the window shade before attempting to hide within the room. The shooter peered through the window, saw you, and started shooting through the door. You were gravely wounded."],
            }
        },
        'failedToHideByDoor' : {
            'disabled' : true,
            'events' : {
                'endGame': ['Game Over', "You didn't hide against the wall. The shooter was able to see you in the room. You were shot and killed."],
            }
        },
        'failedToSilencePhone' : {
            'disabled' : true,
            'events' : {
                'endGame': ['Game Over', "Although you went into hiding, your forgot to silence your cell phone. When a friend tried to call you to see if you made it out safely, the shooter heard your ringtone, entered the room, and began shooting, seriously wounding you in the process."],
            }
        },
        'failedToLockTheDoor' : {
            'disabled' : true,
            'events' : {
                'endGame': ['Game Over', "You went into hiding but didn't lock the door to the room. THe shooter waltzed in and wasted you."],
            }
        },
        'takeFireExtinguisher': {
            'events': {
                'takeFromScene' : [ {'name': 'Fire Extinguisher', 'image': 'fire-extinguisher.png', 'width':32, 'height':32 },
                                    'Fire-Extinguisher' ]
            }
        },
        'shooterInHallToLeft' : {
            'disabled' : true,
            'events' : {
                'endGame': ['Game Over', "In a tragic display of utter disregard for self-preservation, you charged out into the halls despite the close proximity of the shooter. After rounding a corner you found yourself face to face with a deranged gunman. To say that the encounter did not go well for you would be a grave understatement. You are dead."],
            }
        },
        'shooterInHallToRight' : {
            'disabled' : true,
            'events' : {
                'endGame': ['Game Over', "Despite the sound of nearby gunfire, you opted to run out into the halls rather than attempt to hide. Perhaps you would conclude in retrospect that this decision was unwise; unfortuantely, you were shot in the back by the gunman, and are no longer able to reason."],
            }
        },
        'takeCrowbar': {
            'events': {
                'takeFromScene': [ {'name': 'crowbar', 'image': 'crowbar.png', 'width':32, 'height':20},
                                   'crowbar'],
                'completeObjective': ['getWeapon'],
                'setObjective': ['attackShooter', 'Find and attack the shooter'],
            }
        },
        'getToClass': {
            'events': {
                'setObjective': ['getToClass', 'Get to class for the lecture in room 130 (click on professor Bell)'],
                'removeFromScene' : ['UseDoor']
            },
        },
        'gotToClass': {
            'events': {
                'completeObjective': ['getToClass'],
            },
        },
        'activateShooter': {
            'startRandomTrigger': ['getToFrontDoors', 'hideFromShooter']
        },
        'getToFrontDoors' : {
            'events': {
                'setObjective': ['getToFrontDoors', 'Go to the front doors of the school and get out of the building'],
                'addToScene': ['UseDoor']
            },
            'enableTriggers' : ['FrontDoorsReached']
        },
        'FrontDoorsReached':{
            'events':{
                'completeObjective': ['getToFrontDoors'],
                'addToScene': ['crowbar'],
            },
            'disabled':true,
        },
        'shotAtFrontDoor': {
            'events': {
                'endGame': ['Game Over','You desperately try to get the door open, but it is too late. The shooter comes around the corner and sees you out in the open. He shoots you [Game Over]'],
            },
        },
        'goHide': {
            'events': {
                'setObjective': ['goHide', 'Find a hiding place'],
                'removeFromScene': ['UseDoor'],
                'addToScene': ['HidingPlace'],
            },
        },
        'foundHidingPlace': {
            'events': {
                'showModal': ['Gun Jam!', 'The shooter\'s gun jammed! Quick! Find a weapon and take him out!'],
                'completeObjective': ['goHide'],
                'setObjective': ['getWeapon', 'Find a weapon'],
                'addToScene': ['shooter'],
                'removeFromScene': ['HidingPlace'],
            },
        },
        'knockedOutByShooter': {
            'events': {
                'endGame': ['Game Over', 'You didn\'t commit! The shooter knocked you out!'],
            }
        },
        'takeDownShooter': {
            'events': {
                'completeObjective': ['attackShooter'],
                'setObjective': ['escape', 'Escape the school'],
                'replaceProp': ['shooter', 'shooter-downed'],
                'addToScene': ['policeman'],
            },
        },
        'escaped': {
            'events': {
                'completeObjective': ['escape'],
            },
        },
        'survived': {
            'events': {
                'endGame': ['You survived!', 'You made it! You wait outside for the police to apprehend the shooter.'],
            }
        },
        'shotByPolice': {
            'events': {
                'endGame': ['Game Over','Unfortunately your actions caused the police to shoot you, and now you are dead.']
            }
        }
    },
    'inactiveProps': ['UseDoor', 'policeman', 'crowbar', 'shooter', 'shooter-downed',
            'HidingPlace', 'doorShadeDown', 'hidingSpot', 'doorHandleDone',
            'lightSwitchDone'],
    '_player': {
        'x': 3,
        'y': 0,
        'z': 0,
        '_facing': 'n',
        'inventory': []
    },
}
