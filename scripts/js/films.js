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
  const parentElement = this.parentNode;
  const videoIcon = this;
  const videoTitle = parentElement.childNodes[1];
  const videoActual = parentElement.childNodes[3];
  const videoCounter = parentElement.childNodes[7];

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
  const parentElement = this.parentNode;

  const videoPaused = this;
  const videoTitle = parentElement.childNodes[1];
  const videoIcon = parentElement.childNodes[5];
  const videoCounter = parentElement.childNodes[7];

  if (!videoPaused.seeking) {
    videoPaused.controls = false;
    videoIcon.classList.remove('hide-play-button');
    videoTitle.classList.remove('hide-video-title');
    videoCounter.classList.remove('hide-video-counter');
  }
}

video.forEach(elem => elem.addEventListener('pause', isPaused));
