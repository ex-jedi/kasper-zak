// *=========================================
// ** About page  **
// *=========================================

// ********** Text Fade In **********
console.log('Hello');

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

const fadeInParagraphs = document.querySelectorAll('.about-me-text-wrapper p');

const fadeInImage = document.querySelectorAll('.four-oh-four-image');

// Loop through elements to add animation
const sceneOne = new ScrollMagic.Scene({
  triggerElement: fadeInImage,
  triggerHook: 0.8,
  reverse: false,
})
  .setClassToggle(fadeInImage, 'image-animation')
  .addIndicators()
  .addTo(controller);
