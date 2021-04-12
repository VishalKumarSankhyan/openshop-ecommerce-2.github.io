$("#demo").carousel(0); 
$("#demo .carousel-indicators li").hover(function(){
  var goto = Number( $(this).attr('data-slide-to') );
  $("#demo").carousel(goto);  
});

carsoul_1 = document.querySelector('.carousel_desktop');

function myFunction(x) {
    if (x.matches) { // If media query matches
        carsoul_1.classList.remove('carousel-fade');
    } else {
        carsoul_1.classList.add('carousel-fade');
    }
  }
  
  var x = window.matchMedia("(max-width: 992px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

/* --------play pause replay skip start--------*/
var video_var =document.getElementById('product_video');
carsoul_stop_start =document.getElementById('demo');

play = document.querySelector('.play_button');
pause = document.querySelector('.pause_button');
replay = document.querySelector('.replay_button');
play_pause_var=0;

// play pause start
function play_pause(){
  var z = window.matchMedia("(max-width: 992px)")
    if (video_var.paused) {
      if (z.matches) { // If media query matches
        play.style.display ="none";
        pause.style.display ="none";
        video_var.play();
      }
      else{
        play.style.display ="none";
        pause.style.display ="block";
        video_var.play();
      }

    } 
    else {
      if (z.matches) { // If media query matches
        play.style.display ="none";
        pause.style.display ="none";
        video_var.pause();
      }
      else{
        play.style.display ="block";
        pause.style.display ="none";
        video_var.pause();
      }
    }
}

video_var.addEventListener('ended',function(){
  play.style.display ="block";
  pause.style.display ="none";
})

// play pause end