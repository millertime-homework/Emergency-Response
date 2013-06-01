'pickUpBook': {
    'abortTriggers': ['goPickUpBookHint'],
    'events': {
        'takeFromScene': [{'name':'Book', 'image':'book.png', 'width':40, 'height':30},
                          'bookshelf'],
        'completeObjective': ['pickUpBook']
    }
}
