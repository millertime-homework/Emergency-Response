var erg = erg || {};

jQuery(document).ready(function ($) {
    "use strict";
    erg.MAP_CELL_TEMPLATE = jQuery('#templates').children('.map-cell');
    erg.DIRECTIONAL_INDICATOR_SELECTOR_TEMPLATE = '#directional-indicator-{0}';
    erg.MAP_CELL_SELECTOR_TEMPLATE = "[data-x='{0}'][data-y='{1}']";
    erg.MAP_CELL_HEIGHT = erg.MAP_CELL_TEMPLATE.height();
    erg.MAP_CELL_WIDTH = erg.MAP_CELL_TEMPLATE.width();
    erg.MAP_CONTAINER = jQuery('#map-container');
    erg.MAP_CONTAINER_PARENT = jQuery('#map');
});

function generateMap() {
    "use strict";
    var rooms, room, xPosition, yPosition;
    rooms = scenario.getFloor(player.z).getRoomList();
    erg.MAP_CONTAINER.empty().attr('data-floor', player.z);

    for (room in rooms) {
        if (rooms.hasOwnProperty(room)) {
            xPosition = rooms[room].x;
            yPosition = rooms[room].y;
            erg.MAP_CELL_TEMPLATE.clone().appendTo(erg.MAP_CONTAINER)
                .attr({ 'data-x': xPosition, 'data-y': yPosition })
                .css('top', (xPosition * erg.MAP_CELL_HEIGHT) + 'px')
                .css('left', (yPosition * erg.MAP_CELL_WIDTH) + 'px');
        }
    }
    erg.MAP_CONTAINER.children(erg.MAP_CELL_SELECTOR_TEMPLATE.format(player.x, player.y)).addClass('occupied');
    centerMap();
    showDirectionalIndicator();
}

function updateMap() {
    "use strict";
    //If the player has changed floors, we need to redraw the map to show the current floor.
    if (player.z !== erg.MAP_CONTAINER.attr('data-floor')) {
        generateMap();
    } else {
        //else clear the old occupied cell
        erg.MAP_CONTAINER.children('.occupied').empty().removeClass('occupied');

        //and indicate the new one
        erg.MAP_CONTAINER.children(erg.MAP_CELL_SELECTOR_TEMPLATE.format(player.x, player.y)).addClass('occupied');
        centerMap();
        showDirectionalIndicator();
    }
}

function centerMap() {
    "use strict";
    var occupiedCell, occupiedTop, occupiedLeft;
    occupiedCell = jQuery(erg.MAP_CONTAINER).children(erg.MAP_CELL_SELECTOR_TEMPLATE.format(player.x, player.y));
    occupiedTop = occupiedCell.position().top;
    occupiedLeft = occupiedCell.position().left;

    erg.MAP_CONTAINER.css('left', ((erg.MAP_CONTAINER_PARENT.width() / 2) - (occupiedCell.width() / 2) - occupiedLeft) + 'px')
        .css('top', ((erg.MAP_CONTAINER_PARENT.height() / 2) - (occupiedCell.height() / 2) - occupiedTop) + 'px');
}

function showDirectionalIndicator() {
    "use strict";
    jQuery(erg.MAP_CONTAINER)
        .children('.occupied')
        .empty()
        .append(jQuery(erg.DIRECTIONAL_INDICATOR_SELECTOR_TEMPLATE.format(player.facing)).clone());
}