console.log('Hi there');

// *=========================================
// ** Photography  **
// *=========================================

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

const photoImage = document.querySelectorAll('.photo-image');

photoImage.forEach(function(item) {
  const sceneTwo = new ScrollMagic.Scene({
    triggerElement: item.closest('.photo-wrapper'),
    triggerHook: 0.5,
    // reverse: false,
  })
    .setClassToggle(item, 'photo-image-reveal')
    .addIndicators({
      name: 'photo',
      colorTrigger: '#f00',
    })
    .addTo(controller);
});
