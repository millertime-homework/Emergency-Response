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
    addClickable: function(id, name, image, width, height, left, right, content) {
        var newClickable = new Clickable;
        clickableImage = scenario.addImage(image)
        newClickable.set(name, clickableImage, width, height, left, right, content);
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
    }
});