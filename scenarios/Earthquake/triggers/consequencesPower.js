'activateElectrocute' : {
    'enableTriggers' : ['electrocute'],
    'lives' : Infinity
},
'deactivateElectrocute' : {
    'disableTriggers' : ['electrocute'],
    'lives' : Infinity
},
'electrocute' : {
    'disabled' : true,
    'lives' : Infinity,
    'startTriggers' : ['failAvoidObstacles','beginFailedPowerLinesEnding']
}
