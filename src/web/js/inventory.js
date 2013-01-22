// TODO also show the inventory?
Inventory = Class.create({
    initialize: function() {
        this.items = {};
    },
    add: function(item) {
        this.items[item.name] = item;
    },
    contains: function(itemName) {
         return this.items[itemName] != null;
    },
    remove: function(itemName) {
         delete this.items[itemName];
    }
});

InventoryItem = Class.create({
    init: function() {
        this.name = null;
        this.image = null;
    },
    set: function(name, image) {
        this.name = name;
        this.image = image;
    }
});
