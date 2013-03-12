'Apartment': {
    'id': 'apartment',
    'x': 0,
    'y': 0,
    '_triggers' : ['packForSchool'],
    '_walls': {
        'n': {
            'name': 'apartment-n',
            'image': 'apartment-n.jpg',
            '_props': {
                'mask': {
                    'name': 'N-95 Breathing Mask',
                    'image': 'breathingmask.png',
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
                    'image': 'blank.png',
                    'top': 160,
                    'left': 470,
                    'width': 180,
                    'height': 390,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'travelToSchool',
                        'isAnAction': true
                    }
                }
            },
            'destination': {
                'x': 2,
                'y': 0,
                'z': 0,
                'f': 'n'
            }
        },
        'e': {
            'name': 'apartment-e',
            'image': 'apartment-e.jpg',
            '_props': {
                'food': {
                    'name': 'Food',
                    'image': 'food.png',
                    'width': 60,
                    'height': 130,
                    'top': 350,
                    'left': 700,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'packFood',
                        'isAnAction': true
                    }
                },
                'flashlight': {
                    'name': 'Flashlight',
                    'image': 'flashlight.png',
                    'width': 62,
                    'height': 40,
                    'top': 420,
                    'left': 400,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'packFlashlight',
                        'isAnAction': true
                    }
                }
            }
        },
        'w': {
            'name': 'apartment-w',
            'image': 'apartment-w.jpg',
            '_props': {
                'shelf0': {
                    'name': 'Shelf 0',
                    'image': 'woodshelf.png',
                    'top': 400,
                    'left': 130,
                    'width': 260,
                    'height': 53 
                },
                'shelf1': {
                    'name': 'Shelf 1',
                    'image': 'woodshelf.png',
                    'top': 400,
                    'left': 750,
                    'width': 260,
                    'height': 53 
                },
                'firstaidkit': {
                    'name': 'First Aid Kit',
                    'image': 'firstaidkit.png',
                    'top': 323,
                    'left': 800,
                    'width': 124,
                    'height': 102,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'packFirstAidKit',
                        'isAnAction': true
                    }
                },
                'water': {
                    'name': 'Water Bottle',
                    'image': 'waterbottle.png',
                    'top': 265,
                    'left': 220,
                    'width': 75,
                    'height': 140,
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
