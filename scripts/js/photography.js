// *=========================================
// ** Photography  **
// *=========================================

// * Photo wipe
const controller = new ScrollMagic.Controller();
const photoImage = document.querySelectorAll('.photo-image');

photoImage.forEach(function(elem) {
  const sceneOne = new ScrollMagic.Scene({
    triggerElement: elem.parentElement,
    triggerHook: 0.4,
  })
    .setClassToggle(elem, 'photo-image-reveal')
    .addIndicators({
      name: 'photo',
      colorTrigger: '#f00',
    })
    .addTo(controller);
});

// * Parallax
const parallaxTl = gsap.timeline();
parallaxTl.from(photoImage, 2, { y: '-75px', ease: 'none' }, 0);

photoImage.forEach(function(elem) {
  const slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: elem.parentElement,
    triggerHook: 0.2,
    duration: '100%',
  })
    .setTween(parallaxTl)
    .addTo(controller);
});
