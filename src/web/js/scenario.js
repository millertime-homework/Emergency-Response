var SCENARIO_STATUS_ACTIVE = 'active';
var SCENARIO_STATUS_INACTIVE = 'inactive';
var SCENARIO_STATUS_DONE = 'done';
var imageBasePath = "web/img/";


Scenario = Class.create({
    initialize: function ()
        this.name = null;
        this.status = null;
        this.floors = {};
        this.images = [];
        this.objectives = {};
        this.objectives.inProgress = {};
        this.objectives.completed = {};
        this.objectives.failed = {};
        this.inactiveProps = {};
    },
    set: function(name, status) {
        this.name = name;
        this.status = status;
    },
    start: function() {
        if (this.status === SCENARIO_STATUS_ACTIVE) {
            console.log('Scenario.start - scenario already active')
            return;
        } else if (this.status === SCENARIO_STATUS_DONE) {
            console.log('Scenario.start - scenario done, must be reset to start')
            return;
        }
        this.status = SCENARIO_STATUS_ACTIVE;
    },
    addTrigger: function (triggerName, triggerData) {
        if (triggerData['disabled']) {
            scenario.triggers['disabled'][triggerName] = triggerData;
        } else {
            scenario.triggers.pool[triggerName] = triggerData;
        }
    },
    addImage: function(image) {
        this.images.push(imageBasePath + image)
        return this.preloadImage(imageBasePath + image)
    },
    preloadImage: function(imagePath) {
        var image = document.createElement('img')
        image.src = imagePath
        return image
    },
    addFloor: function(name, z) {
        if (typeof this.floors[z] !== 'undefined') {
            console.log('Scenario.addFloor - floor level with z=' + z + ' already defined')
            return;
        }
        this.floors[z] = new Floor;
        this.floors[z].set(name, z)
        return this.floors[z]
    },
    addRoomToFloor: function(z, id, name, x, y, z) {
        floor = this.floors[z]
        if (typeof floor === 'undefined' || floor === null) {
            console.log('Scenario.addRoomToFloor - floor with z=' + z + ' does not exist')
            return;
        }
        floor.addRoom(id, name, x, y , z);
    },
    getFloor: function(z) {
        floor = this.floors[z];
        if (typeof floor === 'undefined' || floor === null) {
            console.log('Scenario.getFloor - floor with z=' + z + ' does not exist')
            return;
        }
        return this.floors[z];
    },

    getFloorList: function() {
        var floorList = new Array();
        $j.each(this.floors, function(key, value) {
            floorList.push({
                'z': key,
                'name': value.name,
            });
        })
        return floorList;
    },

    getLocNames: function(x, y, z, direction) {
        floor = this.getFloor(z)
        if (typeof floor !== 'undefined') {
            room = floor.getRoomByXY(x, y)
            if (typeof room !== 'undefined') {
                wall = room.getWallByDir(direction)
                if (typeof wall !== 'undefined') {
                    return {
                        'floorName' : floor.name, 
                        'roomName' : room.name,
                        'wallName' : wall.name
                    }
                } else {
                    console.log('getLocNames - error getting wall dir=' + direction)
                }
            } else {
                console.log('getLocNames - error getting room x=' + x + ',' + y)
            }
        } else {
            console.log('getLocNames - error getting floor z=' + z)
        }
    },
    isValidRoom: function(x, y, z) {
        floor = this.getFloor(z);
        if (typeof floor !== 'undefined' && floor != null) {
            room = floor.getRoomByXY(x, y)
            if (typeof room !== 'undefined' && room != null) {
                return true;
            }
        }
        return false;
    },
    getRoom: function(x, y, z) {
        if (this.isValidRoom(x, y, z)) {
            return this.getFloor(z).getRoomByXY(x, y);
        }
        return null;    
    },

    getObjectives: function(objectiveSource) {
        result = []
        for (var objective in objectiveSource) {
            if (objectiveSource.hasOwnProperty(objective)) {
                result.push(objectiveSource[objective]);
            }
        }
        return result;
    },
    getObjectivesInProgress: function() {
        return this.getObjectives(this.objectives.inProgress);
    },
    getObjectivesCompleted: function() {
        return this.getObjectives(this.objectives.completed);
    },
    getObjectivesFailed: function() {
        return this.getObjectives(this.objectives.failed);
    }

});
