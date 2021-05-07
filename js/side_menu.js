/*---side menu open close function start---*/
burger = document.querySelector('.burger')
burger1 = document.querySelector('.menu-btn')
burger2 = document.querySelector('.menu-btn')
burger3 = document.querySelector('.burger-1')

const menuBtn = document.querySelector('.l-navbar');

//menuBtn1 = document.querySelector('.menu-btn_burger');

menuBtn2 = document.querySelector('.menu-btn');

menuBtn3 = document.querySelector('body');

menu_scroll_top = document.querySelector('.l-navbar-2');



// side navbar burger
burger.addEventListener('click', () => {

    menuBtn.classList.add('open');
    // menuBtn1.classList.add('open');
    menuBtn2.classList.add('open');
    menuBtn3.classList.add('open');
});
// close nav burger
burger1.addEventListener('click', () => {

    menuBtn.classList.remove('open');
    //menuBtn1.classList.remove('open');
    menuBtn2.classList.remove('open');
    menuBtn3.classList.remove('open');

    menuBtn2.classList.add('fade_show');

    setTimeout(function () {
        menuBtn2.classList.remove('fade_show');
    }, 1000)

    // menu_scroll_bar_top 
    menu_scroll_top.scrollTop = 0;
    menu_scroll_top.scrollTop = 0;

});
// close nav burger
burger2.addEventListener('click', () => {

    menuBtn.classList.remove('open');
    // menuBtn1.classList.remove('open');
    menuBtn2.classList.remove('open');
    menuBtn3.classList.remove('open');

    menuBtn2.classList.add('fade_show');

    setTimeout(function () {
        menuBtn2.classList.remove('fade_show');
    }, 1000)

    // menu_scroll_bar_top 
    menu_scroll_top.scrollTop = 0;
    menu_scroll_top.scrollTop = 0;

});
// small nav bar burger
burger3.addEventListener('click', () => {

    menuBtn.classList.add('open');
    // menuBtn1.classList.add('open');
    menuBtn2.classList.add('open');
    menuBtn3.classList.add('open');
});

/*---side menu open close function start---*/

/*--function to detect left , right swipe start---*/

(function (window, document) {

    'use strict';

    // patch CustomEvent to allow constructor creation (IE/Chrome)
    if (typeof window.CustomEvent !== 'function') {

        window.CustomEvent = function (event, params) {

            params = params || { bubbles: false, cancelable: false, detail: undefined };

            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };

        window.CustomEvent.prototype = window.Event.prototype;
    }

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);

    var xDown = null;
    var yDown = null;
    var xDiff = null;
    var yDiff = null;
    var timeDown = null;
    var startEl = null;

    /**
     * Fires swiped event if swipe detected on touchend
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchEnd(e) {

        // if the user released on a different target, cancel!
        if (startEl !== e.target) return;

        var swipeThreshold = parseInt(getNearestAttribute(startEl, 'data-swipe-threshold', '20'), 10); // default 20px
        var swipeTimeout = parseInt(getNearestAttribute(startEl, 'data-swipe-timeout', '500'), 10);    // default 500ms
        var timeDiff = Date.now() - timeDown;
        var eventType = '';
        var changedTouches = e.changedTouches || e.touches || [];

        if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
            if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (xDiff > 0) {
                    eventType = 'swiped-left';
                }
                else {
                    eventType = 'swiped-right';
                }
            }
        }
        else if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
            if (yDiff > 0) {
                eventType = 'swiped-up';
            }
            else {
                eventType = 'swiped-down';
            }
        }

        if (eventType !== '') {

            var eventData = {
                dir: eventType.replace(/swiped-/, ''),
                xStart: parseInt(xDown, 10),
                xEnd: parseInt((changedTouches[0] || {}).clientX || -1, 10),
                yStart: parseInt(yDown, 10),
                yEnd: parseInt((changedTouches[0] || {}).clientY || -1, 10)
            };

            // fire `swiped` event event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent('swiped', { bubbles: true, cancelable: true, detail: eventData }));

            // fire `swiped-dir` event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true, detail: eventData }));
        }

        // reset values
        xDown = null;
        yDown = null;
        timeDown = null;
    }

    /**
     * Records current location on touchstart event
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchStart(e) {

        // if the element has data-swipe-ignore="true" we stop listening for swipe events
        if (e.target.getAttribute('data-swipe-ignore') === 'true') return;

        startEl = e.target;

        timeDown = Date.now();
        xDown = e.touches[0].clientX;
        yDown = e.touches[0].clientY;
        xDiff = 0;
        yDiff = 0;
    }

    /**
     * Records location diff in px on touchmove event
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchMove(e) {

        if (!xDown || !yDown) return;

        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;

        xDiff = xDown - xUp;
        yDiff = yDown - yUp;
    }

    /**
     * Gets attribute off HTML element or nearest parent
     * @param {object} el - HTML element to retrieve attribute from
     * @param {string} attributeName - name of the attribute
     * @param {any} defaultValue - default value to return if no match found
     * @returns {any} attribute value or defaultValue
     */
    function getNearestAttribute(el, attributeName, defaultValue) {

        // walk up the dom tree looking for data-action and data-trigger
        while (el && el !== document.documentElement) {

            var attributeValue = el.getAttribute(attributeName);

            if (attributeValue) {
                return attributeValue;
            }

            el = el.parentNode;
        }

        return defaultValue;
    }

}(window, document));

// swipe left to close menu

window.onload = function () {

    burger1.addEventListener('swiped-left', function (e) {
        burger1.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBtn3.classList.remove('open');
        //menuBtn1.classList.remove('open');

        menuBtn2.classList.add('fade_show');

        setTimeout(function () {
            menuBtn2.classList.remove('fade_show');
        }, 1000)

        // menu_scroll_bar_top 
        menu_scroll_top.scrollTop = 0;
        menu_scroll_top.scrollTop = 0;
    });

    menuBtn.addEventListener('swiped-left', function (e) {
        burger1.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBtn3.classList.remove('open');
        // menuBtn1.classList.remove('open');

        menuBtn2.classList.add('fade_show');

        setTimeout(function () {
            menuBtn2.classList.remove('fade_show');
        }, 1000)

        // menu_scroll_bar_top 
        menu_scroll_top.scrollTop = 0;
        menu_scroll_top.scrollTop = 0;
    });

}

/*--function to detect left , right swipe end ---*/
