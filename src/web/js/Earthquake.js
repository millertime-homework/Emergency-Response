EarthquakeDef = {
    'name': 'Earthquake Scenario',
    '_floors': {
        'Second Floor Aftermath': {
            'z': 9,
            '_rooms': {
                'room229': {
                    'id': 'stairs',
                    'x': 2,
                    'y': 2,
                    'annotation': 'AnnotationStairs.png',
                    '_walls': {
                        'w': {
                            'name': 'NullWall',
                            'image': 'blackout.jpg',
                            'destination': {
                                'x': 1
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
                                'x': 2,
                                'z': 8
                            }
                        },
                        'w': {
                            'name': 'WHall129',
                            'image': 'R121-west.jpg',
                            '_props' : {
                                'aorSign' : {
                                    'name' : 'aorSign',
                                    'image' : 'AreaRescueSign.png',
                                    'width' : 125,
                                    'height': 75,
                                    'left': 280,
                                    'top': 325
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall129',
                            'image': 'R121-north.jpg',
                            'destination': {
                                'y': 3
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 225,
                                    'height': 604,
                                    'top': 169,
                                    'left': 445,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        's': {
                            'name': 'SHall129',
                            'image': 'R121-south.jpg',
                            'destination': {
                                'y': 1
                            },
                            '_props' : {
                                'ProfXavAoR': {
                                    'name': 'ProfXavAoR',
                                    'image': 'XavHurt.png',
                                    'width': 300,
                                    'height': 150,
                                    'left': 400,
                                    'top': 400,
                                    'action': 'showConversation',
                                    'actionVariables':{
                                        'conversationName': 'Injured Professor'
                                    }
                                }
                            }
                        }
                    }
                },
                'room039': {
                    'id': 'office039',
                    'x': 0,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EOffice039',
                            'image': 'R031-east.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 191,
                                    'height': 487,
                                    'top': 192,
                                    'left': 461,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WOffice039',
                            'image': 'R031-west.jpg'
                        },
                        'n': {
                            'name': 'NOffice039',
                            'image': 'R031-north.jpg'
                        },
                        's': {
                            'name': 'SOffice039',
                            'image': 'R031-south.jpg'
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
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 189,
                                    'height': 489,
                                    'top': 192,
                                    'left': 463,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WOffice049',
                            'image': 'R041-west.jpg'
                        },
                        'n': {
                            'name': 'NOffice049',
                            'image': 'R041-north.jpg'
                        },
                        's': {
                            'name': 'SOffice049',
                            'image': 'R041-south.jpg'
                        }
                    }
                },
                'room209': {
                    'id': 'hall209',
                    'x': 2,
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall209',
                            'image': 'R201-east.jpg'
                        },
                        'w': {
                            'name': 'WHall209',
                            'image': 'R201-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NHall209',
                            'image': 'R201-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SHall209',
                            'image': 'R201-south.jpg'
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
                            'image': 'R321-west.jpg'
                        },
                        'n': {
                            'name': 'NHall329',
                            'image': 'R321-north.jpg'
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
                'room239': {
                    'id': 'library239',
                    'x': 2,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary239',
                            'image': 'R231-east.jpg'
                        },
                        'w': {
                            'name': 'WLibrary239',
                            'image': 'R231-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NLibrary239',
                            'image': 'R231-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SLibrary239',
                            'image': 'R231-south.jpg'
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
                            'image': 'R111-east.jpg',
                            '_props': {
                                'evac_plan_2': {
                                    'name': 'evac_plan_2',
                                    'image': 'door.png',
                                    'hoverImage': 'doorHover.png',
                                    'width': 559,
                                    'height': 433,
                                    'left': 274,
                                    'top': 63,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'evac_second_floor'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall119',
                            'image': 'R111-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 228,
                                    'height': 607,
                                    'top': 169,
                                    'left': 444,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall119',
                            'image': 'R111-north.jpg',
                            'destination': {
                                'y': 2
                            },
                            '_props' : {
                                'ProfXavAoR': {
                                    'name': 'ProfXavAoR',
                                    'image': 'XavHurt.png',
                                    'width': 300,
                                    'height': 150,
                                    'left': 400,
                                    'top': 400,
                                    'action': 'showConversation',
                                    'actionVariables':{
                                        'conversationName': 'Injured Professor'
                                    }
                                }
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
                'room149': {
                    'id': 'library149',
                    'x': 1,
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary149',
                            'image': 'R141-east.jpg'
                        },
                        'w': {
                            'name': 'WLibrary149',
                            'image': 'R141-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 113,
                                    'height': 271,
                                    'top': 236,
                                    'left': 502,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NLibrary149',
                            'image': 'R141-north.jpg'
                        },
                        's': {
                            'name': 'SLibrary149',
                            'image': 'R141-south.jpg',
                            'destination': {
                                'y': 3
                            }
                        }
                    }
                },
                'room211': {
                    'id': 'hall211',
                    'x': 2,
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall211',
                            'image': 'R211-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'w': {
                            'name': 'WHall211',
                            'image': 'R211-west.jpg',
                            '_props': {
                                'elevator-down': {
                                    'name': 'elevator-down',
                                    'image': 'elevator-down.png',
                                    'hoverImage': 'elevator-down-hover.png',
                                    'width': 43,
                                    'height': 24,
                                    'left': 715,
                                    'top': 375,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Aftermath Elevator'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall211',
                            'image': 'R211-north.jpg'
                        },
                        's': {
                            'name': 'SHall211',
                            'image': 'R211-south.jpg',
                            'destination': {
                                'y': 0
                            }
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
                            'image': 'R101-west.jpg'
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
                            'image': 'R101-south.jpg'
                        }
                    }
                },
                'room139': {
                    'id': 'library139',
                    'x': 1,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary139',
                            'image': 'R131-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NLibrary139',
                            'image': 'R131-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SLibrary139',
                            'image': 'R131-south.jpg',
                            'destination': {
                                'y': 2
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 112,
                                    'height': 253,
                                    'top': 239,
                                    'left': 657,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WLibrary139',
                            'image': 'R131-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 122,
                                    'height': 281,
                                    'top': 234,
                                    'left': 788,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        }
                    }
                },
                'room019': {
                    'id': 'class019',
                    'x': 0,
                    'y': 1,
                    '_triggers': ['failprepSchoolObjectives','setAftermathObjectives','checkIfSurvivedEarthquake'],
                    '_walls': {
                        'e': {
                            'name': 'EClass019',
                            'image': 'R011-east.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 151,
                                    'height': 348,
                                    'top': 217,
                                    'left': 482,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WClass019',
                            'image': 'R011-west.jpg',
                            '_props': {
                                'ProfXavInjured': {
                                    'name': 'ProfXavInjured',
                                    'image': 'XavHurt.png',
                                    'width': 300,
                                    'height': 150,
                                    'left': 400,
                                    'top': 400,
                                    'action': 'showConversation',
                                    'actionVariables':{
                                        'conversationName': 'Help Injured Professor'
                                    }
                                },
                                'flashlight': {
                                    'name': 'Flashlight',
                                    'image': 'flashlight.png',
                                    'width': 62,
                                    'height': 40,
                                    'left': 700,
                                    'top': 400,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'pickupExtraFlashlight',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NClass019',
                            'image': 'R011-north.jpg'
                        },
                        's': {
                            'name': 'SClass019',
                            'image': 'R011-south.jpg'
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
                            'image': 'R241-east.jpg'
                        },
                        'w': {
                            'name': 'WLibrary249',
                            'image': 'R241-west.jpg'
                        },
                        'n': {
                            'name': 'NLibrary249',
                            'image': 'R241-north.jpg'
                        },
                        's': {
                            'name': 'SLibrary249',
                            'image': 'R241-south.jpg',
                            'destination': {
                                'y': 3
                            }
                        }
                    }
                },
                'room419': {
                    'id': 'room419',
                    'x': 4,
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'ERoom419',
                            'image': 'R411-east.jpg'
                        },
                        'w': {
                            'name': 'WRoom419',
                            'image': 'R411-west.jpg',
                            'destination': {
                                'x': 3
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 79,
                                    'height': 188,
                                    'top': 259,
                                    'left': 519,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NRoom419',
                            'image': 'R411-north.jpg'
                        },
                        's': {
                            'name': 'SRoom419',
                            'image': 'R411-south.jpg'
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
                            'image': 'R311-east.jpg',
                            'destination': {
                                'x': 4
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 230,
                                    'height': 564,
                                    'top': 166,
                                    'left': 442,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall319',
                            'image': 'R311-west.jpg',
                            'destination': {
                                'x': 2
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
                            'image': 'R311-south.jpg'
                        }
                    }
                }
            }
        },
        'First Floor Aftermath': {
            'z': 8,
            '_rooms': {
                'room348': {
                    'id': 'hall348',
                    'x': 3,
                    'y': 4,
                    '_triggers' : ['deactivatePassout'],
                    '_walls': {
                        'e': {
                            'name': 'EHall348',
                            'image': 'R340-east.jpg',
                            'destination': {
                                'x': 4
                            },
                            '_triggers' : ['dangerwarningGlass'],
                            '_props': {
                                'brokenGlass': {
                                    'name': 'brokenGlass',
                                    'image': 'brokenGlass.png',
                                    'hoverImage': 'brokenGlassHover.png',
                                    'width': 300,
                                    'height': 200,
                                    'left': 415,
                                    'top': 380,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Broken glass'
                                    }
                                },
                                'brokenDoor': {
                                    'name': 'brokenDoor',
                                    'image': 'dooraskew.png',
                                    'hoverImage': 'dooraskewHover.png',
                                    'width': 80,
                                    'height': 320,
                                    'left': 700,
                                    'top': 205,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Unhinged door'
                                    }
                                },
                                'bridgeDoor': {
                                    'name': 'bridgeDoor',
                                    'image': 'doordown.png',
                                    'hoverImage': 'doordownHover.png',
                                    'width': 200,
                                    'height': 150,
                                    'left': 435,
                                    'top': 380,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Broken glass'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall348',
                            'image': 'R340-west.jpg',
                            'destination': {
                                'x': 2
                            },
                            '_props' : {
                                'bikeMangled' : {
                                    'named' : 'bikeMangled',
                                    'image' : 'bikeMangle.png',
                                    'width': 30,
                                    'height': 40,
                                    'left': 540,
                                    'top': 285
                                },
                                'beam' : {
                                    'named' : 'beam',
                                    'image' : 'beam.png',
                                    'width': 10,
                                    'height': 45,
                                    'left': 541,
                                    'top': 280
                                },
                                'bikeMoved' : {
                                    'named' : 'bikeMoved',
                                    'image' : 'bikeMoved.png',
                                    'width': 14,
                                    'height': 28,
                                    'left': 573,
                                    'top': 295
                                },
                                'wheelchair':{
                                    'name':'the_wheelchair',
                                    'image':'manLeft.png',
                                    'width':100,
                                    'height':100,
                                    'left': 510,
                                    'top': 300
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall348',
                            'image': 'R340-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SHall348',
                            'image': 'R340-south.jpg',
                            'destination': {
                                'y': 3
                            },
                            '_props':{
                                'smokeSafe': {
                                    'name': 'smokeSafe',
                                    'image': 'smokeScreen.png',
                                    'width': 150,
                                    'height': 90,
                                    'left': 485,
                                    'top': 250
                                }
                            }
                        }
                    }
                },
                'room158': {
                    'id': 'hall158',
                    'x': 1,
                    'y': 5,
                    '_walls': {
                        'e': {
                            'name': 'EHall158',
                            'image': 'R150-east.jpg'
                        },
                        'w': {
                            'name': 'WHall158',
                            'image': 'R150-west.jpg'
                        },
                        'n': {
                            'name': 'NHall158',
                            'image': 'R150-north.jpg'
                        },
                        's': {
                            'name': 'SHall158',
                            'image': 'R150-south.jpg',
                            'destination': {
                                'y': 4
                            }
                        }
                    }
                },
                'room118': {
                    'id': 'hall118',
                    'x': 1,
                    'y': 1,
                    '_triggers' : ['activateElectrocute','footInjury'],
                    '_walls': {
                        'e': {
                            'name': 'EHall118',
                            'image': 'R110-east.jpg'
                        },
                        'w': {
                            'name': 'WHall118',
                            'image': 'R110-west.jpg'
                        },
                        'n': {
                            'name': 'NHall118',
                            'image': 'R110-north.jpg',
                            'destination': {
                                'y': 2
                            },
                            '_props' : {
                                'Downedwire': {
                                    'name': 'Downedwire',
                                    'image': 'wire.png',
                                    'width': 160,
                                    'height': 102,
                                    'left': 483,
                                    'top': 220
                                },
                                'Movedwire': {
                                    'name': 'Movedwire',
                                    'image': 'wire-moved.png',
                                    'width': 160,
                                    'height': 102,
                                    'left': 483,
                                    'top': 220
                                },
                                'doorFrame': {
                                    'name': 'doorFrame',
                                    'image': 'doorframe2.png',
                                    'hoverImage': 'doorframe2Hover.png',
                                    'width': 75,
                                    'height': 75,
                                    'left': 534,
                                    'top': 400,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'A door frame'
                                    }
                                },
                                'Luke2' : {
                                    'name': 'Luke2',
                                    'image': 'RunnerFront.png',
                                    'width': 113,
                                    'height': 300,
                                    'left': 475,
                                    'top': 250,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Luke'
                                    }
                                }
                            }
                        },
                        's': {
                            'name': 'SHall118',
                            'image': 'R110-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                'room108': {
                    'id': 'hall108',
                    'x': 1,
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall108',
                            'image': 'R108-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'w': {
                            'name': 'WHall108',
                            'image': 'R100-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 215,
                                    'height': 536,
                                    'top': 140,
                                    'left': 154,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall108',
                            'image': 'R100-north.jpg',
                            'destination': {
                                'y': 1
                            },
                            '_props' : {
                                'Downedwire': {
                                    'name': 'Downedwire',
                                    'image': 'wire.png',
                                    'width': 50,
                                    'height': 32,
                                    'left': 530,
                                    'top': 275
                                },
                                'Movedwire': {
                                    'name': 'Movedwire',
                                    'image': 'wire-moved.png',
                                    'width': 50,
                                    'height': 32,
                                    'left': 530,
                                    'top': 275
                                },
                                'doorFrame': {
                                    'name': 'doorFrame',
                                    'image': 'doorframe2.png',
                                    'width': 35,
                                    'height': 35,
                                    'left': 534,
                                    'top': 355
                                },
                                'Luke2' : {
                                    'name': 'Luke2',
                                    'image': 'RunnerFront.png',
                                    'width': 94,
                                    'height': 250,
                                    'left': 475,
                                    'top': 250,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Luke'
                                    }
                                }
                            }
                        },
                        's': {
                            'name': 'SHall108',
                            'image': 'R100-south.jpg'
                        }
                    }
                },
                'room358': {
                    'id': 'restroom358',
                    'x': 3,
                    'y': 5,
                    '_walls': {
                        'e': {
                            'name': 'ERestroom358',
                            'image': 'R350-east.jpg'
                        },
                        'w': {
                            'name': 'WRestroom358',
                            'image': 'R350-west.jpg'
                        },
                        'n': {
                            'name': 'NRestroom358',
                            'image': 'R350-north.jpg'
                        },
                        's': {
                            'name': 'SRestroom358',
                            'image': 'R350-south.jpg',
                            'destination': {
                                'y': 4
                            }
                        }
                    }
                },
                'room238': {
                    'id': 'room238',
                    'x': 2,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'ERoom238',
                            'image': 'R230-east.jpg',
                            'destination': {
                                'x': 3
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 82,
                                    'height': 190,
                                    'top': 246,
                                    'left': 560,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WRoom238',
                            'image': 'R230-west.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideRightHover.png',
                                    'width': 82,
                                    'height': 190,
                                    'top': 246,
                                    'left': 473,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NRoom238',
                            'image': 'R230-north.jpg'
                        },
                        's': {
                            'name': 'SRoom238',
                            'image': 'R230-south.jpg'
                        }
                    }
                },
                'room328': {
                    'id': 'hall328',
                    'x': 3,
                    'y': 2,
                    '_triggers' : ['passout', 'approachSmoke'],
                    '_walls': {
                        'e': {
                            'name': 'EHall328',
                            'image': 'R320-east.jpg',
                            'destination': {
                                'x': 4
                            },
                            '_props' : {
                                'smoke': {
                                    'name': 'smoke',
                                    'image': 'smokeScreen.png',
                                    'width': 1300,
                                    'height': 600,
                                    'left': 0,
                                    'top': 0,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Smoke'
                                    }
                                },
                                'smokeSafe': {
                                    'name': 'smokeSafe',
                                    'image': 'smokeScreen.png',
                                    'width': 1300,
                                    'height': 600,
                                    'left': 0,
                                    'top': 0,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Smoke'
                                    }
                                },
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideLeftHover.png',
                                    'width': 230,
                                    'height': 537,
                                    'top': 135,
                                    'left': 571,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall328',
                            'image': 'R320-west.jpg',
                            '_props' : {
                                'smokeSafe': {
                                    'name': 'smokeSafe',
                                    'image': 'smokeScreen.png',
                                    'width': 1300,
                                    'height': 600,
                                    'left': 0,
                                    'top': 0,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Smoke'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall328',
                            'image': 'R320-north.jpg',
                            'destination': {
                                'y': 3
                            },
                            '_triggers' : ['activatePassout','dangerwarningSmoke'],
                            '_props' : {
                                'smoke': {
                                    'name': 'smoke',
                                    'image': 'smokeScreen.png',
                                    'width': 1300,
                                    'height': 600,
                                    'left': 0,
                                    'top': 0,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Smoke'
                                    }
                                },
                                'smokeSafe': {
                                    'name': 'smokeSafe',
                                    'image': 'smokeScreen.png',
                                    'width': 1300,
                                    'height': 600,
                                    'left': 0,
                                    'top': 0,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Smoke'
                                    }
                                }
                            }
                        },
                        's': {
                            'name': 'SHall328',
                            'image': 'R320-south.jpg',
                            'destination': {
                                'y': 1
                            },
                            '_props' : {
                            'smokeSafe': {
                                    'name': 'smokeSafe',
                                    'image': 'smokeScreen.png',
                                    'width': 1300,
                                    'height': 150,
                                    'left': 0,
                                    'top': 0,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Smoke'
                                    }
                                },
                                'wallwater': {
                                    'name': 'wallwater',
                                    'image': 'wallwater-reversed.png',
                                    'width': 78,
                                    'height': 308,
                                    'top': 172,
                                    'left': 654,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'WallWater',
                                        'isAnAction': true
                                    }
                                }
                            }
                        }
                    }
                },
                'room148': {
                    'id': 'hall148',
                    'x': 1,
                    'y': 4,
                    '_triggers': ['footInjury'],
                    '_walls': {
                        'e': {
                            'name': 'EHall148',
                            'image': 'R140-east.jpg',
                            'destination': {
                                'x': 2
                            },
                            '_props': {
                                'bridgeDoor': {
                                    'name': 'bridgeDoor',
                                    'image': 'doordown.png',
                                    'width': 40,
                                    'height': 23,
                                    'top': 325,
                                    'left': 540
                                },
                                'brokenGlass': {
                                    'name': 'brokenGlass',
                                    'image': 'brokenGlass.png',
                                    'width': 80,
                                    'height': 25,
                                    'top': 330,
                                    'left': 520
                                },
                                'mrs-wheelchair': {
                                    'name': 'mrs_wheelchair',
                                    'image': 'manFront.png',
                                    'width': 275,
                                    'height': 275,
                                    'top': 300,
                                    'left': 400,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'James'
                                    }
                                }
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
                            'image': 'R140-south.jpg',
                            '_triggers': ['dangerwarningPowerLines', 'activateElectrocute'],
                            'destination': {
                                'y': 3
                            },
                            '_props': {
                                'Downedwire': {
                                    'name': 'Downedwire',
                                    'image': 'wire.png',
                                    'width': 160,
                                    'height': 102,
                                    'top': 220,
                                    'left': 483
                                },
                                'Luke2': {
                                    'name': 'Luke2',
                                    'image': 'RunnerBack.png',
                                    'width': 24,
                                    'height': 69,
                                    'top': 288,
                                    'left': 539
                                },
                                'Movedwire': {
                                    'name': 'Movedwire',
                                    'image': 'wire-moved.png',
                                    'width': 160,
                                    'height': 102,
                                    'top': 220,
                                    'left': 483
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall148',
                            'image': 'R140-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'beam': {
                                    'name': 'beam',
                                    'image': 'beam.png',
                                    'width': 12,
                                    'height': 85,
                                    'top': 275,
                                    'left': 528
                                },
                                'bikeMangled': {
                                    'name': 'bikeMangle',
                                    'image': 'bikeMangle.png',
                                    'width': 50,
                                    'height': 65,
                                    'top': 284,
                                    'left': 529
                                },
                                'bikeMoved': {
                                    'name': 'bikeMoved',
                                    'image': 'bikeMoved.png',
                                    'width': 30,
                                    'height': 55,
                                    'top': 301,
                                    'left': 577
                                }
                            }
                        }
                    }
                },
                'room008': {
                    'id': 'classroom008',
                    'x': 0,
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EClassroom008',
                            'image': 'R000-east.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'smBookcase' : {
                                    'name' : 'smBookcase',
                                    'image' : 'smBookcaseside.png',
                                    'width': 200,
                                    'height': 150,
                                    'left': 75,
                                    'top': 365
                                },
                                'heavy': {
                                    'name': 'heavy',
                                    'image': 'heavy-smashed2.png',
                                    'width': 125,
                                    'height': 35,
                                    'left': 300,
                                    'top': 475
                                },
                                'heavy-on-floor': {
                                    'name': 'heavy',
                                    'image': 'largeTVside.png',
                                    'width': 100,
                                    'height': 150,
                                    'left': 200,
                                    'top': 400
                                },
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 104,
                                    'height': 236,
                                    'top': 232,
                                    'left': 966,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WClassroom008',
                            'image': 'R000-west.jpg'
                        },
                        'n': {
                            'name': 'NClassroom008',
                            'image': 'R000-north.jpg',
                            '_props': {
                                'smBookcase' : {
                                    'name' : 'smBookcase',
                                    'image' : 'smBookcase.png',
                                    'width': 200,
                                    'height': 150,
                                    'left': 705,
                                    'top': 330
                                },
                                'heavy': {
                                    'name': 'heavy',
                                    'image': 'heavy-smashed2.png',
                                    'width': 200,
                                    'height': 35,
                                    'left': 760,
                                    'top': 480
                                },
                                'heavy-on-floor': {
                                    'name': 'heavy',
                                    'image': 'largeTV.png',
                                    'width': 200,
                                    'height': 175,
                                    'left': 760,
                                    'top': 360
                                }
                            }
                        },
                        's': {
                            'name': 'SClassroom008',
                            'image': 'R000-south.jpg',
                            '_props': {
                                'evac_plan_1': {
                                    'name': 'evac_plan_1',
                                    'image': 'rectangle.png',
                                    'hoverImage': 'rectangleGlow.png',
                                    'width': 56,
                                    'height': 50,
                                    'left': 367,
                                    'top': 285,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'evac_first_floor_detail'
                                    }
                                }
                            }
                        }
                    }
                },
                'room338': {
                    'id': 'hall338',
                    'x': 3,
                    'y': 3,
                    '_triggers' : ['passout','aftershock'],
                    '_walls': {
                        'e': {
                            'name': 'EHall338',
                            'image': 'R330-east.jpg'
                        },
                        'w': {
                            'name': 'WHall338',
                            'image': 'R330-west.jpg',
                            'destination': {
                                'x': 2
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 229,
                                    'height': 544,
                                    'top': 137,
                                    'left': 319,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
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
                            },
                            '_triggers' : ['dangerwarningSmoke','activatePassout', 'approachSmoke'],
                            '_props' : {
                                'smoke': {
                                    'name': 'smoke',
                                    'image': 'smokeScreen.png',
                                    'width': 1300,
                                    'height': 400,
                                    'left': 0,
                                    'top': 0,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Smoke'
                                    }
                                },
                                'smokeSafe': {
                                    'name': 'smokeSafe',
                                    'image': 'smokeScreen.png',
                                    'width': 1300,
                                    'height': 400,
                                    'left': 0,
                                    'top': 0,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Smoke'
                                    }
                                }
                            }
                        },
                        'blackout': {
                            'name': 'SHall338',
                            'image': 'blackout.jpg',
                            'isCutscene': true
                        }
                    }
                },
                'room138': {
                    'id': 'hall138',
                    'x': 1,
                    'y': 3,
                    '_triggers': ['lukeRunsPast','electrocute'],
                    '_walls': {
                        'Runscene': {
                            'name': 'Runscene',
                            'image': 'R130-north.jpg',
                            'destination': {
                                'x': 2
                            },
                            'isCutscene': true,
                            '_props': {
                                'Luke': {
                                    'name': 'Luke',
                                    'image': 'RunnerFront.png',
                                    'width': 113,
                                    'height': 300,
                                    'top': 250,
                                    'left': 475
                                }
                            }
                        },
                        'e': {
                            'name': 'NHall138',
                            'image': 'R130-east.jpg',
                            'destination': {
                                'x': 2
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideLeftHover.png',
                                    'width': 231,
                                    'height': 598,
                                    'top': 135,
                                    'left': 567,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'WHall138',
                            'image': 'R130-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'EHall138',
                            'image': 'R130-south.jpg',
                            'destination': {
                                'y': 2
                            },
                            '_props': {
                                'Downedwire': {
                                    'name': 'Downedwire',
                                    'image': 'wire.png',
                                    'width': 385,
                                    'height': 250,
                                    'top': 120,
                                    'left': 370,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Hanging wires'
                                    }
                                },
                                'Luke2': {
                                    'name': 'Luke2',
                                    'image': 'RunnerBack.png',
                                    'width': 55,
                                    'height': 152,
                                    'top': 284,
                                    'left': 526
                                },
                                'Movedwire': {
                                    'name': 'Movedwire',
                                    'image': 'wire-moved.png',
                                    'width': 385,
                                    'height': 250,
                                    'top': 120,
                                    'left': 374
                                },
                                'doorFrame': {
                                    'name': 'doorFrame',
                                    'image': 'doorframe2.png',
                                    'width': 25,
                                    'height': 25,
                                    'top': 325,
                                    'left': 540
                                }
                            }
                        },
                        'w': {
                            'name': 'SHall138',
                            'image': 'R130-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 226,
                                    'height': 567,
                                    'top': 138,
                                    'left': 446,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        }
                    }
                },
                'room418': {
                    'id': 'hall418',
                    'x': 4,
                    'y': 1,
                    '_triggers' : ['deactivatePassout'],
                    '_walls': {
                        'e': {
                            'name': 'EHall418',
                            'image': 'R410-east.jpg'
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
                'room228': {
                    'id': 'stairs228',
                    'x': 2,
                    'y': 2,
                    'annotation': 'AnnotationStairs.png',
                    '_walls': {
                        'e': {
                            'name': 'EStairs228',
                            'image': 'R220-east.jpg'
                        },
                        'w': {
                            'name': 'WStairs228',
                            'image': 'R220-west.jpg',
                            'destination': {
                                'x': 1,
                                'z': 9
                            }
                        },
                        'n': {
                            'name': 'NStairs228',
                            'image': 'R220-north.jpg',
                            '_props': {
                                'Info-TV': {
                                    'name': 'Info-TV',
                                    'image': 'info-tv.png',
                                    'hoverImage': 'info-tvHover.png',
                                    'width': 215,
                                    'height': 139,
                                    'top': 192,
                                    'left': 454,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Info TV'
                                    }
                                }
                            }
                        },
                        's': {
                            'name': 'SStairs228',
                            'image': 'R228-south.jpg',
                            'destination': {
                                'y': 1
                            }
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
                            'image': 'R400-east.jpg'
                        },
                        'w': {
                            'name': 'WHall408',
                            'image': 'R400-west.jpg',
                            'destination': {
                                'x': 3
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideRightHover.png',
                                    'width': 72,
                                    'height': 171,
                                    'top': 252,
                                    'left': 482,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
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
                'room448': {
                    'id': 'hall448',
                    'x': 4,
                    'y': 4,
                    '_triggers' : ['activateFootInjury'],
                    '_walls': {
                        'e': {
                            'name': 'EHall448',
                            'image': 'R440-east.jpg',
                            'destination': {
                                'x': 5
                            }
                        },
                        'w': {
                            'name': 'WHall448',
                            'image': 'R440-west.jpg',
                            'destination': {
                                'x': 3
                            },
                            '_props' : {
                                'bikeMangled' : {
                                    'named' : 'bikeMangled',
                                    'image' : 'bikeMangle.png',
                                    'width': 30,
                                    'height': 40,
                                    'left': 540,
                                    'top': 285
                                },
                                'beam' : {
                                    'named' : 'beam',
                                    'image' : 'beam.png',
                                    'width': 9,
                                    'height': 38,
                                    'left': 541,
                                    'top': 280
                                },
                                'bikeMoved' : {
                                    'named' : 'bikeMoved',
                                    'image' : 'bikeMoved.png',
                                    'width': 13,
                                    'height': 27,
                                    'left': 570,
                                    'top': 295
                                },
                                'wheelchair':{
                                    'name':'the_wheelchair',
                                    'image':'manLeft.png',
                                    'width':50,
                                    'height':50,
                                    'left': 530,
                                    'top': 300
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall448',
                            'image': 'R440-north.jpg'
                        },
                        's': {
                            'name': 'SHall448',
                            'image': 'R440-south.jpg',
                            'destination': {
                                'y': 3
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 225,
                                    'height': 552,
                                    'top': 138,
                                    'left': 461,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        }
                    }
                },
                'room208': {
                    'id': 'hall208',
                    'x': 2,
                    'y': 0,
                    'annotation': 'AnnotationExit.png',
                    '_walls': {
                        'e': {
                            'name': 'EHall208',
                            'image': 'R200-east.jpg',
                            'destination': {
                                'x': 3
                            }
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
                            'image': 'R208-south.jpg',
                            '_props': {
                                'destroyedRotaryDoor': {
                                    'name': 'destroyedRotaryDoor',
                                    'image': 'largeSquare.png',
                                    'hoverImage': 'largeSquareHover.png',
                                    'width': 265,
                                    'height': 303,
                                    'top': 201,
                                    'left': 425,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'DestroyedRotaryDoor',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall208',
                            'image': 'R200-west.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_triggers': []
                        }
                    }
                },
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
                            },
                            '_props': {
                                'bridgeDoor': {
                                    'name': 'bridgeDoor',
                                    'image': 'doordown.png',
                                    'width': 60,
                                    'height': 45,
                                    'top': 340,
                                    'left': 530
                                },
                                'brokenDoor': {
                                    'name': 'brokenDoor',
                                    'image': 'dooraskew.png',
                                    'width': 15,
                                    'height': 120,
                                    'top': 251,
                                    'left': 610
                                },
                                'brokenGlass': {
                                    'name': 'brokenGlass',
                                    'image': 'brokenGlass.png',
                                    'width': 125,
                                    'height': 25,
                                    'top': 350,
                                    'left': 500
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall248',
                            'image': 'R240-north.jpg'
                        },
                        's': {
                            'name': 'SHall248',
                            'image': 'R240-south.jpg'
                        },
                        'w': {
                            'name': 'WHall248',
                            'image': 'R240-west.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'beam': {
                                    'name': 'beam',
                                    'image': 'beam.png',
                                    'width': 13,
                                    'height': 55,
                                    'top': 280,
                                    'left': 535
                                },
                                'bikeMangled': {
                                    'name': 'bikeMangle',
                                    'image': 'bikeMangle.png',
                                    'width': 35,
                                    'height': 50,
                                    'top': 286,
                                    'left': 540
                                },
                                'bikeMoved': {
                                    'name': 'bikeMoved',
                                    'image': 'bikeMoved.png',
                                    'width': 15,
                                    'height': 41,
                                    'top': 301,
                                    'left': 579
                                },
                                'mrs-wheelchair': {
                                    'name': 'mrs_wheelchair',
                                    'image': 'manLeft.png',
                                    'width': 275,
                                    'height': 275,
                                    'top': 308,
                                    'left': 406,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'James'
                                    }
                                }
                            }
                        }
                    }
                },
                'room128': {
                    'id': 'hall128',
                    'x': 1,
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall128',
                            'image': 'R120-east.jpg'
                        },
                        'n': {
                            'name': 'NHall128',
                            'image': 'R120-north.jpg',
                            'destination': {
                                'y': 3
                            },
                            '_triggers': ['dangerwarningPowerLines', 'activateElectrocute'],
                            '_props': {
                                'Downedwire': {
                                    'name': 'Downedwire',
                                    'image': 'wire.png',
                                    'width': 390,
                                    'height': 250,
                                    'top': 120,
                                    'left': 370,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Hanging wires'
                                    }
                                },
                                'Movedwire': {
                                    'name': 'Movedwire',
                                    'image': 'wire-moved.png',
                                    'width': 390,
                                    'height': 250,
                                    'top': 120,
                                    'left': 370
                                }
                            }
                        },
                        's': {
                            'name': 'SHall128',
                            'image': 'R120-south.jpg',
                            'destination': {
                                'y': 1
                            },
                            '_props': {
                                'Luke2': {
                                    'name': 'Luke2',
                                    'image': 'RunnerBack.png',
                                    'width': 81,
                                    'height': 250,
                                    'top': 248,
                                    'left': 477,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Luke'
                                    }
                                },
                                'doorFrame': {
                                    'name': 'doorFrame',
                                    'image': 'doorframe2.png',
                                    'hoverImage': 'doorframe2Hover.png',
                                    'width': 75,
                                    'height': 75,
                                    'top': 400,
                                    'left': 515,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'A door frame'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall128',
                            'image': 'R120-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 229,
                                    'height': 532,
                                    'top': 135,
                                    'left': 445,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        }
                    }
                },
                'room428': {
                    'id': 'hall428',
                    'x': 4,
                    'y': 2,
                    '_triggers' : ['passout'],
                    '_walls': {
                        'e': {
                            'name': 'EHall428',
                            'image': 'R420-east.jpg'
                        },
                        'w': {
                            'name': 'WHall428',
                            'image': 'R420-west.jpg',
                            'destination': {
                                'x': 3
                            },
                            '_triggers' : ['dangerwarningSmoke','activatePassout'],
                            '_props' : {
                                'smoke': {
                                    'name': 'smoke',
                                    'image': 'smokeScreen.png',
                                    'width': 1300,
                                    'height': 600,
                                    'left': 0,
                                    'top': 0,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Smoke'
                                    }
                                },
                                'smokeSafe': {
                                    'name': 'smokeSafe',
                                    'image': 'smokeScreen.png',
                                    'width': 1300,
                                    'height': 600,
                                    'left': 0,
                                    'top': 0,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Smoke'
                                    }
                                },
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideRightHover.png',
                                    'width': 74,
                                    'height': 171,
                                    'top': 252,
                                    'left': 480,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall428',
                            'image': 'R420-north.jpg'
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
                'room038': {
                    'id': 'classroom038',
                    'x': 0,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EClassroom038',
                            'image': 'R030-east.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'w': {
                            'name': 'WClassroom038',
                            'image': 'R030-west.jpg'
                        },
                        'n': {
                            'name': 'NClassroom038',
                            'image': 'R030-north.jpg'
                        },
                        's': {
                            'name': 'SClassroom038',
                            'image': 'R030-south.jpg'
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
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideLeftHover.png',
                                    'width': 232,
                                    'height': 565,
                                    'top': 135,
                                    'left': 685,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall308',
                            'image': 'R308-west.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NHall308',
                            'image': 'R300-north.jpg',
                            'destination': {
                                'y': 1
                            },
                            '_props' : {
                                'wallwater': {
                                    'name': 'wallwater',
                                    'image': 'wallwater.png',
                                    'width': 40,
                                    'height': 160,
                                    'top': 232,
                                    'left': 470
                                },
                                'smokeSafe': {
                                    'name': 'smokeSafe',
                                    'image': 'smokeScreen.png',
                                    'width': 150,
                                    'height': 90,
                                    'left': 485,
                                    'top': 250
                                }
                            }
                        },
                        's': {
                            'name': 'SHall308',
                            'image': 'R300-south.jpg'
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
                            '_props': {
                                'evac_plan_1': {
                                    'name': 'evac_plan_1',
                                    'image': 'door.png',
                                    'hoverImage': 'doorHover.png',
                                    'width': 530,
                                    'height': 430,
                                    'left': 290,
                                    'top': 50,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'evac_first_floor'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall218',
                            'image': 'R210-west.jpg',
                            '_props': {
                                'elevator-up': {
                                    'name': 'elevator-up',
                                    'image': 'elevator-up.png',
                                    'hoverImage': 'elevator-up-hover.png',
                                    'width': 75,
                                    'height': 42,
                                    'left': 815,
                                    'top': 350,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Aftermath Elevator'
                                    }
                                }
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
                            'image': 'R218-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                'room548': {
                    'id': 'hall548',
                    'x': 5,
                    'y': 4,
                    'annotation': 'AnnotationExit.png',
                    '_triggers': ['footInjury'],
                    '_walls': {
                        'e': {
                            'name': 'EHall548',
                            'image': 'R540-east.jpg',
                            '_props': {
                                'east-exit': {
                                    'name': 'east-exit',
                                    'image': 'door.png',
                                    'hoverImage': 'doorHover.png',
                                    'width': 166,
                                    'height': 351,
                                    'top': 186,
                                    'left': 475,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Exit Building'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall548',
                            'image': 'R540-north.jpg'
                        },
                        's': {
                            'name': 'SHall548',
                            'image': 'R540-south.jpg'
                        },
                        'w': {
                            'name': 'WHall548',
                            'image': 'R540-west.jpg',
                            'destination': {
                                'x': 4
                            },
                            '_props': {
                                'bridgeDoor': {
                                    'name': 'bridgeDoor',
                                    'image': 'doordown.png',
                                    'width': 78,
                                    'height': 65,
                                    'top': 330,
                                    'left': 505,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Broken glass'
                                    }
                                },
                                'brokenGlass': {
                                    'name': 'brokenGlass',
                                    'image': 'brokenGlass.png',
                                    'width': 130,
                                    'height': 75,
                                    'top': 330,
                                    'left': 490,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Broken glass'
                                    }
                                },
                                'wheelchair': {
                                    'name': 'the_wheelchair',
                                    'image': 'manLeft.png',
                                    'width': 30,
                                    'height': 30,
                                    'top': 300,
                                    'left': 540
                                }
                            }
                        }
                    }
                },
                'room318': {
                    'id': 'hall318',
                    'x': 3,
                    'y': 1,
                    '_triggers' : ['deactivatePassout'],
                    '_walls': {
                        'e': {
                            'name': 'EHall318',
                            'image': 'R310-east.jpg'
                        },
                        'w': {
                            'name': 'WHall318',
                            'image': 'R310-west.jpg'
                        },
                        'n': {
                            'name': 'NHall318',
                            'image': 'R310-north.jpg',
                            'destination': {
                                'y': 2
                            },
                            '_props' : {
                                'wallwater': {
                                    'name': 'wallwater',
                                    'image': 'wallwater.png',
                                    'width': 96,
                                    'height': 433,
                                    'top': 102,
                                    'left': 334,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'WallWater',
                                        'isAnAction': true
                                    }
                                },
                                'smokeSafe': {
                                    'name': 'smokeSafe',
                                    'image': 'smokeScreen.png',
                                    'width': 225,
                                    'height': 125,
                                    'left': 455,
                                    'top': 215
                                }
                            }
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
                'room438': {
                    'id': 'hall438',
                    'x': 4,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall438',
                            'image': 'R430-east.jpg'
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
                            'image': 'R430-south.jpg'
                        }
                    }
                },
                'room028': {
                    'id': 'classroom028',
                    'x': 0,
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EClassroom028',
                            'image': 'R020-east.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 106,
                                    'height': 246,
                                    'top': 228,
                                    'left': 453,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WClassroom028',
                            'image': 'R020-west.jpg'
                        },
                        'n': {
                            'name': 'NClassroom028',
                            'image': 'R020-north.jpg'
                        },
                        's': {
                            'name': 'SClassroom028',
                            'image': 'R020-south.jpg'
                        }
                    }
                },
                'room048': {
                    'id': 'hall048',
                    'x': 0,
                    'y': 4,
                    'annotation': 'AnnotationExit.png',
                    '_walls': {
                        'e': {
                            'name': 'EHall048',
                            'image': 'R040-east.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'wheelchair': {
                                    'name': 'the_wheelchair',
                                    'image': 'manFront.png',
                                    'width': 45,
                                    'height': 45,
                                    'top': 305,
                                    'left': 535
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall048',
                            'image': 'R040-north.jpg'
                        },
                        's': {
                            'name': 'SHall048',
                            'image': 'R040-south.jpg'
                        },
                        'w': {
                            'name': 'WHall048',
                            'image': 'R040-west.jpg',
                            '_props': {
                                'beam': {
                                    'name': 'beam',
                                    'image': 'beam.png',
                                    'width': 60,
                                    'height': 450,
                                    'top': 130,
                                    'left': 385
                                },
                                'bikeMangled': {
                                    'name': 'bikeMangled',
                                    'image': 'bikeMangle.png',
                                    'hoverImage': 'bikeMangleHover.png',
                                    'width': 350,
                                    'height': 425,
                                    'top': 140,
                                    'left': 355,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'A Mangled Bike'
                                    }
                                },
                                'bikeMoved': {
                                    'name': 'bikeMoved',
                                    'image': 'bikeMoved.png',
                                    'width': 100,
                                    'height': 300,
                                    'top': 300,
                                    'left': 750,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'A Bike against the wall.'
                                    }
                                },
                                'west-exit': {
                                    'name': 'west-exit',
                                    'image': 'door.png',
                                    'hoverImage': 'doorHover.png',
                                    'width': 167,
                                    'height': 352,
                                    'top': 188,
                                    'left': 475,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Exit Building'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        'Second Floor': {
            'z': 1,
            '_rooms': {
                'room121': {
                    'id': 'hall121',
                    'x': 1,
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall121',
                            'image': 'R121-east.jpg',
                            'destination': {
                                'x': 2,
                                'z': 0
                            }
                        },
                        'n': {
                            'name': 'NHall121',
                            'image': 'R121-north.jpg',
                            'destination': {
                                'y': 3
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 225,
                                    'height': 604,
                                    'top': 169,
                                    'left': 445,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        's': {
                            'name': 'SHall121',
                            'image': 'R121-south.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        'w': {
                            'name': 'WHall121',
                            'image': 'R121-west.jpg',
                            '_props': {
                                'aorSign': {
                                    'name': 'aorSign',
                                    'image': 'AreaRescueSign.png',
                                    'width': 125,
                                    'height': 75,
                                    'top': 325,
                                    'left': 280
                                }
                            }
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
                            'image': 'R311-east.jpg',
                            'destination': {
                                'x': 4
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 230,
                                    'height': 564,
                                    'top': 166,
                                    'left': 442,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall311',
                            'image': 'R311-west.jpg',
                            'destination': {
                                'x': 2
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
                            'image': 'R311-south.jpg'
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
                            'image': 'R101-west.jpg'
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
                            'image': 'R101-south.jpg'
                        }
                    }
                },
                'room141': {
                    'id': 'library141',
                    'x': 1,
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary141',
                            'image': 'R141-east.jpg'
                        },
                        'n': {
                            'name': 'NLibrary141',
                            'image': 'R141-north.jpg'
                        },
                        's': {
                            'name': 'SLibrary141',
                            'image': 'R141-south.jpg',
                            'destination': {
                                'y': 3
                            }
                        },
                        'w': {
                            'name': 'WLibrary141',
                            'image': 'R141-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 113,
                                    'height': 271,
                                    'top': 236,
                                    'left': 502,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        }
                    }
                },
                'room131': {
                    'id': 'library131',
                    'x': 1,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary131',
                            'image': 'R131-east.jpg',
                            'destination': {
                                'x': 2
                            }
                        },
                        'n': {
                            'name': 'NLibrary131',
                            'image': 'R131-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SLibrary131',
                            'image': 'R131-south.jpg',
                            'destination': {
                                'y': 2
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 112,
                                    'height': 253,
                                    'top': 239,
                                    'left': 657,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WLibrary131',
                            'image': 'R131-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'door2': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 122,
                                    'height': 281,
                                    'top': 234,
                                    'left': 788,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door2',
                                        'isAnAction': true
                                    }
                                }
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
                            'image': 'R321-west.jpg'
                        },
                        'n': {
                            'name': 'NHall321',
                            'image': 'R321-north.jpg'
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
                'room031': {
                    'id': 'office031',
                    'x': 0,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EOffice031',
                            'image': 'R031-east.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 191,
                                    'height': 487,
                                    'top': 192,
                                    'left': 461,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WOffice031',
                            'image': 'R031-west.jpg'
                        },
                        'n': {
                            'name': 'NOffice031',
                            'image': 'R031-north.jpg'
                        },
                        's': {
                            'name': 'SOffice031',
                            'image': 'R031-south.jpg'
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
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 189,
                                    'height': 489,
                                    'top': 192,
                                    'left': 463,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NOffice041',
                            'image': 'R041-north.jpg'
                        },
                        's': {
                            'name': 'SOffice041',
                            'image': 'R041-south.jpg'
                        },
                        'w': {
                            'name': 'WOffice041',
                            'image': 'R041-west.jpg'
                        }
                    }
                },
                'room011': {
                    'id': 'class011',
                    'x': 0,
                    'y': 1,
                    '_triggers': ['enterRoom206','hiXavier','walkedAwayFromConversation'],
                    '_walls': {
                        'e': {
                            'name': 'EClass011',
                            'image': 'R011-east.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 151,
                                    'height': 348,
                                    'top': 217,
                                    'left': 482,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                },
                                'evac_plan_2': {
                                    'name': 'evac_plan_2',
                                    'image': 'rectangle.png',
                                    'hoverImage': 'rectangleGlow.png',
                                    'width': 130,
                                    'height': 117,
                                    'left': 724,
                                    'top': 270,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'evac_second_floor_detail'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WClass011',
                            'image': 'R011-west.jpg',
                            '_props': {
                                'profXav': {
                                    'name': 'profXav',
                                    'image': 'XavFront.png',
                                    'width': 113,
                                    'height': 340,
                                    'left': 440,
                                    'top': 230,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Professor Xavier'
                                    }
                                },
                                'sturdydesk':{
                                    'name': 'Sturdy Desk',
                                    'image': 'sturdyDesk.png',
                                    'hoverImage':'sturdyDeskHover.png',
                                    'width': 285,
                                    'height': 94,
                                    'left': 751,
                                    'top': 405,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Sturdy Desk',
                                        'isAnAction': true
                                    }
                                },
                                'chalk': {
                                    'name':'Chalk',
                                    'image': 'chalk.png',
                                    'hoverImage': 'chalkHover.png',
                                    'width': 35,
                                    'height': 60,
                                    'left': 760,
                                    'top': 355,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Chalk on Sturdy Desk',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NClass011',
                            'image': 'R011-north.jpg'
                        },
                        's': {
                            'name': 'SClass011',
                            'image': 'R011-south.jpg'
                        }
                    }
                },
                'room201': {
                    'id': 'hall201',
                    'x': 2,
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EHall201',
                            'image': 'R201-east.jpg'
                        },
                        'w': {
                            'name': 'WHall201',
                            'image': 'R201-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NHall201',
                            'image': 'R201-north.jpg',
                            'destination': {
                                'y': 1
                            }
                        },
                        's': {
                            'name': 'SHall201',
                            'image': 'R201-south.jpg'
                        }
                    }
                },
                'room211': {
                    'id': 'hall211',
                    'x': 2,
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall211',
                            'image': 'R211-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'w': {
                            'name': 'WHall211',
                            'image': 'R211-west.jpg',
                            '_props': {
                                'elevator-down': {
                                    'name': 'elevator-down',
                                    'image': 'elevator-down.png',
                                    'hoverImage': 'elevator-down-hover.png',
                                    'width': 43,
                                    'height': 24,
                                    'left': 715,
                                    'top': 375,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Elevator Down'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall211',
                            'image': 'R211-north.jpg'
                        },
                        's': {
                            'name': 'SHall211',
                            'image': 'R211-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                },
                'room221': {
                    'id': 'stairs',
                    'x': 2,
                    'y': 2,
                    'annotation': 'AnnotationStairs.png',
                    '_walls': {
                        'w': {
                            'name': 'NullWall',
                            'image': 'blackout.jpg',
                            'destination': {
                                'x': 1
                            }
                        }
                    }
                },
                'room231': {
                    'id': 'library231',
                    'x': 2,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'ELibrary231',
                            'image': 'R231-east.jpg'
                        },
                        'w': {
                            'name': 'WLibrary231',
                            'image': 'R231-west.jpg',
                            'destination': {
                                'x': 1
                            }
                        },
                        'n': {
                            'name': 'NLibrary231',
                            'image': 'R231-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'SLibrary231',
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
                            'image': 'R241-east.jpg'
                        },
                        'w': {
                            'name': 'WLibrary241',
                            'image': 'R241-west.jpg'
                        },
                        'n': {
                            'name': 'NLibrary241',
                            'image': 'R241-north.jpg'
                        },
                        's': {
                            'name': 'SLibrary241',
                            'image': 'R241-south.jpg',
                            'destination': {
                                'y': 3
                            }
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
                            'image': 'R111-east.jpg',
                            '_props': {
                                'evac_plan_2': {
                                    'name': 'evac_plan_2',
                                    'image': 'door.png',
                                    'hoverImage': 'doorHover.png',
                                    'width': 559,
                                    'height': 433,
                                    'left': 274,
                                    'top': 63,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'evac_second_floor'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall111',
                            'image': 'R111-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 228,
                                    'height': 607,
                                    'top': 169,
                                    'left': 444,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
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
                'room411': {
                    'id': 'room411',
                    'x': 4,
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'ERoom411',
                            'image': 'R411-east.jpg'
                        },
                        'w': {
                            'name': 'WRoom411',
                            'image': 'R411-west.jpg',
                            'destination': {
                                'x': 3
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 79,
                                    'height': 188,
                                    'top': 259,
                                    'left': 519,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NRoom411',
                            'image': 'R411-north.jpg'
                        },
                        's': {
                            'name': 'SRoom411',
                            'image': 'R411-south.jpg'
                        }
                    }
                }
            }
        },
        'First Floor': {
            'z': 0,
            '_rooms': {
                'room410': {
                    'id': 'hall410',
                    'x': 4,
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall410',
                            'image': 'R410-east.jpg',
                            '_props':{
                                'screwdriver':{
                                    'name':'screwdriver',
                                    'image':'screwdriver.png',
                                    'hoverImage':'screwdriverHover.png',
                                    'width': 50,
                                    'height': 50,
                                    'left': 255,
                                    'top': 470,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'screwdriverconvo'
                                    }
                                }
                            }
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
                'room040': {
                    'id': 'hall040',
                    'x': 0,
                    'y': 4,
                    'annotation': 'AnnotationExit.png',
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
                            'image': 'R040-west.jpg',
                            '_props' : {
                                'bike' : {
                                    'named' : 'bike',
                                    'image' : 'bike.png',
                                    'hoverImage' : 'bikeHover.png',
                                    'width': 350,
                                    'height': 300,
                                    'left': 325,
                                    'top': 275,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'A Bike'
                                    }
                                },
                                'bikeMoved' : {
                                    'named' : 'bikeMoved',
                                    'image' : 'bikeMoved.png',
                                    'width': 100,
                                    'height': 300,
                                    'left': 750,
                                    'top': 300,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'A Bike against the wall'
                                    }
                                }
                            }
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
                'room030': {
                    'id': 'classroom030',
                    'x': 0,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EClassroom030',
                            'image': 'R030-east.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_triggers': [],
                            '_props': {
                                'computer': {
                                    'name': 'computer',
                                    'image': 'largeSquare.png',
                                    'hoverImage': 'largeSquareHover.png',
                                    'width': 170,
                                    'height': 114,
                                    'top': 311,
                                    'left': 324,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Computer',
                                        'isAnAction': true
                                    }
                                },
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 106,
                                    'height': 247,
                                    'top': 228,
                                    'left': 659,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NClassroom030',
                            'image': 'R030-north.jpg'
                        },
                        's': {
                            'name': 'SClassroom030',
                            'image': 'R030-south.jpg'
                        },
                        'w': {
                            'name': 'WClassroom030',
                            'image': 'R030-west.jpg'
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
                            'image': 'R310-east.jpg'
                        },
                        'w': {
                            'name': 'WHall310',
                            'image': 'R310-west.jpg'
                        },
                        'n': {
                            'name': 'NHall310',
                            'image': 'R310-north.jpg',
                            'destination': {
                                'y': 2
                            }
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
                'room540': {
                    'id': 'hall540',
                    'x': 5,
                    'y': 4,
                    'annotation': 'AnnotationExit.png',
                    '_walls': {
                        'e': {
                            'name': 'EHall540',
                            'image': 'R540-east.jpg'
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
                            'image': 'R540-north.jpg'
                        },
                        's': {
                            'name': 'SHall540',
                            'image': 'R540-south.jpg'
                        }
                    }
                },
                'room330': {
                    'id': 'hall330', 
                    'x': 3, 
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall330', 
                            'image': 'R330-east.jpg'
                        },
                        'w': {
                            'name': 'WHall330',
                            'image': 'R330-west.jpg',
                            'destination': {
                                'x': 2
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 229,
                                    'height': 544,
                                    'top': 137,
                                    'left': 319,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
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
                'room220': {
                    'id': 'stairs220',
                    'x': 2,
                    'y': 2,
                    'annotation': 'AnnotationStairs.png',
                    '_walls': {
                        'e': {
                            'name': 'EStairs220',
                            'image': 'R220-east.jpg'
                        },
                        'w': {
                            'name': 'WStairs220',
                            'image': 'R220-west.jpg',
                            'destination': {
                                'x': 1,
                                'z': 1
                            }
                        },
                        'n': {
                            'name': 'NStairs220',
                            'image': 'R220-north.jpg',
                            '_props': {
                                'Info-TV': {
                                    'name': 'Info-TV',
                                    'image': 'info-tv.png',
                                    'hoverImage': 'info-tvHover.png',
                                    'width': 215,
                                    'height': 139,
                                    'top': 192,
                                    'left': 454,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Info TV'
                                    }
                                }
                            }
                        },
                        's': {
                            'name': 'SStairs220',
                            'image': 'R220-south.jpg',
                            'destination': {
                                'y': 1
                            }
                        }
                    }
                },
                'room200': {
                    'id': 'hall200', 
                    'x': 2, 
                    'y': 0,
                    'annotation': 'AnnotationExit.png',
                    '_triggers': ['prepSchoolObjectives', 'startSpeakwithAnderson'],
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
                            'image': 'R200-west.jpg',
                            'destination': {
                                'x': 1
                            }
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
                'room420': {
                    'id': 'hall420',
                    'x': 4,
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall420',
                            'image': 'R420-east.jpg'
                        },
                        'w': {
                            'name': 'WHall420',
                            'image': 'R420-west.jpg',
                            'destination': {
                                'x': 3
                            },
                            '_props' : {
                                'pictureframeid':{
                                    'name': 'pictureframeprop',
                                    'image': 'picture.png',
                                    'width': 100,
                                    'height': 200,
                                    'left': 300,
                                    'top': 200,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'A picture frame'
                                    },
                				},
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideRightHover.png',
                                    'width': 74,
                                    'height': 171,
                                    'top': 252,
                                    'left': 480,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                	                    }
                	              }
                            }
                        },
                        'n': {
                            'name': 'NHall420',
                            'image': 'R420-north.jpg'
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
                'room120': {
                    'id': 'hall120',
                    'x': 1,
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EHall120',
                            'image': 'R120-east.jpg'
                        },
                        'w': {
                            'name': 'WHall120',
                            'image': 'R120-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 229,
                                    'height': 532,
                                    'top': 135,
                                    'left': 445,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall120',
                            'image': 'R120-north.jpg',
                            'destination': {
                                'y': 3
                            },
                            '_props': {
                                'foo': {
                                    'name': 'foo',
                                    'image': 'fooRight.png',
                                    'width': 52,
                                    'height': 124,
                                    'left': 475,
                                    'top': 285
                                }
                            }
                        },
                        's': {
                            'name': 'SHall120',
                            'image': 'R120-south.jpg',
                            'destination': {
                                'y': 1
                            }
                        }
                    }
                },
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
                            'image': 'R100-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 215,
                                    'height': 536,
                                    'top': 140,
                                    'left': 154,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall100',
                            'image': 'R100-north.jpg',
                            'destination': {
                                'y': 1
                            },
                            '_props': {
                                'foo': {
                                    'name': 'foo',
                                    'image': 'fooRight.png',
                                    'width': 12,
                                    'height': 30,
                                    'left': 532,
                                    'top': 305
                                }
                            }
                        },
                        's': {
                            'name': 'SHall100',
                            'image': 'R100-south.jpg'
                        }
                    }
                },
                'room430': {
                    'id': 'hall430',
                    'x': 4,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'EHall430',
                            'image': 'R430-east.jpg'
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
                            'image': 'R430-south.jpg'
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
                            'image': 'R440-east.jpg',
                            'destination': {
                                'x': 5
                            }
                        },
                        'n': {
                            'name': 'NHall440',
                            'image': 'R440-north.jpg'
                        },
                        's': {
                            'name': 'SHall440',
                            'image': 'R440-south.jpg',
                            'destination': {
                                'y': 3
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 225,
                                    'height': 552,
                                    'top': 138,
                                    'left': 461,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall440',
                            'image': 'R440-west.jpg',
                            'destination': {
                                'x': 3
                            },
                            '_props': {
                                'bike': {
                                    'name': 'bike',
                                    'image': 'bike.png',
                                    'width': 29,
                                    'height': 22,
                                    'top': 305,
                                    'left': 542
                                },
                                'bikeMoved': {
                                    'name': 'bikeMoved',
                                    'image': 'bikeMoved.png',
                                    'width': 25,
                                    'height': 28,
                                    'top': 303,
                                    'left': 557
                                }
                            }
                        }
                    }
                },
                'room350': {
                    'id': 'restroom350',
                    'x': 3,
                    'y': 5,
                    '_walls': {
                        'e': {
                            'name': 'ERestroom350',
                            'image': 'R350-east.jpg'
                        },
                        'w': {
                            'name': 'WRestroom350',
                            'image': 'R350-west.jpg'
                        },
                        'n': {
                            'name': 'NRestroom350',
                            'image': 'R350-north.jpg'
                        },
                        's': {
                            'name': 'SRestroom350',
                            'image': 'R350-south.jpg',
                            'destination': {
                                'y': 4
                            }
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
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideLeftHover.png',
                                    'width': 232,
                                    'height': 565,
                                    'top': 135,
                                    'left': 685,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
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
                            }
                        },
                        's': {
                            'name': 'SHall300', 
                            'image': 'R300-south.jpg'
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
                        'n': {
                            'name': 'NHall340',
                            'image': 'R340-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SHall340',
                            'image': 'R340-south.jpg',
                            'destination': {
                                'y': 3
                            }
                        },
                        'w': {
                            'name': 'WHall340',
                            'image': 'R340-west.jpg',
                            'destination': {
                                'x': 2
                            },
                            '_props': {
                                'bike': {
                                    'name': 'bike',
                                    'image': 'bike.png',
                                    'width': 33,
                                    'height': 24,
                                    'top': 305,
                                    'left': 541
                                },
                                'bikeMoved': {
                                    'name': 'bikeMoved',
                                    'image': 'bikeMoved.png',
                                    'width': 30,
                                    'height': 35,
                                    'top': 303,
                                    'left': 560
                                }
                            }
                        }
                    }
                },
                'room130': {
                    'id': 'hall130',
                    'x': 1, 
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'NHall130',
                            'image': 'R130-east.jpg',
                            'destination': {
                                'x': 2
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideLeftHover.png',
                                    'width': 231,
                                    'height': 598,
                                    'top': 135,
                                    'left': 567,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'SHall130',
                            'image': 'R130-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_triggers' : ['hiMrsAnderson', 'walkedAwayFromConversation'],
                            '_props': {
                                'foo': {
                                    'name': 'foo',
                                    'image': 'fooFront.png',
                                    'width': 285,
                                    'height': 480,
                                    'left': 650,
                                    'top': 200,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Mrs Anderson'
                                    }
                                },
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideRightHover.png',
                                    'width': 226,
                                    'height': 567,
                                    'top': 138,
                                    'left': 446,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'WHall130',
                            'image': 'R130-north.jpg',
                            'destination': {
                                'y': 4
                            }
                        },
                        's': {
                            'name': 'EHall130',
                            'image': 'R130-south.jpg',
                            'destination': {
                                'y': 2
                            }
                        }
                    }
                },
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
                        'n': {
                            'name': 'NHall140',
                            'image': 'R140-north.jpg',
                            'destination': {
                                'y': 5
                            }
                        },
                        's': {
                            'name': 'SHall140',
                            'image': 'R140-south.jpg',
                            'destination': {
                                'y': 3
                            },
                            '_props': {
                                'foo': {
                                    'name': 'foo',
                                    'image': 'fooLeft.png',
                                    'width': 35,
                                    'height': 90,
                                    'top': 290,
                                    'left': 585,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Mrs Anderson'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall140',
                            'image': 'R140-west.jpg',
                            'destination': {
                                'x': 0
                            },
                            '_props': {
                                'bike': {
                                    'name': 'bike',
                                    'image': 'bike.png',
                                    'width': 61,
                                    'height': 46,
                                    'top': 300,
                                    'left': 526
                                },
                                'bikeMoved': {
                                    'name': 'bikeMoved',
                                    'image': 'bikeMoved.png',
                                    'width': 30,
                                    'height': 57,
                                    'top': 300,
                                    'left': 578
                                }
                            }
                        }
                    }
                },
                'room000': {
                    'id': 'classroom000',
                    'x': 0,
                    'y': 0,
                    '_walls': {
                        'e': {
                            'name': 'EClassroom000',
                            'image': 'R000-east.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'smBookcase' : {
                                    'name' : 'smBookcase',
                                    'image' : 'smBookcaseside.png',
                                    'width': 200,
                                    'height': 150,
                                    'left': 75,
                                    'top': 365
                                },
                                'heavy': {
                                    'name': 'heavy',
                                    'image': 'largeTVside.png',
                                    'width': 100,
                                    'height': 158,
                                    'left': 140,
                                    'top': 235,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Heavy Object'
                                    }
                                },
                                'heavy-on-floor': {
                                    'name': 'heavy',
                                    'image': 'largeTVside.png',
                                    'width': 100,
                                    'height': 150,
                                    'left': 200,
                                    'top': 400
                                },
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 104,
                                    'height': 236,
                                    'top': 232,
                                    'left': 966,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WClassroom000',
                            'image': 'R000-west.jpg'
                        },
                        'n': {
                            'name': 'NClassroom000',
                            'image': 'R000-north.jpg',
                            '_props': {
                                'smBookcase' : {
                                    'name' : 'smBookcase',
                                    'image' : 'smBookcase.png',
                                    'width': 200,
                                    'height': 150,
                                    'left': 705,
                                    'top': 330
                                },
                                'heavy': {
                                    'name': 'heavy',
                                    'image': 'largeTV.png',
                                    'hoverImage': 'largeTVHover.png',
                                    'width': 175,
                                    'height': 150,
                                    'left': 720,
                                    'top': 190,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Heavy Object'
                                    }
                                },
                                'heavy-on-floor': {
                                    'name': 'heavy',
                                    'image': 'largeTV.png',
                                    'width': 200,
                                    'height': 175,
                                    'left': 760,
                                    'top': 360
                                }
                            }
                        },
                        's': {
                            'name': 'SClassroom000',
                            'image': 'R000-south.jpg',
                            '_props': {
                                'evac_plan_1': {
                                    'name': 'evac_plan_1',
                                    'image': 'rectangle.png',
                                    'hoverImage': 'rectangleGlow.png',
                                    'width': 56,
                                    'height': 50,
                                    'left': 367,
                                    'top': 285,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'evac_first_floor_detail'
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
                            'image': 'R400-east.jpg'
                        },
                        'w': {
                            'name': 'WHall400',
                            'image': 'R400-west.jpg',
                            'destination': {
                                'x': 3
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideRightHover.png',
                                    'width': 72,
                                    'height': 171,
                                    'top': 252,
                                    'left': 482,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NHall400',
                            'image': 'R400-north.jpg',
                            'destination': {
                                'y': 1
                            },
                            '_props':{
                                'screwdriver':{
                                    'name':'screwdriver',
                                    'image':'screwdriver.png',
                                    'hoverImage':'screwdriverHover.png',
                                    'width': 35,
                                    'height': 35,
                                    'left': 725,
                                    'top': 380,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'screwdriverconvo'
                                    }
                                }
                            }
                        },
                        's': {
                            'name': 'SHall400',
                            'image': 'R400-south.jpg'
                        }
                    }
                },
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
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorOutsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorOutsideLeftHover.png',
                                    'width': 230,
                                    'height': 537,
                                    'top': 135,
                                    'left': 571,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall320',
                            'image': 'R320-west.jpg'
                        },
                        'n': {
                            'name': 'NHall320',   
                            'image': 'R320-north.jpg',
                            'destination': {
                                'y': 3
                            }
                        },
                        's': {
                            'name': 'SHall320', 
                            'image': 'R320-south.jpg',
                            'destination': {
                                'y': 1
                            }
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
                                'evac_plan_1': {
                                    'name': 'evac_plan_1',
                                    'image': 'door.png',
                                    'hoverImage': 'doorHover.png',
                                    'width': 530,
                                    'height': 430,
                                    'left': 290,
                                    'top': 50,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'evac_first_floor'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WHall210',
                            'image': 'R210-west.jpg',
                            '_props': {
                                'elevator-up': {
                                    'name': 'elevator-up',
                                    'image': 'elevator-up.png',
                                    'hoverImage': 'elevator-up-hover.png',
                                    'width': 75,
                                    'height': 42,
                                    'left': 815,
                                    'top': 350,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Elevator Up'
                                    }
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
                            }
                        }
                    }
                },
                'room240': {
                    'id': 'hall240',
                    'x': 2,
                    'y': 4,
                    '_walls': {
                        'e': {
                            'name': 'EHall240',
                            'image': 'R240-east.jpg',
                            'destination': {
                                'x': 3
                            }
                        },
                        'n': {
                            'name': 'NHall240',
                            'image': 'R240-north.jpg'
                        },
                        's': {
                            'name': 'SHall240',
                            'image': 'R240-south.jpg'
                        },
                        'w': {
                            'name': 'WHall240',
                            'image': 'R240-west.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'bike': {
                                    'name': 'bike',
                                    'image': 'bike.png',
                                    'width': 42,
                                    'height': 30,
                                    'top': 306,
                                    'left': 536
                                },
                                'bikeMoved': {
                                    'name': 'bikeMoved',
                                    'image': 'bikeMoved.png',
                                    'width': 26,
                                    'height': 38,
                                    'top': 302,
                                    'left': 567
                                }
                            }
                        }
                    }
                },
                'room020': {
                    'id': 'classroom020',
                    'x': 0,
                    'y': 2,
                    '_walls': {
                        'e': {
                            'name': 'EClassroom020',
                            'image': 'R020-east.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 106,
                                    'height': 246,
                                    'top': 228,
                                    'left': 453,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WClassroom020',
                            'image': 'R020-west.jpg'
                        },
                        'n': {
                            'name': 'NClassroom020',
                            'image': 'R020-north.jpg',
                            '_props':{
                                'burner':{
                                    'name':'burner',
                                    'image':'bburner.png',
                                    'hoverImage':'bburnerHover.png',
                                    'width': 130,
                                    'height': 225,
                                    'left': 565,
                                    'top': 190,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Bunsen Burner'
                                    }
                                },
                                'rag':{
                                    'name':'rag',
                                    'image':'rag.png',
                                    'hoverImage':'ragHover.png',
                                    'width':160,
                                    'height':50,
                                    'left': 650,
                                    'top': 385,
                                    'action':'showConversation',
                                    'actionVariables': {
                                        'conversationName' : 'Rag'
                                    }
                                },
                                'bugSpray':{
                                    'name':'bugSpray',
                                    'image':'spray.png',
                                    'hoverImage':'sprayHover.png',
                                    'width':42,
                                    'height':140,
                                    'left': 525,
                                    'top': 275,
                                    'action':'showConversation',
                                    'actionVariables': {
                                        'conversationName' : 'Spray'
                                    }
                                }
                            }
                        },
                        's': {
                            'name': 'SClassroom020',
                            'image': 'R020-south.jpg'
                        }
                    }
                },
                'room150': {
                    'id': 'hall150',
                    'x': 1,
                    'y': 5,
                    '_walls': {
                        'e': {
                            'name': 'EHall150',
                            'image': 'R150-east.jpg'
                        },
                        'w': {
                            'name': 'WHall150',
                            'image': 'R150-west.jpg'
                        },
                        'n': {
                            'name': 'NHall150',
                            'image': 'R150-north.jpg'
                        },
                        's': {
                            'name': 'SHall150',
                            'image': 'R150-south.jpg',
                            'destination': {
                                'y': 4
                            }
                        }
                    }
                },
                'room230': {
                    'id': 'room230',
                    'x': 2,
                    'y': 3,
                    '_walls': {
                        'e': {
                            'name': 'ERoom230',
                            'image': 'R230-east.jpg',
                            'destination': {
                                'x': 3
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideLeft.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideLeftHover.png',
                                    'width': 82,
                                    'height': 190,
                                    'top': 246,
                                    'left': 560,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'WRoom230',
                            'image': 'R230-west.jpg',
                            'destination': {
                                'x': 1
                            },
                            '_props': {
                                'door': {
                                    'name': 'door',
                                    'image': 'doorInsideRight.png',
                                    'openImage': 'doorOpen.png',
                                    'hoverImage': 'doorInsideRightHover.png',
                                    'width': 82,
                                    'height': 190,
                                    'top': 246,
                                    'left': 473,
                                    'barrier': true,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'door'
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'NRoom230',
                            'image': 'R230-north.jpg'
                        },
                        's': {
                            'name': 'SRoom230',
                            'image': 'R230-south.jpg'
                        }
                    }
                },
                'room110': {
                    'id': 'hall110',
                    'x': 1,
                    'y': 1,
                    '_walls': {
                        'e': {
                            'name': 'EHall110',
                            'image': 'R110-east.jpg'
                        },
                        'w': {
                            'name': 'WHall110',
                            'image': 'R110-west.jpg'
                        },
                        'n': {
                            'name': 'NHall110',
                            'image': 'R110-north.jpg',
                            'destination': {
                                'y': 2
                            },
                            '_props': {
                                'foo': {
                                    'name': 'foo',
                                    'image': 'fooRight.png',
                                    'width': 20,
                                    'height': 50,
                                    'left': 520,
                                    'top': 297
                                }
                            }
                        },
                        's': {
                            'name': 'SHall110',
                            'image': 'R110-south.jpg',
                            'destination': {
                                'y': 0
                            }
                        }
                    }
                }
            }
        },
        'Apartment Floor': {
            'z': 2,
            '_rooms': {
                'Apartment': {
                    'id': 'apartment',
                    'x': 0,
                    'y': 0,
                    '_triggers': ['hideFirstFloorRoomAnnotations','hideSecondFloorRoomAnnotations','packForSchool'],
                    '_walls': {
                        'e': {
                            'name': 'apartment-e',
                            'image': 'apartment-e.jpg',
                            '_props': {
                                'flashlight': {
                                    'name': 'Flashlight',
                                    'image': 'flashlight.png',
                                    'hoverImage': 'flashlightHover.png',
                                    'width': 62,
                                    'height': 40,
                                    'top': 420,
                                    'left': 400,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'packFlashlight',
                                        'isAnAction': true
                                    }
                                },
                                'food': {
                                    'name': 'Food',
                                    'image': 'food.png',
                                    'hoverImage': 'foodHover.png',
                                    'width': 60,
                                    'height': 130,
                                    'top': 350,
                                    'left': 700,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'packFood',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'n': {
                            'name': 'apartment-n',
                            'image': 'apartment-n.jpg',
                            '_props': {
                                'boo': {
                                    'name': 'boo',
                                    'image': 'boo.png',
                                    'width': 114,
                                    'height': 138,
                                    'top': 476,
                                    'left': 180,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'Boo',
                                    }
                                },
                                'mask': {
                                    'name': 'N-95 Breathing Mask',
                                    'image': 'breathingmask.png',
                                    'hoverImage': 'breathingmaskHover.png',
                                    'width': 71,
                                    'height': 60,
                                    'top': 390,
                                    'left': 400,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'packMask',
                                        'isAnAction': true
                                    }
                                },
                                'whistle': {
                                    'name': 'Whistle',
                                    'image': 'whistle.png',
                                    'hoverImage': 'whistleHover.png',
                                    'width': 91,
                                    'height': 45,
                                    'top': 410,
                                    'left': 600,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'packWhistle',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        's': {
                            'name': 'apartment-s',
                            'image': 'apartment-s.jpg',
                            '_props': {
                                'door': {
                                    'name': 'Exit to School',
                                    'image': 'door.png',
                                    'hoverImage': 'doorHover.png',
                                    'width': 208,
                                    'height': 418,
                                    'top': 149,
                                    'left': 459,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'travelToSchool',
                                        'isAnAction': true
                                    }
                                }
                            }
                        },
                        'w': {
                            'name': 'apartment-w',
                            'image': 'apartment-w.jpg',
                            '_props': {
                                'firstaidkit': {
                                    'name': 'First Aid Kit',
                                    'image': 'firstaidkit.png',
                                    'hoverImage': 'firstaidkitHover.png',
                                    'width': 124,
                                    'height': 102,
                                    'top': 323,
                                    'left': 800,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'packFirstAidKit',
                                        'isAnAction': true
                                    }
                                },
                                'shelf0': {
                                    'name': 'Shelf 0',
                                    'image': 'woodshelf.png',
                                    'width': 260,
                                    'height': 53,
                                    'top': 400,
                                    'left': 130
                                },
                                'shelf1': {
                                    'name': 'Shelf 1',
                                    'image': 'woodshelf.png',
                                    'width': 260,
                                    'height': 53,
                                    'top': 400,
                                    'left': 750
                                },
                                'water': {
                                    'name': 'Water Bottle',
                                    'image': 'waterbottle.png',
                                    'hoverImage': 'waterbottleHover.png',
                                    'width': 75,
                                    'height': 140,
                                    'top': 265,
                                    'left': 220,
                                    'action': 'showConversation',
                                    'actionVariables': {
                                        'conversationName': 'packWater',
                                        'isAnAction': true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        'Outside Building': {
            'z': 12,
            '_rooms': {
                'outsideBuilding': {
                     'id': 'outside',
                     'x': 0,
                     'y': 0,
                     '_triggers' : ['completeAvoidObstacles','failAftermathObjectives'],
                     '_walls': {
                          'outsideBuilding': {
                              'name': 'facingSchool',
                              'image': 'facingSchool.jpg',
                              'isCutscene': true,
                              '_triggers' : ['startEBCconvo'],
                              '_props': {
                                  'ambulance': {
                                      'name': 'ambulance',
                                      'image': 'ambulance.png',
                                      'width': 634,
                                      'height': 500,
                                      'left': 200,
                                      'top': 100
                                  },
                                  'coordinator': {
                                      'name': 'coordinator',
                                      'image': 'responder.png',
                                      'width': 350,
                                      'height': 734,
                                      'left': 375,
                                      'top': 250,
                                      'action': 'showConversation',
                                      'actionVariables': {
                                           'conversationName': 'Emergency Building Coordinator'
                                      }
                                  }
                              }
                          },
                          'died' : {
                              'name' : 'badEnding',
                              'image' : 'dead.jpg',
                              'isCutscene' : true,
                              '_triggers' : ['failEvacuate']
                          }
                     }
                }
            }
        }
    },
    '_conversations': {
        'Chalk on Sturdy Desk': {
            '1': {
                'message': 'There is some chalk on this very sturdy desk.',
                'replies': {
                    'Pick up chalk': 2,
                    'Leave chalk': 0
                }
            },
            '2': {
                'triggers': ['giveProfChalk']
            }
        },
        'packFood': {
            '1': {
                'check': [{'has': ['Water', 'Flashlight', 'Breathing Mask', 'Whistle', 'First Aid Kit'], 'goto': 3}],
                'message': 'Food is important.',
                'replies': {
                    'Pack in Go-Kit': '2',
                    'Don\'t pack': '0'
                }
            },
            '2': {
                'triggers': ['takeFood']
            },
            '3': {
                'triggers': ['awardPackingGoKit', 'takeFood'],
                'message': 'Your Go-Kit is almost packed!',
                'replies': {
                    'Pack the Food and get to school.': 0
                }
            }
        },
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
        },
        'Boo': {
            '1': {
                'message': 'Meow!',
                'replies': {
                    'Aww': 0
                }
            }
        },
        'pickupExtraFlashlight': {
            '1': {
                'checkInventory': [{'has': ['flashlight'], 'goto': '2'}],
                'triggers': ['takeFlashlight'],
                'message': 'Luckily an old flashlight fell from the ceiling. You now have a flashlight.',
                'replies': {
                    'I should have brought a flashlight in my go-pack. Today I am very lucky.': 0
                }
            },
            '2': {
                'message': 'You already have a flashlight because you were smart enough to pack one',
                'replies': {
                    'Absolutely': 0
                }
            }
        },
        'Heavy Object': {
            '1': {
                'message': 'A big, heavy TV is on the top shelf',
                'replies': {
                    'Leave it alone': 0,
                    'Move it to the floor': 2
                }
            },
            '2': {
                'triggers': ['moveHeavyObject']
            }
        },
        'Emergency Building Coordinator' : {
            '1' : {
                'message' : 'Hey we\'ve got a survivor here!  I\'m the Emergency Building Coordinator on duty today.  '+
                            'My job is to coordinate emergency response efforts by gathering information and helping victims.  ' +
                            'Please tell me your name so I can register your status as a survivor. We record this information to assist families in reunification.',
                'replies' : {
                    'I tell her my name.' : 2
                },
                'triggers' : ['killstartEBC']
            },
            '2' : {
                'check' : [ {'objectivesCompleted':['saveXavier'], 'goto': '3'}],
                'message' : 'Ok, We\'ve setup an Assembly Area right over there, head that way and we\'ll try to let your family know you\'re alright.',
                'replies' : {
                    'Go to the Assembly Area.' : 5
                }
            },
            '3' : {
                'message' : 'Ok, We\'ve setup an Assembly Area right over there head that way and we\'ll try to let your family know you\'re alright.',
                'replies' : {
                    'Tell her that Professor Xavier is at the Area of Rescue on the 2nd floor.' : 4,
                    'Go to the Assembly Area.' : 5
                }
            },
            '4' : {
                'message' : 'Oh? I\'m glad the Professor is alive; I\'ll let the firefighters know he is waiting for assistance. I hope he\'ll be ok.',
                'replies' : {
                    'Go to the Assembly Area.' : 5
                }
            },
            '5' : {
                'triggers' : ['startReviewPrompt']
            }
        },
        'goBackButton': {
            '1': {
                'message': 'Are you done packing your Go-Kit?',
                'replies': {
                    'Yes': '2',
                    'No': '0'
                }
            },
            '2': {
                'triggers': ['moveAwayFromDesk']
            }
        },
        'Smoke' : {
            '1' : {
                'check'   : [{'has':['Breathing Mask'], 'goto' : '2'},
                             {'triggersEnabled' : ['clothIsWet'], 'goto' : '3'}],
                'message' : 'The hallway ahead is filled with smoke.' +
                    'You will need something to protect you from the smoke to pass.',
                'replies' : {
                    'Cough... Cough' : '0'
                }
            },
            '2' : {
                'message' : 'The hallway ahead is filled with smoke.',
                'replies' : {
                    'Good thing my go kit has a breathing mask.  I can crawl while wearing it and be safe.' : '4'
                }
            },
            '3' : {
                'message' : 'The hallway ahead is filled with smoke.',
                'replies' : {
                    'I can use my wet shirt to protect me as I crawl under the smoke.' : '4'
                }
            },
            '4' : {
                'triggers' : ['clearSmoke']
            }
        },
        'WallWater' : {
            '1': {
                'message' : 'A pipe must have burst in the ceiling. The water is leaking down the wall.',
                'replies' : {
                    'Eww, I don\'t know where that water has been.' : '0',
                    'I could use the water to soak my shirt. The I could cover my face with it to protect me from the smoke.' : '2'
                }
            },
            '2' : {
                'triggers' : ['wetTheCloth']
            }
        },
        'evac_first_floor_detail': {
            '1': {
                'triggers': ['showFirstFloorRoomAnnotationsDetail']
            }
        },
        'door': {
            '1': {
                'check': [{'exists': ['door-open'], 'goto': '2'}],
                'triggers': ['openDoor']
            },
            '2': {
                'triggers': ['closeDoor']
            }
        },
        'Elevator Down': {
            '1': {
                'message': 'Go downstairs?',
                'replies': {
                    'Yes': 2,
                    'No': 0
                }
            },
            '2': {
                'triggers': ['elevatorDown']
            }
        },
        'Elevator Up': {
            '1': {
                'message': 'Go upstairs?',
                'replies': {
                    'Yes': 2,
                    'No': 0
                }
            },
            '2': {
                'triggers': ['elevatorUp']
            }
        },
        'Aftermath Elevator': {
            '1': {
                'message': 'The elevator is out of service.',
                'replies': {
                    'I will take the stairs.': 0
                }
            }
        },
        'packMask': {
            '1': {
                'check': [{'has': ['Water', 'Flashlight', 'Food', 'Whistle', 'First Aid Kit'], 'goto': 3}],
                'message': 'Many emergency situations can involve airborne debris that can cause serious breathing issues.',
                'replies': {
                    'Pack in Go-Kit': '2',
                    'Don\'t pack': '0'
                }
            },
            '2': {
                'triggers': ['takeMask']
            },
            '3': {
                'triggers': ['awardPackingGoKit', 'takeMask'],
                'message': 'Your Go-Kit is almost packed!',
                'replies': {
                    'Pack the N-97 Breathing Mask and get to school.': 0
                }
            }
        },
        'James': {
            '1': {
                'check'  :[{'triggersEnabled':['wheelChair00'], 'goto':'3'}],
                'message': 'You see a man attempting to get into a wheelchair.',
                'replies': {
                    '[Rush over and assist him back into the wheelchair]': 2,
                    'Do you need help?': 3
                }
            },
            '2': {
                'message': 'Ouch, I think you injured my back.  You have ' +
                    'to check with a person before moving them. ' +
                    'Be more careful next time (He heads away from you toward the exit.) ',
                'replies' : {
                    '...':0
                },
                'triggers': ['wheelChair02']
            },
            '3': {
                'message': 'I could use your help, thank you. '+
                    'Please lock my chair and then help me into it.',
                'replies': {
                    '[Carefully help him into the wheelchair]':4,
                    '[Lock the wheelchair]': 6
                },
                'triggers': ['wheelChair01']
            },
            '4' : {
                'check'  :[{'triggersEnabled':['chairLocked'], 'goto' :'5'}],
                'message' : '(He falls to the floor as the chair rolls backwards)' +
                    'Ouch, that hurts.  I told you the chair has to be locked' +
                    ' before you can help me into it.',
                'replies' : {
                    '[Lock the wheelchair]': 6
                },
                'triggers': ['wheelChair03']
            },
            '5': {
                'message': 'Thank you for your help' +
                    ' (He heads off toward the exit)',
                'replies': {
                    'You\'re welcome!':0
                },
                'triggers': ['wheelChairEnd','savedJames']
            },
            '6' : {
                'message' : 'The wheelchair is now locked.',
                'replies' : {
                    '[Carefully help him into the wheelchair]':4
                },
                'triggers': ['lockChair']
            }
        },
        'evac_second_floor': {
            '1': {
                'triggers': ['showSecondFloorRoomAnnotations']
            }
        },
        'packFirstAidKit': {
            '1': {
                'check': [{'has': ['Water','Flashlight', 'Food', 'Breathing Mask', 'Whistle'], 'goto': 3}],
                'message': 'Even small injuries left untreated can become life-threatening in emergency situations.',
                'replies': {
                    'Pack in Go-Kit': '2',
                    'Don\'t pack': '0'
                }
            },
            '2': {
                'triggers': ['takeFirstAidKit']
            },
            '3': {
                'triggers': ['awardPackingGoKit', 'takeFirstAidKit'],
                'message': 'Your Go-Kit is almost packed!',
                'replies': {
                    'Take First Aid Kit and get to school': 0
                }
            }
        },
        'evac_first_floor': {
            '1': {
                'triggers': ['showFirstFloorRoomAnnotations']
            }
        },
        'Survived Earthquake' : {
            '1': {
                'check': [{'objectivesCompleted': ['surviveEarthquake'], 'goto': 0}],
                'message': 'The shaking finally stops. You notice a large beam had fallen exactly where you were standing. Luckily, you had reacted quickly and escaped injury... or worse.',
                'replies': {
                    'Crawl out from under the desk': 2
                }
            },
            '2': {
                'check': [{'has': ['Flashlight'], 'goto': 3}],
                'message': 'It looks like the Earthquake cause the power to fail. If only you had brought a flashlight...',
                'replies': {
                    'I\'ll have to search around and find my way to safety in the dark...': 0
                }
            },
            '3': {
                'message': 'The Earthquake caused the power to fail. I should probably use my flashlight...',
                'replies': {
                    'I have a flashlight in my Go-Kit in my backpack...': 0
                }
            }
        },
        'Did not survive.' : {
            '1' : {
                'message' : 'You failed to take cover during the earthquake.  As a result you were fatally wounded by a falling object.  You can protect yourself during an actual earthquake following three simple steps: Drop, Cover, Hold.  First, get low to the ground.  Next, find a sturdy object to hide under.  Last, hold on until the shaking stops and it is safe to evacuate the building.',
                'replies' : {
                    'I would like to know what I could do better for next time.' : 2,
                    'I\'m ready to play again.' : 3
                }
            },
            '2' :{
                'triggers' : ['startObjectiveReview']
            },
            '3' : {
                'triggers' : ['inFailedEarthquake']
            }
        },
        'Help Injured Professor': {
             '1': {
                  'message': '[Groan] ..... my back!',
                  'replies': {
                       'Pick him up and help him out of the room.': 2,
                       'Ask him if he is okay': 3
                  }
             },
             '2': {
                  'message': 'No! Don\'t pick me up! I\'m hurt! Get help!',
                  'replies': {
                       'Evacuate and get him help.': 0
                  }
             },
             '3': {
                  'message': 'I\'m badly hurt! Please just help me out to the Area of Rescue.',
                  'replies': {
                       'Help him to the Area of Rescue.': 4,
                       'Save yourself.' : 0
                  }
             },
             '4' : {
                 'triggers' : ['moveXaviertoAoR']
             }
        },
        'Injured Professor' : {
            '1' : {
                'message' : 'Thank you, now go get help.',
                'replies' : {
                    'Evacuate the school.' : 0
                }
            }
        },
        'door2': {
            '1': {
                'check': [{'exists': ['door2-open'], 'goto': '2'}],
                'triggers': ['openDoor2']
            },
            '2': {
                'triggers': ['closeDoor2']
            }
        },
        'Professor Xavier': {
            '1': {
                'triggers': ['getChalkObjective','stopHiXavier'],
                'check': [
                    {'objectivesInProgress': ['surviveEarthquake'], 'goto': '0'},
                    {'has':['Chalk'], 'goto': 2},
                    {'objectivesCompleted':['getChalkForTeacher'], 'goto': '3'}
                ],
                'message': 'Welcome! Before we get started, could you please hand me my chalk from that VERY sturdy and safe desk?',
                'replies': {
                    'Of course.': 0
                }
            },
            '2': {
                'triggers': ['completeChalkObjective'],
                'message': 'Thank you! Okay, so today we\'ll be covering chapter.... wait, did you feel that?',
                'replies': {
                    'Yes.... what was that?': 3
                }
            },
            '3': {
                'triggers': ['shakeThingsUp'],
                'message': 'It\'s an earthquake!! Quick, get under something sturdy!',
                'replies': {
                    'Okay I\'ll look for something sturdy to click on': 0
                }
            },
            '4': {
                'message': 'Could you hand me that chalk?',
                'replies': {
                    'Of course.': 2
                }
            }
        },
        'Luke' : {
            '1': {
                'message' : 'He is running for the main entrance, but he is close enough to hear you.',
                'replies' : {
                    'Let him find him own way out of this mess.' : 3,
                    'Tell him: Hey that exit is blocked off. We\'ve got to use an exit in back.' : 2
                },
                'triggers' : ['TalktoRunner']
            },
            '2' : {
                'message' : 'Thank you so much.  I just want to get out of here.  I\'ll be ok from here.[Add he runs toward the rear exits.]',
                'replies' : {
                    'Great, I\'m glad to have helped.' : 3
                }
            },
            '3' : {
                'triggers' : ['removeRunner']
            }
        
        },
        'Computer': {
            '1': {
                'message': 'Emergency Response Game',
                'replies': {
                    '[Start Playing]': 2
                },
                'triggers' : ['stopHiComputer']
            },
            '2': {
                'message' : 'Choose a category',
                'replies' : {
                    'Preparing the home for an earthquake.' : 3,
                    'Responding to an earthquake.' : 12,
                    'Creating a family reunification plan.' : 21,
                    'I\'m done for now.' : 0
                },
                'triggers' : ['playingERG']
            },
            '3' : {
                'message' : 'Question 1: Large and/or heavy objects should be ...',
                'replies' : {
                    'Placed on the top shelf to avoid bumping into them.' : 5,
                    'Placed on the bottom shelf or secured to keep them from falling.' : 4,
                    'Placed into storage so they can never hurt anybody.' : 5
                }
            },
            '4' : {
                'message' : 'Correct: Heavy objects should be stored on low shelves or secured with a strap.',
                'replies' : {
                    'Keep playing' : 6,
                    'I\'m done for now' : 0
                },
                'triggers' : ['scoreERGpoints']
            },
            '5' : {
                'message' : 'Incorrect: Heavy objects should be stored on low shelves or secured with a strap.',
                'replies' : {
                    'Keep playing' : 6,
                    'I\'m done for now' : 0
                }
            },
            '6' : {
                'message' : 'Question 2: Flammable objects should be stored ... ',
                'replies' : {
                    'In a yellow locking cabinet with acids.' : 8,
                    'Near the stove or fireplace.' : 8,
                    'In a dry place away from heat sources.' : 7
                }
            },
            '7' : {
                'message' : 'Correct: Flammable objects should be kept away from heat sources.',
                'replies' : {
                    'Keep playing' : 9,
                    'I\'m done for now' : 0
                },
                'triggers' : ['scoreERGpoints']
            },
            '8' : {
                'message' : 'Incorrect: Flammable objects should be kept away from heat sources.',
                'replies' : {
                    'Keep playing' : 9,
                    'I\'m done for now' : 0
                }
            },
            '9' : {
                'message' : 'Question 3: It is important to have professionals ...',
                'replies' : {
                    'Clean and repair chimneys, vents, and electrical wiring.' : 10,
                    'Look over your car for hazardous material.' : 11,
                    'I can do it myself, professionals aren\'t important.' : 11
                }
            },
            '10' : {
                'message' : 'Correct: Use professionals to repair major or dangerous items in the home.',
                'replies' : {
                    'Back to the menu' : 2,
                    'I\'m done for now' : 0
                },
                'triggers' : ['scoreERGpoints']
            },
            '11' : {
                'message' : 'Incorrect: Use professionals to repair major or dangerous items in the home.',
                'replies' : {
                    'Back to the menu' : 2,
                    'I\'m done for now' : 0
                }
            },
            '12' : {
                'message' : 'Question 1: If you are in your office or school during an earthquake you should ... ',
                'replies' : {
                    'Hide under a big sturdy object and hold on until the quake stops.' : 13,
                    'Run as fast as you can toward the exit.' : 14,
                    'Stand perfectly still and hope the earthquake doesn\'t see you.' : 14
                }
            },
            '13' : {
                'message' : 'Correct: Take cover under a study object, hold on, and wait it out.',
                'replies' : {
                    'Keep playing.' : 15,
                    'I\'m done for now' : 0
                },
                'triggers' : ['scoreERGpoints']
            },
            '14' : {
                'message' : 'Incorrect: Take cover under a study object, hold on, and wait it out.',
                'replies' : {
                    'Keep playing.' : 15,
                    'I\'m done for now' : 0
                }
            },
            '15' : {
                'message' : 'Question 2: When lying in bed and an earthquake occurs you should... ',
                'replies' : {
                    'Head outside as quickly as you can' : 17,
                    'Continue to sleep through it.' : 17,
                    'Roll onto your stomach and place a pillow over your head.' : 16
                }
            },
            '16' : {
                'message' : 'Correct: Lie on your stomach and use a pillow to cover your head.',
                'replies' : {
                    'Keep playing.' : 18,
                    'I\'m done for now' : 0
                },
                'triggers' : ['scoreERGpoints']
            },
            '17' : {
                'message' : 'Incorrect: Lie on your stomach and use a pillow to cover your head.',
                'replies' : {
                    'Keep playing.' : 18,
                    'I\'m done for now' : 0
                }
            },
            '18' : {
                'message' : 'Question 3: You\'re in your car when an earthquake hits, you ...',
                'replies' : {
                    'Pull over away from overpasses or power lines and hold on.' : 19,
                    'Drive faster so you can escape the quake.' : 20,
                    'Get out of the car and run.' : 20
                }
            },
            '19' : {
                'message' : 'Correct: Pull your car over in a safe place',
                'replies' : {
                    'Back to the menu' : 2,
                    'I\'m done for now' : 0
                },
                'triggers' : ['scoreERGpoints']
            },
            '20' : {
                'message' : 'Incorrect: Pull your car over in a safe place',
                'replies' : {
                    'Back to the menu' : 2,
                    'I\'m done for now' : 0
                }
            },
            '21' : {
                'message' : 'Question 1: Disaster plans should ...',
                'replies' : {
                    'Be a mystery' : 23,
                    'Be known and practiced before disaster strikes.' : 22,
                    'Be left to the professionals.' : 23
                }
            },
            '22' : {
                'message' : 'Correct: You should know the disaster plans of all your family members\' work or school. Practice using them frequently.',
                'replies' : {
                    'Keep playing.' : 24,
                    'I\'m done for now' : 0
                },
                'triggers' : ['scoreERGpoints']
            },
            '23' : {
                'message' : 'Incorrect: You should know the disaster plans of all your family members\' work or school. Practice using them frequently.',
                'replies' : {
                    'Keep playing.' : 24,
                    'I\'m done for now' : 0
                }
            },
            '24' : {
                'message' : 'Question 2: A family reunification location should be ...',
                'replies' : {
                    'Designated ahead of time and given to all family members.' : 25,
                    'Ignored.' : 26,
                    'Assigned by the emergency personnel.' : 26
                }
            },
            '25' : {
                'message' : 'Correct: Family gathering points should be designated in case of a disaster.',
                'replies' : {
                    'Keep playing.' : 27,
                    'I\'m done for now' : 0
                },
                'triggers' : ['scoreERGpoints']
            },
            '26' : {
                'message' : 'Incorrect: Family gathering points should be designated in case of a disaster.',
                'replies' : {
                    'Keep playing.' : 27,
                    'I\'m done for now' : 0
                }
            },
            '27' : {
                'message' : 'Question 3: Communicating during an emergency should ...',
                'replies' : {
                    'Be done using only cell phones because the phone lines will be down.' : 29,
                    'Be through a designated out of town relative or friend.' : 28,
                    'Not be worried about, everyone will be able to communicate.' : 29
                }
            },
            '28' : {
                'message' : 'Correct: Designate an out of town relative or friend to coordinate family communications.',
                'replies' : {
                    'Back to the menu' : 2,
                    'I\'m done for now' : 0
                },
                'triggers' : ['scoreERGpoints']
            },
            '29' : {
                'message' : 'Incorrect: Designate an out of town relative or friend to coordinate family communications.',
                'replies' : {
                    'Back to the menu' : 2,
                    'I\'m done for now' : 0
                }
            }
        },
        'screwdriverconvo': {
            '1': {
                'message': 'This is a screw driver.',
                'replies': {
                    'Pick it up': '2',
                    'Leave it.' : '0'
                }
            },
            '2': {
                'triggers': ['takeScrewdriver']
            }
        },
        'Broken glass' : {
            '1':    {             
                'check'   : [{'triggersEnabled':['doorMoved'], 'goto': '2' }],
                'message' : 'Large shards of broken glass cover the hallway ahead.\n' +
                    'I can\'t walk over that in my sandals.',
                'replies' : {
                    'I\'ll need to figure out a way to cross' : '0'
                }
            },
            '2' : {
                'message' : 'With the door covering the broken' + 
                    ' glass you can now traverse the hallway safely.',
                'replies' : {
                    'Onward to the area of rescue.' : '0'
                }
            }
        },
        'Unhinged door' : {
            '1':{
                'message' : 'This door has come off of it\'s hinges in the earthquake',
                'replies' : {
                    'Move it to cover the glass.' : '2'
                }
            },
            '2':{
                'triggers':['moveDoor']
            }
        
        },
        'Bunsen Burner': {
            '1':{
                'message': 'There is an unattended experiment in progress.' +
                           'The Bunsen burner has been left on to cook',
                'replies': {
                    'I don\'t want to disrupt the experiment': 0
                }
            }
        },
        'Hanging wires' : {
            '1' : {
                'check'   : [{'has':['A door frame'], 'goto' : '2'}],
                'message' : 'Some wires have come out of the ceiling and block the hall.',
                'replies' : {
                    'I should be careful.' : '0'
                }
            },
            '2' : {
                'message' : 'Some wires have come out of the ceiling and block the hall.',
                'replies' : {
                    'I should be careful.' : '0',
                    'I could move them out of the way with this long door frame.' : '3'
                }
            },
            '3' : {
                'message' : 'The path is now cleared',
                'replies' : {'Good, I\'d better get out of here.' : '0'},
                'triggers': ['moveDownedWires']
            }
        },
        'A door frame' : {
            '1' : {
                'message' :  'A part of the door frame has fallen off in the earthquake.',
                'replies' : {
                    'Umm, ok...' : '0',
                    'Take the long door frame and carry it for a while' : '2'
                }
            },
            '2' : {
                'triggers' : ['takeDoorFrame']
            }
        },
        'Rag': {
            '1':{
                'check' : [{'exists': ['bugSpray'], 'goto': '3'}],
                'message': 'There is a rag lying near the burner.',
                'replies': {
                    'Leave it where it is.' : 0,
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
        },
        'A Bike' : {
            '1':{
                'message' : 'A bike is leaning against the exit door.',
                'replies' : {
                    'I wouldn\'t want to move someone else\'s property.' : '0',
                    'Move the bike against the wall.' : '2'
                }
            },
            '2':{
                'triggers':['moveBike','moveBeam']
            }
        },
        'A Bike against the wall' : {
            '1' : {
                'message' : 'The bike now rests propped up against the wall.',
                'replies' : {
                    'Excellent, it\'s all safe now.' : 0
                }
            }
        },
        'A Mangled Bike' : {
            '1' : {
                'message' : 'A mangled bike pinned by a fallen beam blocks this exit making it impossible to use.',
                'replies' : {
                    'If someone hadn\'t left their bike blocking the exit.' : '0'
                }
            }
        },
        'A Bike against the wall.' : {
            '1' : {
                'message' : 'A bike leans against the wall safely.',
                'replies' : {
                    'I\'m glad I moved it to a safer spot.  That beam would\'ve damaged it.' : '0'
                }
            }
        },
        'Sturdy Desk': {
             '1': {
                'check': [{'objectivesInProgress': ['surviveEarthquake'], 'goto': '2'}],
                'message': 'A very nice and sturdy desk',
                'replies': {
                    'I\'ll remember that when I need it.': 0
                }
             },
             '2': {
                'triggers': ['hideUnderDesk']
             }
        },
        'travelToSchool': {
            '1': {
                'message': 'Are you ready to leave for school?',
                'replies': {
                    'Yes': 2,
                    'No': 0
                }
            },
            '2': {
                'message': 'You left your house unprepared.',
                'replies': {
                    'I\'ll try to be better prepared next time': 3
                }
            },
            '3': {
                'triggers':['gotoSchool']
            }
        },
        'Killed by power lines.' : {
            '1' : {
                'message' : 'You failed to avoid a fatal obstacle.  During an earthquake evacuation it is important to '+
                            'remain calm and think about the situation.',
                'replies' : {
                    'I would like to know what I could do better for next time.' : 2,
                    'I\'m ready to play again.' : 3
                }
            },
            '2' :{
                'triggers' : ['startObjectiveReview']
            },
            '3' : {
                'triggers' : ['inFailedPowerLines']
            }
        },
        'Review Prompt' : {
            '1' : {
                'message' : 'You survived the earthquake!',
                'replies' : {
                    'I would like to know what I could do better for next time.' : 2,
                    'I\'m ready to play again.' : 3
                }
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
                    'To do better in this simulation: pack a complete Go-Kit before heading to school.' : 2,
                    'I\'m done with this review' : 9
                }
            },
            '2' : {
                'check' : [ {'objectivesCompleted':['moveHeavyObjects'], 'goto': '3'}],
                'message' : 'Things fall in an earthquake.  Make sure the heavy objects are stored close to ' +
                            'the ground so they do not become hazardous during an evacuation. ',
                'replies' : {
                    'To do better in this simulation: help prepare the school for an earthquake by moving a heavy  object' : 3,
                    'I\'m done with this review' : 9
                }
            },
            '3' : {
                'check' : [ {'objectivesCompleted':['awayFromHeat'], 'goto': '4'}],
                'message' : 'Flammable objects should never be stored near a heat source.  '+
                            'Whan an earthquake strikes, they can create a fire hazard.  ',
                'replies' : {
                    'To do better in this simulation: help prepare the school for an earthquake by moving flammable objects away from heat sources.' : 4,
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
                    'To challenge yourself in this simulation: help prepare the school for an earthquake by securing a large wall plaque.' : 5,
                    'I\'m done with this review' : 9
                }
            },
            '5' : {
                'check' : [{'objectivesCompleted':['moveBike'], 'goto': '6'}],
                'message' : 'Evacuating from the building after an earthquake is critical.  '+
                            'Avoid blocking exits to ensure the easiest evacuation possible. ',
                'replies' : {
                    'To master in this simulation: help prepare the school for an earthquake by moving objects blocking the exits.' : 6,
                    'I\'m done with this review' : 9
                }
            },
            '6' : {
                'check' : [{'objectivesCompleted':['saveJames'], 'goto': '7'}],
                'message' : 'Earthquakes create victims.  Help people who are in need of assistance '+
                            'if it is safe to do so.',
                'replies' : {
                    'To improve in this simulation: assist another survivor when it is safe to do so.' : 7,
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
                    'To do better in this simulation: help a fellow survivor to the Area of Rescue.' : 8,
                    'I\'m done with this review' : 9
                }
            },
            '8' : {
                    'check' : [{'objectivesCompleted':['saveXavier'], 'goto': '9'}],
                    'message' : 'Chaos often follows an earthquake.  ' +
                                'If you see someone panicked or heading toward a blocked exit, '+
                                'try to calm them down and help them evacuating.',
                'replies' : {
                    'To improve your performance: direct others towards exits.' : 9,
                    'I\'m done with this review' : 9
                }
            },
            '9' : {
                'triggers' : ['inFailedEarthquake','inFailedPowerLines','inInjuredEnding','inBestEnding']
            }
        },
        'packWater': {
            '1': {
                'check': [{'has': ['Flashlight', 'Food', 'Breathing Mask', 'Whistle', 'First Aid Kit'], 'goto': 3}],
                'message': 'Water is essential to life.',
                'replies': {
                    'Pack in Go-Kit': '2',
                    'Don\'t pack': '0'
                }
            },
            '2': {
                'triggers': ['takeWater']
            },
            '3': {
                'triggers': ['awardPackingGoKit', 'takeWater'],
                'message': 'Your Go-Kit is almost packed!',
                'replies': {
                    'Pack the Water and get to school.': 0
                }
            }
        },
        'evac_second_floor_detail': {
            '1': {
                'triggers': ['showSecondFloorRoomAnnotationsDetail']
            }
        },
        'A picture frame': {
            '1':{
                'check':[{'triggersEnabled':['frameFixed'], 'goto':'4'},
                         {'has':['Screw Driver'],'goto':'2'}],
                'message':'The student council plaque is loose. It seems the screws need tightening.',
                'replies': {
                    'Leave it' : '0'
                }
            },
            '2':{
                'message':'The student council plaque is loose. It seems the screws need tightening.',
                'replies': {
                    'Fix it': 3,
                    'Leave it' : '0'
                }
            },
            '3':{
                'triggers':['fixingFrame']
            },
            '4':{
                'message':'The plaque is now safe and secure.',
                'replies':{
                    'Great!':0
                }
            }
        },
        'Exit Building': {
            '1': {
                'message': 'Exit the building?',
                'replies': {
                    'Yes': 2,
                    'No, I\'m not ready yet.': 0
                }
            },
            '2': {
                'triggers': ['buildingExitScene']
            }
        },
        'Mrs Anderson': {
            '1': {
                'message': 'Hello!',
                'replies': {
                    'Hi, Mrs. Anderson.': 2
                },
                'triggers' : ['completeSpeakWithAnderson','stopHiAnderson']
            },
            '2': {
                'message': 'You should really try out the Emergency Response Game on my computer!',
                'replies': {
                    'Okay': 3,
                    'No thanks': 0
                }
            },
            '3': {
                'triggers': ['playtheERG']
            }
        },
        'packWhistle': {
            '1': {
                'check': [{'has': ['Water', 'Flashlight', 'Food', 'Breathing Mask', 'First Aid Kit'], 'goto': 3}],
                'message': 'Sometimes it\'s easier to be heard than seen.',
                'replies': {
                    'Pack in Go-Kit': '2',
                    'Don\'t pack': '0'
                }
            },
            '2': {
                'triggers': ['takeWhistle']
            },
            '3': {
                'triggers': ['awardPackingGoKit', 'takeWhistle'],
                'message': 'Your Go-Kit is almost packed!',
                'replies': {
                    'Pack the Whistle and get to school.': 0
                }
            }
        },
        'packFlashlight': {
            '1': {
                'check': [{'has': ['Water', 'Food', 'Breathing Mask', 'Whistle', 'First Aid Kit'], 'goto': 3}],
                'message': 'Flashlights are indispensable tools in emergency situations.',
                'replies': {
                    'Pack in Go-Kit': '2',
                    'Don\'t pack' : '0'
                }
            },
            '2': {
                'triggers': ['takeFlashlight']
            },
            '3': {
                'triggers': ['awardPackingGoKit', 'takeFlashlight'],
                'message': 'Your Go-Kit is almost packed!',
                'replies': {
                    'Pack the Flashlight and get to school.': 0
                }
            }
        },
        'DestroyedRotaryDoor': {
            '1': {
                'message': 'The door is unmovable. It must have come off its axis during the quake.',
                'replies': {
                    'I\'ll have to find another exit.': 0
                }
            }
        }
    },
    '_triggers': {
        'getChalkObjective': {
            'events': {
                'completeObjective': ['getToClass'],
                'setObjective': ['getChalkForTeacher', 'Get the chalk from the sturdy desk.']
            }
        },
        'completeChalkObjective': {
            'events': {
                'completeObjective': ['getChalkForTeacher'],
                'removeInventory': ['Chalk']
            }
        },
        'giveProfChalk': {
            'timeDelay': 100,
            'events': {
                'showConversation': ['Professor Xavier', 4, false, false]
            }
        },
        'beginFailedEarthquakeEnding' : {
            'events' : {
                'warpPlayer' : ['died',0,0,12]
            },
            'startTriggers' : ['failedEarthquake'],
            'enableTriggers' : ['inFailedEarthquake'],
            'disableTriggers': ['inBestEnding']
        },
        'failedEarthquake' : {
            'timeDelay' : 2000,
            'events' : {
                'showConversation' : ['Did not survive.',null,true,true]
            }
        },
        'startReviewPrompt' : {
            'events' : {
                'showConversation' : ['Review Prompt',null,true,true]
            }
        },
        'startObjectiveReview' : {
            'events' : {
                'showConversation' : ['Objective Review',null,true,true]
            }
        },
        'inFailedEarthquake' : {
            'disabled' : true,
            'events': {
                'endGame': ['Game Over', 'You didn\'t find cover soon enough and you were struck by falling debris!']
            }
        },
        'beginFailedPowerLinesEnding' : {
            'events' : {
                'warpPlayer' : ['died',0,0,12]
            },
            'enableTriggers': ['inFailedPowerLines'],
            'startTriggers':['failedPowerLines'],
            'disableTriggers': ['inBestEnding','inInjuredEnding']
        },
        'failedPowerLines' : {
            'timeDelay' : 2000,
            'events' : {
                'showConversation' : ['Killed by power lines.',null,true,true]
            }
        },
        'inFailedPowerLines' : {
            'disabled' : true,
            'events' : {
                'endGame': ['Game Over', 'When passing you accidentally got too close to the live power lines, which is a fatal mistake.']
            }
        },
        'inInjuredEnding' : {
            'disabled' : true,
            'events' : {
                'endGame': ['Game Over', 'You got badly injured during the evacuation.  But, after some time in the hospital you\'ll be ok.']
            },
            'lives' : Infinity
        },
        'inBestEnding' : {
            'events' : {
                'endGame': ['Game Over', 'You successfully survived the earthquake and evacuated the building without injury. Good job!']
            },
            'lives' : Infinity
        },
        'takeWhistle': {
            'events': {
                'takeFromScene' : [ {'name': 'Whistle', 'image': 'whistle.png', 'width':32, 'height':32 },
                                    'whistle' ]
            }
        },
        'setAftermathObjectives' : {
            'startTriggers' : ['saveLukeObjective','saveJamesObjective','saveXavierObjective','avoidObstaclesObjective']
        },
        'saveLukeObjective' : {
            'events' : {
                'setObjective' : ['saveLuke', 'Point others towards usable exits.']
            }
        },
        'saveJamesObjective' : {
            'events' : {
                'setObjective' : ['saveJames', 'Help others evacuate when it is safe to do so.']
            }
        },
        'saveXavierObjective' : {
            'events' : {
                'setObjective' : ['saveXavier', 'Move those badly injured to the area of rescue.']
            }
        },
        'avoidObstaclesObjective' : {
            'events' : {
                'setObjective' : ['avoidObstacles', 'Don\'t get injured while evacuating.']
            }
        },
        'wheelChairEnd' : {
            'events' : {
                'removeFromScene' : ['mrs-wheelchair','wheelchair']
            }
        },
        'savedJames' : {
            'events' : {
                'addPoints' : [15],
                'completeObjective' : ['saveJames']
            }
        },
        'openDoor': {
            'events' : {
                'replaceProp': ['door', 'door-open']
            },
            'lives': -1,
            'startTriggers': ['autoCloseDoor']
        },
        'dangerwarningPowerLines' : {
            'events' : {
                'showOnScreenMessage' : ['Look out! Those are dangerous power lines.']
            }
        },
        'wheelChair01' : {
            'enableTriggers' :['wheelChair00']
        },
        'walkedAwayFromConversation': {
            'moveDelay': 1,
            'lives': Infinity,
            'abortTriggers': ['hiMrsAnderson', 'hiComputer', 'hiXavier']
        },
        'scoreERGpoints' : {
            'events' : {
                'addPoints' : [6]
            },
            'lives' : 10
        },
        'failAftermathObjectives' : {
            'startTriggers' : ['failSaveLukeObjective','failSaveJamesObjective','failSaveXavierObjective','avoidObstaclesObjective']
        },
        'failSaveLukeObjective' : {
            'events' : {
                'failObjective' : ['saveLuke']
            }
        },
        'failSaveJamesObjective' : {
            'events' : {
                'failObjective' : ['saveJames']
            }
        },
        'failSaveXavierObjective' : {
            'events' : {
                'failObjective' : ['saveXavier']
            }
        },
        'failEvacuate' : {
            'events' : {
                'failObjective' : ['evacuateSchool']
            }
        },
        'playtheERG': {
            'events': {
                'setObjective': ['playtheERG', 'Learn about Emergency Response on the school computer']
            }
        },
        'activateFootInjury' : {
            'enableTriggers' : ['playerInjured','footInjury'],
            'startTriggers' : ['failAvoidObstacles'],
            'events' : {
                'showOnScreenMessage' : ['Ouch! Glass cuts through the sandals slicing your feet.']
            }
        } ,
        'footInjury' : {
            'disabled' : true,
            'lives' : Infinity,
            'events' : {
                'showOnScreenMessage' : ['Ouch, the glass is digging into my feet']
            }
        },
        'packForSchool': {
            'events': {
                'setObjective': ['packForSchool', 'Pack your go-kit. Then head to school']
            }
        },
        'takeScrewdriver': {
            'events': {
                'takeFromScene' : [ {'name': 'Screw Driver', 'image': 'screwdriver.jpg', 'width':32, 'height':32 },
                                    'screwdriver' ]
            }
        },
        'wheelChair02' : {
            'deleteTriggers':['wheelChairPoints'],
            'events' : {
                'removeFromScene' : ['wheelchair','mrs-wheelchair']
            }
        },
        'approachSmoke': {
            'enableTriggers': ['clearSmoke']
        },
        'clearSmoke' :{
            'disabled': true,
            'events' : {
                'replaceProp': ['smoke', 'smokeSafe']
            },
            'enableTriggers' : ['aftershock'],
            'disableTriggers' : ['activatePassout','passout']
        },
        'wetTheCloth' : {
            'enableTriggers' : ['clothIsWet'],
            'startTriggers': ['clearSmoke']
        },
        'clothIsWet' : {
            'disabled' : true
        },
        'takeFood': {
            'events': {
                'takeFromScene' : [ {'name': 'Food', 'image': 'food.png', 'width':32, 'height':32 },
                                    'food' ]
            }
        },
        'fixingFrame': {
            'events': {
                'removeInventory' : ['Screw Driver'],
                'addPoints' : [15],
                'completeObjective' : ['fixPlaque']
            },
            'enableTriggers':['frameFixed']
        },
        'playingERG': {
            'events': {
                'completeObjective': ['playtheERG'],
                'setObjective' : ['getToClass' , 'Class will start soon. Head to room 210.']
            }
        },
        'startSpeakwithAnderson' : {
            'events' : {
                'setObjective' : ['speakWithAnderson', 'Speak to Mrs. Anderson near room 130.']
            }
        },
        'completeSpeakWithAnderson' : {
            'events' : {
                'completeObjective' : ['speakWithAnderson'],
                'setObjective' : ['getToClass' , 'Class will start soon. Head to room 210.']
            }
        },
        'hurtMrsAnderson': {
            'addPoints': [-20]
        },
        'breakLights': {
            'events': {
                'disableLights': []
            }
        },
        'aftershock' : {
            'events' : {
                'startEarthquake': [4000, ''],
                'showOnScreenMessage': ['Aftershock! I\'ve got to get out of here quickly.']
            },
            'lives' : 2
        },
        'failprepSchoolObjectives' : {
            'startTriggers' : ['failplaqueObjective','failmoveBikeObjective','failheatObjective','failheavyObjectsObjective']
        },
        'failplaqueObjective' : {
            'events' : {
                'failObjective' : ['fixPlaque']
            }
        },
        'failmoveBikeObjective' : {
            'events' : {
                'failObjective' : ['moveBike']
            }
        },
        'failheatObjective' : {
            'events' : {
                'failObjective' : ['awayFromHeat']
            }
        },
        'failheavyObjectsObjective' : {
            'events' : {
                'failObjective' : ['moveHeavyObjects']
            }
        },
        'moveHeavyObject': {
            'events': {
                'removeFromScene': ['heavy'],
                'addToScene': ['heavy-on-floor'],
                'completeObjective' : ['moveHeavyObjects'],
                'addPoints': 15
            }
        },
        'wheelChair00' : {
            'disabled':true
        },
        'checkIfSurvivedEarthquake': {
            'timeDelay' : 250,
            'events': {
                'completeObjective': ['surviveEarthquake'],
                'setObjective': ['evacuateSchool', 'Evacuate the School safely'],
                'showConversation': ['Survived Earthquake', 1, true, true]
            }
        },
        'closeDoor': {
            'events' : {
                'replaceProp': ['door-open', 'door']
            },
            'lives': -1
        },
        'elevatorDown': {
            'events': {
                'warpPlayer': ['w',2,1,0]
            },
            'lives': Infinity
        },
        'elevatorUp': {
            'events': {
                'warpPlayer': ['w',2,1,1]
            },
            'lives': Infinity
        },
        'chairLocked': {
            'disabled':true
        },
        'survivedEarthquakeXavier': {
            'events': {
                'showConversation': ['Survived Earthquake'],
                'warpPlayer': ['w', 0, 1, 9],
                'disableLights': [],
                /*
                 * disable lights must be called before addToScene or flashlight
                 * will be behind flashlight overlay
                 */
                'addToScene':['flashlight']
            }
        },
        'frameFixed':{
            'disabled':true
        },
        'moveSpray': {
            'events': {
                'removeFromScene':['bugSpray']
            }
        },
        'takeDoorFrame' : {
            'events' : {
                'takeFromScene' : [ {'name': 'A door frame','image':'doorframe2.png', 'width':32, 'height':32 },
                                    'doorFrame']
            }
        },
        'moveDownedWires' : {
            'events' : {
                'replaceProp': ['Downedwire', 'Movedwire']
            },
            'enableTriggers' : ['lukeRunsPast'],
            'disableTriggers' : ['activateElectrocute','electrocute']
        },
        'showFirstFloorRoomAnnotations': {
            'lives': Infinity,
            'events': {
                'showMapAnnotations': [[
                    '0,0,0', '0,0,8', '0,2,0', '0,2,8', '0,3,0', '0,3,8',
                    '2,3,0', '2,3,8', '4,3,0', '4,3,8', '4,1,0', '4,1,8'
                ]],
                'removeFromScene': ['evac_plan_1']
            }
        },
        'showFirstFloorRoomAnnotationsDetail': {
            'lives': Infinity,
            'events': {
                'showModal': [null, null, '<img width="380" height="350" src="web/img/evac_first_floor.png"/>']
            },
            'startTriggers': ['showFirstFloorRoomAnnotations']
        },
        'showSecondFloorRoomAnnotations': {
            'lives': Infinity,
            'events': {
                'showMapAnnotations': [[
                    '0,1,1', '0,1,9', '0,2,1', '0,2,9',
                    '1,4,1', '1,4,9', '4,1,1', '4,1,9'
                ]],
                'removeFromScene': ['evac_plan_2']
            }
        },
        'showSecondFloorRoomAnnotationsDetail': {
            'lives': Infinity,
            'events': {
                'showModal': [null, null, '<img width="380" height="350" src="web/img/evac_second_floor.png"/>']
            },
            'startTriggers': ['showSecondFloorRoomAnnotations']
        },
        'hideFirstFloorRoomAnnotations': {
            'lives': Infinity,
            'events': {
                'hideMapAnnotations': [[
                    '0,0,0', '0,0,8', '0,2,0', '0,2,8', '0,3,0', '0,3,8',
                    '2,3,0', '2,3,8', '4,3,0', '4,3,8', '4,1,0', '4,1,8'
                ]]
            }
        },
        'hideSecondFloorRoomAnnotations': {
            'lives': Infinity,
            'events': {
                'hideMapAnnotations': [[
                    '0,1,1', '0,1,9', '0,2,1', '0,2,9',
                    '1,4,1', '1,4,9', '4,1,1', '4,1,9'
                ]]
            }
        },
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
        },
        'enterRoom206': {
            'events': {
                'setObjective' : ['getToClass' , 'Class will start soon. Head to room 210.'],
                'failObjective' : ['speakWithAnderson'],
                'completeObjective': ['getToClass']
            }
        },
        'startEBCconvo' : {
            'timeDelay' : 1500,
            'events' : {
                'showConversation' : ['Emergency Building Coordinator',null,true]
            }
        },
        'killstartEBC' : {
            'abortTriggers' : ['startEBCconvo']
        },
        'completeHeat' : {
            'events' : {
                'addPoints' : [15],
                'completeObjective' : ['awayFromHeat']
            }
        },
        'closeDoor2': {
            'events' : {
                'replaceProp': ['door2-open', 'door2']
            },
            'lives': -1
        },
        'takeWater': {
            'events': {
                'takeFromScene' : [ {'name': 'Water', 'image': 'waterbottle.png', 'width':32, 'height':32 },
                                    'water' ]
            }
        },
        'dangerwarningSmoke' : {
            'events' : {
                'showOnScreenMessage' : ['Look out! There is noxious smoke ahead.']
            }
        },
        'spokeToCoordinator': {
            'events': {
                'completeObjective': ['talktoCoordinator'],
                'endGame': ['Congratulations!', 'You survived the Earthquake and reached safety!']
            }
        },
        'gotoSchool': {
            'events': {
                'warpPlayer': ['n', 2, 0, 0]
            }
        },
        'activatePassout' : {
            'enableTriggers' : ['passout'],
            'disableTriggers' : ['aftershock'],
            'lives' : Infinity
        },
        'deactivatePassout' : {
            'disableTriggers' : ['passout'],
            'enableTriggers' : ['aftershock'],
            'lives' : Infinity
        },
        'passout' : {
            'timeDelay' : 250,
            'enableTriggers' : ['playerInjured'],
            'startTriggers' : ['wakeup','failAvoidObstacles'],
            'events' : {
                'warpPlayer' : ['blackout',3,3,8],
                'showOnScreenMessage' : ['The smoke clouds your vision as you wade through it.  Your lungs heave.  You collaspe to the floor and black out.']
            },
            'disabled' : true,
            'disableTriggers' : ['passout'],
            'lives' : Infinity
        },
        'wakeup' : {
            'timeDelay' : 5000,
            'events' : {
                'warpPlayer' : ['n'],
                'showOnScreenMessage' : ['You wake up some time later still coughing, but alive.']
            },
            'lives' : Infinity
        },
        'awardPackingGoKit': {
            'events': {
                'completeObjective': ['packForSchool'],
                'addPoints': [50]
            },
            'abortTriggers': ['enteredSchoolUnprepared'],
            'startTriggers': ['gotoSchool']
        },
        'buildingExitScene': {
            'events': {
                'warpPlayer': ['outsideBuilding',0,0,12],
                'completeObjective': ['evacuateSchool'],
                'enableLights' : []
            }
        },
        'askedMrsAndersonIfOkay': {
            'addPoints': [20]
        },
        'moveAwayFromDesk': {
            'events': {
                'player-move': ['move-forward']
            }
        },
        'moveDoor': {
            'events': {
                'replaceProp': ['brokenDoor', 'bridgeDoor']
            },
            'disableTriggers' : ['activateFootInjury'],
            'enableTriggers':['doorMoved']
        },
        'doorMoved' : {
            'disabled' : true
        },
        'moveRag': {
            'events':{
                'removeFromScene':['rag']
            }
        },
        'playerInjured' : {
            'disabled' : true
        },
        'moveXaviertoAoR' : {
            'events' : {
                'replaceProp': ['ProfXavInjured','ProfXavAoR'],
                'completeObjective' : ['saveXavier'],
                'addPoints' : [15]
            },
            'disableTriggers' : ['failSaveXavierObjective']
        },
        'takeMask': {
            'events': {
                'takeFromScene' : [ {'name': 'Breathing Mask', 'image': 'breathingmask.png', 'width':32, 'height':32 },
                                    'mask' ]
            }
        },
        'hiMrsAnderson' : {
            'timeDelay' : 2000,
            'events' : {
                'showConversation' : ['Mrs Anderson',null,true]
            },
            'deleteTriggers': ['hiMrsAnderson'],
            'lives': Infinity
        },
        'stopHiAnderson' : {
            'abortTriggers' : ['hiMrsAnderson']
        },
        'wheelChairPoints' : {
            'addPoints' : [20]
        },
        'moveBike': {
            'events': {
                'replaceProp': ['bike','bikeMoved']
            }
        },
        'moveBeam' : {
            'events' : {
                'replaceProp': ['bikeMangled','beam'],
                'addToScene': ['west-exit'],
                'completeObjective': ['moveBike'],
                'addPoints' : [15]
            }
        },
        'lukeRunsPast' : {
            'disabled' : true,
            'events' : {
                'warpPlayer' : ['Runscene'],
                'showOnScreenMessage' : ['As you\'re moving down the hallway a man comes out of a nearby classroom and runs past you.']
            },
            'startTriggers': ['HePasses']
        },
        'HePasses' : {
            'timeDelay' : 4000,
            'events' : {
                'warpPlayer': ['n'],
                'showOnScreenMessage': ['If you hurry you can catch him back down the hall.'],
                'addToScene' : ['Luke2']
            },
            'startTriggers' : ['RunnerTimer']
        },
        'RunnerTimer' : {
            'lives': Infinity,
            'timeDelay' : 20000,
            'events' : {
                'removeFromScene' : ['Luke2'],
                'showOnScreenMessage': ['He\'s gone too far to catch now.']
            }
        },
        'TalktoRunner' : {
            'abortTriggers' : ['RunnerTimer']
        },
        'removeRunner' : {
            'lives': Infinity,
            'events' : {
                'removeFromScene' : ['Luke2'],
                'completeObjective' : ['saveLuke'],
                'addpoints' : [15]
            }
        },
        'openDoor2': {
            'events' : {
                'replaceProp': ['door2', 'door2-open']
            },
            'lives': -1,
            'startTriggers': ['autoCloseDoor2']
        },
        'talkedToMrsAnderson': {
            'events': {
                'completeObjective': ['talkToMrsAnderson']
            }
        },
        'takeFlashlight': {
            'events': {
                'takeFromScene' : [ {'name': 'Flashlight', 'image': 'flashlight.png', 'width':32, 'height':32 },
                                    'flashlight' ]
            },
            'lives': Infinity
        },
        'hiXavier' : {
            'timeDelay' : 2000,
            'events' : {
                'showConversation' : ['Professor Xavier',null,true]
            },
            'deleteTriggers': ['hiXavier'],
            'lives': Infinity
        },
        'stopHiXavier' : {
            'abortTriggers' : ['hiXavier']
        },
        'autoCloseDoor': {
            'events' : {
                'replaceProp': ['door-open', 'door']
            },
            'lives': -1,
            'moveDelay': 1
        },
        'takeFirstAidKit': {
            'events': {
                'takeFromScene' : [ {'name': 'First Aid Kit', 'image': 'firstaidkit.png', 'width':32, 'height':32 },
                                    'firstaidkit' ]
            }
        },
        'prepSchoolObjectives' : {
            'startTriggers' : ['plaqueObjective','moveBikeObjective','heatObjective','heavyObjectsObjective']
        },
        'plaqueObjective' : {
            'events' : {
                'setObjective' : ['fixPlaque', 'Secure a loose sign.']
            }
        },
        'moveBikeObjective' : {
            'events' : {
                'setObjective' : ['moveBike' , 'Unblock an exit.']
            }
        },
        'heatObjective' : {
            'events' : {
                'setObjective' : ['awayFromHeat' , 'Move flammable items away from heat sources.']
            }
        },
        'heavyObjectsObjective' : {
            'events' : {
                'setObjective' : ['moveHeavyObjects' , 'Move a heavy object to a safer location.']
            }
        },
        'dangerwarningGlass' : {
            'events' : {
                'showOnScreenMessage' : ['Look out! There are shards of broken glass covering the hallway.']
            }
        },
        'hideUnderDesk': {
            'abortTriggers': ['timeToTakeCover'],
            'deleteTriggers': ['timeToTakeCover'],
            'events': {
                'stopEarthquake': ['survivedEarthquakeXavier']
            },
            'lives': Infinity
        },
        'lockChair' : {
            'enableTriggers' : ['chairLocked']
        },
        'shakeThingsUp': {
            'events': {
                'completeObjective': ['talkToMrsAnderson'],
                'startEarthquake': [10000, ''], /* this time needs to be set in timeToTakeCover as well */
                'setObjective': ['surviveEarthquake', 'React and Survive']
            },
            'startTriggers': ['timeToTakeCover']
        },
        'wheelChair03' : {
            'deleteTriggers' : ['wheelChairPoints']
        },
        'timeToTakeCover': {
            'startTriggers' : ['beginFailedEarthquakeEnding'],
            'timeDelay': 10000,
            'showCountdown': true,
            'lives': Infinity
        },
        'autoCloseDoor2': {
            'events' : {
                'replaceProp': ['door2-open', 'door2']
            },
            'lives': -1,
            'moveDelay': 1
        },
        'completeAvoidObstacles' : {
            'events' : {
                'completeObjective' : ['avoidObstacles'],
                'addPoints' : 30
            }
        },
        'failAvoidObstacles' : {
            'events' : {
                'failObjective' : ['avoidObstacles'],
                'addToScene' : ['ambulance']
            },
            'disableTriggers' : ['completeAvoidObstacles','inBestEnding'],
            'enableTriggers'  : ['inInjuredEnding']
        },
        'activateElectrocute' : {
            'enableTriggers' : ['electrocute'],
            'lives' : Infinity
        },
        'deactivateElectrocute' : {
            'disableTriggers' : ['electrocute'],
            'lives' : Infinity
        },
        'electrocute' : {
            'disabled' : true,
            'lives' : Infinity,
            'startTriggers' : ['failAvoidObstacles','beginFailedPowerLinesEnding']
        }
    },
    'inactiveProps': ['heavy-on-floor','Movedwire','bridgeDoor','bikeMoved',
                      'beam','west-exit', 'door-open','door2-open','Luke2',
                      'ambulance','ProfXavAoR', 'Fire-Extinguisher'],
    '_player': {
        'x': 0,
        'y': 0,
        'z': 2,
        '_facing': 'n',
        'inventory': []
    },
    'annotations': {
        '0,0,0': 'annotationR110.png',
        '0,0,8': 'annotationR110.png',
        '0,2,0': 'annotationR120.png',
        '0,2,8': 'annotationR120.png',
        '0,3,0': 'annotationR130.png',
        '0,3,8': 'annotationR130.png',
        '2,3,0': 'annotationR145.png',
        '2,3,8': 'annotationR145.png',
        '4,3,0': 'annotationR160.png',
        '4,3,8': 'annotationR160.png',
        '4,1,0': 'annotationFaculty.png',
        '4,1,8': 'annotationFaculty.png',
        '0,1,1': 'annotationR210.png',
        '0,1,9': 'annotationR210.png',
        '0,2,1': 'annotationR220.png',
        '0,2,9': 'annotationR220.png',
        '1,4,1': 'annotationLibrary.png',
        '1,4,9': 'annotationLibrary.png',
        '4,1,1': 'annotationR225.png',
        '4,1,9': 'annotationR225.png'
    }
}
