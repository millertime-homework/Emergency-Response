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
    getInfo: function() {
        return "(Wall) name=" + this.name + ", image=" + this.image;
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
    getInfo: function() {
        var str =  "(Room) name=\"" + this.name + "\""
            + ", location=( " + this.x + ", " + this.y + ", " + this.z + "), \n\tWalls=\n";
        $j.each(this.walls, function(key, value) {
            str += "\t\t" + key + " " + value.getInfo() + "\n";
        })
        return str;
    },
});

var Floor = Class.create({
    initialize: function(name, z) {
        this.name = null;
        this.z = null;
    },
    addRoom: function() {
        
    },

});