var MAP_CELL_SELECTOR_TEMPLATE = "[data-x='{0}'][data-y='{1}']";
var MAP_CELL_HTML_TEMPLATE = "<div class='map-cell' data-x='{0}' data-y='{1}'></div>";


function generateMap() {
    var rooms = scenario.getFloor(player.z).getRoomList();
    var mapContainer = jQuery('#map-container');
    mapContainer.empty();
    mapContainer.attr('data-floor', player.z);
    for (var room in rooms) {
        if (rooms.hasOwnProperty(room)) {
            var x = rooms[room]['x'];
            var y = rooms[room]['y'];
            mapContainer.append(MAP_CELL_HTML_TEMPLATE.format(x, y));
            var thisCell = mapContainer.children(MAP_CELL_SELECTOR_TEMPLATE.format(x, y));
            thisCell.css('top', (x * thisCell.height()) + 'px').css('left', (y * thisCell.width()) + 'px');
        }
    }
    mapContainer.children(MAP_CELL_SELECTOR_TEMPLATE.format(player.x, player.y)).addClass('occupied');
    centerMap();
};

function updateMap() {
    var mapContainer = jQuery('#map-container');

    //If the player has changed floors, we need to redraw the map to show the current floor.
    if (player.z != mapContainer.attr('data-floor')) {
        generateMap();
    } else {
        //else clear the old occupied cell
        mapContainer.children('.map-cell.occupied').removeClass('occupied');

        //and indicate the new one
        mapContainer.children(MAP_CELL_SELECTOR_TEMPLATE.format(player.x, player.y)).addClass('occupied');
        centerMap();
    }
};

function centerMap() {
    var outerMapContainer = jQuery('#map');
    var innerMapContainer = jQuery('#map-container');
    var occupiedCell = jQuery(MAP_CELL_SELECTOR_TEMPLATE.format(player.x, player.y));
    var occupiedTop = occupiedCell.position().top;
    var occupiedLeft = occupiedCell.position().left;

    innerMapContainer.css('left', ((outerMapContainer.width() / 2) - (occupiedCell.width() / 2) - occupiedLeft) + 'px')
        .css('top', ((outerMapContainer.height() / 2) - (occupiedCell.height() / 2) - occupiedTop) + 'px');
};