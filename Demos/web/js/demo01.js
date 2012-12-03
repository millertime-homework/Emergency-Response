jQuery(document).ready(function($){
    var keypressed = false; // true when handling a user's keypress

    // ##########################
    // ##### LOAD/RENDER ########
    // ##########################

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

    renderMap = function() {
        clearMap()

        // Set active map squares
        var floorList = currFloor.getRoomList()
        $.each(floorList, function(key, value) {
            $('div#' + value.x + '-' + value.y).addClass('active').removeClass('player-pos')
        })
        $('#map #' + player.x + '-' + player.y).addClass('player-pos')
    }

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

    function initMap() {
        currFloor = scenario.getFloor(player.z)
        mapWidth = currFloor.maxX;
        mapHeight = currFloor.maxY;   
        
        // Append Map squares
        var map = $('#map')
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

    isScenarioDefined = function() {
        if (typeof scenario === 'undefined') {
            console.log('scenario class undefined')
            return false;
        }
        return true;
    }
    isPlayerDefined = function() {
        if (typeof player === 'undefined') {
            console.log('player class undefined')
            return false;
        }
        return true;
    }
    
    // ##########################
    // ##### MODAL RESIZING #####
    // ##########################

    // When window is resized
    $(window).resize(function() {
        if (!$('#modal').hasClass('hidden')) {
            updateModalLocation();
        }
    })

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

    // ##########################
    // ## LOAD/START SCENARIO  ##
    // ##########################   
    spinner = new Spinner({
        color: '#fff'
    }).spin(document.getElementById('view-modal'))

    loadScenario(scenarioDef)

    // check starting players position
    if (player) {
         if (!scenario.isValidRoom(player.x, player.y, player.z)) {
            alert('Player\'s starting position is invalid')
            return;
        }
    } else {
        alert('Player not defined')
    }

    // init ui
    // initMap()
    renderScene()
    if (isEditMode) {
        updateFloorSelector()
        updatePlayerInfo()
    }
    spinner.stop();

    // ##########################
    // ######## EVENTS  #########
    // ##########################

    $(document).on('startEarthquake', function(){
        var image = $('#scene-img')
        var speed = 30
        for (i = 0; i < 5; i++) {
            image.animate({
                left: '-5'
            }, speed).animate({ 
                left: '5'
            }, speed).animate({
                left: '-5'
            }).animate({
                left: '5'
            }, speed).animate({
                left: '0'
            }, speed)
        }
    })

    $(document).on('player-move', function() {
        renderScene()
    })

    // ##########################
    // ##### MOVE BUTTONS  ######
    // ##########################
    $('.move-forward').click(function () {
        if (!player.move(player.facing)) {
            // alert('There is no where to go in front of you!')
            return;
        }
        $(document).trigger('player-move')
    })

    $('.turn-left').click(function () {
        if (!player.turn("l")) {
            // alert('There is nothing to see to your left!')
            return;
        }
        $(document).trigger('player-move')
    })

    $('.turn-right').click(function () {
        if (!player.turn("r")) {
            // alert('There is nothing to see to your right!')
            return;
        }
        $(document).trigger('player-move')
    })

    $('.move-up').click(function () {
        if (!player.move("u")) {
            // alert('You cannot move up here!')
            return;
        }
        $(document).trigger('player-move')
    })

    $('.move-down').click(function () {
        if (!player.move("d")) {
            // alert('You cannot move down here!')
            return;
        }
        $(document).trigger('player-move')
    })

    $(window).keydown(function(event) {
        if (keypressed) {
            return true;
        }
        keypressed = true;
        if (event.which == 37) {
            // left arrow key
            $('.turn-left').triggerHandler('click')
        } else if (event.which == 38) {
            // up arrow key
            $('.move-forward').trigger('click')
        } else if (event.which == 39) {
            // right arrow key
            $('.turn-right').trigger('click')
        } else if (event.which == 40) {
            // down arrow key
        } else if (event.which == 69) {
            $(document).trigger('startEarthquake')
        }
        keypressed = false;

    })
});
