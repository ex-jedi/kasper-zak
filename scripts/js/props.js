// *=========================================
// ** Props   **
// *=========================================

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
    triggerHook: 0.7,
    // reverse: false,
  })
    .setClassToggle(text, 'fade-in-reveal')
    .addIndicators({
      name: 'Text fade',
      colorTrigger: '#f00',
    })
    .addTo(controller);
});

// ********** Photo Fade In **********

const photoImageFadeIn = document.querySelectorAll('.props-image');

photoImageFadeIn.forEach(function(item) {
  const sceneTwo = new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: 0.6,
    // reverse: false,
  })
    .setClassToggle(item, 'photo-image-reveal')
    .addIndicators({
      name: 'Photo fade',
    })
    .addTo(controller);
});
