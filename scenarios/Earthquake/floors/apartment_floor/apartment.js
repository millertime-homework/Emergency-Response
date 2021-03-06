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
