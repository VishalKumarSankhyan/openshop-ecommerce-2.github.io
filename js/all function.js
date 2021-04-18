/// fullscreen mode start
fullscreen = document.documentElement;

fullscreen1 = document.querySelector('.full_screen')
closescreen1 = document.querySelector('.close_screen')

function openfullscreen(){
    if (fullscreen.requestFullscreen){
        fullscreen.requestFullscreen();
    }
    else if (fullscreen.webkitRequestFullscreen){
        fullscreen.webkitRequestFullscreen();
    }

    else if (fullscreen.msRequestFullscreen){
        fullscreen.msRequestFullscreen();
    }

    fullscreen1.style.display ="none";
    closescreen1.style.display ="block";

}

function closefullscreen(){
    if (document.exitFullscreen){
        document.exitFullscreen();
    }
    else if (document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }

    else if (document.msExitFullscreen){
        document.msExitFullscreen();
    }

    fullscreen1.style.display ="block";
    closescreen1.style.display ="none";
}




// fullscreen exit detect function start
if (fullscreen.addEventListener)
{
    fullscreen.addEventListener('fullscreenchange', exitHandler, false);
    fullscreen.addEventListener('mozfullscreenchange', exitHandler, false);
    fullscreen.addEventListener('MSFullscreenChange', exitHandler, false);
    fullscreen.addEventListener('webkitfullscreenchange', exitHandler, false);
}

function exitHandler()
{
 if (document.webkitIsFullScreen === false)
 {
    
    fullscreen1.style.display ="block";
    closescreen1.style.display ="none";

 }
 else if (document.mozFullScreen === false)
 {
    
    fullscreen1.style.display ="block";
    closescreen1.style.display ="none";
 }
 else if (document.msFullscreenElement === false)
 {
    
    fullscreen1.style.display ="block";
    closescreen1.style.display ="none";

 }
}  
// fullscreen exit detect function end

/// fullscreen mode end



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

    setTimeout(function(){
        menuBtn2.classList.remove('fade_show');
    },1100)

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

    setTimeout(function(){
        menuBtn2.classList.remove('fade_show');
    },1100)

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
//top scroll start 
//mybutton = document.getElementById("myBtn");
menun1 = document.querySelector('.burger');
menun2 = document.querySelector('.navbar-brand');
menun3 = document.querySelector('.main-nav');
menun4 = document.querySelector('.navbar');
menun5 = document.querySelector('.burger-1');
menun6 = document.querySelector('.main-nav-1');
menun7 = document.querySelector('body');
menun8 = document.querySelector('.can1 svg');

search_input = document.querySelector('.comment-2');
search_btn = document.querySelector('.search1');

window.onscroll = function () { scrollFuncion() };

function scrollFuncion() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        //mybutton.style.display = "block";
        menun1.classList.add('open');
        menun2.classList.add('open');
        menun3.classList.add('open');
        menun4.classList.add('open');
        menun5.classList.add('open');
        menun6.classList.add('open');
        menun8.classList.add('open');

        menun4.classList.add('navbar_sh');
        search_input.classList.add('open');
        search_btn.classList.add('open');

        menun4.classList.add('animation_1');

    }
    else {
        //mybutton.style.display = "none";
        menun1.classList.remove('open');
        menun2.classList.remove('open');
        menun3.classList.remove('open');
        menun4.classList.remove('open');
        menun5.classList.remove('open');
        menun6.classList.remove('open');
        menun8.classList.remove('open');

        menun4.classList.remove('navbar_sh');
        search_input.classList.remove('open');
        search_btn.classList.remove('open');
        
    }
}
//top scroll start
function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//top scroll end

//search clear start
c1 = document.querySelector('.can1');

function getsearchvalue() {
    var searchval = document.getElementById("myInput").value;
    if (searchval) {
        c1.classList.add('open');
    }
    else {
        c1.classList.remove('open');
    }
}

function clearsearch() {
    document.getElementById("myInput").value = '';
    getsearchvalue()
}
//search clear end

