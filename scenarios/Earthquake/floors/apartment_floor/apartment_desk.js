'Apartment Desk': {
    'id': 'desk',
    'x': 0,
    'y': 1,
    '_walls': {
        'n': {
            'name': 'desk',
            'image': 'desk.jpg',
            '_props': {
                'flashlight': {
                    'name': 'Flashlight',
                    'image': 'flashlight.png',
                    'width': 124,
                    'height': 79,
                    'top': 40,
                    'left': 100,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'packFlashlight'
                    }
                },
                'water': {
                    'name': 'Water Bottle',
                    'image': 'waterbottle.png',
                    'width': 131,
                    'height': 281,
                    'top': 40,
                    'left': 400,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'packWater'
                    }
                },
                'food': {
                    'name': 'Food',
                    'image': 'food.png',
                    'width': 81,
                    'height': 175,
                    'top': 40,
                    'left': 700,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'packFood'
                    }
                },
                'mask': {
                    'name': 'N-95 Breathing Mask',
                    'image': 'breathingmask.png',
                    'width': 142,
                    'height': 120,
                    'top': 400,
                    'left': 200,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'packMask'
                    }
                },
                'whistle': {
                    'name': 'Whistle',
                    'image': 'whistle.png',
                    'width': 183,
                    'height': 91,
                    'top': 400,
                    'left': 400,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'packWhistle'
                    }
                },
                'firstaidkit': {
                    'name': 'First Aid Kit',
                    'image': 'firstaidkit.png',
                    'width': 124,
                    'height': 102,
                    'top': 400,
                    'left': 600,
                    'action': 'showConversation',
                    'actionVariables': {
                        'conversationName': 'packFirstAidKit'
                    }
                },
                // 'gobackbutton': {
                //     'name': 'Go Back Button',
                //     'image': 'gobackbutton.png',
                //     'hoverImage': 'gobackbuttonhover.png',
                //     'width': 150,
                //     'height': 150,
                //     'top:': 400,
                //     'left': 700,
                //     'action': 'showConversation',
                //     'actionVariables': {
                //         'conversationName': 'goBackButton'
                //     }
                // }
            },
            'destination': {
                'y': 0
            }
        }
    }
}
