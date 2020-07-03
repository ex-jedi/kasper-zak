// *=========================================
// ** About page  **
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

// ********** Text Fade In **********

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

const fadeInImage = document.querySelectorAll('.four-oh-four-image');

// Loop through elements to add animation
const sceneOne = new ScrollMagic.Scene({
  triggerElement: fadeInImage,
  triggerHook: 0.7,
  reverse: false,
})
  .setClassToggle(fadeInImage, 'image-animation')
  .addTo(controller);
