// GLOBALS 
if (isEditMode) { 
    function updatePlayerInfo() {};
    function updateFloorSelector() {};
    function updateRoomSelector() {};
    function updateWallSelector() {};
    function getSelector() {};
    function getSelectedOption() {};
    function disableSelector() {};
    function enableSelector() {};
    function clearSelector() {};
}

/* ######################################## */
/* ######################################## */



jQuery(document).ready(function($){
    if (!isEditMode) {
        $('#editor-controls').empty();
        $('#editor-output').empty();

        var view = $('#view-modal');
        view.css('left', '50%');
        view.css('margin-left', '-' + view.width() / 2 + 'px');
        view.css('top', '50%');
        view.css('margin-top', '-' + view.height() / 2 + 'px' );
    }


    if (isEditMode) {

        $(document).on('player-move', function() {
            if (isEditMode) {
                updatePlayerInfo()
            }
        })

        $('#move-north').bind('click', function() {
                if (!player.move(DIRECTION_NORTH)) {
                    // alert('You cannot move North')
                    return;
                }
                $(document).trigger('player-move')
            })

        $('#move-south').click(function() {
            if (!player.move(DIRECTION_SOUTH)) {
                // alert('You cannot move South')
                    return;
                }
                $(document).trigger('player-move')
        })
        $('#move-east').click(function() {
            if (!player.move(DIRECTION_EAST)) {
                // alert('You cannot move East')
                return;
            }
            $(document).trigger('player-move')
        })
        $('#move-west').click(function() {
            if (!player.move(DIRECTION_WEST)) {
                // alert('You cannot move West')
                return;
            }
            $(document).trigger('player-move')
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
    updatePlayerInfo = function() {
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
    updateFloorSelector = function() {
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
    updateRoomSelector = function(floorZ) {
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

    updateWallSelector = function(floorZ, roomId) {
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
    getSelector = function(name) {
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
    getSelectedOption = function(name) {
        selector = getSelector(name)
        return selector.find(':selected').attr('value')
    }
    disableSelector = function(name) {
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
    enableSelector = function(name) {
        selector = getSelector(name);
        if (!selector) { 
            console.log('enableSelector - selector' + name + 'not found')
            return;
        }
        if (selector.attr('disabled')) {
            selector.removeAttr('disabled')
        }

    }
    clearSelector = function(name) {
        selector = getSelector(name)
        if (!selector) { 
            console.log('clearSelector - selector' + name + 'not found')
            return;
        }
        selector.empty()
    }    
})