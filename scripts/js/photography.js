// *=========================================
// ** Photography  **
// *=========================================

// * Photo wipe
const controller = new ScrollMagic.Controller();
const photoImage = document.querySelectorAll('.photo-image');

photoImage.forEach(function(elem) {
  const sceneOne = new ScrollMagic.Scene({
    triggerElement: elem,
    triggerHook: 0.4,
    // reverse: false,
  })
    .setClassToggle(elem, 'photo-image-reveal')
    .addIndicators({
      name: 'photo',
      colorTrigger: '#f00',
    })
    .addTo(controller);
});
