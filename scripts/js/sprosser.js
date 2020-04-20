// *=========================================
// ** Sprosser page JS file **
// *=========================================

console.clear();
// Get play button and videos

const playButton = document.querySelector('.play-button');
const pauseButton = document.querySelector('.pause-button');
const videoButtonsWrapper = document.querySelector('.play-button-wrapper');
const allVideos = document.querySelectorAll('.sprosser-video');

// Play button click handler
function playButtonClickHandler() {
  allVideos.forEach(videos => {
    if (videos.paused || videos.ended) {
      videos.play();
      playButton.classList.add('hide-play-and-pause-button');
      playButton.addEventListener(
        'transitionend',
        () => {
          playButton.style.display = 'none';
          pauseButton.style.display = 'block';
        },
        { once: true }
      );
    }
  });
}

function pauseButtonClickHandler() {
  allVideos.forEach(videos => {
    pauseButton.style.display = 'none';
    playButton.style.display = 'block';
    setTimeout(() => playButton.classList.remove('hide-play-and-pause-button'), 100);
    videos.pause();
  });
}

// Add event listener to button
playButton.addEventListener('click', playButtonClickHandler);
pauseButton.addEventListener('click', pauseButtonClickHandler);
