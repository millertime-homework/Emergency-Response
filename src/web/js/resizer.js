//TODO Set these values in the CSS and derive them on initialization through jQuery.attr()
var erg = erg || {};
erg.FooterMinHeight = 30;
erg.FooterMaxHeight = 100;
erg.HeaderMinHeight = 50;
erg.HeaderMaxHeight = 100;
erg.BodyMinHeight = 358;
erg.BodyMaxHeight = 641;
erg.BodyMaxWidth = 1115;
erg.BodyMinWidth = erg.BodyMaxWidth * (erg.BodyMinHeight / erg.BodyMaxHeight);
erg.CurrentFooterHeight = erg.FooterMaxHeight;
erg.CurrentHeaderHeight = erg.HeaderMaxHeight;
erg.CurrentBodyHeight = erg.BodyMaxHeight;
erg.CurrentBodyWidth = erg.BodyMaxWidth;
erg.CurrentScale = 1;

function sizeWindow() {
    "use strict";
    var windowHeight, windowWidth, sidebar, sidebarWidth;
    windowHeight = jQuery(window).height();
    windowWidth = jQuery(window).width();
    sidebar = jQuery("#sidebar");
    sidebarWidth = sidebar ? sidebar.width() : 0;

    calculateCurrentWidths(windowWidth, sidebarWidth);
    calculateCurrentHeights(windowHeight);
    resolveBodySizeConstraints();
    applyCurrentHeights();
    applyCurrentWidths(sidebarWidth);
    scaleProps();

    if (gameState !== GAME_STATE_MENU) {
        reisizeSidebar(sidebar);
    } else {
        centerMainMenu(windowHeight);
    }
    if (jQuery('body').css('overflow') == 'hidden')
	scrollTo(0, 0);
}

function reisizeSidebar(sidebar) {
    "use strict";
    sidebar.css('left', erg.CurrentBodyWidth + 'px');
    jQuery('#map').css('height', (sidebar.height() - jQuery('#objective').height() - jQuery('#help').height() - 22) + 'px');
    centerMap();
}

function applyCurrentWidths(sidebarWidth) {
    "use strict";
    jQuery('.main-content-viewport').width(erg.CurrentBodyWidth);
    jQuery('#main-content').width(erg.CurrentBodyWidth + sidebarWidth);
}

function applyCurrentHeights() {
    "use strict";
    jQuery('#main-header').height(erg.CurrentHeaderHeight).css('min-height', erg.CurrentHeaderHeight + 'px');
    jQuery('#main-footer').height(erg.CurrentFooterHeight).css('min-height', erg.CurrentFooterHeight + 'px');
    jQuery('#main-content').height(erg.CurrentBodyHeight).css('min-height', erg.CurrentBodyHeight + 'px');

    //Resize the body's children, leaving some space for the margins. TODO: Remove hardcoded value.
    jQuery('.main-content-child').height(erg.CurrentBodyHeight - 30);
}

function resolveBodySizeConstraints() {
    "use strict";
    //Figure out whether height constrains width or width constrains height.
    var bodyWidthFromHeight = erg.BodyMaxWidth * erg.CurrentBodyHeight / erg.BodyMaxHeight;
    var bodyHeightFromWidth = erg.BodyMaxHeight * erg.CurrentBodyWidth / erg.BodyMaxWidth;
    erg.CurrentBodyWidth = Math.min(erg.CurrentBodyWidth, bodyWidthFromHeight);
    erg.CurrentBodyHeight = Math.min(erg.CurrentBodyHeight, bodyHeightFromWidth);
    erg.CurrentScale = erg.CurrentBodyWidth / erg.BodyMaxWidth;
}

function calculateCurrentHeights(windowHeight) {
    "use strict";
    jQuery('body').css('overflow', 'hidden');

    //Set reduced height if necessary, first taking from the footer, then from header, then from body.
    if (windowHeight >= erg.HeaderMaxHeight + erg.BodyMaxHeight + erg.FooterMaxHeight) {
        jQuery('#outer-container').css('margin-top', 'auto').css('margin-bottom', 'auto');
    } else if (windowHeight >= erg.HeaderMaxHeight + erg.BodyMaxHeight + erg.FooterMinHeight) {
        erg.CurrentFooterHeight = windowHeight - (erg.HeaderMaxHeight + erg.BodyMaxHeight);
    } else if (windowHeight >= erg.HeaderMinHeight + erg.BodyMaxHeight + erg.FooterMinHeight) {
        erg.CurrentFooterHeight = erg.FooterMinHeight;
        erg.CurrentHeaderHeight = windowHeight - (erg.BodyMaxHeight + erg.FooterMinHeight);
    } else if (windowHeight >= erg.HeaderMinHeight + erg.BodyMinHeight + erg.FooterMinHeight) {
        erg.CurrentFooterHeight = erg.FooterMinHeight;
        erg.CurrentHeaderHeight = erg.HeaderMinHeight;
        erg.CurrentBodyHeight = windowHeight - (erg.FooterMinHeight + erg.HeaderMinHeight);
    } else {
        jQuery('body').css('overflow', 'scroll');
        erg.CurrentHeaderHeight = erg.HeaderMinHeight;
        erg.CurrentBodyHeight = erg.BodyMinHeight;
        erg.CurrentFooterHeight = erg.FooterMinHeight;
    }
}

function calculateCurrentWidths(windowWidth, sidebarWidth) {
    "use strict";
    //Set reduced width if necessary.
    if (windowWidth >= erg.BodyMaxWidth + sidebarWidth) {
        erg.CurrentBodyWidth = erg.BodyMaxWidth;
    } else if (windowWidth >= erg.BodyMinWidth + sidebarWidth) {
        erg.CurrentBodyWidth = windowWidth - sidebarWidth - 40;
    } else {
        erg.CurrentBodyWidth = erg.BodyMinWidth;
        jQuery('body').css('overflow', 'scroll');
    }
}

function centerMainMenu(windowHeight) {
    "use strict";
    centerModal(jQuery('#main-menu'), windowHeight)
}

function centerModal(modalElement, windowHeight) {
    "use strict";
    var totalHeight;
    windowHeight = windowHeight || jQuery(window).height();
    totalHeight = erg.FooterMaxHeight + erg.FooterMinHeight + erg.BodyMaxHeight;
    modalElement.center();

    if (windowHeight > totalHeight) {
        modalElement.css('top', (totalHeight - modalElement.height()) / 2 + 'px');
    }

}

function scaleProps() {
    "use strict";
    var object;
    jQuery('.prop').each(function () {
        object = jQuery(this);
        object.css({
            'top' : erg.CurrentScale * parsePxValue(object.data('top')) + 'px',
            'left' : erg.CurrentScale * parsePxValue(object.data('left')) + 'px'
        }).children('img').css({
            'height' : erg.CurrentScale * parsePxValue(object.data('height')) + 'px',
            'width' : erg.CurrentScale * parsePxValue(object.data('width')) + 'px'
        });
    });
}

function parsePxValue(value) {
    "use strict";
    return isNaN(value) ? value.replace(' ', '').replace("px", '') : value;
}
