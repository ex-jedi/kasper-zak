$(function(){

  //Variables
  var popupTrigger = $(".image-popup-trigger");

  popupTrigger.on("click", function() {
    //Reveal hidden popup box
    $(".image-popup, .image-text-title, .image-sale-link").toggleClass("image-popup-reveal");

    //Change popup trigger text
    if ($(".image-popup").hasClass("image-popup-reveal")) {
      popupTrigger.text("Hide Details");
    }
     else {
      popupTrigger.text("Show Details");
    }

  });

});
