scenarioDef = {
        'name': 'Demo 01 Scenario',
        '_floors': {
                'First Floor': {
                        'z': 0,
                        '_rooms': {
                                'SW 5th & Hall': {
                                        'id': '5thhall', 
                                        'x': 0, 
                                        'y': 0,
                                        '_walls': {
                                                'e': {
                                                        'name': 'E 5th Hall', 
                                                        'image': 'A-east.jpg',
                                                        'destination': {
                                                                'x': 1
                                                        }
                                                },
                                                'w': {
                                                        'name': 'W 5th Hall',
                                                        'image': 'A-west.jpg'
                                                },
                                                'n': {
                                                        'name': 'N 5th Hall',   
                                                        'image': 'A-north.jpg',
                                                        'destination': {
                                                                'y': 1
                                                        }
                                                },
                                                's': {
                                                        'name': 'S 5th Hall', 
                                                        'image': 'A-south.jpg'
                                                }
                                        }
                                },
                                'Upper SW 5th & Hall': {
                                        'id': 'north5th',
                                        'x': 0,
                                        'y': 1,
                                        '_walls': {
                                                'e':  {
                                                        'name': 'E Upper 5th Hall', 
                                                        'image': 'B-east.jpg',
                                                        '_clickables': {
                                                                'espressoWindow': {
                                                                        'image': 'B-east-window.jpg',
                                                                        'width': 156,
                                                                        'height': 135,
                                                                        'left': 85,
                                                                        'top': 374,
                                                                        'action': 'displayModal',
                                                                        'actionVariables': {
                                                                            'image': 'B-east-window-Large.jpg',
                                                                            'name': 'Espresso Shop Window'
                                                                        }
                                                                },
                                                                'convoTest': {
                                                                    'image': 'bro.png',
                                                                    'width': 173,
                                                                    'height': 328,
                                                                    'left': 600,
                                                                    'top': 277,
                                                                    'action': 'showConversation',
                                                                    'actionVariables': {
                                                                        'conversationName': 'Bill the Bizarre Bro'
                                                                    }
                                                                }
                                                        }
                                                }, 
                                                'w': {
                                                        'name': 'W Upper 5th Hall', 
                                                        'image': 'B-west.jpg'
                                                },
                                                'n': {
                                                        'name': 'N Upper 5th Hall', 
                                                        'image': 'B-north.jpg'
                                                },
                                                's': {
                                                        'name': 'S Upper 5th Hall', 
                                                        'image': 'B-south.jpg',
                                                        'destination': {
                                                                'y': 0
                                                        }
                                                }
                                        }
                                },
                                'West on Hall': {
                                        'id': 'westhall',
                                        'x': 1,
                                        'y': 0,
                                        '_walls': {
                                                'e': {
                                                        'name': 'E West on Hall',
                                                        'image': 'C-east.jpg',
                                                        'destination': {
                                                                'x': 2
                                                        }
                                                },
                                                'w': {
                                                        'name': 'W West on Hall',
                                                        'image': 'C-west.jpg',
                                                        'destination': {
                                                                'x': 0
                                                        }
                                                },
                                                'n': {
                                                        'name': 'N West on Hall',
                                                        'image': 'C-north.jpg'
                                                },
                                                's': {
                                                        'name': 'S West on Hall',
                                                        'image': 'C-south.jpg'
                                                }
                                        }
                                },
                                'West on Hall 2': {
                                        'id': 'westhall2',
                                        'x': 2,
                                        'y': 0,
                                        '_walls': {
                                                'e': {
                                                        'name': 'E West on Hall 2',
                                                        'image': 'D-east.jpg',
                                                        'destination': {
                                                                'x': 3
                                                        }
                                                },
                                                'w': {
                                                        'name': 'W West on Hall 2',
                                                        'image': 'D-west.jpg',
                                                        'destination': {
                                                                'x': 1
                                                        }
                                                },
                                                'n': {
                                                        'name': 'N West on Hall 2',
                                                        'image': 'D-north.jpg'
                                                },
                                                's': {
                                                        'name': 'S West on Hall 2',
                                                        'image': 'D-south.jpg'
                                                }
                                        }
                                },
                                'SW 4th & Hall': {
                                        'id': '4thhall',
                                        'x': 3,
                                        'y': 0,
                                        '_walls': {
                                                'e': {
                                                        'name': 'E 4th Hall',
                                                        'image': 'E-east.jpg',
                                                },
                                                'w': {
                                                        'name': 'W 4th Hall',
                                                        'image': 'E-west.jpg',
                                                        'destination': {
                                                                'x': 2
                                                        }
                                                },
                                                'n': {
                                                        'name': 'N 4th Hall',
                                                        'image': 'E-north.jpg'
                                                },
                                                's': {
                                                        'name': 'S 4th Hall',
                                                        'image': 'E-south.jpg'
                                                }
                                        }
                                }
                        }
                }
        },
        '_conversations': {
            'Bill the Bizarre Bro': {
                '1' : {
                    'message' : 'How\'s the weather!?',
                    'replies' : {
                        'Looks like rain': 2,
                        'Sunny with a high of 75': 3,
                        'It\'s going to snow!': 4
                    }
                },
                '2' : {
                    'message' : 'Sounds like a typical day in Portland...',
                    'replies' : {
                        'Goodbye': 0
                    }
                },
                '3' : {
                    'message' : '75 degrees in January? Let\'s go swimming!!!',
                    'replies' : {
                        'You\'re kind of crazy': 5,
                        'Goodbye' : 0
                    }
                },
                '4' : {
                    'message' : 'I like snow!!!',
                    'replies' : {
                        'Me too. Snow is awesome!': 6
                    }
                },
                '5': {
                    'message': 'You ever been kicked in the head by a bull?',
                    'replies': {
                        'Back away slowly...': 0
                    }
                },
                '6': {
                    'message': 'Hey, lets build a snowman!!',
                    'replies': {
                        'Actually I\'m busy preparing for an earthquake. Gotta go.': 0
                    }
                }
            }
        },
        '_triggers': {
            'showAModal': {
                'event': 'showModal',
                'eventArgs' : ['Instantly triggered Modal', 'Sup']
            },
            'timeDelayedModal': {
                'event': 'showModal',
                'exeAfterNMilliseconds': 5000,
                'eventArgs': ['Time delayed triggered Modal', 'I\'m going to trigger one more time delayed modal!'],
                'startTriggers': ['chainedTimeDelayModal']
            },
            'chainedTimeDelayModal': {
                'event': 'showModal',
                'exeAfterNMilliseconds': 5000,
                'eventArgs': ['Time delayed triggered Modal', 'Pretty cool, eh?']
            },
            'moveDelayedModal': {
                'event': 'showModal',
                'exeAfterNMoves' : 3,
                'eventArgs': ['Move delayed triggered Modal', 'Some text for the body of the triggered modal'],
                'startTriggers': ['startedByOtherTrigger']
            },
            'startedByOtherTrigger': {
                'event': 'showModal',
                'exeAfterNMoves': 1,
                'eventArgs': ['Move delayed modal triggered by another trigger', 'Some text for the body of the triggered modal']
            },
            'controversialAbortionModal': {
                'event': 'showModal',
                'exeAfterNMoves': 1,
                'eventArgs': ['I have aborted a time delayed and move delayed modal!', 'I am a terrible creature.'],
                'abortTriggers': ['moveDelayedModal', 'timeDelayedModal']
            },
            'theDeletionist': {
                'event': 'showModal',
                'eventArgs': ['I am the grim reaper', 'ha ha ha ha ha'],
                'deleteTriggers' : ['deleteMe']
            },
            'deleteMe': {
                'event': 'showModal',
                'eventArgs': ['I will never have a chance to live.', 'What\'s the point? Nobody will ever see this message.'],
            },
            'signaler': {
                'signalTriggers': ['signalee']
            },
            'signalee': {
                'event': 'showModal',
                'eventArgs': ['I will not appear until I am instructed to do so.', 'Ahh, it is good to be seen.'],
                'waitForSignal': true
            },
            'multipleLifeModal': {
                'event': 'showModal',
                'lives': 3,
                'eventArgs': ['I have only 3 lives to live', 'Some text for the body of the triggered modal']
            }
        },
        '_player': {
                'x': 0,
                'y': 0,
                'z': 0,
                '_facing': 'n'
        },
};
