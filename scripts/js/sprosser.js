// *=========================================
// ** Sprosser page JS file **
// *=========================================

console.clear();
// Get play button and videos

const playButton = document.querySelector('.play-button');
const allVideos = document.querySelectorAll('.sprosser-video');
const videoOne = document.querySelector('.video-one');
const videoTwo = document.querySelector('.video-two');
const videoThree = document.querySelector('.video-three');
const videoFour = document.querySelector('.video-four');

// Play button click handler
function playButtonClickHandler() {
  allVideos.forEach(videos => {
    if (videos.paused || videos.ended) {
      videos.play();
    } else {
      videos.pause();
    }
  });
}

// Add event listener to button
playButton.addEventListener('click', playButtonClickHandler);
