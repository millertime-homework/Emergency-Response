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
            var wall = room.walls[player.facing];
            var sceneImage = wall.image;
            $.attr(sceneImage, 'id', 'scene-img');
            var viewScene = $("#view-scene");
            viewScene.empty().append(sceneImage);
            $('#scene-img').addClass('main-content-child main-content-viewport').height(viewScene.height()).width(viewScene.width());
            renderClickables(wall);
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
            data = { 'left': value['left'], 'top': value['top'], 'width': value['width'], 'height': value['height'] };
            view.append('<div id="' + key + '" class="clickable base-clickable"></div>')
            var viewClickable = $('#' + key);
            viewClickable.css({ 
                'left': value['left'],
                'top': value['top'],
                'width': value['width'],
                'height': value['height']
            }).data(data);

            if (value['hoverImage']) {
                viewClickable.clone().
                appendTo(view).
                data(data).
                removeClass('base-clickable').
                addClass('hover-clickable').
                append(value['hoverImage']);
            } else {
                //This will make the base clickable image display at all times.
                viewClickable.removeClass('base-clickable').addClass('hover-clickable');
            }
            viewClickable.append(value['image']);

            var eventParams = {
                'imageElement': null,
                'name': null,
            };
            if (value['action'] === 'displayModal' && value['actionVariables'] && value['actionVariables']['imageElement'] && value['actionVariables']['name']) {
                eventParams['imageElement'] = value['actionVariables']['imageElement'];
                eventParams['name'] = value['actionVariables']['name'];
                viewClickable.bind('click', eventParams, function (event) {
                    displayModal(event.data.name, null, event.data.imageElement)
                });
            } else if (value['action'] === 'showConversation' && value['actionVariables'] && value['actionVariables']['conversationName']) {
                eventParams['conversationName'] = value['actionVariables']['conversationName'];
                viewClickable.bind('click', eventParams, function (event) {
                    showConversation(event.data['conversationName']);
                });
            }
        })
        scaleClickables();    
    } 

    clearClickables = function() {
        $('#view-modal .clickable').remove()
    }

})
