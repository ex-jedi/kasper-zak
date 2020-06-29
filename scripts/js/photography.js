// *=========================================
// ** Photography  **
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

const photoImage = document.querySelectorAll('.photo-image');

photoImage.forEach(function(item) {
  const sceneTwo = new ScrollMagic.Scene({
    triggerElement: item.closest('.photo-wrapper'),
    triggerHook: 0.7,
    // reverse: false,
  })
    .setClassToggle(item, 'photo-image-reveal')
    .addTo(controller);
});
