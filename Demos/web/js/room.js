var PROP_STAIRS_UP = "hasStairsUp";
var PROP_STAIRS_DOWN = "hasStairsDown";
var PROP_ENTER_STAIRS_DIRECTION = "enterStairsFacing";
var PROP_EXIT_STAIRS_DIRECTION = "exitStairsFacing";

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
        return newWall;
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