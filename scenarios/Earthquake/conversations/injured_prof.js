'Help Injured Professor': {
     '1': {
          'message': '[Groan] ..... my back!',
          'replies': {
               'Pick him up and help him out of the room.': 2,
               'Ask him if he is okay': 3
          }
     },
     '2': {
          'message': 'No! Don\'t pick me up! I\'m hurt! Get help!',
          'replies': {
               'Evacuate and get him help.': 0
          }
     },
     '3': {
          'message': 'I\'m badly hurt! Please just help me out to the Area of Rescue.',
          'replies': {
               'Help him to the Area of Rescue.': 4,
               'Save yourself.' : 0
          }
     },
     '4' : {
         'triggers' : ['moveXaviertoAoR']
     }
},
'Injured Professor' : {
    '1' : {
        'message' : 'Thank you, now go get help.',
        'replies' : {
            'Evacuate the school.' : 0
        }
    }
}
