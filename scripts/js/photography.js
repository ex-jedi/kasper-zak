// *=========================================
// ** Photography  **
// *=========================================

// Main timeline
const tlOne = gsap.timeline({
  defaults: { duration: 0.6, ease: Back.easeOut.config(1) },
});

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

const photoImage = document.querySelectorAll('.photo-image');

photoImage.forEach(function(item) {
  const sceneTwo = new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: 0.5,
    // reverse: false,
  })
    .addIndicators({
      name: 'photo',
      colorTrigger: '#f00',
    })
    .addTo(controller);
});
