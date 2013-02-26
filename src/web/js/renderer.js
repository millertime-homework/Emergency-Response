var erg = erg || {};
erg.inCutscene = false;
function renderScene() {}
function renderProps() {}
function clearProps() {}



jQuery(document).ready(function($){

// Applies new scene image, 
    // Shows movement buttons that are available 
    renderScene = function() {
        clearProps();
        $(".move-z").hide();
        var room = scenario.getRoom(player.x, player.y, player.z);
        if (scenario.isValidRoom(player.x, player.y, player.z)) {
            var wall = room.walls[player.facing];

            if (wall.isCutscene) {
                jQuery('.ui.viewport-button').addClass('disabled').removeClass('enabled').attr('disabled', 'disabled');
                erg.inCutscene = true;
                startTrigger('cutsceneTutorial');
            } else {
                jQuery('.ui.viewport-button').addClass('enabled').removeClass('disabled').removeAttr('disabled');
                erg.inCutscene = false;
            }
            var sceneImage = wall.image;
            $.attr(sceneImage, 'id', 'scene-img');
            var viewScene = $("#view-scene");
            viewScene.empty().append(sceneImage);
            $('#scene-img').addClass('main-content-child main-content-viewport').height(viewScene.height()).width(viewScene.width());
            renderProps(wall);
        }
        if (player.canMoveUp()) {
            $("#viewport-move-up").show();
        }
        if (player.canMoveDown()) {
            $("#viewport-move-down").show();
        }

    }

    // Renders props on wall
    renderProps = function(wall) {
        var view;
        view = $('#view-scene')
        $.each(wall.props, function(key, value) {
            if (scenario.inactiveProps[key])
                return;
            
            data = { 'left': value.left, 'top': value.top, 'width': value.width, 'height': value.height };
            view.append('<div id="' + key + '" class="prop base-prop"></div>')
            var viewProp = $('#' + key);
            viewProp.css({ 
                'left': value.left,
                'top': value.top,
            }).data(data);

            if (value.hoverImage) {
                viewProp.clone().
                appendTo(view).
                data(data).
                removeClass('base-prop').
                addClass('hover-prop').
                append(value.hoverImage);

                viewProp.
                bind('mouseenter', function (event) {
                    var propId;
                    jQuery(this).opacity(0);
                    propId = jQuery(this).attr('id');
                    jQuery('#{0}.hover-prop img'.format(propId)).opacity(1);
                }).
                bind('mouseleave', function (event) {
                    var propId;
                    jQuery(this).opacity(1);
                    propId = jQuery(this).attr('id');
                    jQuery('#{0}.hover-prop img'.format(propId)).opacity(0);
                });

            } else {
                //This will make the base prop image display at all times.
                viewProp.removeClass('base-prop').addClass('permanent-prop');
            }
            viewProp.append(value['image']);

            var eventParams = {
                'imageElement': null,
                'name': null,
            };
            if (value.action === 'displayModal' && value.actionVariables && value.actionVariables.imageElement && value.actionVariables.name) {
                eventParams.imageElement = value.actionVariables.imageElement;
                eventParams.name = value.actionVariables.name;
                viewProp.find('img').bind('click', eventParams, function (event) {
                    displayModal(event.data.name, null, event.data.imageElement)
                });
            } else if (value.action === 'showConversation' && value.actionVariables && value.actionVariables.conversationName) {
                eventParams.conversationName = value.actionVariables.conversationName;
                viewProp.find('img').bind('click', eventParams, function (event) {
                    showConversation(event.data.conversationName);
                });
            }
        })
        scaleProps();    
    } 

    clearProps = function() {
        $('#view-modal .prop').remove()
    }

})
