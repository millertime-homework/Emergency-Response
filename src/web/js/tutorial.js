/*
 * Tutorial
 * A series of modals instructing the player on how the game works.
 */

var instrModalElement = null;
var instrModalInstructType = null;
var instrModalArrowType = null;
var instrModalContent = null;

// Each array provides an arg to the tutorial function.
var elements = ['#objective', '#map', '#inventory'];
var types = ['instruct-right', 'instruct-right', 'instruct-bottom'];
var aligns = ['align-top', 'align-bottom', 'align-right'];
var contents = [
    'This is the current objective. If you\'re not sure what to do next, look here.',
    'This is the mini-map. It\'s an overhead view of your surroundings. Each square represents ' +
    'a place you can walk to. The connectors between the squares indicate directions you can move.',
    'This is the inventory. You can click it to open it and see the items you\'re carrying. ' +
    'Some items in your inventory can be clicked on.'
];

jQuery(document).ready(function(jQuery) {
    // for starting the tutorial
    jQuery(document).on('startInstruction', function(event, triggerName) {
        setGameState(GAME_STATE_TUTORIAL);
        showNextTutorial();
    });

    // next button
    jQuery("#instruct-next-button").live('click', function() {
        showNextTutorial();
    });

    // exit button
    jQuery("#instruct-exit-button").live('click', function() {
        jQuery("#instruct-modal-wrapper").hide();
        setGameState(GAME_STATE_RUNNING);
    });
});

function moreTutorials() {
    return elements.length && types.length && aligns.length && contents.length;
}

function showNextTutorial() {
    if (moreTutorials()) {
        showInstructModal(elements.shift(), types.shift(), aligns.shift(), contents.shift());
    }
    if (!moreTutorials()) {
        jQuery("#instruct-next-button").hide();
    }
}

function showInstructModal(relativeElement, instructType, arrowAlign, content) {
    if (!(relativeElement instanceof HTMLElement)) {
        console.log('getting relative element from string');
        relativeElement = jQuery(relativeElement);
    }

    if (!relativeElement.length) {
        console.log('bad relative element');
        return false;
    }

    console.log('showInstructModal')
    if (!relativeElement || !instructType || !arrowAlign || !content) {
        console.log('invalid parameters')
        return false;
    }
    instructWrapper = jQuery('#instruct-modal-wrapper');
    if (!instructWrapper.length) {
        console.log('creating instruct modal...');
        instructWrapper = createInstructModal();
        if (!instructWrapper.length) {
            // something went wrong here.
            console.log('no wrapper');
            return false;
        }
    }
    instructModal = instructWrapper.find('#instruct-modal');
    if (!instructModal.length) {
        console.log('no modal');
        return false;
    }
    instructModal.removeClass();
    instructModal.addClass(instructType + ' ' + arrowAlign);
    instructModal.find('#content').html(content);

    console.log('done showing instruct modal');

    console.log('aligning instruct modal');

    instrModalElement = relativeElement;
    instrModalInstructType = instructType;
    instrModalArrowType = arrowAlign;
    instrModalContent = content;

    return alignInstructModalFromElement(relativeElement, instructType, arrowAlign);
}

/**
 * Prepends the instruct-modal html to the body
 *
 * <div id="instruct-modal-wrapper">
 *     <div id="instruct-modal" class="">
 *         <div id="content"></div>
 *         <div id="buttons">
 *             <div id="instruct-next-button"></div>
 *             <div id="instruct-exit-button"></div>
 *         </div>
 *         <div id="instruct-arrow"></div>
 *     </div>
 * </div>
 */
function createInstructModal() {
    instructWrapper = jQuery('#instruct-modal-wrapper');
    if (!instructWrapper.length) {
        jQuery('body').prepend('<div id="instruct-modal-wrapper"><div id="instruct-modal" class=""><div id="content"></div><div id="buttons"><div id="instruct-next-button">Next</div><div id="instruct-exit-button">Exit</div></div><div id="instruct-arrow"></div></div></div>');
    }
    return jQuery('#instruct-modal-wrapper');
}

function deleteInstructModal() {
    instructModal = jQuery('#instruct-modal-wrapper');
    if (instructModal.length) {
        instructModal.remove();
    }
     instrModalElement = null;
     instrModalInstructType = null;
     instrModalArrowType = null;
}

function alignInstructionModal() {
    if (instrModalElement && instrModalInstructType && instrModalArrowType && instrModalContent) {
        alignInstructModalFromElement(instrModalElement, instrModalInstructType, instrModalArrowType, instrModalContent);
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

    instructWrapper = jQuery('#instruct-modal-wrapper');
    instructModal = jQuery('#instruct-modal');

    element = jQuery(element);
    arrow = jQuery('#instruct-arrow');

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
                    instructWrapper.css('left', (elementPosition.left + elementWidth + arrowWidth + 'px'));
                    break;
            }
            break;
        case 'instruct-right':
            switch (arrowAlign) {
                case 'align-top':
                case 'align-middle':
                case 'align-bottom':
                    instructWrapper.css('left', (elementPosition.left - instructModalWidth - arrowWidth) + 'px');
                    break;

            }
            break;
        case 'instruct-top':
        case 'instruct-bottom':
            switch (arrowAlign) {
                case 'align-left':
                    instructWrapper.css('left', (elementPosition.left + (elementWidth/2) - (arrowWidth/2)) + 'px');
                    break;
                case 'align-middle':
                    instructWrapper.css('left', (elementPosition.left + (elementWidth/2) - (instructModalWidth/2)) + 'px');
                    break;
                case 'align-right':
                    instructWrapper.css('left', (elementPosition.left + (elementWidth/2) - instructModalWidth + (arrowWidth/2)) + 'px');
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
                    instructWrapper.css('top', (elementPosition.top  + (elementHeight/2) - (arrowHeight/2)) + 'px');
                    break;
                case 'align-middle':
                    instructWrapper.css('top', (elementPosition.top + (elementHeight/2) - (instructModalHeight/2)) + 'px');
                    break;
                case 'align-bottom':
                    instructWrapper.css('top', (elementPosition.top + (elementHeight/2) - instructModalHeight + (arrowHeight/2)) + 'px');
                    break;
            }
            break;
        case 'instruct-top':
            switch (arrowAlign) {
                case 'align-left':
                case 'align-middle':
                case 'align-right':
                    instructWrapper.css('top', (elementPosition.top + arrowHeight) + 'px');
                    break;
            }
            break;
        case 'instruct-bottom':
            switch (arrowAlign) {
                case 'align-left':
                case 'align-middle':
                case 'align-right':
                    instructWrapper.css('top', (elementPosition.top - instructModalHeight - arrowHeight) + 'px');
                    break;
            }
            break;
    }
    return true;
}
