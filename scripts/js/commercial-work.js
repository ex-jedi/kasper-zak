console.log('Hi there');

// *=========================================
// ** Photography  **
// *=========================================

// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

const commercialImage = document.querySelectorAll('.commercial-image');

commercialImage.forEach(function(item) {
  const sceneTwo = new ScrollMagic.Scene({
    triggerElement: item.closest('.commercial-image-wrapper'),
    triggerHook: 0.5,
    // reverse: false,
  })
    .setClassToggle(item, 'commercial-image-reveal')
    .addIndicators({
      name: 'photo',
      colorTrigger: '#f00',
    })
    .addTo(controller);
});
