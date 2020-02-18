// *=========================================
// ** Films page Js  **
// *=========================================
// *=========================================
// ** Video Controls  **
// *=========================================

// ********** Video control containers **********

const videoPlayButton = document.querySelectorAll('.play-button');

// Targents all video to remove controls on page load
const video = document.querySelectorAll('.video');

// In peril!
// const videoCounter = document.getElementById('video-counter');

// Hide default video controls
video.forEach(elem => {
  // eslint-disable-next-line no-param-reassign
  elem.controls = false;
});

// ********** Video control events **********

// * Play pause function
function playAndPause() {
  const videoTitle = this.parentNode.childNodes[1];
  const videoIcon = this;
  const videoActual = this.parentNode.childNodes[3];
  const videoCounter = this.parentNode.childNodes[7];

  // Play pause and controls
  if (videoActual.paused || videoActual.ended) {
    videoActual.controls = true;
    videoActual.play();
    videoIcon.classList.add('hide-play-button');
    videoTitle.classList.add('hide-video-title');
    videoCounter.classList.add('hide-video-counter');
  } else if (!video.seeking) {
    videoActual.pause();
  }
}

videoPlayButton.forEach(item => item.addEventListener('click', playAndPause));

// * Detect if video is paused
function isPaused() {
  // Hide controls unless user is seeking
  const videoPaused = this;
  const videoTitle = this.parentNode.childNodes[1];
  const videoIcon = this.parentNode.childNodes[5];
  const videoCounter = this.parentNode.childNodes[7];

  if (!videoPaused.seeking) {
    videoPaused.controls = false;
    videoIcon.classList.remove('hide-play-button');
    videoTitle.classList.remove('hide-video-title');
    videoCounter.classList.remove('hide-video-counter');
  }
}

video.forEach(elem => elem.addEventListener('pause', isPaused));
