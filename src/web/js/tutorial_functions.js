/*
 * Tutorial
 * A series of modals instructing the player on how the game works.
 */

var instrModalElement = null;
var instrModalInstructType = null;
var instrModalArrowType = null;
var instrModalContent = null;

var TutorialInfo = function(name, e, t, a, c, n) {
    this.name    = name;
    this.element = e;
    this.type    = t;
    this.align   = a;
    this.content = c;
    this.next    = n;
}

var tutorialParts = [];
tutorialParts.push(new TutorialInfo(
    'objective',
    '#objective',
    'instruct-right',
    'align-top',
    'This is the current objective. If you\'re not sure what to do next, look here.',
    true
));
tutorialParts.push(new TutorialInfo(
    'map',
    '#map',
    'instruct-right',
    'align-bottom',
    'This is the mini-map. It\'s an overhead view of your surroundings. Each square represents ' +
        'a place you can walk. The connectors between the squares indicate directions you can move.',
    true
));
tutorialParts.push(new TutorialInfo(
    'moveForward',
    '#move-forward',
    'instruct-left',
    'align-top',
    'This is an arrow to move forward. Try clicking this. Or press the up arrow key on the keyboard. ' +
        'But first press Exit below.'
));
tutorialParts.push(new TutorialInfo(
    'inventory',
    '#inventory',
    'instruct-bottom',
    'align-right',
    'This is the inventory. You can click it to open it and see the items you\'re carrying. ' +
        'Some items in your inventory can be clicked on.'
));

$(document).ready(function() {
    // for starting the tutorial
    $(document).on('showTutorial', function(event, triggerName) {
        setGameState(GAME_STATE_TUTORIAL);
        showNextTutorial();
    });

    // next button
    $("body").on("click", "#instruct-next-button", showNextTutorial);

    // exit button
    $("body").on("click", "#instruct-exit-button", function() {
        $("#instruct-modal").hide();
        setGameState(GAME_STATE_RUNNING);
    });
});

function showNextTutorial() {
    if (tutorialParts) {
        var nextTutorial = tutorialParts.shift();
        showInstructModal(nextTutorial.element,
                          nextTutorial.type,
                          nextTutorial.align,
                          nextTutorial.content);
        if (!nextTutorial.next) {
            $("#instruct-next-button").hide();
        }
    }
}

function showInstructModal(relativeElement, instructType, arrowAlign, content) {
    if (!(relativeElement.nodeType === 1)) {
        relativeElement = $(relativeElement);
    }

    if (!relativeElement.length) {
        console.log('showInstructModal: bad relative element');
        return false;
    }

    if (!relativeElement || !instructType || !arrowAlign || !content) {
        console.log('showInstructModal: invalid parameters');
        return false;
    }
    instructModal = $('#instruct-modal');
    instructModal.removeClass();
    instructModal.addClass(instructType + ' ' + arrowAlign);
    instructModal.find('#content').html(content);
    instructModal.show();

    instrModalElement = relativeElement;
    instrModalInstructType = instructType;
    instrModalArrowType = arrowAlign;
    instrModalContent = content;

    return alignInstructModalFromElement(relativeElement, instructType, arrowAlign);
}

function alignInstructionModal() {
    if (instrModalElement && instrModalInstructType &&
        instrModalArrowType && instrModalContent) {
        alignInstructModalFromElement(
            instrModalElement, instrModalInstructType,
            instrModalArrowType, instrModalContent
        );
    }
}

/**
 * Aligns the instruct-modal according to the position of an element,
 * the instruction-modal type, and arrow alignment.
 * @param element
 *      The document object that the instruct-modal will aligned with.
 * @param instructType
 *      instruct-left, instruct-right, instruct-top, or instruct-bottom
 * @param arrowAlign:
 *      For instructType instruct-left or instruct-right, must be align-left, align-middle or align-right.
 *      For instructType instruct-top or instruct-bottom, must be align-top, align-middle or align-bottom.
 */
function alignInstructModalFromElement(element, instructType, arrowAlign) {
    if (!element.length) {
        return false;
    }

    instructModal = $('#instruct-modal');

    element = $(element);
    arrow = $('#instruct-arrow');

    instructModalWidth = instructModal.width();
    instructModalHeight = instructModal.height();

    elementPosition = element.offset();
    elementWidth = element.width();
    elementHeight = element.height();

    arrowWidth = arrow.width();
    arrowHeight = arrow.height();

    // Align Left
    switch (instructType) {
        case 'instruct-left':
            switch (arrowAlign) {
                case 'align-top':
                case 'align-middle':
                case 'align-bottom':
                    instructModal.css(
                        'left',
                        (elementPosition.left + elementWidth + arrowWidth + 'px')
                    );
                    break;
            }
            break;
        case 'instruct-right':
            switch (arrowAlign) {
                case 'align-top':
                case 'align-middle':
                case 'align-bottom':
                    instructModal.css(
                        'left',
                        (elementPosition.left - instructModalWidth - arrowWidth) + 'px'
                    );
                    break;

            }
            break;
        case 'instruct-top':
        case 'instruct-bottom':
            switch (arrowAlign) {
                case 'align-left':
                    instructModal.css(
                        'left',
                        (elementPosition.left + (elementWidth/2) - (arrowWidth/2)) + 'px'
                    );
                    break;
                case 'align-middle':
                    instructModal.css(
                        'left',
                        (elementPosition.left + (elementWidth/2) - (instructModalWidth/2)) + 'px'
                    );
                    break;
                case 'align-right':
                    instructModal.css(
                        'left',
                        (elementPosition.left + (elementWidth/2) - instructModalWidth + (arrowWidth/2)) + 'px'
                    );
                    break;
            }
            break;
    }

    // Align Top
    switch (instructType) {
        case 'instruct-left':
        case 'instruct-right':
            switch (arrowAlign) {
                case 'align-top':
                    instructModal.css(
                        'top',
                        (elementPosition.top  + (elementHeight/2) - (arrowHeight/2)) + 'px'
                    );
                    break;
                case 'align-middle':
                    instructModal.css(
                        'top',
                        (elementPosition.top + (elementHeight/2) - (instructModalHeight/2)) + 'px'
                    );
                    break;
                case 'align-bottom':
                    instructModal.css(
                        'top',
                        (elementPosition.top + (elementHeight/2) - instructModalHeight + (arrowHeight/2)) + 'px'
                    );
                    break;
            }
            break;
        case 'instruct-top':
            switch (arrowAlign) {
                case 'align-left':
                case 'align-middle':
                case 'align-right':
                    instructModal.css(
                        'top',
                        (elementPosition.top + arrowHeight) + 'px'
                    );
                    break;
            }
            break;
        case 'instruct-bottom':
            switch (arrowAlign) {
                case 'align-left':
                case 'align-middle':
                case 'align-right':
                    instructModal.css(
                        'top',
                        (elementPosition.top - instructModalHeight - arrowHeight) + 'px'
                    );
                    break;
            }
            break;
    }
    return true;
}
