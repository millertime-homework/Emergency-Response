// CONSTANTS
var SCENARIO_STATUS_ACTIVE = 'active';
var SCENARIO_STATUS_INACTIVE = 'inactive';
var SCENARIO_STATUS_DONE = 'done';

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
    },
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
        if (typeof ntabs === 'undefined') { 
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
        if (typeof this.walls[direction] !== 'undefined') {
            console.log('Room.addWall - direction ' + direction + ' already defined')
            return;
        }
        var newWall = new Wall;
        newWall.set(name, direction, image)
        this.walls[direction] = newWall;
    },
    getWallList: function() {
        if (typeof this.walls === 'undefined') {
            return;
        }
        wallList = new Array()
        $j.each(this.walls, function(key, value) {
            wallList.push({
                'direction': key,
                'name': value.name,
            })
        })
        return wallList;
    },
    dispInfo: function(ntabs) {
        if (typeof ntabs === 'undefined') {
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
        if (typeof this.rooms[id] !== 'undefined') {
            console.log('Floor.addRoom - Room with id ' + id + ' already exists')
            return;
        }
        var newRoom = new Room;
        newRoom.set(name, x, y, z);
        this.rooms[id] = newRoom;
        this.numRooms += 1;
        return this.rooms[id]
    },
    addWallToRoom: function(id, name, direction, image) {
        var room = this.getRoomById(id);
        if (typeof room === 'undefined' || room === null) {
            console.log('Floor.addWallToRoom - Room with id ' + id + ' does not exist')
            return;
        }
        room.addWall(name, direction, image);
    },
    getRoomById: function(id) {
        room = this.rooms[id];
        if (typeof room === 'undefined' || room === null) {
            console.log('Unknown Room Id - ' + id)
            return null;
        }
        return this.rooms[id];
    },
    getRoomList: function() {
        var roomList = new Array();
        $j.each(this.rooms, function(key, value) {
            roomList.push({
                'id':key,
                'name':value.name,
                'x':value.x,
                'y':value.y,
                'z':value.z,
            });
        });
        return roomList;
    },
    dispInfo: function(ntabs) {
        if (typeof ntabs === 'undefined') {
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
    },
});

var Scenario = Class.create({
    initialize: function() {
        this.name = null;
        this.status = null;
        this.floors = {}
    },
    set: function(name, status) {
        this.name = name;
        this.status = status;
    },
    start: function() {
        if (this.status === SCENARIO_STATUS_ACTIVE) {
            console.log('Scenario.start - scenario already active')
            return;
        } else if (this.status === SCENARIO_STATUS_DONE) {
            console.log('Scenario.start - scenario done, must be reset to start')
        }
        this.status = SCENARIO_STATUS_ACTIVE;
    },
    addFloor: function(name, z) {
        if (typeof this.floors[z] !== 'undefined') {
            console.log('Scenario.addFloor - floor level with z=' + z + ' already defined')
            return;
        }
        this.floors[z] = new Floor;
        this.floors[z].set(name, z)
        return this.floors[z]
    },
    addRoomToFloor: function(z, id, name, x, y, z) {
        floor = this.floors[z]
        if (typeof floor === 'undefined' || floor === null) {
            console.log('Scenario.addRoomToFloor - floor with z=' + z + ' does not exist')
            return;
        }
        floor.addRoom(id, name, x, y , z);
    },
    getFloor: function(z) {
        return this.floors[z];
    },
    getFloorList: function() {
        var floorList = new Array();
        $j.each(this.floors, function(key, value) {
            floorList.push({
                'z': key,
                'name': value.name,
            });
        })
        return floorList;
    },
    dispInfo: function(ntabs) {
        if (typeof ntabs === 'undefined') {
            tabs = "";
            ntabs = 0;
        } else {
            var tabs = "";
            for (i = 0; i < ntabs; i++) { 
                tabs += "\t"; 
            }
        }
        var info = "";
        info += tabs + "(Scenario) name=\"" + this.name + "\", status=" + this.status + "\n";
        info += tabs + "\tFloors->\n";
        $j.each(this.floors, function(key, value) {
            info += value.dispInfo(ntabs+2);
        });
        return info;
    },
});

