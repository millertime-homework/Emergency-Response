var erg = erg || {};

$(document).ready(function () {
    erg.phone = {};
    erg.phone.element = $('#cell-phone');
    erg.phone.allContextMenus = $('.phone-context');
    erg.phone.firstContextMenu = $('#phone-context');
    erg.phone.secondContextMenu = $('#phone-context-2');
    erg.phone.thirdContextMenu = $('#phone-context-3');
    erg.controlsOverlay = $('#controls-overlay');
    erg.phone.events = {};
    erg.phone.contextIterator = 0;

    erg.phone.element.mouseenter(function () {
        $('#phone-context').show();
        positionFirstContextMenu();
    });

    $('#phone-context div div').hover(function () {
        var group = $(this).attr('id');
        var subMenuChildren = erg.phone.secondContextMenu.find('div.' + group);

        if (subMenuChildren.length > 0) {
            erg.phone.thirdContextMenu.hide();
            erg.phone.secondContextMenu.show();
            erg.phone.secondContextMenu.find('div div').hide();
            subMenuChildren.show();
            positionSubMenu(erg.phone.firstContextMenu, erg.phone.secondContextMenu, $(this));
        }
    });

    $('#phone-context-2 div div').hover(function () {
        var group = $(this).attr('id');
        var subMenuChildren = erg.phone.thirdContextMenu.find('div.' + group);

        if (subMenuChildren.length > 0) {
            erg.phone.thirdContextMenu.show();
            erg.phone.thirdContextMenu.find('div div').hide();
            subMenuChildren.show();
            positionSubMenu(erg.phone.secondContextMenu, erg.phone.thirdContextMenu, $(this));
        }
    });

    $('.phone-context div div').click(function () {
        executeEvents($(this).attr('id'));
    });

    erg.phone.allContextMenus.mouseenter(function () {
        window.clearTimeout(erg.phone.menuHider);
    });

    erg.phone.allContextMenus.mouseleave(function () {
        erg.phone.menuHider = setTimeout(function () {
            closePhoneMenu();
        }, 500);
    });

    $(document).on('phoneHideRinger', function (event) {
        erg.phone.firstContextMenu.find('#ringer').hide();
    });

    $(document).on('phoneShowRinger', function (event) {
        erg.phone.firstContextMenu.find('#ringer').show();
    });

    $(document).on('attachEventsToPhone', function (event, menuItemId, triggerEvents) {
        attachEvents(menuItemId, triggerEvents);
    });

    $(document).on('detatchEventsFromPhone', function (event, menuItemId, eventIds) {
        var events, i;
        erg.phone.events[menuItemId] = erg.phone.events[menuItemId] || null;
        events = erg.phone.events[menuItemId];
        if (events) {
            for (i = 0; eventIds[i]; i++) {
                if (events[eventIds[i]]) {
                    delete events[eventIds[i]];
                }
            }
        }
    });

    $(document).on('addTextMessage', function (event, contactName, message) {
        addTextMessage(contactName, message);
    });

    $(document).on('addPhoneCall', function (event, contactName, conversationName) {
        addPhoneCall(contactName, conversationName);
    });

    $(document).on('removePhoneCall', function (event, contactName) {
        removePhoneCall(contactName);
    });

    $('.clear-highlight').hover(function() {
        erg.phone.shouldClearHighlight = true;
    });

    $('#ringer-on').click(function () {
        erg.phone.firstContextMenu.find('#ringer').show();
        resetPhone();
        closePhoneMenu();
    });

    $('#ringer-off').click(function () {
        startTrigger('silencedPhone');
        $('#ringer-on').removeClass('selected');
        $(this).addClass('selected');
        closePhoneMenu();
    });
});

function closePhoneMenu() {
    erg.phone.firstContextMenu.hide();
    erg.phone.secondContextMenu.hide();
    erg.phone.thirdContextMenu.hide();
    if (erg.phone.shouldClearHighlight) {
        $(this).removeClass('clear-highlight');
        $('.highlighted').removeClass('highlighted');
        $('#cell-phone').css('background', 'transparent url("web/img/phone.png")');
        erg.phone.shouldClearHighlight = false;
    }
}

function addContextHighlight(removeHighlightSelector, contextSelector, context2Selector, context3Selector) {
    $('#cell-phone').css('background', 'transparent url("web/img/phoneAlert.png")');
    $(contextSelector).addClass('highlighted');
    $(context2Selector).addClass('highlighted');
    $(context3Selector).addClass('highlighted');
    $(removeHighlightSelector).addClass('clear-highlight highlighted');
}

