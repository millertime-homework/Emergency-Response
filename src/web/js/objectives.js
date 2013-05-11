/*
 * Objectives
 * Functions for setting and modifying objectives.
 */

$(document).ready(function() {
    $('#objective').click(function() {
        if (allowKeyEvents) {
            showObjectives();
        }
    });

    $('#game-over-show-objectives').click(function() {
        showObjectives();
    });

    $('#pause-view-objectives-button').click(function() {
        showObjectives();
    });

    $('#objectives-modal-go-back-game-over').click(function() {
        setGameState(GAME_STATE_OVER);
    });

    $('#objectives-modal-go-back-paused').click(function() {
        setGameState(GAME_STATE_RUNNING);
        setGameState(GAME_STATE_PAUSED);
    });

    $('#objectives-modal-close').click(function() {
        setGameState(GAME_STATE_RUNNING);
    });
});

function setObjective(name, displayText) {
    scenario.objectives.inProgress[name] = displayText || name;
    $('#objective ul').empty();
    $('#objective ul').append('<li id="{0}">{1}</li>'.format(name, scenario.objectives.inProgress[name]));
}

function completeObjective(name) {
    var objective = scenario.objectives.inProgress[name];
    if (objective) {
        scenario.objectives.completed[name] = objective;
        delete scenario.objectives.inProgress[name];
    }
    $('#objective').find('#' + name).remove();
}

function failObjective(name) {
    var objective = scenario.objectives.inProgress[name];
    if (objective) {
        scenario.objectives.failed[name] = objective;
        delete scenario.objectives.inProgress[name];
    }
    $('#objective').find('#' + name).remove();
}

function clearObjective() {
    $('#objective').find('ul').empty();
}

function showObjectives() {
    showObjectivesIn($('#objectives-modal #objectives-list'));
    setGameState(GAME_STATE_SHOW_OBJECTIVES);
}

function showObjectivesIn(element, markInProgressAsFailed) {
    var objectivesInProgress, objectivesCompleted, objectivesFailed;

    element.empty();

    if (scenario) {
        objectivesInProgress = scenario.getObjectivesInProgress();
        objectivesCompleted = scenario.getObjectivesCompleted();
        objectivesFailed = scenario.getObjectivesFailed();

        if (markInProgressAsFailed) {
            objectivesFailed = objectivesFailed.concat(objectivesInProgress);
            objectivesInProgress = [];
        }

        if (objectivesInProgress.length > 0) {
            showObjectives(element, objectivesInProgress, 'Current Objectives');
        }

        if (objectivesCompleted.length > 0) {
            showObjectives(element, objectivesCompleted, 'Completed Objectives');
        }

        if (objectivesFailed.length > 0) {
            showObjectives(element, objectivesFailed, 'Failed Objectives');
        }
    }

    function showObjectives(container, list, header) {
        var objectiveText;

        container.append('<span class="pause-header bold-colored-text">{0}</span><br>'.format(header));
        for (objectiveText in list) {
            if (list.hasOwnProperty(objectiveText)) {
                container.append('<span>{0}</span><br>'.format(list[objectiveText]));
            }
        }
        container.append('<p>');
    }
}

