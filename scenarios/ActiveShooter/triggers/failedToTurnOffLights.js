'failedToTurnOffLights' : {
    'disabled' : true,
    'events' : {
        'showConversation': ['You Failed To Turn Off The Lights!']
    }
},
'failedToTurnOffLights041' : {
    'disabled' : true,
    'enableTriggers': ['lightsOnEnding'],
    'events' : {
        'warpPlayer': ['survived',0,0,12]
    }
},
'lightsOnEnding': {
    'disabled': true,
    'timeDelay': 750,
    'events': {
        'endGame': ['You survived.', "As the shooter walked by the room you were hiding in he noticed that the lights were on. He checked the door several times, but fortunately you locked it. Turn off the lights next time so you don't attract the shooter\'s attention."]        
    }
}
