// GLOBALS
var scenario = null;
var player = null;
function isScenarioDefined() {};
function isPlayerDefined() {};
function evalGameState() {};
function loadScenario() {};

/* ######################################## */
/* ######################################## */

jQuery(document).ready(function($){
    // Loads the Scenario objects from the data parameter (scenario-definition array)
    loadScenario = function(data) { 
        scenario = new Scenario;
        scenario.set(data['name'], 'active')
        currFloor = null
        currRoom = null
        currWall = null
        //load floors
        $.each(data['_floors'], function(key, value) {
            currFloor = scenario.addFloor(key, value['z'])
            // load rooms of this floor
            $.each(value['_rooms'], function(key, value) { 
                currRoom = currFloor.addRoom(key, value['id'], value['x'], value['y'], currFloor.z)
                // load walls of this room
                $.each(value['_walls'], function(key, value) {
                    currWall = currRoom.addWall(value['name'], key, value['image'])
                    // Add clickables - if any
                    if (typeof value['_clickables'] != 'undefined') {
                        $.each(value['_clickables'], function(key, value) {
                            currWall.addClickable(
                                key, 
                                value['name'], 
                                value['image'], 
                                value['width'], 
                                value['height'], 
                                value['left'], 
                                value['top'],
                                value['largeImage']
                            )
                        })
                    }
                    // Add exits/destinations
                    if (typeof value['destination'] != 'undefined'){
                        var newX, newY, newZ, newF, dest = value['destination'];
                        if (typeof dest['x'] != 'undefined') { newX = dest['x']; } else { newX = currRoom['x']; }
                        if (typeof dest['y'] != 'undefined') { newY = dest['y']; } else { newY = currRoom['y']; }
                        if (typeof dest['z'] != 'undefined') { newZ = dest['z']; } else { newZ = currRoom['z']; }
                        if (typeof dest['f'] != 'undefined') { newF = dest['f']; } else { newF = key; }
                        currWall.setDestination(newX, newY, newZ, newF);
                    }
                })
            })
        })
        player = new Player;
        playerDef = data['_player']
        player.set(playerDef['x'], playerDef['y'], playerDef['z'], playerDef['_facing'], null)

    }


        // Returns True if scenario object is defined
    isScenarioDefined = function() {
        if (typeof scenario === 'undefined') {
            console.log('scenario class undefined')
            return false;
        }
        return true;
    }


    // Returns True if player object is defined
    isPlayerDefined = function() {
        if (typeof player === 'undefined') {
            console.log('player class undefined')
            return false;
        }
        return true;
    }

    // Changes the layout to match the current game state.
    evalGameState = function() {
        switch(playerState)
        {
            case"Main-Menu":
                $('#view-modal').hide();
                $('#main-menu').show();
                break;
            case"Playing":
                $('#main-menu').hide();
                $('#view-modal').show();
                break;
            case"Paused":
                if(confirm("Quit and return to main menu?")){
                        //alert("In Paused");
                        playerState = "Main-Menu";
                        evalGameState();
                    } else{ alert("opps");}
                
                break;

        }

    }

})