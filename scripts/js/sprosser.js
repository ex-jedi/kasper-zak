// *=========================================
// ** Sprosser page JS file **
// *=========================================

// ********** Text Fade In **********

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

const fadeInText = document.querySelectorAll('.sprosser-fade-in');
// Loop through elements to add animation
fadeInText.forEach(function(text) {
  const sceneOne = new ScrollMagic.Scene({
    triggerElement: text,
    triggerHook: 0.8,
    // reverse: false,
  })
    .setClassToggle(text, 'sprosser-fade-in-reveal')
    .addTo(controller);
});

// ********** Videos **********

// Get play button and videos
const playButton = document.querySelector('.play-button');
const pauseButton = document.querySelector('.pause-button');
const allVideos = Array.from(document.querySelectorAll('.sprosser-video'));

// Play audio of video on hover and mute the others
// Add border color to video with active audio
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
      // eslint-disable-next-line no-unused-expressions
      video.muted ? (video.style.borderColor = '#fff') : (video.style.borderColor = '#f00');
      playButton.classList.add('hide-play-and-pause-button');
      video.addEventListener('mouseover', videoMouseoverHandler);
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

function videosEndedHandler() {
  const ended = allVideos.every(video => video.ended);
  if (ended) pauseButtonClickHandler();
}

// Add event listener to play button
playButton.addEventListener('click', playButtonClickHandler);
// Add event listener to pause button
pauseButton.addEventListener('click', pauseButtonClickHandler);
// Add event listener to all videos
allVideos.forEach(video => video.addEventListener('ended', videosEndedHandler));
