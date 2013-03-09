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
    erg.X_CONNECTOR_TEMPLATE = jQuery('#templates').children('.x-connector');
    erg.Y_CONNECTOR_TEMPLATE = jQuery('#templates').children('.y-connector');
    erg.CONNECTOR_WIDTH = erg.Y_CONNECTOR_TEMPLATE.width();
    erg.CONNECTOR_LENGTH = erg.Y_CONNECTOR_TEMPLATE.height();
    erg.VALID_CONNECTING_WALLS = ['n', 'e', 's', 'w'];
    erg.map = {};
    erg.map.annotations = {};
});

/**
* Shows the annotation, if it exists, for the specified cell.
* @param {int} x The x coordinate for this annotation.
* @param {int} y The y coordinate for this annotation.
* @param {int} z The z coordinate for this annotation.
*/
function showAnnotation(x, y, z) {
    var key = "{0},{1},{2}".format(x, y, z),
        floor = parseInt(erg.MAP_CONTAINER.attr('data-floor')),
        cell;
    if (erg.map.annotations[key]) {
        erg.map.annotations[key].visible = true;

        if (floor === z &&
            !(player.x === x && player.y === y)) {
            cell = erg.MAP_CELL_SELECTOR_TEMPLATE.format(x, y);
            appendAnnotation(cell, erg.map.annotations[key].path);
        }
    }
}

/**
* Hides the annotation, if it exists, for the specified cell.
* @param {int} x The x coordinate for this annotation.
* @param {int} y The y coordinate for this annotation.
* @param {int} z The z coordinate for this annotation.
*/
function hideAnnotation(x, y, z) {
    var key = "{0},{1},{2}".format(x, y, z);
    if (erg.map.annotations[key]) {
        erg.map.annotations[key].visible = false;

        jQuery(erg.MAP_CELL_SELECTOR_TEMPLATE.format(x, y)).find('.annotation').remove();
    }
}

/** 
* Dynamically generates a mini-map during scenario loading.
*/
function generateMap() {
    "use strict";
    var rooms, room, xPosition, yPosition, cell, connectionsBuilt;
    connectionsBuilt = {};
    rooms = scenario.getFloor(player.z).getRoomList();
    erg.MAP_CONTAINER.empty().attr('data-floor', player.z);

    for (room in rooms) {
        if (rooms.hasOwnProperty(room)) {
            xPosition = rooms[room].x;
            yPosition = rooms[room].y;
            cell = erg.MAP_CELL_TEMPLATE.clone().appendTo(erg.MAP_CONTAINER)
                .attr({ 'data-x': xPosition, 'data-y': yPosition })
                .css('top', (yPosition * -(erg.MAP_CELL_WIDTH + erg.CONNECTOR_LENGTH)) + 'px')
                .css('left', (xPosition * (erg.MAP_CELL_HEIGHT + erg.CONNECTOR_LENGTH)) + 'px');
            generateConnections(rooms[room], cell, connectionsBuilt);
        }
    }
    erg.MAP_CONTAINER.
        children(erg.MAP_CELL_SELECTOR_TEMPLATE.format(player.x, player.y)).
        addClass('occupied');
    drawAnnotations();
    centerMap();
    showDirectionalIndicator();
}

function generateConnections(room, cell, connectionsBuilt) {
    "use strict";
    var wall, walls, destination, i, wallsToCheck;

    wallsToCheck = erg.VALID_CONNECTING_WALLS;
    walls = scenario.getRoom(room.x, room.y, room.z).walls;

    for (i = 0; wallsToCheck[i]; i++) {
        if (walls[wallsToCheck[i]] && walls[wallsToCheck[i]].destination) {
            destination = walls[wallsToCheck[i]].destination;

            //We only draw the connection if it hasn't been rendered already.
            if (shouldAddConnection(destination, room, connectionsBuilt)) {
                generateConnection(room, cell, destination);
                //Record the connection between these two cells so that we don't
                //try to build it again from the connected cell
                connectionsBuilt[getConnectionKey(room, destination)] = true;
            }

        }
    }
}

/** 
* Returns true if no connection has been drawn between the specifed cells.
* 
*/
function shouldAddConnection(destination, room, connectionsBuilt) {
    "use strict";
    return destination.z === room.z &&
            scenario.getRoom(destination.x, destination.y, destination.z) &&
            !connectionExists(destination, room, connectionsBuilt);
}

