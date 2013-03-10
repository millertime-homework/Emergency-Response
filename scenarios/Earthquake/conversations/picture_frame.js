'A picture frame': {
    '1':{
        'check':[{'triggersEnabled':['frameFixed'], 'goto':'4'},
                 {'has':['Screw Driver'],'goto':'2'}],
        'message':'The student council plaque is loose. It seems the screws need tightening.',
        'replies': {
            'Leave it' : '0'
        }
    },
    '2':{
        'message':'The student council plaque is loose. It seems the screws need tightening.',
        'replies': {
            'Fix it': 3,
            'Leave it' : '0'
        }
    },
    '3':{
        'triggers':['fixingFrame']
    },
    '4':{
        'message':'The plaque is now safe and secure.',
        'replies':{
            'Great!':0
        }
    }
}
