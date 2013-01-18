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
                                                        'image': 'B-north.jpg',
                                                        '_clickables': {
                                                                'key': {
                                                                    'image': 'key.png',
                                                                    'width': 50,
                                                                    'height': 50,
                                                                    'left': 600,
                                                                    'top': 277,
                                                                    'action': 'showConversation',
                                                                    'actionVariables': {
                                                                        'conversationName': 'Key'
                                                                    }
                                                                },
                                                                'door': {
                                                                    'image': 'door.png',
                                                                    'width': 125,
                                                                    'height': 250,
                                                                    'left': 300,
                                                                    'top': 277,
                                                                    'action': 'showConversation',
                                                                    'actionVariables': {
                                                                        'conversationName': 'Door'
                                                                    }
                                                                }
                                                                
                                                        }
                                                },
                                                's': {
                                                        'name': 'S Upper 5th Hall', 
                                                        'image': 'B-south.jpg',
                                                        'destination': {
                                                                'y': 0
                                                        }
                                                }
                                        },
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
                    'checkInventory': [{'has': ['Key'], 'goto': '1-key'}],
                    'message' : 'How\'s the weather!?',
                    'replies' : {
                        'Looks like rain': 2,
                        'Sunny with a high of 75': 3,
                        'It\'s going to snow!': 4
                    }
                },
                '1-key' : {
                    'message' : 'How\'s the weather!?',
                    'replies' : {
                        'Looks like rain': 2,
                        'Sunny with a high of 75': 3,
                        'It\'s going to snow!': 4,
                        'Is this your key?': 7
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
                },
                '7': {
                    'message': 'Oh, thank you!  I must have dropped it!',
                    'takeFromPlayer': ['Key'],
                    'replies': {
                        'You\'re welcome!': 0
                    }
                }
            },
            'Key': {
                '1': {
                    'message': 'You found a key!',
                    'replies': {
                         'Take it': '2'
                    }
                },
                '2': {
                    'givePlayer': [{'name': 'Key', 'image': 'key.png'}],
                    'removeFromScene': ['key'],
                    'goto': 0,
                    'message': 'Yay!'
                }
            },
            'Door': {
                '1': {
                    'checkInventory': [{'has': ['Key'], 'goto': '2'}],
                    'message': 'The door is locked',
                    'replies': {
                        'Walk away': 0
                    }
                },
                '2': {
                    'message': 'The door is locked',
                    'replies': {
                        'Use the key': 3,
                        'Walk away': 0
                    }
                },
                '3': {
                    'removeFromScene': ['door'],
                    'goto': 0
                }
            }
        },
        '_player': {
                'x': 0,
                'y': 0,
                'z': 0,
                '_facing': 'n'
        },
};
