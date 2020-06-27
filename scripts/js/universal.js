// *==============================================================================
// ** JS For All The Pages  **
// *==============================================================================

// *=========================================
// ** Menu GSAP Timeline   **
// *=========================================

// *  Variables
const html = document.querySelector('html');
const mainNav = document.querySelector('.main-nav');
const navWrapper = document.querySelector('.nav-inner-wrapper');
const menuOpener = document.querySelector('#menu-opener');
const menuCloser = document.querySelector('#menu-closer');
const navLink = document.querySelectorAll('.main-nav-link');
const backgroundBirds = document.querySelector('.main-nav-background-birds');
// ********** Open Menu **********

const openMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.in', duration: 1 },
});

openMenuTl
  .to(navWrapper, { clipPath: 'inset(0 0 0 0' })
  .fromTo(navLink, { x: -300, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.2, duration: 0.75 }, '-=0.75')
  .fromTo(backgroundBirds, { x: 100, opacity: 0 }, { x: 0, opacity: 0.5, duration: 2, ease: 'power3.out' }, '-=1');

function menuOpenerHandler() {
  openMenuTl.restart();
  menuOpener.style.display = 'none';
  menuCloser.style.display = 'unset';
  mainNav.classList.add('main-nav-reveal');
  html.classList.add('html-nav-opened');
}

menuOpener.addEventListener('click', menuOpenerHandler);

// ********** Close Menu **********

// GSAP callback function. Removes class which resizes main nav, and which hides scrollbar.
function menuClosed() {
  mainNav.classList.remove('main-nav-reveal');
  html.classList.remove('html-nav-opened');
}

const closeMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power4.in', duration: 1 },
});

closeMenuTl
  .to(navWrapper, { clipPath: 'inset(0 100% 0  0' })
  .to(navLink, { x: 300, opacity: 0, stagger: -0.2, duration: 0.75 }, '-=1.5')
  .to(backgroundBirds, { x: -200, opacity: 0, duration: 1.5, ease: 'power3.out', onComplete: menuClosed }, '-=1.25');

function menuCloserHandler() {
  closeMenuTl.restart();
  menuCloser.style.display = 'none';
  menuOpener.style.display = 'unset';
}

menuCloser.addEventListener('click', menuCloserHandler);
