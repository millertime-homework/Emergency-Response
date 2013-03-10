        'clearSmoke' :{
            'events' : {
                'replaceProp': ['smoke', 'smokeSafe']
            },
			'enableTriggers' : ['aftershock'],
			'disableTriggers' : ['activatePassout','passout']
        },
        'wetTheCloth' : {
            'enableTriggers' : ['clothIsWet']
        },
        'clothIsWet' : {
            'disabled' : true
        }