'approachSmoke': {
    'enableTriggers': ['clearSmoke']
},
'clearSmoke' :{
    'disabled': true,
    'events' : {
        'replaceProp': ['smoke', 'smokeSafe']
    },
    'enableTriggers' : ['aftershock'],
    'disableTriggers' : ['activatePassout','passout']
},
'wetTheCloth' : {
    'enableTriggers' : ['clothIsWet'],
    'startTriggers': ['clearSmoke']
},
'clothIsWet' : {
    'disabled' : true
}
