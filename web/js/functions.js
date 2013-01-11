// GLOBALS
var scenario = null;
var player = null;

//TODO Set these values in the CSS and derive them on initialization through jQuery.attr()
var FooterMinHeight = 30;
var FooterMaxHeight = 100;
var HeaderMinHeight = 50;
var HeaderMaxHeight = 100;
var BodyMinHeight = 358;
var BodyMaxHeight = 641;
var BodyMaxWidth = 1115;

function isScenarioDefined() {};
function isPlayerDefined() {};
function evalGameState() {};
function loadScenario() {};
function showModal() {};
function hideModal() {};

/* ######################################## */
/* ######################################## */
function sizeWindow() {
    var windowHeight = jQuery(window).height();
    var windowWidth = jQuery(window).width();
    var newHeaderHeight = HeaderMaxHeight;
    var newBodyHeight = BodyMaxHeight;
    var newFooterHeight = FooterMaxHeight;

    //If we're larger than the max for all elements, center them.
    jQuery('body').css('overflow', 'hidden');
    if (windowHeight >= HeaderMaxHeight + BodyMaxHeight + FooterMaxHeight) {
        jQuery('#outer-container').css('margin-top', 'auto').css('margin-bottom', 'auto');
    //Else start taking height from the footer
    } else if (windowHeight >= HeaderMaxHeight + BodyMaxHeight + FooterMinHeight) {
        newFooterHeight = windowHeight - (HeaderMaxHeight + BodyMaxHeight);
    //Now take all that we can from the footer, and start taking from the header
    } else if (windowHeight >= HeaderMinHeight + BodyMaxHeight + FooterMinHeight) {
        newFooterHeight = FooterMinHeight;
        newHeaderHeight = windowHeight - (BodyMaxHeight + FooterMinHeight);
    //Now start taking from the body
    } else if (windowHeight >= HeaderMinHeight + BodyMinHeight + FooterMinHeight) {
        newFooterHeight = FooterMinHeight;
        newHeaderHeight = HeaderMinHeight;
        newBodyHeight = windowHeight - (FooterMinHeight + HeaderMinHeight);
    //If we've reached all the minimums, don't go any smaller, we'll just show a scrollbar instead.
    } else {
        jQuery('body').css('overflow', 'scroll');
        newHeaderHeight = HeaderMinHeight;
        newBodyHeight = BodyMinHeight;
        newFooterHeight = FooterMinHeight;
    }

    //Set the heights.
    jQuery('#main-header').height(newHeaderHeight).css('min-height', newHeaderHeight + 'px');
    jQuery('#main-footer').height(newFooterHeight).css('min-height', newFooterHeight + 'px');
    jQuery('#main-content').height(newBodyHeight).css('min-height', newBodyHeight + 'px');

    var sidebar = jQuery("#sidebar");
    var sidebarWidth = sidebar ? sidebar.width() : 0;

    //Now proportionally increase the width of the rendered scene.
    var newBodyContentHeight = newBodyHeight - 30;
    var newWidth = BodyMaxWidth * newBodyContentHeight / BodyMaxHeight;
    //If the body has lost height, we need to shrink the elements inside the viewport.
    jQuery('.main-content-child').height(newBodyContentHeight);
    jQuery('.main-content-viewport').width(newWidth);
    jQuery('#main-content').width(newWidth + sidebarWidth);

        //TODO We need to scale the positioning and size of any visible clickables

    //Finally, let the map expand/contract to fill up the sidebar.
    if (sidebar) {
        sidebar.css('left', newWidth + 'px');
        jQuery('#map').css('height', (sidebar.height() - jQuery('#objective').height() - jQuery('#help').height() - 20) + 'px');
        centerMap();
    }
}
jQuery(document).ready(function ($) {
    $(window).resize(function() {
        sizeWindow();
    });
    // Loads the Scenario objects from the data parameter (scenario-definition array)
    loadScenario = function (data) {
        scenario = new Scenario;
        scenario.set(data['name'], 'active')
        currFloor = null
        currRoom = null
        currWall = null
        //load floors
        $.each(data['_floors'], function (key, value) {
            currFloor = scenario.addFloor(key, value['z'])
            // load rooms of this floor
            $.each(value['_rooms'], function (key, value) {
                currRoom = currFloor.addRoom(key, value['id'], value['x'], value['y'], currFloor.z)
                // load walls of this room
                $.each(value['_walls'], function (key, value) {
                    currWall = currRoom.addWall(value['name'], key, value['image'])
                    // Add clickables - if any
                    if (typeof value['_clickables'] != 'undefined') {
                        $.each(value['_clickables'], function (key, value) {
                            currWall.addClickable(
                                key,
                                value['name'],
                                value['image'],
                                value['width'],
                                value['height'],
                                value['left'],
                                value['top'],
                                value['action'],
                                value['actionVariables']
                            )
                        })
                    }
                    // Add exits/destinations
                    if (typeof value['destination'] != 'undefined') {
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
        scenario.conversations = {};
        $.each(data['_conversations'], function (key, value) {
            var newConversation = new Conversation;
            newConversation.set(key, value);
            scenario.conversations[key] = newConversation;
        });
        player = new Player;
        playerDef = data['_player']
        player.set(playerDef['x'], playerDef['y'], playerDef['z'], playerDef['_facing'], null)

        generateMap(playerDef['x'], playerDef['y'], scenario.getFloor(playerDef['z']));
        sizeWindow();
    }


    // Returns True if scenario object is defined
    isScenarioDefined = function () {
        if (typeof scenario === 'undefined') {
            console.log('scenario class undefined')
            return false;
        }
        return true;
    }


    // Returns True if player object is defined
    isPlayerDefined = function () {
        if (typeof player === 'undefined') {
            console.log('player class undefined')
            return false;
        }
        return true;
    }

    // Changes the layout to match the current game state.
    evalGameState = function () {
        switch (playerState) {
            case "Main-Menu":
                $('#view-modal').hide();
                $('#main-menu').show();
                break;
            case "Playing":
                $('#main-menu').hide();
                $('#view-modal').show();
                break;
            case "Paused":
                if (confirm("Quit and return to main menu?")) {
                    //alert("In Paused");
                    playerState = "Main-Menu";
                    evalGameState();
                } else { alert("opps"); }

                break;

        }

    }

    showConversation = function (conversationName, currentConversationChoice) {
        var modal = $('#modal');
        var overlay = $('#overlay');
        var optionRowTemplate = "<li class='conversation-option' data-conversation-option='{0}'>{1}</li><br />";

        //fetch the conversation name if we're progressing through a conversation tree.
        if (!conversationName) {
            conversationName = $('#modal #header').text();
        }

        //Now the current contents from the modal.
        emptyModal();

        //Ensure the conversation exists.
        var conversation = scenario.conversations[conversationName];
        if (!conversation) {
            hideModal();
            return;
        }

        //If there is no current conversation choice provided then we'll start from the beginning. 0 terminates the conversation.
        var currentOptionId = currentConversationChoice || currentConversationChoice === 0 ? currentConversationChoice : 1;

        //Ensure that this is a valid conversation choice.
        var currentOption = conversation.getOption(currentOptionId);
        if (!currentOption) {
            hideModal();
            return;
        }

        //Show the message and reply options.
        $('#modal #header').html(conversationName);
        $('#modal #content').append(currentOption['message'] + '<p /> You Reply: <br /><ul>');

        var replyChoices = currentOption['replies'];
        for (var choiceText in replyChoices) {
            if (replyChoices.hasOwnProperty(choiceText)) {
                $('#modal #content').append(optionRowTemplate.format(replyChoices[choiceText], choiceText));
            }
        }
        $('#modal #content').append('</ul>');

        modal.show();
        overlay.show();
    }

    displayModal = function (header, text, image) {
        var modal = $('#modal');
        var overlay = $('#overlay');
        emptyModal();

        $('#modal #header').html(header);
        $('#modal #content').html(text);
        $('#modal #content').append(image);
        showModal();
    }

    emptyModal = function () {
        // Clear header and content
        $('#modal #header').empty();
        $('#modal #content').empty();
    }

    hideModal = function () {
        // Hide modal and overlay
        $('#modal').hide();
        $('#overlay').hide();
    }

    showModal = function () {
        $('#modal').show();
        $('#overlay').show();
    }

    $('#overlay').live("click", function () {
        hideModal();
    });

    $("li.conversation-option").live("click", function () {
        showConversation(null, $(this).attr('data-conversation-option'));
    });
});

String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (m, n) { return args[n]; });
};