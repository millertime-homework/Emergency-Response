'askInstruction': {
    '1': {
        'message': 'Welcome to the Emergency Response Game - Earthquake Scenario. Would you like to start with some basic instruction?',
        'replies': {
            'Yes, please show me the basics.': 2,
            'No, thank you.': 3
        }
    },
    '2': {
        'triggers': ['startInstructionModals']
    },
    '3': {
        'triggers': ['skipTutorial']
    }
}
