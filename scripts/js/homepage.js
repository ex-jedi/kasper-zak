// *=========================================
// ** General Stuff  **
// *=========================================

// * Adding focus outline class when tab key is used
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}

window.addEventListener('keydown', handleFirstTab);

// * Matching height and width
const slidesImage = document.querySelector('.triptych-slides-wrapper');

slidesImage.style.height = `${slidesImage.offsetWidth}px`;

const showreelPlayer = document.querySelector('.showreel-player');
showreelPlayer.style.height = `${showreelPlayer.offsetWidth}px`;

window.addEventListener('resize', () => {
  slidesImage.style.height = `${slidesImage.offsetWidth}px`;
  showreelPlayer.style.height = `${showreelPlayer.offsetWidth}px`;
});

// *=========================================
// ** Animations  **
// *=========================================

// ********** General Stuff **********

// * matchMedia media queries
const mediaTwelveHundred = window.matchMedia('(max-width: 1200px)');
const mediaSevenHundred = window.matchMedia('(max-width: 700px)');

// Responsive trigger hooks for ScrollMagic
let responsiveTriggerHookOne = 0.5;
if (mediaSevenHundred.matches) {
  responsiveTriggerHookOne = 1;
}

let responsiveTriggerHookTwo = 0.5;
if (mediaTwelveHundred.matches) {
  responsiveTriggerHookTwo = 0.8;
}

// ********** Homepage Triptych Slider **********

const slides = document.querySelectorAll('.triptych-slides-wrapper .triptych-image-two');
const slidesLength = slides.length - 1;
let currentSlide = 0;
let slideChange;

// Function to run through slideshow once
function nextSlide() {
  slides[currentSlide].className = 'triptych-image-two';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'triptych-image triptych-image-two triptych-image-two-showing';

  if (currentSlide === slidesLength) {
    clearInterval(slideChange);
  }
}

// Function to run through slideshow infinitely
function infiniteNextSlide() {
  slides[currentSlide].className = 'triptych-image-two';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'triptych-image triptych-image-two triptych-image-two-showing';

  if (currentSlide === slidesLength) {
    clearInterval(slideChange);
  }
}

// Used as callback function when Triptych GSAP timeline completes
function slideInterval() {
  slideChange = setInterval(nextSlide, 300);
}

// * Repeat image slideshow on mouse enter
const TriptychSlider = document.querySelector('.triptych-slides-wrapper');

let keepOnSliding;

TriptychSlider.addEventListener('mouseenter', function() {
  keepOnSliding = setInterval(infiniteNextSlide, 300);
});
TriptychSlider.addEventListener('mouseleave', function() {
  clearInterval(keepOnSliding);
});

// ********** Homepage Triptych **********

const tlOne = gsap.timeline({
  defaults: { duration: 0.6, ease: 'back.out(1.4)' },
});

tlOne
  .fromTo('.triptych-image-one', { xPercent: -100 }, { xPercent: 0, opacity: 1 }, '+=1')
  .fromTo('.triptych-image-three', { xPercent: 100 }, { xPercent: 0, opacity: 1 }, '-=0.2')
  .addLabel('togetherness', '-=.3')
  .fromTo('.triptych-slides-wrapper', { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'none' }, 'togetherness')
  .fromTo(
    '.triptych-image-two',
    { yPercent: 100 },
    {
      yPercent: 0,
      duration: 2,
      ease: 'elastic.out(1, 0.5)',
      onComplete: slideInterval,
    },
    'togetherness'
  );

// * Switching off GreenSock animation on mobile

// eslint-disable-next-line no-unused-expressions
mediaSevenHundred.matches ? tlOne.progress(0.95) : null;

// ********** Intro Paragraphs **********

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

// Collect elements to fade in
const introParagraphs = document.querySelectorAll('.fade-in-text');

// Loop through elements to add animation
introParagraphs.forEach(function(item) {
  const sceneOne = new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: responsiveTriggerHookTwo,
    // reverse: false,
  })
    .setClassToggle(item, 'fade-in')
    // .addIndicators()
    .addTo(controller);
});

// ********** Showreel Player Flyout **********

// Init GSAP timeline
const tlTwo = gsap.timeline({
  defaults: { duration: 0.6, ease: Power2.easeOut },
});

