/*---onscroll change menu function start---*/
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

/*---onscroll change menu function end---*/

/*---drop down menu hover start---*/ 


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

/*---drop down menu hover end---*/ 

/*---custom scroll product bar start---*/

slide_btn1 = document.querySelector('.slide-left');
slide_btn2 = document.querySelector('.slide-right');

/*----------------------------------------1----------------------------------------*/

var getslide1 = document.getElementById("slide111");
var slidess1 = 0;
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

/*----------------------------------------2----------------------------------------*/

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

/*----------------------------------------3----------------------------------------*/

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

/*----------------------------------------4----------------------------------------*/

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

/*----------------------------------------5----------------------------------------*/

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


/*----------------------------------------6----------------------------------------*/


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



/*----------------------------------------7----------------------------------------*/

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


/*----------------------------------------8----------------------------------------*/


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


/*----------------------------------------9----------------------------------------*/

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


/*----------------------------------------10----------------------------------------*/

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

/*---custom scroll product bar end ---*/

/*---fullscreen mode start function ---*/
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

/*---fullscreen mode function end---*/

 
/*---backpage function start---*/

function back_page(){
    window.history.back();
  };
  
/*---backpage function  end---*/


/*---top scroll start function start---*/
function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*---top scroll start function end---*/
