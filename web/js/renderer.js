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
        var view = $('#controls-overlay')
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
            if (value['action'] === 'displayModal' && value['actionVariables'] && value['actionVariables']['image'] && value['actionVariables']['name']) {
                eventParams['image'] = value['actionVariables']['image'];
                eventParams['name'] = value['actionVariables']['name'];
                viewClickable.bind('click', eventParams, function (event) {
                    displayModal(event.data.name, null, event.data.image)
                });
            } else if (value['action'] === 'showConversation' && value['actionVariables'] && value['actionVariables']['conversationName']) {
                eventParams['conversationName'] = value['actionVariables']['conversationName'];
                viewClickable.bind('click', eventParams, function (event) {
                    showConversation(event.data['conversationName']);
                });
            }
        })
        
    } 

    clearClickables = function() {
        $('#view-modal .clickable').remove()
    }

})