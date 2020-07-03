// *=========================================
// ** 404 page  **
// *=========================================

// ********** Text Fade In **********

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

const fadeInImage = document.querySelectorAll('.four-oh-four-image');

// Loop through elements to add animation
const sceneOne = new ScrollMagic.Scene({
  triggerElement: fadeInImage,
  triggerHook: 0.7,
  reverse: false,
})
  .setClassToggle(fadeInImage, 'image-animation')
  .addTo(controller);
