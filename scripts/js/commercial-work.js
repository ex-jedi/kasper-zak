// *=========================================
// ** Commercial Work  **
// *=========================================

// ********** General Stuff **********

// * Adding focus outline class when tab key is used
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}

window.addEventListener('keydown', handleFirstTab);

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

const commercialImage = document.querySelectorAll('.commercial-image');

commercialImage.forEach(function(item) {
  const sceneTwo = new ScrollMagic.Scene({
    triggerElement: item.closest('.commercial-image-wrapper'),
    triggerHook: 0.8,
    // reverse: false,
  })
    .setClassToggle(item, 'commercial-image-reveal')
    .addTo(controller);
});
