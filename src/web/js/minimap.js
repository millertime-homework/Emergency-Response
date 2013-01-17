var erg = erg || {};

jQuery(document).ready(function ($) {
    erg.MAP_CELL_TEMPLATE = jQuery('#templates').children('.map-cell');
    erg.DIRECTIONAL_INDICATOR_SELECTOR_TEMPLATE = '#directional-indicator-{0}';
    erg.MAP_CELL_SELECTOR_TEMPLATE = "[data-x='{0}'][data-y='{1}']";
    erg.MAP_CELL_HEIGHT = erg.MAP_CELL_TEMPLATE.height();
    erg.MAP_CELL_WIDTH = erg.MAP_CELL_TEMPLATE.width();
    erg.MAP_CONTAINER = jQuery('#map-container');
    erg.MAP_CONTAINER_PARENT = jQuery('#map');
});

function generateMap() {
    var rooms = scenario.getFloor(player.z).getRoomList();
    erg.MAP_CONTAINER.empty().attr('data-floor', player.z);

    for (var room in rooms) {
        if (rooms.hasOwnProperty(room)) {
            var x = rooms[room]['x'];
            var y = rooms[room]['y'];
            erg.MAP_CELL_TEMPLATE.clone().appendTo(erg.MAP_CONTAINER)
                .attr({ 'data-x': x, 'data-y': y })
                .css('top', (x * erg.MAP_CELL_HEIGHT) + 'px')
                .css('left', (y * erg.MAP_CELL_WIDTH) + 'px');
        }
    }
    erg.MAP_CONTAINER.children(erg.MAP_CELL_SELECTOR_TEMPLATE.format(player.x, player.y)).addClass('occupied');
    centerMap();
    showDirectionalIndicator();
};

function updateMap() {
    //If the player has changed floors, we need to redraw the map to show the current floor.
    if (player.z != erg.MAP_CONTAINER.attr('data-floor')) {
        generateMap();
    } else {
        //else clear the old occupied cell
        erg.MAP_CONTAINER.children('.occupied').empty().removeClass('occupied');

        //and indicate the new one
        erg.MAP_CONTAINER.children(erg.MAP_CELL_SELECTOR_TEMPLATE.format(player.x, player.y)).addClass('occupied');
        centerMap();
        showDirectionalIndicator();
    }
};

function centerMap() {
    var occupiedCell = jQuery(erg.MAP_CONTAINER).children(erg.MAP_CELL_SELECTOR_TEMPLATE.format(player.x, player.y));
    var occupiedTop = occupiedCell.position().top;
    var occupiedLeft = occupiedCell.position().left;

    erg.MAP_CONTAINER.css('left', ((erg.MAP_CONTAINER_PARENT.width() / 2) - (occupiedCell.width() / 2) - occupiedLeft) + 'px')
        .css('top', ((erg.MAP_CONTAINER_PARENT.height() / 2) - (occupiedCell.height() / 2) - occupiedTop) + 'px');
};

function showDirectionalIndicator() {
    jQuery(erg.MAP_CONTAINER)
        .children('.occupied')
        .empty()
        .append(jQuery(erg.DIRECTIONAL_INDICATOR_SELECTOR_TEMPLATE.format(player.facing)).clone());
};