'failedToPullDownShade' : {
    'disabled' : true,
    'events' : {
        'showConversation': ['You Failed To Pull Down The Shades!']
    }
},
'failedToPullDownShade041' : {
    'disabled' : true,
    'enableTriggers': ['shotThroughOfficeWindowEnding'],
    'events' : {
        'warpPlayer': ['injured',0,0,12]
    }
},
'shotThroughOfficeWindowEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events': {
        'endGame': ['You were wounded by the shooter', "The shooter spotted you through the door's window and shot you. Fortunately you were only wounded and because you locked the door the shooter wasn't able to come in the room and finish the job. Next time make sure you shut the window blinds!"]        
    }
}
