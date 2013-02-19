var erg = erg || {};

jQuery(document).ready(function (jQuery) {
    erg.phone = {};
    erg.phone.menuHider;
    erg.phone.element = jQuery('#cell-phone');
    erg.phone.allContextMenus = jQuery('.phone-context');
    erg.phone.firstContextMenu = jQuery('#phone-context');
    erg.phone.secondContextMenu = jQuery('#phone-context-2');
    erg.phone.thirdContextMenu = jQuery('#phone-context-3');
    erg.controlsOverlay = jQuery('#controls-overlay');
    erg.phone.element.mouseenter(function() {
        jQuery('#phone-context').show();
        positionFirstContextMenu();
    });

    jQuery('#phone-context div div').live('mouseenter', function() {
        var group = jQuery(this).attr('id'),
            subMenuChildren = erg.phone.secondContextMenu.find('div.' + group);

        if (subMenuChildren.length > 0) {
            erg.phone.thirdContextMenu.hide();
            erg.phone.secondContextMenu.show();
            erg.phone.secondContextMenu.find('div div').hide();
            subMenuChildren.show();
            positionSubMenu(erg.phone.firstContextMenu, erg.phone.secondContextMenu, jQuery(this));
        }
    });

    jQuery('#phone-context-2 div div').live('mouseenter', function() {
        var group = jQuery(this).attr('id'),
            subMenuChildren = erg.phone.thirdContextMenu.find('div.' + group);

        if (subMenuChildren.length > 0) {
            erg.phone.thirdContextMenu.show();
            erg.phone.thirdContextMenu.find('div div').hide();
            subMenuChildren.show();
            positionSubMenu(erg.phone.secondContextMenu, erg.phone.thirdContextMenu, jQuery(this));
        }
    });

    erg.phone.allContextMenus.mouseenter(function() {
        window.clearTimeout(erg.phone.menuHider);
    });

    erg.phone.allContextMenus.mouseleave(function() {
        erg.phone.menuHider = setTimeout(function() {
            erg.phone.firstContextMenu.hide();
            erg.phone.secondContextMenu.hide();
            erg.phone.thirdContextMenu.hide();
        }, 500);
    });



    jQuery(document).on('phone-hide-ringer', function (event) {jQuery
        erg.phone.firstContextMenu.find('#ringer').hide();
    });

    jQuery(document).on('phone-show-ringer', function (event) {
        erg.phone.firstContextMenu.find('#ringer').show();
    });

    jQuery('#ringer-on').click(function() {
        erg.phone.firstContextMenu.find('#ringer').show();
        enabledTrigger('failedToSilencePhone');
        jQuery('#ringer-off').removeClass('selected');
        jQuery(this).addClass('selected');
    });

    jQuery('#ringer-off').click(function() {
        startTrigger('silencedPhone');
        disableTrigger('failedToSilencePhone');
        jQuery('#ringer-on').removeClass('selected');
        jQuery(this).addClass('selected');
    });


});

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