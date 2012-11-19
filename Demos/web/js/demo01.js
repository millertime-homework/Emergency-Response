// initialize must set the necessary variables to blank to prevent
// next created object from retaining previous variables (prototype trick)

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
    getInfo: function(ntabs) {
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
    getInfo: function(ntabs) {
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
            info += value.getInfo(ntabs+2);
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
    getInfo: function(ntabs) {
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
            info += value.getInfo(ntabs+2);
        })
        return info;
    }


});