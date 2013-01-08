function renderScene() {};
function renderClickables() {};
function clearClickables() {};


jQuery(document).ready(function($){

// Applies new scene image, 
    // Shows movement buttons that are available 
    renderScene = function() {
        clearClickables();
        $(".move-z").hide();
        var room = scenario.getRoom(player.x, player.y, player.z);
        if (scenario.isValidRoom(player.x, player.y, player.z)) {
            var wall = room.walls[player.facing]
            var sceneImage = wall.image
            $.attr(sceneImage,'id', 'scene-img')
            $("#view-scene").empty();
            $("#view-scene").append(sceneImage)
            renderClickables(wall)
        }
        if (player.canMoveUp()) {
            $("#viewport-move-up").show();
        }
        if (player.canMoveDown()) {
            $("#viewport-move-down").show();
        }

    }

    // Renders clickables on wall
    renderClickables = function(wall) {
        var view = $('#view-modal')
        $.each(wall.clickables, function(key, value) {
            view.append('<div id="' + key + '" class="clickable" width="' + value['width'] + '" height="' + value['height'] +'">')

            var viewClickable = $('#' + key)
            viewClickable.css('left', value['left'])
            viewClickable.css('top', value['top'])
            viewClickable.css('width', value['width'])
            viewClickable.css('height', value['height'])
            viewClickable.append(value['image'])
            var eventParams = {
                'image': null,
                'name': null,
            };
            if (typeof value['largeImage'] !== 'undefined') {
                eventParams['image'] = value['largeImage'];
            } 
            if (typeof value['name'] !== 'undefined') {
                eventParams['name'] = value['name'];
            }
            viewClickable.bind('click', eventParams, function(event) {
                showModal(event.data.name, null, event.data.image)
            })
        })
        
    } 

    clearClickables = function() {
        $('#view-modal .clickable').remove()
    }

})