/*scroll left right start*/
/*
scr1 = document.querySelector('.containe');
bt1 = document.querySelector('.btn-left');
bt2 = document.querySelector('.btn-right');
scrollFuncion1()

var maxscrollleft = $(scr1).width() - 6.5;

scr1.onscroll = function () { scrollFuncion1() };
function scrollFuncion1() {
    if (scr1.scrollLeft > 30 || scr1.scrollLeft > 30) {
        bt1.classList.add('open');
    }
    else {
        bt1.classList.remove('open');
    }

    if (scr1.scrollLeft > maxscrollleft || scr1.scrollLeft > maxscrollleft) {
        bt2.classList.remove('open');
    }
    else {
        bt2.classList.add('open');
    }

}


var sc = 0;

function rightfunction() {
    sc += 50;
    scr1.scrollLeft = sc;
    scr1.scrollLeft = sc;
}

function leftfunction() {
    sc = sc - 50;
    scr1.scrollLeft = sc;
    scr1.scrollLeft = sc;
}

scroll left right end*/



/*scroll left right start 2

scr21 = document.querySelector('.containe2');
bt21 = document.querySelector('.btn2-left');
bt22 = document.querySelector('.btn2-right');
scrollFuncion2()

var maxscrollleft2 = $(scr21).width() - 6.5;

scr21.onscroll = function () { scrollFuncion2() };

function scrollFuncion2() {
    if (scr21.scrollLeft > 30 || scr21.scrollLeft > 30) {
        bt21.classList.add('open');
    }
    else {
        bt21.classList.remove('open');
    }

    if (scr21.scrollLeft > maxscrollleft2 || scr21.scrollLeft > maxscrollleft2) {
        bt22.classList.remove('open');
    }
    else {
        bt22.classList.add('open');
    }

}


var sc2 = 0;

function rightfunction2() {
    sc2 += 50;
    scr21.scrollLeft = sc2;
    scr21.scrollLeft = sc2;
}

function leftfunction2() {
    sc2 = sc2 - 50;
    scr21.scrollLeft = sc2;
    scr21.scrollLeft = sc2;
}

scroll left right 2 end*/

// drop down menu hover end


drop1 = document.querySelector('.d1');
m1 = document.querySelector('.s-1');


drop1.addEventListener('mouseover', function () {
    m1.classList.add('shoow');
})

drop1.addEventListener('mouseout', function () {
    m1.classList.remove('shoow')
})


drop2 = document.querySelector('.d2');
m2 = document.querySelector('.s-2');

z2 = document.querySelector('.s11');
drop2.addEventListener('mouseover', function () {
    m2.classList.add('shoow');
    z2.classList.add('s111');
})

drop2.addEventListener('mouseout', function () {
    m2.classList.remove('shoow');
    z2.classList.remove('s111');
})


// drop down menu hover end
/*
//product slider
$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 3; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }
});
//product slider

*/

slide_btn1 = document.querySelector('.slide-left');
slide_btn2 = document.querySelector('.slide-right');

var getslide1 = document.getElementById("slide111")


var product_slide_width = document.getElementById("v12")

var slidess1 = 0;
/*

var maxwidth11 = $(getslide1).width();
//var product_slide_width1 = window.innerWidth; 
//console.log(product_slide_width1);
var width_1 = $(product_slide_width).width();
console.log(width_1);

console.log(maxwidth11);

function getTranslate(){
    var style = window.getComputedStyle(getslide1);
    var matrix = new WebKitCSSMatrix(style.transform);

    console.log('translatex' ,matrix.m41);
}
*/


/*1*/

function slideright1() {
    if (slidess1 == -750){
        slidess1 = -750;
        getslide1.style.transform = "translateX(" + slidess1 + "px)";
        getslide1.classList.add('right_scroll_stop');

        setTimeout(function(){
            getslide1.classList.remove('right_scroll_stop');
        },1100)
        
    }
    else{
        slidess1 = slidess1 - 375;
        getslide1.style.transform = "translateX(" + slidess1 + "px)";
       
    }
}

function slideleft1() {
    if (slidess1 == 0) {
        getslide1.style.transform = "translateX(" + 0 + "px)";
        getslide1.classList.add('left_scroll_stop');

        setTimeout(function(){
            getslide1.classList.remove('left_scroll_stop');
        },1100)
    }
   
    else {
        slidess1 = slidess1 + 375;
        getslide1.style.transform = "translateX(" + slidess1 + "px)";
        
    }
}

/*2*/

var getslide2 = document.getElementById("slide112")
var slidess2 = 0;

function slideright2() {
    if (slidess2 == -750){
        slidess2 = -750;
        getslide2.style.transform = "translateX(" + slidess2 + "px)";
        getslide2.classList.add('right_scroll_stop');

        setTimeout(function(){
            getslide2.classList.remove('right_scroll_stop');
        },1100)
    }
    else{
        slidess2 = slidess2 - 375;
        getslide2.style.transform = "translateX(" + slidess2 + "px)";
    }
}

