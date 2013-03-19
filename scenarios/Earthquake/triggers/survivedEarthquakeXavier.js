'survivedEarthquakeXavier': {
    'events': {
        'showConversation': ['Survived Earthquake'],
        'warpPlayer': ['w', 0, 1, 9],
        'disableLights': [],
        /* 
         * disable lights must be called before addToScene or flashlight 
         * will be behind flashlight overlay
         */
        'addToScene':['flashlight']
    }
}