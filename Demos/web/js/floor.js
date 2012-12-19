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
    }
});