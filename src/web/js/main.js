// GLOBALS
var spinner = null;
var GAME_STATE_MENU = "Main-Menu";
var GAME_STATE_PAUSED = "Paused";
var GAME_STATE_RUNNING = "Running";
var GAME_STATE_OVER = "Game over man. GAME OVER!";
var GAME_STATE_MODAL = "modal";
var gameState;
var lastGameState;

jQuery(document).ready(function($){
    // ## INIT UI ##
    // initMap()

    setGameState(GAME_STATE_MENU);
    sizeWindow();

});
