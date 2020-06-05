// *=========================================
// ** Props   **
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
let responsiveTriggerHookOne = 0.6;
if (mediaNineHundred.matches) {
  responsiveTriggerHookOne = 0.8;
}

let responsiveTriggerHookTwo = 0.8;
if (mediaNineHundred.matches) {
  responsiveTriggerHookTwo = 1;
}

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

// ********** Text Fade In **********

const fadeInParagraphs = document.querySelectorAll('.installations-text-section p');
fadeInParagraphs.forEach(paragraph => paragraph.classList.add('fade-in'));
const fadeInText = document.querySelectorAll('.fade-in');

// Loop through elements to add animation
fadeInText.forEach(function(text) {
  const sceneOne = new ScrollMagic.Scene({
    triggerElement: text,
    triggerHook: responsiveTriggerHookTwo,
    // reverse: false,
  })
    .setClassToggle(text, 'fade-in-reveal')
    .addTo(controller);
});

// ********** Photo Fade In **********

const photoImageFadeIn = document.querySelectorAll('.props-image');

photoImageFadeIn.forEach(function(item) {
  const sceneTwo = new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: responsiveTriggerHookOne,
    // reverse: false,
  })
    .setClassToggle(item, 'photo-image-reveal')
    .addTo(controller);
});
