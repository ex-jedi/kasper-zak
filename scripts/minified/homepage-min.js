const tlOne=gsap.timeline({defaults:{duration:.6,ease:Back.easeOut.config(1)}});tlOne.fromTo(".triptych-image-one",{xPercent:-100},{xPercent:0},"+=1").fromTo(".triptych-image-three",{xPercent:100},{xPercent:0},"-=0.2").addLabel("togetherness","-=.3").fromTo(".triptych-image-two",{opacity:0},{opacity:1,duration:1.5,ease:"none"},"togetherness").fromTo(".triptych-image-two",{yPercent:100},{yPercent:0,duration:2,ease:"elastic.out(1, 0.3)"},"togetherness");const controller=new ScrollMagic.Controller,sceneOne=new ScrollMagic.Scene({triggerElement:".intro-text-section"}).setClassToggle(".homepage-intro-text-paragraph","fade-in").addIndicators({name:"fade Scene",colorTrigger:"black",colorStart:"#79c695"}).addTo(controller);
//# sourceMappingURL=homepage-min.js.map