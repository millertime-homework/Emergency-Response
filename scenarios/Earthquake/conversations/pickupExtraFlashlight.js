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
}
