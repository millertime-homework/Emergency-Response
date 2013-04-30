var Prop = function() {
    this.name = null;
    this.image = null;
    this.hoverImage = null;
    this.width = null;
    this.height = null;
    this.left = null;
    this.top = null;
    this.action = null;
    this.actionVariables = {};

    this.set = function(name, image, hoverImage, width, height, left, top, action, actionVariables) {
        this.name = name;
        this.image = image;
        this.hoverImage = hoverImage
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.action = action;
        this.actionVariables = actionVariables;
    }
}
