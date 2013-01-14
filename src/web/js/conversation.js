Conversation = Class.create({
    init: function () {
        this.name = null;
        this.options = null;
    },
    set: function (name, options) {
        this.name = name;
        this.options = options;
    },

    getOption: function (optionId) {
        return this.options[optionId];
    }
});