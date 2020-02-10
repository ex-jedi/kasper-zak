// *=========================================
// ** Films page Js  **
// *=========================================
// *=========================================
// ** Video Controls  **
// *=========================================

// ********** Video control containers **********

const videoPlayButton = document.querySelectorAll('.play-button');
console.log('Play Button', videoPlayButton);

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
function playAndPause(e) {
  // Searcing for the things
  let videoTitle = this.parentNode.childNodes[1];
  // console.log('Video Title', videoTitle);

  let videoIcon = this;
  // console.log('Icon', videoIcon);

  let videoActual = this.parentNode.childNodes[3];
  // console.log('Video', videoActual);

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

// // * Detect if video is paused
// function isPaused() {
//   // Hide controls unless user is seeking
//   console.log('Paused', this);
//   if (!video.seeking) {
//     video.controls = false;

//   }
// }

// video.forEach(element => {
//   element.addEventListener('pause', isPaused);
// });
