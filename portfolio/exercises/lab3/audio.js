var music = document.getElementById('audio_player');

function playAudio() {
    music.play();
    pButton.className = "";
    pButton.className = "pause";
  }
function pauseAudio() {
    music.pause();
    pButton.className = "";
    pButton.className = "play";
}
function setVolume(volume) {
   music.volume = volume;
}
