// *=========================================
// ** Sprosser page JS file **
// *=========================================

console.clear();
// Get play button and videos

const playButton = document.querySelector('.play-button');
const allVideos = document.querySelectorAll('.sprosser-video');

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