function slideleft2() {
    if (slidess2 == 0) {
        getslide2.style.transform = "translateX(" + 0 + "px)";
        getslide2.classList.add('left_scroll_stop');

        setTimeout(function(){
            getslide2.classList.remove('left_scroll_stop');
        },1100)
    }
   
    else {
        slidess2 = slidess2 + 375;
        getslide2.style.transform = "translateX(" + slidess2 + "px)";
    }

}

/*3*/

var getslide3 = document.getElementById("slide113")
var slidess3 = 0;

function slideright3(){
    
    
    if (slidess3 == -750){
        slidess3 = -750;
        getslide3.style.transform = "translateX(" + slidess3 + "px)";
        getslide3.classList.add('right_scroll_stop');
        setTimeout(function(){
            getslide3.classList.remove('right_scroll_stop');
        },1100)
        
    }
    else{
        slidess3 = slidess3 - 375;
        getslide3.style.transform = "translateX(" + slidess3 + "px)";
    }
    
}

function slideleft3(){
    if (slidess3 == 0) {
        getslide3.style.transform = "translateX(" + 0 + "px)";
        getslide3.classList.add('left_scroll_stop');
        setTimeout(function(){
            getslide3.classList.remove('left_scroll_stop');
        },1100)
    }
   
    else {
        slidess3 = slidess3 + 375;
        getslide3.style.transform = "translateX(" + slidess3 + "px)";
    }

}

/*4*/

var getslide4 = document.getElementById("slide114")
var slidess4 = 0;

function slideright4(){
    
    
    if (slidess4 == -750){
        slidess4 = -750;
        getslide4.style.transform = "translateX(" + slidess4 + "px)";
        getslide4.classList.add('right_scroll_stop');
        setTimeout(function(){
            getslide4.classList.remove('right_scroll_stop');
        },1100)
        
    }
    else{
        slidess4 = slidess4 - 375;
        getslide4.style.transform = "translateX(" + slidess4 + "px)";
    }
    
}

function slideleft4(){
    if (slidess4 == 0) {
        getslide4.style.transform = "translateX(" + 0 + "px)";
        getslide4.classList.add('left_scroll_stop');
        setTimeout(function(){
            getslide4.classList.remove('left_scroll_stop');
        },1100)
    }
   
    else {
        slidess4 = slidess4 + 375;
        getslide4.style.transform = "translateX(" + slidess4 + "px)";
    }

}

/*5*/

var getslide5 = document.getElementById("slide115")
var slidess5 = 0;

function slideright5(){
    
    
    if (slidess5 == -750){
        slidess5 = -750;
        getslide5.style.transform = "translateX(" + slidess5 + "px)";
        getslide5.classList.add('right_scroll_stop');
        setTimeout(function(){
            getslide5.classList.remove('right_scroll_stop');
        },1100)
        
    }
    else{
        slidess5 = slidess5 - 375;
        getslide5.style.transform = "translateX(" + slidess5 + "px)";
    }
    
}

function slideleft5(){
    if (slidess5 == 0) {
        getslide5.style.transform = "translateX(" + 0 + "px)";
        getslide5.classList.add('left_scroll_stop');
        setTimeout(function(){
            getslide5.classList.remove('left_scroll_stop');
        },1100)
    }
   
    else {
        slidess5 = slidess5 + 375;
        getslide5.style.transform = "translateX(" + slidess5 + "px)";
    }

}


/*6*/


var getslide6 = document.getElementById("slide116")
var slidess6 = 0;

function slideright6(){
    
    
    if (slidess6 == -750){
        slidess6 = -750;
        getslide6.style.transform = "translateX(" + slidess6 + "px)";
        getslide6.classList.add('right_scroll_stop');
        setTimeout(function(){
            getslide6.classList.remove('right_scroll_stop');
        },1100)
        
    }
    else{
        slidess6 = slidess6 - 375;
        getslide6.style.transform = "translateX(" + slidess6 + "px)";
    }
    
}

function slideleft6(){
    if (slidess6 == 0) {
        getslide6.style.transform = "translateX(" + 0 + "px)";
        getslide6.classList.add('left_scroll_stop');
        setTimeout(function(){
            getslide6.classList.remove('left_scroll_stop');
        },1100)
    }
   
    else {
        slidess6 = slidess6 + 375;
        getslide6.style.transform = "translateX(" + slidess6 + "px)";
    }

}



