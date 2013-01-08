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
                                                                        'name': 'Espresso Shop Window',
                                                                        'image': 'B-east-window.jpg',
                                                                        'width': 156,
                                                                        'height': 135,
                                                                        'left': 88,
                                                                        'top': 377,
                                                                        'largeImage' : 'B-east-window-Large.jpg'
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
        '_player': {
                'x': 0,
                'y': 0,
                'z': 0,
                '_facing': 'n'
        },
};
