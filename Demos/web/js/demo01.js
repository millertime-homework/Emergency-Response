var Wall = Class.create({
    initialize: function(name, direction) {
        this.name = name;
        this.direction = direction;
    },

    getInfo: function() {
        return "(Wall) \'" + this.name + "\', Direction: " + this.direction + "";
    },
});

var Room = Class.create({

    initialize: function(name, x, y, z) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.z = z;
        this.walls = {};
    },

    addWall: function(wall) {
        this.walls[wall.name] = new Wall(wall.name, wall.direction)
    },

    getInfo: function() {
        var str =  "(Room) \'" 
            + this.name 
            + "\', Location: ( " 
            + this.x 
            + ", " 
            + this.y 
            + ", " 
            + this.z 
            + "), Walls: \n";
        $j.each(this.walls, function(key, value) {
            str += "\t" + value.getInfo() + "\n";
        })
        return str;
    },
});

