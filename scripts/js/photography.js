// *=========================================
// ** Photography  **
// *=========================================

// Main timeline
const tlOne = gsap.timeline({
  defaults: { duration: 0.5, ease: Back.easeOut.config(1) },
});

tlOne
  .fromTo(
    '.half-width-photo-image-one',
    { clipPath: 'inset(0% 100% 0% 0%)' },
    { clipPath: 'inset(0% 0% 0% 0%)' },
  )
  .fromTo(
    '.half-width-photo-image-two',
    { clipPath: 'inset(0% 100% 0% 0%)' },
    { clipPath: 'inset(0% 0% 0% 0%)' },
  );

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

const photoWrapper = document.querySelectorAll('.photo-wrapper');

photoWrapper.forEach(function(elem) {
  const sceneOne = new ScrollMagic.Scene({
    triggerElement: elem,
    triggerHook: 0.4,
    // reverse: false,
  })
    .setTween(tlOne)
    .addIndicators({
      name: 'photo',
      colorTrigger: '#f00',
    })
    .addTo(controller);
});
