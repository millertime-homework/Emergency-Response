var PROP_STAIRS_UP = "hasStairsUp";
var PROP_STAIRS_DOWN = "hasStairsDown";
var PROP_ENTER_STAIRS_DIRECTION = "enterStairsFacing";
var PROP_EXIT_STAIRS_DIRECTION = "exitStairsFacing";

var Room = function(name, x, y, z) {
    this.name = null;
    this.x = null;
    this.y = null;
    this.z = null;
    this.triggers;
    this.walls = {};

    this.set = function(name, x, y, z) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    this.addWall = function(name, direction, image, fakeDirection, isCutscene, triggers) {
        if (typeof this.walls[direction] !== 'undefined') {
            //console.log('Room.addWall - direction ' + direction + ' already defined')
            return;
        }
        var newWall = new Wall;
        newWall.set(name, direction, image, fakeDirection, isCutscene, triggers)
        this.walls[direction] = newWall;
        return newWall;
    }

    this.addProp = function(prop, value) {
        this[prop] = value;
    }

    this.addTriggers = function (triggers) {
        this.triggers = triggers;
    }

    this.getWallList = function() {
        if (typeof this.walls === 'undefined') {
            return;
        }
        wallList = new Array()
        $j.each(this.walls, function(key, value) {
            wallList.push({
                'direction': key,
                'name': value.name,
                'fakeDirection': value.fakeDirection
            });
        });
        return wallList;
    }

    this.getWallByDir = function(direction) {
        return this.walls[direction]
    }

    this.containsUpStairs = function() {
        return (this.hasOwnProperty(PROP_STAIRS_UP) && this[PROP_STAIRS_UP]);
    }

    this.containsDownStairs = function() {
        return (this.hasOwnProperty(PROP_STAIRS_DOWN) && this[PROP_STAIRS_DOWN]);
    }

    this.stairEntryDirection = function() {
        return this.hasOwnProperty(PROP_ENTER_STAIRS_DIRECTION) ? this[PROP_ENTER_STAIRS_DIRECTION] : null;
    }

    this.stairExitDirection = function() {
        return this.hasOwnProperty(PROP_EXIT_STAIRS_DIRECTION) ? this[PROP_EXIT_STAIRS_DIRECTION] : null;
    }
}
