// *==============================================================================
// ** JS For All The Pages  **
// *==============================================================================

// *=========================================
// ** Menu GSAP Timeline   **
// *=========================================

// *  Variables
const menuOpener = document.querySelector('#menu-opener');
const menuCloser = document.querySelector('#menu-closer');
const mainNav = document.querySelector('.main-nav');
const navWrapper = document.querySelector('.nav-inner-wrapper');
const html = document.querySelector('html');

// ********** Open Menu **********

const openMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power4.in', duration: 1 },
});

openMenuTl.to(navWrapper, { ease: 'power3.in', clipPath: 'inset(0 0 0 0' });

function menuOpenerHandler() {
  openMenuTl.restart();
  menuOpener.style.display = 'none';
  menuCloser.style.display = 'unset';
  mainNav.classList.add('main-nav-reveal');
  html.classList.add('html-nav-opened');
}

menuOpener.addEventListener('click', menuOpenerHandler);

// ********** Close Menu **********

// GSAP callback function
function menuClosed() {
  mainNav.classList.remove('main-nav-reveal');
  html.classList.remove('html-nav-opened');
}

const closeMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power4.in', duration: 1 },
});

closeMenuTl.to(navWrapper, { ease: 'power3.in', clipPath: 'inset(0 0 0 100%', onComplete: menuClosed });

function menuCloserHandler() {
  closeMenuTl.restart();
  menuCloser.style.display = 'none';
  menuOpener.style.display = 'unset';
}

menuCloser.addEventListener('click', menuCloserHandler);