function addTextMessage(contactName, message) {
    var contactId = contactName.replace(/ /g,"_"),
        selector = ".text#" + contactId,
        messageId = "content" + erg.phone.contextIterator++;

    erg.phone.secondContextMenu.find('div.text#none').remove();

    if ($(selector).length === 0) {
        $('#text-contact-template').
                clone().
                appendTo($('#phone-context-2 div.phone-context-padder')).
                attr('id', contactId).
                text(contactName);
    }

    $('#text-message-template').
            clone().appendTo($('#phone-context-3 div.phone-context-padder')).
            attr('id', messageId).
            addClass(contactId).
            find('span').
            text(message);

    addContextHighlight(selector, '.phone-context #text', selector, "#" + messageId);
}

function addPhoneCall(contactName, conversationName) {
    var selector, contactId = contactName.replace(' ', '');
    selector = '.call#' + contactId;
    erg.phone.secondContextMenu.find('div.call#none').remove();
    erg.phone.secondContextMenu.find(selector).remove();

    $('#call-template').
            clone().
            appendTo($('#phone-context-2 div.phone-context-padder')).
            attr('id', contactId).
            text(contactName);

    attachEvents(contactId, {'showConversation' : {'func' : showConversation, 'args': [conversationName]}});
    addContextHighlight(selector, '.phone-context #call', selector);
}

function removePhoneCall(contactName) {
    var selector = '.call#' + contactId;
    $(selector).remove();
}

function attachEvents(menuItemId, triggerEvents) {
    var events, eventId, i;
    erg.phone.events[menuItemId] = erg.phone.events[menuItemId] || {};
    events = erg.phone.events[menuItemId];
    for (eventId in triggerEvents) {
        if (triggerEvents.hasOwnProperty(eventId)) {
            events[eventId] = {};
            events[eventId].func = triggerEvents[eventId].func;
            events[eventId].args = triggerEvents[eventId].args;
        }
    }
}

function executeEvents(menuItemId) {
    var eventId, events = erg.phone.events[menuItemId];
    if (events) {
        for (eventId in events) {
            if (events.hasOwnProperty(eventId)) {
                events[eventId].func.apply(this, events[eventId].args);
            }
        }
    }
}

function positionFirstContextMenu() {
    var contextTop, contextLeft, contextWidth, cellTop, cellLeft, cellMarginTop, cellMarginLeft;
    cellTop = erg.phone.element.position().top;
    cellLeft = erg.phone.element.position().left;
    cellMarginLeft = parseInt(parsePxValue(erg.phone.element.css('margin-left')));
    cellMarginTop = parseInt(parsePxValue(erg.phone.element.css('margin-top')));
    contextWidth = erg.phone.firstContextMenu.width();
    contextTop = cellTop + cellMarginTop;
    contextLeft = cellLeft - contextWidth + cellMarginLeft;
    erg.phone.firstContextMenu.css({
        'position': 'absolute',
        'top': contextTop + 'px',
        'left': contextLeft + 'px'
    });
}

function positionSubMenu(parentMenu, menu, selectedEntry) {
    var menuWidth, menuHeight, menuTop, selectedTop, parentMenuTop, parentMenuLeft;
    parentMenuTop = parentMenu.position().top;
    parentMenuLeft = parentMenu.position().left;
    selectedTop = selectedEntry.position().top;
    menuWidth = menu.width();
    menuHeight = menu.height();
    menuTop = parentMenuTop + selectedTop;

    if (menuTop + menuHeight + 10 > erg.controlsOverlay.height()) {
        menuTop = erg.controlsOverlay.height() - menuHeight - 10;
    }

    menu.css({
        'position': 'absolute',
        'top': menuTop + 'px',
        'left': parentMenuLeft - menuWidth - 10 + 'px'
    });
}

function initializeCellPhone() {
    var secondContextMenu = erg.phone.secondContextMenu.find('.phone-context-padder');
    erg.phone.events = {};
    erg.phone.thirdContextMenu.find('.phone-context-padder').empty();
    erg.phone.secondContextMenu.find('.call').remove();
    erg.phone.secondContextMenu.find('.text').remove();
    $('#no-call-template').clone().appendTo(secondContextMenu).attr('id', 'none');
    $('#no-text-template').clone().appendTo(secondContextMenu).attr('id', 'none');
}
