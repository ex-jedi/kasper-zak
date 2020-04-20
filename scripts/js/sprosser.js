// *=========================================
// ** Sprosser page JS file **
// *=========================================

console.clear();
// Get play button and videos

const playButton = document.querySelector('.play-button');
const pauseButton = document.querySelector('.pause-button');
const videoButtonsWrapper = document.querySelector('.play-button-wrapper');
const allVideos = document.querySelectorAll('.sprosser-video');

// Video mouseover audio track selector
function videoMouseoverHandler(e) {
  const { target } = e;
  allVideos.forEach(video => {
    if (video !== target) {
      video.muted = true;
      video.style.borderColor = '#fff';
    }
    target.style.borderColor = '#f00';
    target.muted = false;
  });
}

// Play button click handler
function playButtonClickHandler() {
  allVideos.forEach(video => {
    if (video.paused || video.ended) {
      video.play();
      if (video.muted) {
        video.style.borderColor = '#fff';
      } else {
        video.style.borderColor = '#f00';
      }
      video.addEventListener('mouseover', videoMouseoverHandler);
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
  allVideos.forEach(video => {
    pauseButton.style.display = 'none';
    playButton.style.display = 'block';
    setTimeout(() => playButton.classList.remove('hide-play-and-pause-button'), 100);
    video.pause();
  });
}

// Add event listener to button
playButton.addEventListener('click', playButtonClickHandler);
pauseButton.addEventListener('click', pauseButtonClickHandler);
