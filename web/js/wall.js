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
    addClickable: function(id, name, image, width, height, left, right, action, actionVariables) {
        var newClickable = new Clickable;
        clickableImage = scenario.addImage(image);
        if (action ==='showModal') {
            actionVariables['image'] = scenario.addImage(actionVariables['image']);
        }
        newClickable.set(name, clickableImage, width, height, left, right, action, actionVariables);
        this.clickables[id] = newClickable;
    },
    getClickable: function(id) {
        if (typeof this.clickables[id] === 'undefined') {
            return null;
        }
        return this.clickables[id];
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