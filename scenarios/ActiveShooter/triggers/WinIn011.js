'WinIn011' : {
    'waitForObjectiveCompletions' : ['lockTheDoorAgain'],
    'timeDelay' : 5000,
    'events' : {
        'endGame': ['You survived!', 'You did the right thing by not leaving your hiding place. It took about an hour, but as the police cleared the building they found you and let you know that it was safe to leave the building.']
    }
},
'WinAloneIn011' : {
    'waitForObjectiveCompletions' : ['turnOffLights', 'pullDownWindowShade', 'hideByDoor', 'lockTheDoor'],//'silencePhone', 
    'events' : {
        'endGame': ['You survived!', 'Hiding in a locked room turned out to be a good choice. although things won\'t always be this easy, you survived a very bad situation.']
    }
}
