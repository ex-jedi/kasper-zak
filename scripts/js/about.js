// *=========================================
// ** About page  **
// *=========================================

// ********** General Stuff **********

// * Adding focus outline class when tab key is used
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}

window.addEventListener('keydown', handleFirstTab);

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
    .addTo(controller);
});
