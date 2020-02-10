// *=========================================
// ** Films page Js  **
// *=========================================
// *=========================================
// ** Video Controls  **
// *=========================================

const filmsApp = new Vue({
  el: '#vue-films-wrapper',
  data: {
    switch: false,
  },
  methods: {
    pluggedIn() {
      alert('hi');
    },
  },
});

// ********** Video control containers **********

// var video = document.querySelectorAll('.video');
// console.log(video);
// const videoTitle = document.querySelectorAll('.video-title');
// const videoCounter = document.getElementById('video-counter');

// // * Hide default video controls
// video.controls = false;

// // ********** Video control buttons **********

// const playpause = document.querySelectorAll('.video-player-icon');

// // ********** Video control events **********

// // * Play pause function
// function playAndPause(e) {
//   console.log(e);
//   if (video.paused || video.ended) {
//     this.video.controls = true;
//     this.video.play();
//     this.playpause.classList.add('hide-play-button');
//     this.videoTitle.classList.add('hide-video-title');
//     this.videoCounter.classList.add('hide-video-counter');
//   } else {
//     this.video.pause();
//   }
// }

// video.forEach(item => item.addEventListener('click', playAndPause));

// // * Detect if video is paused
// function isPaused() {
//   // Hide controls unless user is seeking
//   if (!video.seeking) {
//     video.controls = false;
//     playpause.classList.remove('hide-play-button');
//     videoTitle.classList.remove('hide-video-title');
//     videoCounter.classList.remove('hide-video-counter');
//   }
// }

// video.addEventListener('pause', isPaused);
