'Survived Earthquake' : {
    '1': {
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
}
