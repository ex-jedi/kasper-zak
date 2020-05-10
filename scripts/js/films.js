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

// * Other elements to control
const mainNav = document.querySelector('.main-nav');

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
    videoWrapper.style.background = "url('/images/black-background.svg')";
    videoButton.classList.add('hide-play-button');
    videoTitle.classList.add('hide-video-title');
    videoCounter.classList.add('hide-video-counter');
    mainNav.classList.add('hide-main-nav');
    videoActual.play();
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
  const videoPaused = videoWrapper.querySelector('.video');

  if (!videoPaused.seeking) {
    videoPaused.controls = false;
    videoButton.classList.remove('hide-play-button');
    videoTitle.classList.remove('hide-video-title');
    videoCounter.classList.remove('hide-video-counter');
    mainNav.classList.remove('hide-main-nav');
  }
}

video.forEach(elem => elem.addEventListener('pause', isPaused));
