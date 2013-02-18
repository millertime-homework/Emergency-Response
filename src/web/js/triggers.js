var scenario = scenario || {};
scenario.triggers = scenario.triggers || {};
scenario.triggers.pool = {};
scenario.triggers.waitingForSignal = {};
scenario.triggers.deferredByMoves = {};
scenario.triggers.deferredByTime = {};
scenario.triggers.deferredByObjectives = {};

//For use when loading/changing scenarios.
function clearAllTriggers() {
    scenario.triggers = {};
    scenario.triggers['disabled'] = {};
    scenario.triggers.pool = {};
    scenario.triggers.waitingForSignal = {};
    scenario.triggers.deferredByMoves = {};
    scenario.triggers.deferredByTime = {};
    scenario.triggers.deferredByObjectives = {};
}

//Called when the player class triggers an event signaling that the player has moved.
function triggersMovementHandler(x, y, z) {
    var triggers = scenario.getRoom(x, y, z).triggers;
    processWaitingForMoves();
    
    if (triggers) {
        triggers.map(startTrigger);
    }
};

function triggersObjectiveCompletionHandler(objectiveName) {
    var trigger, triggerName, waitingForObjectives, i;
    waitingForObjectives = scenario.triggers.deferredByObjectives;

    for (triggerName in waitingForObjectives) {
        if (waitingForObjectives.hasOwnProperty(triggerName)) {
            trigger = waitingForObjectives[triggerName];

            for (i in trigger.waitForObjectiveCompletions) {
                if (trigger.waitForObjectiveCompletions[i] === objectiveName) {
                    trigger.waitForObjectiveCompletions.splice(i,1);
                    break;
                }
            }

            if (trigger.waitForObjectiveCompletions.length === 0) {
                trigger.waitForObjectiveCompletions = null;
                delete scenario.triggers.deferredByObjectives[triggerName];
                runTrigger(triggerName, trigger);
            }
        }
    }
}

//This function can be called by anything that wants to start a trigger. All you need is a trigger name.
//Currently, only the Room class supports starting triggers from a scenario's defintion file, but you can
//manually call this with any valid trigger name.
function startTrigger(triggerName) {
    var activeTrigger, i, objectives,
        pooledTrigger = scenario.triggers.pool[triggerName];

    //If the trigger doesn't exist in the pool of available triggers there is nothing to do.
    if (!pooledTrigger) {
        return;
    }

    //Deep copy the trigger so that we can modify it without changing the trigger's
    //template (which may have more lives remaining)
    activeTrigger = jQuery.extend(true, {}, pooledTrigger);

    //Remove the trigger from the pool if this was its last/only life, else decrement its lives
    pooledTrigger.lives = pooledTrigger.lives ? --pooledTrigger.lives : 0;
    if (pooledTrigger.lives === 0) {
        delete scenario.triggers.pool[triggerName];
    }

    runTrigger(triggerName, activeTrigger);
    return triggerName;
}


/*---------------------All remaining functions are not meant to be called from the outside world-------------------------------*/

//Processes a trigger, waiting for a singal, for moves, or for time if the trigger is meant to wait, before executing it.
function runTrigger(triggerName, trigger) {
    if (trigger.waitForObjectiveCompletions) {
        scenario.triggers.deferredByObjectives[triggerName] = trigger;
        return;
    }

    if (trigger.waitForSignal === true) {

        //Important, because a signaled trigger will run through this function again to see if it needs to do a move and/or turn wait.
        delete trigger.waitForSignal;

        scenario.triggers.waitingForSignal[triggerName] = trigger;
        return;
    } else if (trigger.moveDelay > 0 && !isNaN(trigger.moveDelay)) {
        scenario.triggers.deferredByMoves[triggerName] = trigger;
        return;
    }

    if (trigger.timeDelay > 0 && !isNaN(trigger.timeDelay)) {
        scenario.triggers.deferredByTime[triggerName] = trigger;
        setTimeout(function () { executeTimeDelayedTriggerEvent(triggerName) }, trigger.timeDelay);
    } else {
        executeTriggerEvent(trigger);
    }

}

