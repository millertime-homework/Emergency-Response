'Sturdy Desk': {
     '1': {
          'message': 'This desk looks nice and sturdy.',
          'replies': {
               'It looks dirty under there...': 2,
               'I should crawl underneath and take cover': 3
          }
     },
     '2': {
          'triggers': ['failToTakeCover']
     },
     '3': {
          'triggers': ['hideUnderDesk']
     }
}