function generateConnection(room, cell, destination) {
    "use strict";
    var xChange, yChange, offset, template,
        cellCenterX, cellCenterY, newConnector;

    //Determine which direction we've shifted.
    yChange = (room.y - destination.y);
    xChange = -(room.x - destination.x);
    template = xChange ? erg.X_CONNECTOR_TEMPLATE : erg.Y_CONNECTOR_TEMPLATE;
    cellCenterX = cell.position().left + (erg.MAP_CELL_WIDTH / 2);
    cellCenterY = cell.position().top + (erg.MAP_CELL_HEIGHT / 2);
    newConnector = template.clone().appendTo(erg.MAP_CONTAINER);

    if (xChange) {
        //Subtract the connector width or jump over the cell
        offset = xChange < 0 ? -erg.CONNECTOR_LENGTH : erg.MAP_CELL_WIDTH;
        newConnector.css({
            'top' : cellCenterY - erg.CONNECTOR_WIDTH / 2 + 'px',
            'left' : (cell.position().left + offset) + 'px'
        });
    } else {
        offset = yChange < 0 ? -erg.CONNECTOR_LENGTH : erg.MAP_CELL_HEIGHT;
        newConnector.css({
            'top' : (cell.position().top + offset) + 'px',
            'left' : cellCenterX - (erg.CONNECTOR_WIDTH / 2) + 'px'
        });
    }
}

function getConnectionKey(roomA, roomB) {
    "use strict";
    return "{0}{1}{2}{3}{4}{5}".format(roomA.x, roomA.y, roomA.z, roomB.x, roomB.y, roomB.z);
}

function connectionExists(destination, room, connectionsBuilt) {
    "use strict";
    return connectionsBuilt[getConnectionKey(destination, room)]
        || connectionsBuilt[getConnectionKey(room, destination)];
}

function updateMap() {
    "use strict";

    var occupiedCell = jQuery('.map-cell.occupied'),
        z = parseInt(erg.MAP_CONTAINER.attr('data-floor')),
        x, y;

    //If the player has changed floors, we need to redraw the map to show the current floor.
    if (player.z !== z) {
        generateMap();
    } else {
        if (occupiedCell.length === 1) {
            //clear out the old directional arrow.
            occupiedCell.empty();

            //redraw the cell's annotation, if it has one.
            x = parseInt(occupiedCell.attr('data-x'));
            y = parseInt(occupiedCell.attr('data-y'));

            if (hasVisibleAnnotation(x, y, z)) {
                showAnnotation(x, y, z);
            }

            occupiedCell.removeClass('occupied').addClass('visited');
        }

        //and indicate the new one
        erg.MAP_CONTAINER.children(erg.MAP_CELL_SELECTOR_TEMPLATE.format(player.x, player.y)).removeClass('visited').addClass('occupied');
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

    var direction = player.fakeFacing || player.facing;

    jQuery(erg.MAP_CONTAINER)
        .children('.occupied')
        .empty()
        .append(jQuery(erg.DIRECTIONAL_INDICATOR_SELECTOR_TEMPLATE.format(direction)).clone());
}

/**
* Adds a mini-map annotation to the list of known mini-map annotations during
* scenario loading. Not meant to be used outside of the scenario loader in
* functions.js
* @param {string} imagePath The name+extension of the image to use
* @param {int} x The x coordinate for this annotation.
* @param {int} y The y coordinate for this annotation.
* @param {int} z The z coordinate for this annotation.
*/
function addMinimapAnnotation(imageName, x, y, z) {
    erg.map.annotations["{0},{1},{2}".format(x, y, z)] = {
        'path': imageName, 
        visible: true
    };
}

/**
* Draws all visible annotations during scenario loading (or after the player
* switches floors). Do not call directly.
*/
function drawAnnotations() {
    var key, coordinates, annotation, annotations, floor;
    floor = erg.MAP_CONTAINER.attr('data-floor');
    annotations = erg.map.annotations;

    for (key in annotations) {
        if (annotations.hasOwnProperty(key)) {
            coordinates = key.split(',');

            if (floor === coordinates[2] && annotations[key].visible) {
                appendAnnotation(
                    erg.MAP_CELL_SELECTOR_TEMPLATE.format(coordinates[0], coordinates[1]), 
                    annotations[key].path);
            }
        }
    }
}

/**
* Returns true if the specified cell exists and has a visible annotation.
* @param {int} x The x coordinate for the cell to check
* @param {int} y The y coordinate for the cell to check
* @param {int} z The z coordinate for the cell to check
*/
function hasVisibleAnnotation(x, y, z) {
    var key = "{0},{1},{2}".format(x, y, z);
    if (erg.map.annotations[key]) {
        return erg.map.annotations[key].visible;
    }
    return false;
}

/**
* Appends an image to the specified cell. Do not call directly. Use
* showAnnotation instead.
* @param {string} selector A jQuery selector for the cell to append to
* @param {string} path The annotation image.
*/
function appendAnnotation(selector, path) {
    jQuery(selector).empty().
            append('<img src="web/img/{0}" class="annotation">'.format(path));
}
