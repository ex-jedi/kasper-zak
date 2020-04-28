// *=========================================
// ** About page  **
// *=========================================

// ********** Text Fade In **********

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

const fadeInParagraphs = document.querySelectorAll('.about-me-text-wrapper p');
fadeInParagraphs.forEach(paragraph => paragraph.classList.add('fade-in-text'));

const fadeInText = document.querySelectorAll('.fade-in-text');

// Loop through elements to add animation
fadeInText.forEach(function(text) {
  const sceneOne = new ScrollMagic.Scene({
    triggerElement: text,
    triggerHook: 0.75,
    // reverse: false,
  })
    .setClassToggle(text, 'fade-in-reveal')
    .addTo(controller);
});
