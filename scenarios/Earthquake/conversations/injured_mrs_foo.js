'Help Injured Foo': {
     '1': {
          'check': [{'objectivesInProgress': ['surviveEarthquake'], 'goto': 4}],
          'message': '[Groan] ..... my back!',
          'replies': {
               'Pick her up and help her out of the room.': 2,
               'Ask her if she is okay': 3
          }
     },
     '2': {
          'triggers':['hurtMrsFoo'],
          'message': 'No! Don\'t pick me up! I\'m hurt! Get help!',
          'replies': {
               'Evacuate and get her help.': 0
          }
     },
     '3': {
          'triggers':['askedMrsFooIfOkay'],
          'message': 'I\'m badly hurt! Please get help!',
          'replies': {
               'Evacuate and get her help.': 0
          }
     },
     '4': {
          'triggers': ['failToTakeCover']
     }
}