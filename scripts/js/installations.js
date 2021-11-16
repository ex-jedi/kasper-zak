// *=========================================
// ** Installations page JS file **
// *=========================================

// ********** Text Fade In **********

// * Init ScrollMagic
// eslint-disable-next-line no-undef
const controller = new ScrollMagic.Controller();

const fadeInText = document.querySelectorAll('.fade-in-text');
// Loop through elements to add animation
fadeInText.forEach(function(text) {
  const sceneOne = new ScrollMagic.Scene({
    triggerElement: text,
    triggerHook: 1,
    // reverse: false,
  })
    .setClassToggle(text, 'fade-in-text-reveal')
    .addTo(controller);
});

console.log('Hello');