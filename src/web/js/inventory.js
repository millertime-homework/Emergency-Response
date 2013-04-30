// inventory.js

var Inventory = function() {
    this.items = {};
    this.add = function(item) {
        this.items[item.name] = item;
    }
    this.contains = function(itemName) {
         return this.items[itemName] != null;
    }
    this.remove = function(itemName) {
         delete this.items[itemName];
    }
}

/* No specific class for inventory items, but they have these properties:
        name: Used as both the display name and for identifying it within the scenario file.
        image: An image to display next to the item in the inventory.
        width, height: The width and height for the image
*/

jQuery(document).ready(function($) {
    $(document).on("addInventory", function(event, item) {
        player.inventory.add(item);
    });
    $(document).on("removeInventory", function(event, item) {
        player.inventory.remove(item);
    });
    $(document).on("addToScene", function(event /* items... */) {
        for (var i = 1; i < arguments.length; i++)
            delete scenario.inactiveProps[arguments[i]];
        renderScene();
        saveGame();
    });
    $(document).on("removeFromScene", function(event /* items... */) {
        for (var i = 1; i < arguments.length; i++)
            scenario.inactiveProps[arguments[i]] = true;
        renderScene();
        saveGame();
    });
    $(document).on("takeFromScene", function(event, item, sceneItem) {
        $(document).trigger("addInventory", item);
        $(document).trigger("removeFromScene", sceneItem);
    });
    $(document).on("replaceProp", function(event, prop, otherProp) {
        scenario.inactiveProps[prop] = true;
        delete scenario.inactiveProps[otherProp];
        renderScene();
    })
});
