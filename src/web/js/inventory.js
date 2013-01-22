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

/* No specific class for inventory items, but they have these properties:
        name: Used as both the display name and for identifying it within the scenario file.
        image: An image to display next to the item in the inventory.
*/
