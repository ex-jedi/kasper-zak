// *=========================================
// ** Props   **
// *=========================================

// ********** Text Fade In **********

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

const fadeInParagraphs = document.querySelectorAll('.installations-text-section p');
fadeInParagraphs.forEach(paragraph => paragraph.classList.add('fade-in'));
const fadeInText = document.querySelectorAll('.fade-in');

// Loop through elements to add animation
fadeInText.forEach(function(text) {
  const sceneOne = new ScrollMagic.Scene({
    triggerElement: text,
    triggerHook: 0.7,
    // reverse: false,
  })
    .setClassToggle(text, 'fade-in-reveal')
    .addIndicators()
    .addTo(controller);
});
