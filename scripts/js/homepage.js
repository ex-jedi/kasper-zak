// *=========================================
// ** Animations  **
// *=========================================

// ********** Homepage Triptych **********

const tlOne = gsap.timeline({
  defaults: { duration: 0.6, ease: Back.easeOut.config(1) },
});

tlOne
  .fromTo(
    '.triptych-image-one',
    { xPercent: -100 },
    { xPercent: 0, opacity: 1 },
    '+=1',
  )
  .fromTo(
    '.triptych-image-three',
    { xPercent: 100 },
    { xPercent: 0, opacity: 1 },
    '-=0.2',
  )
  .addLabel('togetherness', '-=.3')
  .fromTo(
    '.triptych-image-two',
    { opacity: 0 },
    { opacity: 1, duration: 1.5, ease: 'none' },
    'togetherness',
  )
  .fromTo(
    '.triptych-image-two',
    { yPercent: 100 },
    { yPercent: 0, duration: 2, ease: 'elastic.out(1, 0.3)' },
    'togetherness',
  );

// ********** Intro Paragraphs **********

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

// Collect elements to fade in
const introParagraphs = document.querySelectorAll(
  '.homepage-intro-text-paragraph',
);
// For indicators in the scene
let counter = 1;

introParagraphs.forEach(function(item) {
  const sceneOne = new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: 0.6,
    // reverse: false,
  })
    .setClassToggle(item, 'fade-in')
    .addIndicators({
      name: `fade Scene ${counter}`,
      colorTrigger: 'black',
      colorStart: '#f00',
    }) // Requires a plugin
    .addTo(controller);

  counter++;
});

// ********** Showreel Player **********

const tlTwo = gsap.timeline({
  defaults: { duration: 0.6, ease: Back.easeOut.config(1) },
});

tlTwo.to('.showreel-player', 2, {
  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  ease: Power3.easeOut,
});
