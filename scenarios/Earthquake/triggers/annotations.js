'showFirstFloorRoomAnnotations': {
    'lives': Infinity,
    'events': {
        'showMapAnnotations': [['0,0,0', '0,0,8', '0,2,0', '0,2,8', '0,3,0', '0,3,8', '2,3,0', '2,3,8', '4,3,0', '4,3,8', '4,1,0', '4,1,8']]
    }
},
'showFirstFloorRoomAnnotationsDetail': {
    'lives': Infinity,
    'events': {
        'showModal': [null, null, '<img width="380" height="350" src="web/img/evac_first_floor.png"/>']
    },
    'startTriggers': ['showFirstFloorRoomAnnotations']
},
'showSecondFloorRoomAnnotations': {
    'lives': Infinity,
    'events': {
        'showMapAnnotations': [['0,1,1', '0,1,9', '0,2,1', '0,2,9', '1,4,1', '1,4,9', '4,1,1', '4,1,9']]
    }
},
'showSecondFloorRoomAnnotationsDetail': {
    'lives': Infinity,
    'events': {
        'showModal': [null, null, '<img width="380" height="350" src="web/img/evac_second_floor.png"/>']
    },
    'startTriggers': ['showSecondFloorRoomAnnotations']
},
'hideFirstFloorRoomAnnotations': {
    'lives': Infinity,
    'events': {
        'hideMapAnnotations': [['0,0,0', '0,0,8', '0,2,0', '0,2,8', '0,3,0', '0,3,8', '2,3,0', '2,3,8', '4,3,0', '4,3,8', '4,1,0', '4,1,8']]
    }
},
'hideSecondFloorRoomAnnotations': {
    'lives': Infinity,
    'events': {
        'hideMapAnnotations': [['0,1,1', '0,1,9', '0,2,1', '0,2,9', '1,4,1', '1,4,9', '4,1,1', '4,1,9']]
    }
}