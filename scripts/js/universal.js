// *==============================================================================
// ** JS For All The Pages  **
// *==============================================================================

// *=========================================
// ** Accessibility  **
// *=========================================

// * Adding focus outline class when tab key is used
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');

    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.remove('user-is-tabbing');

  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
}

window.addEventListener('keydown', handleFirstTab);

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

// GSAP callback. Applied after menu opener opacity animated to 0.
function menuOpenerHider() {
  menuOpener.style.display = 'none';
  setTimeout(() => {
    menuCloser.style.display = 'unset';
    mainNav.style.overflowY = 'auto';
  }, 1500);
}

openMenuTl
  .to(navWrapper, { clipPath: 'inset(0 0 0 0' })
  .to(menuOpener, { opacity: 0, duration: 0.3, onComplete: menuOpenerHider }, '-=1.2')
  .to(menuCloser, { opacity: 1, duration: 0.75 }, '+=0.4')
  .fromTo(navLink, { x: -300, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.2, duration: 0.75 }, '-=2')
  .fromTo(backgroundBirds, { x: 100, opacity: 0 }, { x: 0, opacity: 0.5, duration: 2, ease: 'power3.out' }, '-=1');

function menuOpenerHandler() {
  mainNav.classList.add('main-nav-reveal');
  html.classList.add('html-nav-opened');
  openMenuTl.restart();
}

menuOpener.addEventListener('click', menuOpenerHandler);

// ********** Close Menu **********

// GSAP callback function. Removes class which resizes main nav, and which hides scrollbar.
function menuClosed() {
  mainNav.classList.remove('main-nav-reveal');
  html.classList.remove('html-nav-opened');
  mainNav.style.overflowY = 'unset';
}

const closeMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power4.in', duration: 1 },
});

// GSAP callback. Applied after menu opener opacity animated to 0.
function menuCloserHider() {
  menuCloser.style.display = 'none';

  setTimeout(() => {
    menuOpener.style.display = 'unset';
  }, 1500);
}

closeMenuTl
  .to(navWrapper, { clipPath: 'inset(0 100% 0  0' })
  .to(menuCloser, { opacity: 0, duration: 0.3, onComplete: menuCloserHider }, '-=1.2')
  .to(navLink, { x: 300, opacity: 0, stagger: -0.2, duration: 0.6 }, '-=1.5')
  .to(backgroundBirds, { x: -200, opacity: 0, duration: 1.5, ease: 'power3.out', onComplete: menuClosed }, '-=1')
  .to(menuOpener, { opacity: 1, duration: 0.5 }, '+=0.2');

function menuCloserHandler() {
  closeMenuTl.restart();
}

menuCloser.addEventListener('click', menuCloserHandler);

// =========================================
// ** Menu Scroll Hide  **
// =========================================
const navTrigger = document.querySelector('.main-nav-trigger');
const menuSevenHundred = window.matchMedia('(max-width: 700px)');
let scrollPos = 0;
// adding scroll event
// eslint-disable-next-line func-names
window.addEventListener('scroll', function() {
  if (document.body.getBoundingClientRect().top < scrollPos && menuSevenHundred.matches && window.scrollY > 10) {
    navTrigger.classList.add('nav-trigger-hide');
  } else {
    navTrigger.classList.remove('nav-trigger-hide');
  }
  // saves the new position for iteration.
  scrollPos = document.body.getBoundingClientRect().top;
});

// *=========================================
// ** Cookie Warning  **
// *=========================================

const cookieBanner = document.querySelector('.cookie-warning-wrapper');
const cookieWarningButton = document.querySelector('.cookie-warning-button');

if (localStorage.getItem('cookieSeen') !== 'shown') {
  cookieBanner.classList.add('show-cookie-warning');
} else {
  cookieBanner.style.display = 'none';
}

cookieWarningButton.addEventListener(
  'click',
  () => {
    localStorage.setItem('cookieSeen', 'shown');
    cookieBanner.classList.remove('show-cookie-warning');
    cookieBanner.addEventListener('transitionend', () => {
      cookieBanner.style.display = 'none';
    });
  },
  { once: true }
);
