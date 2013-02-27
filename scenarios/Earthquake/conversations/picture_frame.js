'A picture frame': {
    '1':{
        'check':[{'triggersEnabled':['frameFixed'], 'goto':'4'},
                 {'has':['Screw Driver'],'goto':'2'}],
        'message':'The screws holding this picture seem loose.',
        'replies': {
            'Leave it' : '0'
        }
    },
    '2':{
        'message':'The screws holding this picture seem loose.',
        'replies': {
            'Fix it': 3,
            'Leave it' : '0'
        }
    },
    '3':{
        'triggers':['fixingFrame']
    },
    '4':{
        'message':'The picture is now safe and secure.',
        'replies':{
            'Great!':0
        }
    }
}