//A simple wrapper around executeTriggerEvent. Purpose is to ensure that the time-delayed triggers
//have not been aborted between the time they were initialized and the time they are supposed
//to start.
function executeTimeDelayedTriggerEvent(triggerName) {
    var trigger = scenario.triggers.deferredByTime[triggerName];

    if (trigger) {
        delete scenario.triggers.deferredByTime[triggerName];
        executeTriggerEvent(trigger);
    }
}

//Once we're here we know it's okay to do the trigger's event (if it has one). Will also
//send messages to other triggers if the current trigger has messages to send.
function executeTriggerEvent(trigger) {
    processTriggers(trigger);
    var events = trigger['events'] || []
    for (var eventName in events) {
        if (events.hasOwnProperty(eventName)) {
            var arguments = events[eventName]
            jQuery(document).trigger(eventName, arguments);
        }
    }
}

//Sends messages to other triggers, if any such messages exist.
function processTriggers(trigger) {
    var index;

    if (trigger.signalTriggers) {
        trigger.signalTriggers.map(signalTrigger)
    }

    if (trigger.deleteTriggers) {
        trigger.deleteTriggers.map(deleteTrigger)
    }

    if (trigger.abortTriggers) {
        trigger.abortTriggers.map(abortTrigger);
    }

    if (trigger.startTriggers) {
        trigger.startTriggers.map(startTrigger);
    }

    if (trigger.enableTriggers) {
        trigger.enableTriggers.map(enableTrigger);
    }

    if (trigger.startRandomTrigger) {
        index = Math.floor(Math.random() * (trigger.startRandomTrigger.length));
        startTrigger(trigger.startRandomTrigger[index]);
    }
}

//If any of the specified triggers are doing a time, move, or signal wait, they are not allowed to execute.
function abortTrigger(triggerName) {
    delete scenario.triggers.deferredByMoves[triggerName];
    delete scenario.triggers.deferredByTime[triggerName];
    delete scenario.triggers.waitingForSignal[triggerName];
    return triggerName;
}

function enableTrigger(triggerName) {
    var trigger = scenario.triggers['disabled'][triggerName];
    if (trigger) {
        trigger['disabled'] = false
        delete scenario.triggers['disabled'][triggerName];
        scenario.triggers.pool[triggerName] = trigger;
    }
}

//If any of the specified triggers are waiting on a signal, they are allowed to continue.
function signalTrigger(triggerName) {
    var trigger = scenario.triggers.waitingForSignal[triggerName];
    if (trigger) {
        delete scenario.triggers.waitingForSignal[triggerName];
        runTrigger(triggerName, trigger);
    }
    return triggerName;
}

//If any of the specified triggers are still in the pool of available triggers, they are removed permanently.
//Note that any previously activated triggers which are waiting for a signal, for moves, or for time, will remain in those states.
//You should abort the trigger in addition to deleting it if you want to ensure that, if the trigger may also
//be in one of those states, it will never run.
function deleteTrigger(triggerName) {
    delete scenario.triggers.pool[triggerName];
    return triggerName;
}

//Decrements the move counter on a trigger that is waiting for a certain number of moves to occur.
//Executes when the number of moves left reaches 0.
function processWaitingForMoves(trigger) {
    var deferredPool = scenario.triggers.deferredByMoves;
    var currentTrigger;
    for (var triggerName in deferredPool) {
        if (deferredPool.hasOwnProperty([triggerName])) {
            currentTrigger = deferredPool[triggerName];
            --currentTrigger.moveDelay;
            if (currentTrigger.moveDelay === 0) {
                delete scenario.triggers.deferredByMoves[triggerName];
                executeTriggerEvent(currentTrigger);
            }
        }
    }
}
