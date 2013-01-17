Inventory = Class.create({
    init: function() {
        this.items = [];
    },
    add: function(item) {
        this.items[this.items.length] = item;
    },
    contains: function(item) {
        for(var i = 0; i < this.items.length; i++)
            if(this.items[i] == item)
                return true;
        return false;
    }
});

InventoryItem = Class.create({
    init: function() {
        this.name = null;
        this.image = null;
    }
});
