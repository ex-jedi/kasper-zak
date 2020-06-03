// *=========================================
// ** About page  **
// *=========================================

// ********** General Stuff **********

// * matchMedia media queries
const mediaNineHundred = window.matchMedia('(max-width: 900px)');

// Responsive trigger hooks for ScrollMagic
let responsiveTriggerHookOne = 0.75;
if (mediaNineHundred.matches) {
  responsiveTriggerHookOne = 0.95;
}

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
    triggerHook: responsiveTriggerHookOne,
    // reverse: false,
  })
    .setClassToggle(text, 'fade-in-reveal')
    .addIndicators()
    .addTo(controller);
});
