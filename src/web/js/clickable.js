Clickable = Class.create({
    init: function() {
        this.name = null;
        this.image = null;
        this.width = null;
        this.height = null;
        this.left = null;
        this.top = null;
        this.action = null;
        this.actionVariables = {};
    },
    set: function(name, image, width, height, left, top, action, actionVariables) {
        this.name = name;
        this.image = image;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.action = action;
        this.actionVariables = actionVariables;
    }

});