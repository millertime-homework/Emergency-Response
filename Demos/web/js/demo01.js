// CONSTANTS
var PLAYER_STATUS_ALIVE = 'alive';
var PLAYER_STATUS_INJURED = 'injured';
var PLAYER_STATUS_DEAD = 'dead';
var PLAYER_HEALTH_DEFAULT = 100;

var DIRECTION_EAST = "e";
var DIRECTION_WEST = "w";
var DIRECTION_NORTH = "n";
var DIRECTION_SOUTH = "s";


// initialize must set the necessary variables to blank to prevent
// next created object from retaining previous variables (prototype trick)

var Player = Class.create({
    initialize: function() {
        this.x = null;
        this.y = null;
        this.z = null;
        this.health = null;
        this.status = null;
        this.game = null;
    },
    set: function(x, y, z, game) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.health = PLAYER_HEALTH_DEFAULT;
        this.status = PLAYER_STATUS_ALIVE;
        this.game = game;
    },
    move: function(direction) {
        if (direction == DIRECTION_NORTH) {
            this.y = this.y + 1;
        } else if (direction == DIRECTION_SOUTH) {
            this.y = this.y + 1;
        } else if (direction == DIRECTION_EAST) {
            this.x = this.x + 1;
        } else if (direction == DIRECTION_WEST){
            this.x = this.x - 1;
        }
    }

});

var Wall = Class.create({
    initialize: function() {
        this.name = null;
        this.direction = null;
        this.image = null;
    },
    set: function(name, direction, image) {
        this.name = name;
        this.direction = direction;
        this.image = image;
    },
    setName: function (name) {
        this.name = name;
    },
    setDirection: function(name) {
        this.direction = direction;
    },
    setImage: function(image) {
        this.image = image;
    },
    dispInfo: function(ntabs) {
        if (typeof ntabs == 'undefined') { 
            tabs = ""; 
            ntabs = 0;
        } else {
            tabs = "";
            for (i = 0; i < ntabs; i++) { 
                tabs += "\t"; 
            }
        }
        return tabs + "(Wall) direction=" + this.direction + ", name=" + this.name + ", image=" + this.image + "\n";
    },
});

var Room = Class.create({

    initialize: function(name, x, y, z) {
        this.name = null;
        this.x = null;
        this.y = null;
        this.z = null;
        this.walls = {};
    },
    set: function(name, x, y, z) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.z = z;
    },

    addWall: function(name, direction, image) {
        var newWall = new Wall;
        newWall.set(name, direction, image)
        this.walls[direction] = newWall;
    },
    dispInfo: function(ntabs) {
        if (typeof ntabs == 'undefined') {
            tabs = "";
            ntabs = 0;
        } else {
            var tabs = "";
            for (i = 0; i < ntabs; i++) { 
                tabs += "\t"; 
            }
        }
        var info = "";

        info += tabs + "(Room) name=\"" + this.name + "\", location=( " + this.x + ", " + this.y + ", " + this.z + "), \n";
        info += tabs + "\tWalls->\n";
        $j.each(this.walls, function(key, value) {
            info += value.dispInfo(ntabs+2);
        })
        return info;
    },
});

var Floor = Class.create({
    initialize: function(name, z) {
        this.name = null;
        this.z = null;
        this.numRooms = 0;
        this.rooms = {};
    },
    set: function(name, z) {
        this.name = name;
        this.z = z;
    },
    addRoom: function(id, name, x, y, z) {
        var newRoom = new Room;
        newRoom.set(name, x, y, z);
        this.rooms[id] = newRoom;
        this.numRooms += 1;
    },
    addWallToRoom: function(id, name, direction, image) {
        var room = this.rooms[id];
        room.addWall(name, direction, image);
    },

    getRoomById: function(id) {
        return this.rooms[id];
    },
    dispInfo: function(ntabs) {
        if (typeof ntabs == 'undefined') {
            tabs = "";
            ntabs = 0;
        } else {
            var tabs = "";
            for (i = 0; i < ntabs; i++) { 
                tabs += "\t"; 
            }
        }
        var info = "";

        info += tabs + "(Floor) name=\"" + this.name + "\", #" + this.z + ", numRooms=" + this.numRooms + "\n";
        info += tabs + "\tRooms->\n";
        $j.each(this.rooms, function(key, value) {
            info += value.dispInfo(ntabs+2);
        })
        return info;
    }


});