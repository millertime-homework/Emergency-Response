'outsideBuilding2': {
     'id': 'outside2',
     'x': 6,
     'y': 4,
     '_triggers': ['exitedBuilding'],
     '_walls': {
          'e': {
               'name': 'EOutside',
               'image': 'outside-east.jpg',
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
               'image': 'outside-south.jpg'
          }
     }
}
