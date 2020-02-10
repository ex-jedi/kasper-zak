// *=========================================
// ** Films page Js  **
// *=========================================
// *=========================================
// ** Video Controls  **
// *=========================================

// ********** Video control containers **********

// Targets all video wrappers for control functions
const videoWrapper = document.querySelectorAll('.video-wrapper');

// Targents all video to remove controls on page load
const video = document.querySelectorAll('.video');

// In peril!
const videoCounter = document.getElementById('video-counter');

// Hide default video controls
video.forEach(function(elem) {
  elem.controls = false;
});

// ********** Video control events **********

// * Play pause function
function playAndPause() {
  let actualVideo = this.childNodes[3];
  console.log('Video', actualVideo);

  let videoTitle = this.childNodes[1];
  // console.log('Title', videoTitle);

  let videoIcon = this.childNodes[5];
  // console.log('Icon', videoIcon);

  if (actualVideo.paused || actualVideo.ended) {
    actualVideo.play();
    actualVideo.controls = true;
    videoIcon.classList.add('hide-play-button');
    videoTitle.classList.add('hide-video-title');
    videoCounter.classList.add('hide-video-counter');
  } else {
    actualVideo.pause();
  }
}

// Adding controls function to video wrappers
videoWrapper.forEach(item => item.addEventListener('click', playAndPause));
