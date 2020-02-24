// *=========================================
// ** Films page Js  **
// *=========================================
// *=========================================
// ** Video Controls  **
// *=========================================

// ********** Video control containers **********

const videoPlayButton = document.querySelectorAll('.play-button');

// Targets all video to remove controls on page load
const video = document.querySelectorAll('.video');

// Hide default video controls
video.forEach(elem => {
  // eslint-disable-next-line no-param-reassign
  elem.controls = false;
});

// ********** Video control events **********

// * Play pause function
function playAndPause() {
  const videoWrapper = this.parentElement;
  const videoActual = videoWrapper.querySelector('.video');
  const videoTitle = videoWrapper.querySelector('.video-title');
  const videoButton = this;
  const videoCounter = videoWrapper.querySelector('.video-counter');

  // Play pause and controls
  if (videoActual.paused || videoActual.ended) {
    videoActual.controls = true;
    videoActual.play();
    videoButton.classList.add('hide-play-button');
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
  const videoWrapper = this.parentElement;
  const videoTitle = videoWrapper.querySelector('.video-title');
  const videoButton = videoWrapper.querySelector('.play-button');
  const videoCounter = videoWrapper.querySelector('.video-counter');
  const videoPaused = this;

  if (!videoPaused.seeking) {
    videoPaused.controls = false;
    videoButton.classList.remove('hide-play-button');
    videoTitle.classList.remove('hide-video-title');
    videoCounter.classList.remove('hide-video-counter');
  }
}

video.forEach(elem => elem.addEventListener('pause', isPaused));
