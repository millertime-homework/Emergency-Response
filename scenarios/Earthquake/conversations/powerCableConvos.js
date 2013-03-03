'Hanging wires' : {
    '1' : {
        'check'   : [{'has':['A door frame'], 'goto' : '2'}],
        'message' : 'Some wires have come out of the ceiling and block the hall.',
        'replies' : {
            'I should be careful.' : '0'
        }
    },
    '2' : {
        'message' : 'Some wires have come out of the ceiling and block the hall.',
        'replies' : {
            'I should be careful.' : '0',
            'I could move them out of the way with this long door frame.' : '3'
        }
    },
    '3' : {
        'message' : 'The path is now cleared',
        'replies' : {'Good, I\'d beter get out of here.' : '0'},
        'triggers': ['moveDownedWires']
    }
},
'A door frame' : {
    '1' : {
        'message' :  'A part of the door frame has come loose in the earthquake.',
        'replies' : {
            'Umm, ok...' : '0',
            'Break the door frame off and carry it for a while' : '2'
        }
    },
    '2' : {
        'triggers' : ['takeDoorFrame']
    }
},
        