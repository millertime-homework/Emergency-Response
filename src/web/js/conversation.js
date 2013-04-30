var Conversation = function () {
    this.name = null;
    this.options = null;

    this.set = function (name, options) {
        this.name = name;
        this.options = options;
    }

    this.getOption = function (optionId) {
        return this.options[optionId];
    }
}
