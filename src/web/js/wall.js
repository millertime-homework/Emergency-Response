Wall = Class.create({
    initialize: function() {
        this.name = null;
        this.direction = null;
        this.image = null;
        this.props = {};
        this.destination = null;
        this.barriers = [];
    },
    set: function(name, direction, image) {
        this.name = name;
        this.direction = direction;
        this.image = scenario.addImage(image)
    },
    addProp: function(id, name, image, hoverImage, width, height, left, right, action, actionVariables) {
        var newProp = new Prop;
        propImage = scenario.addImage(image);
        propHoverImage = hoverImage && scenario.addImage(hoverImage);
        if (action || hoverImage) {
            if (hoverImage) {
                propHoverImage.style.cursor = "pointer";
            } else {
                propImage.style.cursor = "pointer";
            }
        }
        
        if (action ==='displayModal' && !actionVariables['imageElement']) {
            actionVariables['imageElement'] = scenario.addImage(actionVariables['image']);
        }
        newProp.set(name, propImage, propHoverImage, width, height, left, right, action, actionVariables);
        this.props[id] = newProp;
    },
    getProp: function(id) {
        if (typeof this.props[id] === 'undefined') {
            return null;
        }
        return this.props[id];
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
        for (var i = 0; i < this.barriers.length; i++)
            if (!scenario.inactiveProps[this.barriers[i]])
                return false;
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
