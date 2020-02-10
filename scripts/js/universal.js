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

// TODO - Put below into separate video page file

// *=========================================
// ** Video Controls  **
// *=========================================

// ********** Video control containers **********

const video = document.getElementById('video');
const videoTitle = document.getElementById('video-title');
const videoCounter = document.getElementById('video-counter');

// * Hide default video controls
video.controls = false;

// ********** Video control buttons **********

const playpause = document.getElementById('playpause');

// ********** Video control events **********

// * Play pause function
function playAndPause(e) {
  console.log(e);
  if (video.paused || video.ended) {
    video.controls = true;
    video.play();
    playpause.classList.add('hide-play-button');
    videoTitle.classList.add('hide-video-title');
    videoCounter.classList.add('hide-video-counter');
  } else {
    video.pause();
  }
}

playpause.addEventListener('click', playAndPause);

// * Detect if video is paused
function isPaused() {
  // Hide controls unless user is seeking
  if (!video.seeking) {
    video.controls = false;
    playpause.classList.remove('hide-play-button');
    videoTitle.classList.remove('hide-video-title');
    videoCounter.classList.remove('hide-video-counter');
  }
}

video.addEventListener('pause', isPaused);
