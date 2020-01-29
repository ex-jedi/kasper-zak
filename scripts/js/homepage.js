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
const introParagraphs = document.querySelectorAll('.fade-in-text');

// For indicators in the scene
let counter = 1;

// Loop through elements to add animation
introParagraphs.forEach(function(item) {
  const sceneOne = new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: 0.5,
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

// Init GSAP timeline
const tlTwo = gsap.timeline({
  defaults: { duration: 1, ease: Power2.easeOut },
});

tlTwo
  .to('.showreel-player', {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  })
  .fromTo(
    '.showreel-player-button',
    { xPercent: -100 },
    { xPercent: 0, opacity: 1 },
  )
  .fromTo(
    '.showreel-player-arrow',
    { yPercent: -10, opacity: 0 },
    { yPercent: 0, opacity: 1, onComplete: onComplete },
  );

// GSAP callback to add repeating animation
function onComplete() {
  var shake = new gsap.timeline({ repeat: -1, delay: 3, repeatDelay: 4 });
  shake.to('.showreel-player-arrow', 0.15, {
    x: -5,
    y: 5,
    rotate: 0,
    repeat: 9,
    yoyo: true,
  });
}

// Init ScrollMagic scene to add GSAP animation at scroll trigger point
const showReel = new ScrollMagic.Scene({
  triggerElement: '.showreel-player',
  triggerHook: 0.4,
  // reverse: false,
})
  .addIndicators({
    name: 'showreel',
    colorTrigger: '#800080',
    colorStart: '#f00',
  })
  .setTween(tlTwo)
  .addTo(controller);

// ********** Homepage Triptych Two **********

// Collect elements to fade in
const triptychImageTwo = document.querySelectorAll(
  '.triptych-section-two-image',
);

// For indicators in the scene
let counterTwo = 1;

// Loop through elements to add animation
triptychImageTwo.forEach(function(item) {
  const sceneTwo = new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: 0.5,
    // reverse: false,
  })
    .setClassToggle(item, 'triptych-image-slide-in')
    .addIndicators({
      name: `triptych ${counterTwo}`,
      colorTrigger: '#c709f7',
      colorStart: '#c709f7',
    }) // Requires a plugin
    .addTo(controller);

  counterTwo++;
});
