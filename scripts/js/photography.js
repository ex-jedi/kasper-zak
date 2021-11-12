// *=========================================
// ** Photography  **
// *=========================================

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

const photoImage = document.querySelectorAll('.photo-image');

photoImage.forEach(function(item) {
  const sceneTwo = new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: 0.7,
    // reverse: false,
  })
    .setClassToggle(item, 'photo-image-reveal')
    .addTo(controller);
});
