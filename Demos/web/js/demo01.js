var scenario = null;
var player = null;
var spinner = null;


jQuery(document).ready(function($){
    var isEditMode = false; // true when we're in edit mode
    var keypressed = false; // true when handling a user's keypress

    if (getURLParameter("mode") != "edit") {
        $('#editor-controls').empty();
        $('#editor-output').empty();

        var view = $('#view-modal');
        view.css('left', '50%');
        view.css('margin-left', '-' + view.width() / 2 + 'px');
        view.css('top', '50%');
        view.css('margin-top', '-' + view.height() / 2 + 'px' );

    } else {
        isEditMode = true;
    }

    // ##########################
    // ## LOAD/START SCENARIO  ##
    // ##########################   
    spinner = new Spinner({
        color: '#fff'
    }).spin(document.getElementById('view-modal'))

    loadScenario(this.scenarioDef)

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
    initMap()
    renderScene()
    if (isEditMode) {
        updateFloorSelector()
        updatePlayerInfo()
    }
    spinner.stop();

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

    // ##########################
    // ##### MOVE BUTTONS  ######
    // ##########################
    $('.move-forward').click(function () {
        if (!player.move(player.facing)) {
            // alert('There is no where to go in front of you!')
        } else {
            renderScene()
            if (isEditMode) {
                updatePlayerInfo()
            }
        }
    })

    $('.turn-left').click(function () {
        if (!player.turn("l")) {
            // alert('There is nothing to see to your left!')
        } else {
            renderScene()
            if (isEditMode) {
                updatePlayerInfo()
            }
        }
    })

    $('.turn-right').click(function () {
        if (!player.turn("r")) {
            // alert('There is nothing to see to your right!')
        } else {
            renderScene()
            if (isEditMode) {
                updatePlayerInfo()
            }
        }
    })

    $('.move-up').click(function () {
        if (!player.move("u")) {
        // alert('You cannot move up here!')
        } else {
            renderScene()
            if (isEditMode) {
                updatePlayerInfo()
            }
        }
    })

    $('.move-down').click(function () {
        if (!player.move("d")) {
            // alert('You cannot move down here!')
        } else {
            renderScene()
            if (isEditMode) {
                updatePlayerInfo()
            }
        }
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

    // ##########################
    // ###### FUNCTIONS #########
    // ##########################

    function loadScenario(data) { 
        scenario = new Scenario
        scenario.set(data['name'], 'active')
        currFloor = null
        currRoom = null
        currWall = null
        //load floors
        $.each(data['_floors'], function(key, value) {
            currFloor = scenario.addFloor(key, value['z'])
            // load rooms of this floor
            $.each(value['_rooms'], function(key, value) { 
                currRoom = currFloor.addRoom(key, value['id'], value['x'], value['y'], value['z'])
            //     // load walls of this room
                $.each(value['_walls'], function(key, value) {
                    currRoom.addWall(value['name'], key, value['image'])
                })
            })
        })
        player = new Player
        playerDef = data['_player']
        player.set(playerDef['x'], playerDef['y'], playerDef['z'], playerDef['_facing'], null)

    }

    function renderScene() {
        $(".move-z").hide();
        var room = scenario.getRoom(player.x, player.y, player.z);
        if (scenario.isValidRoom(player.x, player.y, player.z)) {
            var sceneImage = room.walls[player.facing].image
            $.attr(sceneImage,'id', 'scene-img')
            $("#view-scene").empty();
            $("#view-scene").append(sceneImage)
            renderMap()
        }
        if (player.canMoveUp()) {
            $("#viewport-move-up").show();
        }
        if (player.canMoveDown()) {
            $("#viewport-move-down").show();
        }

    }

    function renderMap() {
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

    function isScenarioDefined() {
        if (typeof scenario === 'undefined') {
            console.log('scenario class undefined')
            return false;
        }
        return true;
    }
    function isPlayerDefined() {
        if (typeof player === 'undefined') {
            console.log('player class undefined')
            return false;
        }
        return true;
    }


    // ##########################
    // #### EDIT MODE EVENTS ####
    // ##########################

    if (isEditMode) {
        $('#move-north').bind('click', function() {
                if (!player.move(DIRECTION_NORTH)) {
                    // alert('You cannot move North')
                } else {
                    renderScene()
                    if (isEditMode) {
                        updatePlayerInfo()
                    }
                }
            })

        $('#move-south').click(function() {
            if (!player.move(DIRECTION_SOUTH)) {
                // alert('You cannot move South')
            } else {
                renderScene()
                if (isEditMode) {
                    updatePlayerInfo()
                }
            }
        })
        $('#move-east').click(function() {
            if (!player.move(DIRECTION_EAST)) {
                // alert('You cannot move East')
            } else {
                renderScene()
                if (isEditMode) {
                    updatePlayerInfo()
                }
            }
        })
        $('#move-west').click(function() {
            if (!player.move(DIRECTION_WEST)) {
                // alert('You cannot move West')
            } else {
                renderScene()
                if (isEditMode) {
                    updatePlayerInfo()
                }
            }
        })
        // User clicks an Add button
        $('.add').click(function() {
            if (!$('#modal').hasClass('hidden')) {
                return;
            }
            updateModalLocation();
            $('#modal').removeClass('hidden')
            if ($(this).data('type') == 'floor') {
                $('#modal').find('.floor').removeClass('hidden')
            } else if ($(this).data('type') == 'room') {
                $('#modal').find('.room').removeClass('hidden')
            } else if ($(this).data('type') == 'wall') {
                $('#modal').find('.wall').removeClass('hidden')
            } 
        })
        // User clicks modal close button
        $('.close-modal').click(function() {
            $('#modal').addClass('hidden')
            $('#modal > .floor').addClass('hidden')
            $('#modal > .room').addClass('hidden')
            $('#modal > .wall').addClass('hidden')
        })
        // User selects a floor from dropdown
        $('select#floor-selector').change(function() {
            if ($(this).attr('disabled')) {
                console.log('Invalid change - Floor Selector changed while disabled')
                return;
            }
            selectedFloor = getSelectedOption('floor')
            console.log('Floor select event: ' + selectedFloor )
            updateRoomSelector(selectedFloor)
        })
        // User selects a room from dropdown
        $('select#room-selector').change(function() {
            if ($(this).attr('disabled')) {
                console.log('Invalid change - Room selector changed while disabled')
            }
            selectedFloor = getSelectedOption('floor')
            selectedRoom = getSelectedOption('room')
            console.log('Room select event: ' + selectedRoom)
            updateWallSelector(selectedFloor, selectedRoom)
        })
        // Use clicks get info button
        $('#getInfo').bind('click', function() {
            $('#output').val(
                "===== Complete Scenario info for \"" + scenario.name +"\" =====\n"
                + scenario.dispInfo()
            )
        })
    }
    // ##########################
    // ### EDIT MODE FUNCTIONS ##
    // ##########################
    
    // Update player info from object
    function updatePlayerInfo() {
        if (!isPlayerDefined) {
            console.log('updatePlayerInfo - player not defined')
        }

        // update location
        $('#playerloc').val(player.x + ', ' + player.y + ', ' + player.z)
        // update direction
        $('#playerdir').val(player.facing)

        // get names of current floor, room, facing wall
        var locNames = scenario.getLocNames(player.x, player.y, player.z, player.facing)
        if (typeof locNames === 'undefined') { 
            console.log('error getting names')
            return;
        }
        $('#currentfloor').val(locNames['floorName'])
        $('#currentroom').val(locNames['roomName'])
        $('#currentwall').val(locNames['wallName'])
    }
    // Gets a list of floors from the scenario
    function updateFloorSelector() {
        disableSelector('floor')

        if (!isScenarioDefined) {
            console.log('updateFloorSelector - scenario not defined')
            return;
        }

        selector = getSelector('floor')
        // get floors
        var floors = scenario.getFloorList();
        // add floor options to select element
        if (floors.length > 0) {
            clearSelector('floor');
            // iterate over floors and add options
            $.each(floors, function(key, value) {
                selector.append('<option value=\'' + value.z + '\'>[' + value.z + ']' + value.name + '</option>')
            })
            enableSelector('floor')
            // Get selected floor z and update room selector
            updateRoomSelector(getSelectedOption('floor'))
        }
    }
    // Gets a list of rooms by floor z value
    function updateRoomSelector(floorZ) {
        disableSelector('room')
        disableSelector('wall')

        if (!isScenarioDefined) {
            console.log('updateRoomSelector - scenario not defined')
            return;
        }

        // get rooms
        var floor = scenario.getFloor(floorZ)
        if (typeof floor == 'undefined') {
            console.log('updateRoomSelector - invalid floor v=' + floorZ)
            return;
        }
        var rooms = floor.getRoomList()
        if (typeof rooms === 'undefined') {
            console.log('updateRoomSelector - invalid floor z=' + floorZ);
            return;
        } else if (rooms.length <= 0) {
            console.log('updateRoomSelector - no rooms on floor z=' + floorZ)
            return;
        }

        selector = getSelector('room')
        clearSelector('room');
        $.each(rooms, function(key, value){
            selector.append('<option value=\'' + value.id + '\'>' + value.name + ' (' + value.x + ',' + value.y + ',' + value.z + ')' +'</option>')
        })
        enableSelector('room');

        updateWallSelector(floorZ, getSelectedOption('room'))
    }

    function updateWallSelector(floorZ, roomId) {
        disableSelector('wall')

        if (!isScenarioDefined) {
            console.log('updateWallSelector - scenario not defined')
            return;
        }

        // get room
        var floor = scenario.getFloor(floorZ)
        if (typeof floor === 'undefined') {
            console.log('updateWallSelector - invalid floor v=' + floorZ)
            return;
        }
        var room = floor.getRoomById(roomId)
        if (typeof room === 'undefined') {
            console.log('updateWallSelector - invalid room id=' + roomId)
            return;
        }
        var walls = room.getWallList()

        selector = getSelector('wall')
        if (walls.length > 0) {
            clearSelector('wall')
            $.each(walls, function(key, value) {
                selector.append('<option value=\'' + value.direction + '\'>' + value.name + " (" + value.direction + ")</option>")
            })
            enableSelector('wall')
        }
    }
    function getSelector(name) {
        var selector = ""
        if (name == 'floor') {
            selector = $('select#floor-selector')
        } else if (name == 'room') {
            selector = $('select#room-selector')
        } else if (name == 'wall') {
            selector = $('select#wall-selector')
        } else {
            return null;
        }
        if (typeof selector === 'undefined') { 
            console.log('selector not found')
            return null;
        }
        return selector;
    }
    function getSelectedOption(name) {
        selector = getSelector(name)
        return selector.find(':selected').attr('value')
    }
    function disableSelector(name) {
        var selector = getSelector(name);
        if (!selector) { 
            console.log('disableSelector - selector ' + name + ' not found')
            return;
        }
        if (!selector.attr('disabled')) {
            selector.attr('disabled', 'disabled')
            clearSelector(name)
            selector.append('<option value=\'blank\'>No ' + name + ' Listed</option>')   
        }

    }
    function enableSelector(name) {
        selector = getSelector(name);
        if (!selector) { 
            console.log('enableSelector - selector' + name + 'not found')
            return;
        }
        if (selector.attr('disabled')) {
            selector.removeAttr('disabled')
        }

    }
    function clearSelector(name) {
        selector = getSelector(name)
        if (!selector) { 
            console.log('clearSelector - selector' + name + 'not found')
            return;
        }
        selector.empty()
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
});

function getURLParameter(name) {
    return decodeURIComponent(
        (location.search.match(RegExp("[?|&]" + name + '=(.+?)(&|$)')) || [, null])[1]
    );
}
