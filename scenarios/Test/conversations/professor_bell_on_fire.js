'Professor Bell On Fire': {
    '1' : {
        'checkInventory': [{'has': ['Fire Extinguisher'], 'goto': '2'}],
        'message': 'Help!!!! I\'M ON FIRE! GET AN EXTINGUISHER!',
        'replies': {}
    },
    '2': {
        'message': 'USE YOUR EXTINGUISHER!! HURRY!',
        'replies': {
            'Extinguish': 3,
            'Just ignore him': 4
        }
    },
    '3': {
        'triggers': ['extinguishProf']
    },
    '4': {
        'triggers': ['dontExtinguish']
    }
}
