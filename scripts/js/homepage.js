// *=========================================
// ** Animations  **
// *=========================================

// ********** Homepage Triptych **********

const tlOne = gsap.timeline({
  defaults: { duration: 0.6, ease: Back.easeOut.config(1) },
});

tlOne
  .fromTo('.triptych-image-one', { xPercent: -100 }, { xPercent: 0 }, '+=1')
  .fromTo('.triptych-image-three', { xPercent: 100 }, { xPercent: 0 }, '-=0.2')
  .fromTo(
    '.triptych-image-two',
    { yPercent: 100, opacity: 0 },
    { yPercent: 0, opacity: 1, ease: Back.easeOut.config(2) },
    '-=0.2',
  );
