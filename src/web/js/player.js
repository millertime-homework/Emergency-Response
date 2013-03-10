var DIRECTION_EAST = "e";
var DIRECTION_WEST = "w";
var DIRECTION_NORTH = "n";
var DIRECTION_SOUTH = "s";
var DIRECTION_LEFT = "l";
var DIRECTION_RIGHT = "r";
var DIRECTION_UP = "u";
var DIRECTION_DOWN = "d";
var DIRECTION_INDEX = new Array("n", "e", "s", "w" );

var PLAYER_STATUS_ALIVE = 'alive';
var PLAYER_STATUS_INJURED = 'injured';
var PLAYER_STATUS_DEAD = 'dead';
var PLAYER_HEALTH_DEFAULT = 100;

Player = Class.create({
    initialize: function() {
        this.x = null;
        this.y = null;
        this.z = null;
        this.facing = null;
        this.fakeFacing = null;
        this.health = null;
        this.status = null;
        this.scenario = null;
        this.inventory = null;
        this.score = 0;
    },
    set: function(x, y, z, facing, scenario, fakeFacing) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.facing = facing;
        this.fakeFacing = fakeFacing;
        this.health = PLAYER_HEALTH_DEFAULT;
        this.status = PLAYER_STATUS_ALIVE;
        this.scenario = scenario;
        this.inventory = new Inventory();
        this.score = 0;
    },
    move: function(direction) { 
        var currRoom = scenario.getRoom(this.x, this.y, this.z);
        var currWall = currRoom.getWallByDir(direction);

        player.fakeFacing = null;
        if (currWall && currWall.hasDestination()) {
            destination = currWall['destination']
            this.x = destination['x']
            this.y = destination['y']
            this.z = destination['z']
            this.facing = destination['f']
            jQuery(document).trigger('player-moved', [this.x, this.y, this.z]);
        } else if (currWall.getBarrierMessage() != null) {
            showOnScreenMessage(currWall.getBarrierMessage(), 3);
        }
        return false;
    },

    turn: function (direction) {
        var currentDirectionIndex = DIRECTION_INDEX.indexOf(player.facing);
        var newDirectionIndex;

        player.fakeFacing = null;
        if (direction === DIRECTION_LEFT) {
            newDirectionIndex = (currentDirectionIndex - 1 + 4) % 4;
        } else if (direction === DIRECTION_RIGHT) {
            newDirectionIndex = (currentDirectionIndex + 1) % 4;
        }
        if (scenario.getRoom(player.x, player.y, player.z).walls[DIRECTION_INDEX[newDirectionIndex]]) {
            this.facing = DIRECTION_INDEX[newDirectionIndex];
            jQuery(document).trigger('player-turned');
            return true;
        }
        return false;
    },

    warp: function (f, x, y, z) {
        var room, wall;

        if (f == null) {
            f = this.f;
        }
        if (x == null) {
            x = this.x;
        }
        if (y == null) {
            y = this.y;
        }
        if (z == null) {
            z = this.z;
        }

        if (!scenario.isValidRoom(x,y,z)) {
            return;
        }

        room = scenario.getRoom(x, y, z);
        wall = room.getWallByDir(f);
        if (!wall) {
            return;
        }

        this.x = x;
        this.y = y;
        this.z = z;
        this.facing = f;
        this.fakeFacing = wall.fakeDirection;

        jQuery(document).trigger('player-moved', [x, y, z]);
    },
    
    canMoveUp: function() {
        return (this.isFacingStairs() && scenario.getRoom(this.x, this.y, this.z).containsUpStairs() && scenario.isValidRoom(this.x, this.y, this.z + 1));
    },
    canMoveDown: function() {
        return (this.isFacingStairs() && scenario.getRoom(this.x, this.y, this.z).containsDownStairs() && scenario.isValidRoom(this.x, this.y, this.z - 1));
    },
    isFacingStairs: function() {
        var room = scenario.getRoom(player.x, player.y, player.z);
        if (room) {
            return room.stairEntryDirection() === player.facing;
        }
        return false;
    },
    setFacingAfterExitingStairs: function() {
        var stairExitDirection = scenario.getRoom(player.x, player.y, player.z).stairExitDirection();
        if (stairExitDirection) {
            player.facing = stairExitDirection;
        }
    }
});
