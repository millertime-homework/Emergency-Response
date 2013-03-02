        'clearSmoke' :{
            'events' : {
                'replaceProp': ['smoke', 'smokeSafe']
            }
        },
        'takeCloth' : {
            'events' : {
                'takeFromScene' : [{'name' : 'A cloth', 'image': 'cloth.png', 'width':32, 'height':32 },
                                'cloth']
            }
        },
        'wetTheCloth' : {
            'events' : {
                'removeInventory' : ['A cloth'],
                'removeFromScene' : ['cloth'],
                'addInventory' : [{'name' : 'A wet cloth', 'image': 'cloth.png', 'width':32, 'height':32 }]
            },
            'enableTriggers' : ['clothIsWet']
        },
        'clothIsWet' : {
            'disabled' : true
        }