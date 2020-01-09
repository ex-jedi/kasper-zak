// =========================================
// ** Vue Globals  **
// =========================================

const app = new Vue({
  el: '#vue-wrapper',
  data: {
    navPull: false,
    outlineHide: true,
    categoryReveal: false,
  },
});

// *=========================================
// ** Video Controls  **
// *=========================================

// ********** Video control containers **********

const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');

// * Hide default video controls
video.controls = false;

// ********** Video control buttons **********

const playpause = document.getElementById('playpause');
const stop = document.getElementById('stop');
const mute = document.getElementById('mute');
const volinc = document.getElementById('volinc');
const voldec = document.getElementById('voldec');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const fullscreen = document.getElementById('fs');

// ********** Video control events **********

// * Play pause function

function playAndPause() {
  if (video.paused || video.ended) {
    video.controls = true;
    video.play();
  } else {
    video.pause();
  }
}
playpause.addEventListener('click', playAndPause);

// * Detect if video is paused

function isPaused() {
  if (!video.seeking) video.controls = false;
}

video.addEventListener('pause', isPaused);
