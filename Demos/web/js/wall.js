Wall = Class.create({
    initialize: function() {
        this.name = null;
        this.direction = null;
        this.image = null;
        this.clickables = {};
        this.destination = null;
    },
    set: function(name, direction, image) {
        this.name = name;
        this.direction = direction;
        this.image = scenario.addImage(image)
    },
    addClickable: function(id, name, image, width, height, left, right) {
        var newClickable = new Clickable;
        clickableImage = scenario.addImage(image)
        newClickable.set(name, clickableImage, width, height, left, right);
        this.clickables[id] = newClickable;
    },
    setDestination: function(x, y, z, f) {
        if (this.destination == null) {
            this.destination = {};
        }
        this.destination['x'] = x;
        this.destination['y'] = y;
        this.destination['z'] = z;
        this.destination['f'] = f;
    },
    hasDestination: function() {
        return (this.destination != null);
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
        return tabs + "(Wall) direction=" + this.direction + ", name=" + this.name + ", image=" + this.image + ", hasExit:" + this.hasDestination() +  "\n";
    }
});