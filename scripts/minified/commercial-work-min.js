const controller=new ScrollMagic.Controller,commercialImage=document.querySelectorAll(".commercial-image");commercialImage.forEach((function(e){new ScrollMagic.Scene({triggerElement:e.closest(".commercial-image-wrapper"),triggerHook:.5}).setClassToggle(e,"commercial-image-reveal").addTo(controller)}));
//# sourceMappingURL=commercial-work-min.js.map