'firstEarthquakeConvo' : {
    '1': {
        'check': [{'objectivesInProgress': ['surviveEarthquake'], 'goto': '2'}],
        'message': 'You crawl out from under the desk once the shaking stops.',
        'replies': {
            'Continue..': 0
        }
    },
    '2': {
        'endGame': ['Game Over', 'You didn\'t find cover soon enough and a large beam struck fell on you!']
    }
}