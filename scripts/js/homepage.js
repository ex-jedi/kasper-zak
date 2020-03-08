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
    '.triptych-slides-wrapper',
    { opacity: 0 },
    { opacity: 1, duration: 1.5, ease: 'none' },
    'togetherness',
  )
  .fromTo(
    '.triptych-image-two',
    { yPercent: 100 },
    {
      yPercent: 0,
      duration: 2,
      ease: 'elastic.out(1, 0.5)',
      onComplete: slideInterval,
    },
    'togetherness',
  );

// ********** Homepage Triptych Slider **********

const slides = document.querySelectorAll(
  '.triptych-slides-wrapper .triptych-image-two',
);
const slidesLength = slides.length - 1;
console.log(slidesLength);
let currentSlide = 0;
let slideChange;

// Function to run through slideshow once
function nextSlide() {
  slides[currentSlide].className = 'triptych-image-two';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className =
    'triptych-image triptych-image-two triptych-image-two-showing';

  if (currentSlide === slidesLength) {
    clearInterval(slideChange);
  }
}

// Function to run through slideshow infinitely
function infiniteNextSlide() {
  slides[currentSlide].className = 'triptych-image-two';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className =
    'triptych-image triptych-image-two triptych-image-two-showing';

  if (currentSlide === slidesLength) {
    clearInterval(slideChange);
  }
}

// Used as callback function when Triptych GSAP timeline completes
function slideInterval() {
  slideChange = setInterval(nextSlide, 125);
}

// * Repeat image slideshow on mouse enter
const TriptychSlider = document.querySelector('.triptych-slides-wrapper');

let keepOnSliding;

TriptychSlider.addEventListener('mouseenter', function() {
  keepOnSliding = setInterval(infiniteNextSlide, 125);
});
TriptychSlider.addEventListener('mouseleave', function() {
  clearInterval(keepOnSliding);
});

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
    { yPercent: 0, opacity: 1, onComplete },
  );

// GSAP callback to add repeating animation
function onComplete() {
  const shake = new gsap.timeline({ repeat: -1, delay: 3, repeatDelay: 4 });
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
  .setTween(tlTwo)
  .addTo(controller);

// ********** Homepage Triptych Two **********

// Collect elements to fade in
const triptychImageTwo = document.querySelectorAll(
  '.triptych-section-two-image',
);

// For indicators in the scene
// TODO: What's this for?
let counterTwo = 1;

// Loop through elements to add animation
triptychImageTwo.forEach(function(item) {
  const sceneTwo = new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: 0.5,
    // reverse: false,
  })
    .setClassToggle(item, 'triptych-image-slide-in')
    .addTo(controller);

  counterTwo++;
});

// * Parallax Scene

const parallaxTl = gsap.timeline();
parallaxTl.from(
  '.homepage-illustration',
  2,
  { y: '-70%', ease: Power0.easeNone },
  0,
);

const slideParallaxScene = new ScrollMagic.Scene({
  triggerElement: '.homepage-illustration',
  triggerHook: 1,
  duration: '150%',
})
  .setTween(parallaxTl)
  .addTo(controller);

// ********** Showreel Player **********

const playerButton = document.querySelector('.showreel-player-button');
const showreelVideo = document.querySelector('.showreel-video');
const showreelVideoWrapper = document.querySelector(
  '.homepage-showreel-wrapper',
);
const closeButton = document.querySelector('.close-button');

// * YouTube API Gubbins

const tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('showreel-iframe', {
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

function showCloseButton(playerStatus) {
  if (playerStatus === 2 || playerStatus === 0) {
    gsap.to(closeButton, { duration: 0.6, opacity: 1 });
  } else if (playerStatus === 1) {
    gsap.to(closeButton, { duration: 0.6, opacity: 0 });
  }
}
function onPlayerStateChange(event) {
  showCloseButton(event.data);
  console.log(event.data);
}

// * Play YouTune showreel embed
function playShowreel() {
  player.playVideo();
}

// * GSAP timeline
const showreelTl = gsap.timeline({
  paused: true,
  defaults: { duration: 1.5, ease: 'none' },
});

showreelTl
  .set(closeButton, { opacity: 1 })
  .fromTo(
    showreelVideoWrapper,
    { clipPath: 'polygon(0 0, 0 100%, 0 100%, 0 0)' },
    { ease: 'power3.in', clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)' },
  )
  .fromTo(
    showreelVideo,
    { clipPath: 'polygon(0 0, 0 0, 100% 0, 100% 0)' },
    {
      ease: 'power4.inOut',
      clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)',
    },
  )
  .to(closeButton, { duration: 0.3, opacity: 0, onComplete: playShowreel });

playerButton.addEventListener('click', () => {
  showreelTl.play();
  console.log('Play');
});

closeButton.addEventListener('mouseenter', () => {
  gsap.to(closeButton, { duration: 0.6, opacity: 1 });
});

closeButton.addEventListener('mouseout', () => {
  if (!player.paused || !player.ended)
    gsap.to(closeButton, { duration: 0.6, opacity: 0 });
});

closeButton.addEventListener('click', e => {
  console.log(e);
  closeButton.style.opacity = 1;
  showreelTl.reverse();
  player.stopVideo();
});
