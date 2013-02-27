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
});

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
    centerMap();
    showDirectionalIndicator();
}

/* Identifies the connections between this cell and others, and renders a
 * connection between them if necessary.*/
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
    //If the player has changed floors, we need to redraw the map to show the current floor.
    if (String(player.z) !== erg.MAP_CONTAINER.attr('data-floor')) {
        generateMap();
    } else {
        //else clear the old occupied cell
        erg.MAP_CONTAINER.children('.occupied').empty().removeClass('occupied').addClass('visited');

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
