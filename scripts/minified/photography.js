const controller=new ScrollMagic.Controller,photoImage=document.querySelectorAll(".photo-image");photoImage.forEach((function(o){new ScrollMagic.Scene({triggerElement:o.closest(".photo-wrapper"),triggerHook:.5}).setClassToggle(o,"photo-image-reveal").addIndicators({name:"photo",colorTrigger:"#f00"}).addTo(controller)}));
//# sourceMappingURL=photography.js.map