// GSAP callback to add repeating animation
function arrowShake() {
  const shake = new gsap.timeline({ repeat: -1, delay: 2, repeatDelay: 2 });
  shake.to('.showreel-player-arrow', 0.15, {
    x: -10,
    y: 10,
    rotate: 5,
    repeat: 5,
    yoyo: true,
  });
}

tlTwo
  .to('.showreel-player', {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  })
  .fromTo('.showreel-player-button', { xPercent: -100 }, { xPercent: 0, opacity: 1 })
  .fromTo('.showreel-player-arrow', { yPercent: -10, opacity: 0 }, { yPercent: 0, opacity: 1, onComplete: arrowShake });

// Init ScrollMagic scene to add GSAP animation at scroll trigger point
const showReel = new ScrollMagic.Scene({
  triggerElement: '.showreel-player',
  triggerHook: responsiveTriggerHookTwo,
  // reverse: false,
})
  .setTween(tlTwo)
  .addTo(controller);

// ********** Homepage Triptych Two **********

// Collect elements to fade in
const triptychImageTwo = document.querySelectorAll('.triptych-section-two-image');

// Loop through elements to add animation
triptychImageTwo.forEach(function(item) {
  const sceneTwo = new ScrollMagic.Scene({
    triggerElement: item,
    triggerHook: responsiveTriggerHookTwo,
    // reverse: false,
  })
    .setClassToggle(item, 'triptych-image-slide-in')
    .addTo(controller);
});

// * Parallax Scene

const parallaxTl = gsap.timeline();
parallaxTl.from('.homepage-illustration', 2, { y: '-70%', ease: 'none' }, 0);

const slideParallaxScene = new ScrollMagic.Scene({
  triggerElement: '.homepage-illustration',
  triggerHook: 1,
  duration: '150%',
})
  .setTween(parallaxTl)
  .addTo(controller);

// Remove or add ScrollMagic parallax scene depending pn screen size

function parallaxRun() {
  return mediaTwelveHundred.matches
    ? controller.removeScene(slideParallaxScene)
    : controller.addScene(slideParallaxScene);
}
parallaxRun();
window.addEventListener('resize', parallaxRun);

// ********** Showreel Video **********

// Grabbing page elements
const playerButton = document.querySelector('.showreel-player-button');
const showreelVideo = document.querySelector('.showreel-video');
const showreelVideoWrapper = document.querySelector('.homepage-showreel-wrapper');
const closeButton = document.querySelector('.close-button');
const noScrollWrapper = document.querySelector('body');

// * YouTube API Gubbins
const tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function showCloseButton(playerStatus) {
  if (playerStatus === 2 || playerStatus === 0) {
    gsap.to(closeButton, { duration: 0.6, opacity: 1 });
  } else if (playerStatus === 1) {
    gsap.to(closeButton, { duration: 0.6, opacity: 0 });
  }
}

function onPlayerStateChange(event) {
  showCloseButton(event.data);
}

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('showreel-iframe', {
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

//  Play YouTube showreel callback for GSAP timeline
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
    { ease: 'power3.in', clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)' }
  )
  .fromTo(
    showreelVideo,
    { clipPath: 'polygon(0 0, 0 0, 100% 0, 100% 0)' },
    {
      ease: 'power4.inOut',
      clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)',
    }
  )
  .to(closeButton, { duration: 0.3, opacity: 0, onComplete: playShowreel });

// Showreel play and add class to hide scrollbar
playerButton.addEventListener('click', () => {
  showreelTl.play();
  setTimeout(() => {
    noScrollWrapper.classList.add('no-scroll');
    showreelVideoWrapper.style.pointerEvents = 'auto';
  }, 1500);
});

// Show showreel close button on hover
closeButton.addEventListener('mouseenter', () => {
  gsap.to(closeButton, { duration: 0.6, opacity: 1 });
});

// Hide close showreel button when mouse leaves
closeButton.addEventListener('mouseout', () => {
  gsap.to(closeButton, { duration: 0.6, opacity: 0 });
});

// Close showreel event handler
function stopShowreel(event) {
  if (event.type === 'click' || event.key === 'Escape') {
    closeButton.style.opacity = 1;
    showreelTl.reverse();
    player.stopVideo();
    setTimeout(() => {
      noScrollWrapper.classList.remove('no-scroll');
      showreelVideoWrapper.style.pointerEvents = 'none';
    }, 1500);
  }
}

// Showreel Close Button
closeButton.addEventListener('click', stopShowreel);

// Close Showreel with Escape key
window.addEventListener('keyup', stopShowreel);
