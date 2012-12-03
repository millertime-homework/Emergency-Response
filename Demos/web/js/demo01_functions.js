// GLOBALS
var scenario = null;
var player = null;
function loadScenario() {};
function renderScene() {};
function renderMap() {};
function isScenarioDefined() {};
function isPlayerDefined() {};

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
                    currRoom.addWall(value['name'], key, value['image'])
                })
            })
        })
        player = new Player;
        playerDef = data['_player']
        player.set(playerDef['x'], playerDef['y'], playerDef['z'], playerDef['_facing'], null)

    }

    // Applies new scene image, 
    // Shows movement buttons that are available 
    renderScene = function() {
        $(".move-z").hide();
        var room = scenario.getRoom(player.x, player.y, player.z);
        if (scenario.isValidRoom(player.x, player.y, player.z)) {
            var sceneImage = room.walls[player.facing].image
            $.attr(sceneImage,'id', 'scene-img')
            $("#view-scene").empty();
            $("#view-scene").append(sceneImage)
            // renderMap()
        }
        if (player.canMoveUp()) {
            $("#viewport-move-up").show();
        }
        if (player.canMoveDown()) {
            $("#viewport-move-down").show();
        }

    }

    // Sets active map squares and player position in map
    renderMap = function() {
        clearMap()

        // Set active map squares
        var floorList = currFloor.getRoomList()
        $.each(floorList, function(key, value) {
            $('div#' + value.x + '-' + value.y).addClass('active').removeClass('player-pos')
        })
        $('#map #' + player.x + '-' + player.y).addClass('player-pos')
    }

    // Clears map-square classes
    function clearMap() {
        currFloor = scenario.getFloor(player.z)
        mapWidth = currFloor.maxX;
        mapHeight = currFloor.maxY; 

        for(var j = mapHeight; j >= 0; j--) { 
            for(var i = 0; i <= mapWidth; i++) {
                $('#map #' + i + '-' + 'j').removeClass()
            }
        }
    }

    // Creates map grid of divs
    function initMap() {
        currFloor = scenario.getFloor(player.z)
        mapWidth = currFloor.maxX;
        mapHeight = currFloor.maxY;   
        
        // Append Map squares
        var map = $('#map')
        map.empty()
        for(var j = mapHeight; j >= 0; j--) { 
            for(var i = 0; i <= mapWidth; i++) {
                map.append('<div id="' + i + '-' + j + '" class="map-square"></div>')
            }
        }

        // Style width/height of map squares
        totalWidth = map.width();
        totalHeight = map.height();
        $('.map-square').css('width', Math.round(totalWidth/(mapWidth+1)))
        $('.map-square').css('height', Math.round(totalHeight/(mapHeight+1)))
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
    
    // Resizes modal 
    function updateModalLocation() {
        var modal = $('#modal')
        var viewport = document.viewport.getDimensions()
        var viewWidth = viewport.width;
        var viewHeight = viewport.height;
        var leftAlign = 0;
        var topAlign = 0;
        if (viewWidth > modal.width()) {
            leftAlign = (viewport.width - modal.width())/2;
        }
        if (viewHeight > modal.height()) {
            topAlign = (viewport.height - modal.height())/2;
        }

        console.log('leftAlign:' + leftAlign)
        console.log('topAlign:' + topAlign)
        modal.css('left', leftAlign + "px");
        modal.css('top', topAlign + "px");
    }
})