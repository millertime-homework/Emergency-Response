// GLOBALS
var Player = null;
var Scenario = null;
var Floor = null;
var Room = null;
var Wall = null;

/* ######################################## */
/* ######################################## */

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
var DIRECTION_LEFT = "l";
var DIRECTION_RIGHT = "r";
var DIRECTION_UP = "u";
var DIRECTION_DOWN = "d";
var DIRECTION_INDEX = new Array("n", "e", "s", "w" );

var PROP_STAIRS_UP = "hasStairsUp";
var PROP_STAIRS_DOWN = "hasStairsDown";
var PROP_ENTER_STAIRS_DIRECTION = "enterStairsFacing";
var PROP_EXIT_STAIRS_DIRECTION = "exitStairsFacing";

var imageBasePath = "web/img/";

// initialize must set the necessary variables to blank to prevent
// next created object from retaining previous variables (prototype trick)

Player = Class.create({
    initialize: function() {
        this.x = null;
        this.y = null;
        this.z = null;
        this.facing = null;
        this.health = null;
        this.status = null;
        this.scenario = null;
    },
    set: function(x, y, z, facing, scenario) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.facing = facing;
        this.health = PLAYER_HEALTH_DEFAULT;
        this.status = PLAYER_STATUS_ALIVE;
        this.scenario = scenario;
    },
    move: function(direction) {	
        if (direction == DIRECTION_NORTH) {
            if (scenario.isValidRoom(this.x, this.y+1, this.z)) {
                this.y = this.y + 1;
                return true;
            }
            console.log('Player.move - cannot move to ' + this.x + "," + (this.y+1) + "," + this.z)
        } else if (direction == DIRECTION_SOUTH) {
            if (scenario.isValidRoom(this.x, this.y-1, this.z)) {
                this.y = this.y - 1;
                return true;
            }
            console.log('Player.move - cannot move to ' + this.x + "," + (this.y-1) + "," + this.z)
        } else if (direction == DIRECTION_EAST) {
            if (scenario.isValidRoom(this.x+1, this.y, this.z)) {
                this.x = this.x + 1;
                return true;
            }
            console.log('Player.move - cannot move to ' + (this.x+1) + "," + this.y + "," + this.z)
        } else if (direction == DIRECTION_WEST){
            if (scenario.isValidRoom(this.x-1, this.y, this.z)) {
                this.x = this.x - 1;
                return true;
            }
            console.log('Player.move - cannot move to ' + (this.x-1) + "," + this.y + "," + this.z)
        } else if (direction === DIRECTION_UP && this.canMoveUp()) {
            this.z += 1;
            this.setFacingAfterExitingStairs();
            return true;
        } else if (direction === DIRECTION_DOWN && this.canMoveDown()) {
            this.z -= 1;
            this.setFacingAfterExitingStairs();
            return true;
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

Wall = Class.create({
    initialize: function() {
        this.name = null;
        this.direction = null;
        this.image = null;
    },
    set: function(name, direction, image) {
        this.name = name;
        this.direction = direction;
        this.image = scenario.addImage(image)
    },
    setName: function (name) {
        this.name = name;
    },
    setDirection: function(name) {
        this.direction = direction;
    },
    setImage: function(image) {
        this.image = scenario.addImage(image)
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
    }
});

Room = Class.create({
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
    addProp: function(prop, value) {
    	this[prop] = value;
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
    getWallByDir: function(direction) {
        return this.walls[direction]
    },
    containsUpStairs: function() {
    	return (this.hasOwnProperty(PROP_STAIRS_UP) && this[PROP_STAIRS_UP]);
    },
    containsDownStairs: function() {
    	return (this.hasOwnProperty(PROP_STAIRS_DOWN) && this[PROP_STAIRS_DOWN]);
    },
    stairEntryDirection: function() {
    	return this.hasOwnProperty(PROP_ENTER_STAIRS_DIRECTION) ? this[PROP_ENTER_STAIRS_DIRECTION] : null;
    },
    stairExitDirection: function() {
    	return this.hasOwnProperty(PROP_EXIT_STAIRS_DIRECTION) ? this[PROP_EXIT_STAIRS_DIRECTION] : null;
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
    }
});

Floor = Class.create({
    initialize: function(name, z) {
        this.name = null;
        this.z = null;
        this.numRooms = 0;
        this.rooms = {};
        this.maxX = 0;
        this.maxY = 0;
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
        if (this.getRoomByXY(x, y) !== null) {
            console.log('Floor.addRoom - Room with x=' + x + ',y=' + y + ",z=" + z + " already exists")
            return;
        }
        if (x > this.maxX) { 
            this.maxX = x
        }
        if (y > this.maxY) {
            this.maxY = y
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
    getRoom: function(id) {
        return this.getRoomById(id);
    },
    getRoomByXY: function(x ,y) {
        var room = null;
        $j.each(this.rooms, function(key, value) {
            if (value.x == x && value.y == y) {
                room = value;
            }
        })
        return room;
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
    }
});

Scenario = Class.create({
    initialize: function() {
        this.name = null;
        this.status = null;
        this.floors = {}
        this.images = []
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
            return;
        }
        this.status = SCENARIO_STATUS_ACTIVE;
    },
    addImage: function(image) {
        this.images.push(imageBasePath + image)
        return this.preloadImage(imageBasePath + image)
    },
    preloadImage: function(imagePath) {
        var image = document.createElement('img')
        image.src = imagePath
        return image
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
        floor = this.floors[z];
        if (typeof floor === 'undefined' || floor === null) {
            console.log('Scenario.getFloor - floor with z=' + z + ' does not exist')
            return;
        }
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

    getLocNames: function(x, y, z, direction) {
        floor = this.getFloor(z)
        if (typeof floor !== 'undefined') {
            room = floor.getRoomByXY(x, y)
            if (typeof room !== 'undefined') {
                wall = room.getWallByDir(direction)
                if (typeof wall !== 'undefined') {
                    return {
                        'floorName' : floor.name, 
                        'roomName' : room.name,
                        'wallName' : wall.name
                    }
                } else {
                    console.log('getLocNames - error getting wall dir=' + direction)
                }
            } else {
                console.log('getLocNames - error getting room x=' + x + ',' + y)
            }
        } else {
            console.log('getLocNames - error getting floor z=' + z)
        }
    },
    isValidRoom: function(x, y, z) {
        floor = this.getFloor(z);
        if (typeof floor !== 'undefined' && floor != null) {
            room = floor.getRoomByXY(x, y)
            if (typeof room !== 'undefined' && room != null) {
                return true;
            }
        }
        return false;
    },
    getRoom: function(x, y, z) {
        if (this.isValidRoom(x, y, z)) {
        	return this.getFloor(z).getRoomByXY(x, y);
        }
        return null;   	
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
    }
});

