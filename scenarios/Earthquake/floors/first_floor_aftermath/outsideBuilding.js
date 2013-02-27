'outsideBuilding': {
     'id': 'outside',
     'x': 2,
     'y': -1,
     '_walls': {
          'e': {
               'name': 'EOutside',
               'image': 'outside-east.jpg'
          },
          'w': {
               'name': 'WOutside',
               'image': 'outside-west.jpg'
          },
          'n': {
               'name': 'NOutside',
               'image': 'outside-north.jpg'
          },
          's': {
               'name': 'SOutside',
               'image': 'outside-south.jpg',
               '_props': {
                    'coordinator': {
                         'name': 'coordinator',
                         'image': 'policeman.png',
                         'width': 350,
                         'height': 441,
                         'left': 200,
                         'top': 300,
                         'action': 'showConversation',
                         'actionVariables': {
                              'conversationName': 'coordinatorConvo'
                         }
                    }
               }
          }
     }
}
