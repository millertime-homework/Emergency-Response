



/* ######################################## */
/* ######################################## */


jQuery(document).ready(function($){
	
	// Changes Game State from main-menu to Playing
	$('#play-button').click(function() {
		playerState = "Playing";
		evalGameState();
		//alert(playerState);
	})
	
    
	// Brings Up the Info page.
	$('#info-button').click(function() {
		$('#overlay').removeClass('hidden');
		$('#modal').removeClass('hidden');
		$('#overlay, #modal').bind('click', function() {
			$('#overlay').addClass('hidden');
			$('#modal').addClass('hidden');
		})
	})

})


