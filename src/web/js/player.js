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
        this.health = null;
        this.status = null;
        this.scenario = null;
	this.inventory = null;
    },
    set: function(x, y, z, facing, scenario) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.facing = facing;
        this.health = PLAYER_HEALTH_DEFAULT;
        this.status = PLAYER_STATUS_ALIVE;
        this.scenario = scenario;
	this.inventory = new Inventory();
    },
    move: function(direction) { 
        var currRoom = scenario.getRoom(this.x, this.y, this.z)
        var currWall = currRoom.getWallByDir(direction)
        if (currWall.hasDestination()) {
            destination = currWall['destination']
            this.x = destination['x']
            this.y = destination['y']
            this.z = destination['z']
            this.facing = destination['f']
            jQuery(document).trigger('player-moved', [this.x, this.y, this.z]);
        }
        return false;
    },

    turn: function (direction) {
        var currentDirectionIndex = DIRECTION_INDEX.indexOf(player.facing);
        var newDirectionIndex;
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
