const searchFormInput = document.querySelector("#myInputm");
const info = document.querySelector("#search_mice_info");

voice_search_btn = document.querySelector('.voice_search_btn');
mic_voice_btn = document.querySelector('.search_mice_btn');

voice_serch_main_box = document.getElementById("voice_serch_main_box");
voice_serch_sub_box11 = document.getElementById('voice_serch_sub_box');

var speechresult = '';
var resulttimeout;


var voice_serach_var = 0;

// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if (SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");
  voice_search_btn.style.display = "block";

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  function open_voice_search_box() {
    voice_serch_main_box.style.display = "block";
    voice_serch_sub_box11.style.display = "block";
    recognition.start();
  }

  function close_voice_search_box() {
    voice_serch_main_box.style.display = "none";
    voice_serch_sub_box11.style.display = "none";
    recognition.stop();
  }

  // voicesearch start stop
  function voice_search_start_stop() {
    if (mic_voice_btn.classList.contains('open')) {
      recognition.stop();
      speechresult = '';
      console.log("stope closing")
    }
    else {
      try {
        recognition.start();
      }
      catch (err) {
        console.log()
      }

    }
  }

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    console.log("Voice activated, SPEAK");
    info.innerHTML = "Listening...";
    voice_serch_main_box.style.display = "block";
    voice_serch_sub_box11.style.display = "block";
    mic_voice_btn.classList.add('open');

    clearTimeout(resulttimeout);
    //console.log("timeoutclear");
  }


  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {

    const transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

    info.innerHTML = transcript;
    speechresult = transcript;
  
    if (event.results[0].isFinal) {
      info.innerHTML = transcript;
      speechresult = transcript;

      resulttimeout = setTimeout(function () {
        searchFormInput.value = transcript;
        voice_serch_main_box.style.display = "none";
        voice_serch_sub_box11.style.display = "none";
        recognition.stop();
        searchFormInput.focus();
      }, 1200)
    }

  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    console.log("Speech recognition service disconnected");
    info.innerHTML = "Try again";
    mic_voice_btn.classList.remove('open');

    if (speechresult) {
      info.innerHTML = speechresult;
      speechresult = '';
    }
    else {
      info.innerHTML = "Try again";
      mic_voice_btn.classList.remove('open');
      speechresult = '';
      clearTimeout(resulttimeout);
    }
  }


}
else {
  console.log("Your Browser does not support speech Recognition");
  voice_search_btn.style.display = "none";
  //info.innerHTML = "Your Browser does not support Speech Recognition";
}