/*7*/

var getslide7 = document.getElementById("slide117")
var slidess7 = 0;

function slideright7(){
    
    
    if (slidess7 == -750){
        slidess7 = -750;
        getslide7.style.transform = "translateX(" + slidess7 + "px)";
        getslide7.classList.add('right_scroll_stop');
        setTimeout(function(){
            getslide7.classList.remove('right_scroll_stop');
        },1100)
        
    }
    else{
        slidess7 = slidess7 - 375;
        getslide7.style.transform = "translateX(" + slidess7 + "px)";
    }
    
}

function slideleft7(){
    if (slidess7 == 0) {
        getslide7.style.transform = "translateX(" + 0 + "px)";
        getslide7.classList.add('left_scroll_stop');
        setTimeout(function(){
            getslide7.classList.remove('left_scroll_stop');
        },1100)
    }
   
    else {
        slidess7 = slidess7 + 375;
        getslide7.style.transform = "translateX(" + slidess7 + "px)";
    }

}


/*8*/


var getslide8 = document.getElementById("slide118")
var slidess8 = 0;

function slideright8(){
    
    
    if (slidess8 == -750){
        slidess8 = -750;
        getslide8.style.transform = "translateX(" + slidess8 + "px)";
        getslide8.classList.add('right_scroll_stop');
        setTimeout(function(){
            getslide8.classList.remove('right_scroll_stop');
        },1100)
        
    }
    else{
        slidess8 = slidess8 - 375;
        getslide8.style.transform = "translateX(" + slidess8 + "px)";
    }
    
}

function slideleft8(){
    if (slidess8 == 0) {
        getslide8.style.transform = "translateX(" + 0 + "px)";
        getslide8.classList.add('left_scroll_stop');
        setTimeout(function(){
            getslide8.classList.remove('left_scroll_stop');
        },1100)
    }
   
    else {
        slidess8 = slidess8 + 375;
        getslide8.style.transform = "translateX(" + slidess8 + "px)";
    }

}


/*9*/

var getslide9 = document.getElementById("slide119")
var slidess9 = 0;

function slideright9(){
    
    
    if (slidess9 == -750){
        slidess9 = -750;
        getslide9.style.transform = "translateX(" + slidess9 + "px)";
        getslide9.classList.add('right_scroll_stop');
        setTimeout(function(){
            getslide9.classList.remove('right_scroll_stop');
        },1100)
        
    }
    else{
        slidess9 = slidess9 - 375;
        getslide9.style.transform = "translateX(" + slidess9 + "px)";
    }
    
}

function slideleft9(){
    if (slidess9 == 0) {
        getslide9.style.transform = "translateX(" + 0 + "px)";
        getslide9.classList.add('left_scroll_stop');
        setTimeout(function(){
            getslide9.classList.remove('left_scroll_stop');
        },1100)
    }
   
    else {
        slidess9 = slidess9 + 375;
        getslide9.style.transform = "translateX(" + slidess9 + "px)";
    }

}


/*10*/

var getslide10 = document.getElementById("slide1110")
var slidess10 = 0;

function slideright10(){
    
    
    if (slidess10 == -750){
        slidess10 = -750;
        getslide10.style.transform = "translateX(" + slidess10 + "px)";
        getslide10.classList.add('right_scroll_stop');
        setTimeout(function(){
            getslide10.classList.remove('right_scroll_stop');
        },1100)
        
    }
    else{
        slidess10 = slidess10 - 375;
        getslide10.style.transform = "translateX(" + slidess10 + "px)";
    }
    
}

function slideleft10(){
    if (slidess10 == 0) {
        getslide10.style.transform = "translateX(" + 0 + "px)";
        getslide10.classList.add('left_scroll_stop');
        setTimeout(function(){
            getslide10.classList.remove('left_scroll_stop');
        },1100)
    }
   
    else {
        slidess10 = slidess10 + 375;
        getslide10.style.transform = "translateX(" + slidess10 + "px)";
    }

}

 

/*--function to detect left right up down swipe in---*/
 
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

        setTimeout(function(){
            menuBtn2.classList.remove('fade_show');
        },1100)

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

        setTimeout(function(){
            menuBtn2.classList.remove('fade_show');
        },1100)

        // menu_scroll_bar_top 
        menu_scroll_top.scrollTop = 0;  
        menu_scroll_top.scrollTop = 0;
    });

}
