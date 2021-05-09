const searchFormInput = document.querySelector("#myInputm"); // <=> document.querySelector("#search-form input");
const info = document.querySelector("#search_mice_info");
mic_voice_btn = document.querySelector('.search_mice_btn');

voice_serch_main_box = document.getElementById("voice_serch_main_box");
voice_serch_sub_box11 = document.getElementById('voice_serch_sub_box');


var voice_serach_var = 0;

// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if (SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");

  const recognition = new SpeechRecognition();
  recognition.continuous = true;

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
    if (recognition.stop()) {
      recognition.stop();
    }
    else {
      recognition.start();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    console.log("Voice activated, SPEAK");
    info.innerHTML = "Listening...";
    mic_voice_btn.classList.add('open')
    recognition.addEventListener("end", endSpeechRecognition);
  }

  //recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    console.log("Speech recognition service disconnected");
    info.innerHTML = "Try again";
    mic_voice_btn.classList.remove('open')
  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    info.innerHTML = transcript;
    recognition.stop();
  
    setTimeout(function () {
      mic_voice_btn.classList.remove('open')
      voice_serch_main_box.style.display = "none";
      voice_serch_sub_box11.style.display = "none";
      searchFormInput.value = transcript;
      getsearchvaluem();
      searchFormInput.focus();
    }, 2000)
  }

}
else {
  console.log("Your Browser does not support speech Recognition");
  info.innerHTML = "Your Browser does not support Speech Recognition";
}