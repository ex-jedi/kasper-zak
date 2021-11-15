const slidesImage=document.querySelector(".triptych-slides-wrapper");slidesImage.style.height=`${slidesImage.offsetWidth}px`;const showreelPlayer=document.querySelector(".showreel-player");function squareSlideshowImages(){slidesImage.style.height=`${slidesImage.offsetWidth}px`,showreelPlayer.style.height=`${showreelPlayer.offsetWidth}px`}showreelPlayer.style.height=`${showreelPlayer.offsetWidth}px`,window.addEventListener("resize",squareSlideshowImages),window.addEventListener("load",squareSlideshowImages);const mediaTwelveHundred=window.matchMedia("(max-width: 1200px)"),mediaSevenHundred=window.matchMedia("(max-width: 700px)");let responsiveTriggerHookOne=.6;mediaSevenHundred.matches&&(responsiveTriggerHookOne=.9);let responsiveTriggerHookTwo=.5;mediaTwelveHundred.matches&&(responsiveTriggerHookTwo=.8);const slides=document.querySelectorAll(".triptych-slides-wrapper .triptych-image-two"),slidesLength=slides.length-1;let slideChange,currentSlide=0;function nextSlide(){slides[currentSlide].className="triptych-image-two",currentSlide=(currentSlide+1)%slides.length,slides[currentSlide].className="triptych-image triptych-image-two triptych-image-two-showing",currentSlide===slidesLength&&clearInterval(slideChange)}function infiniteNextSlide(){slides[currentSlide].className="triptych-image-two",currentSlide=(currentSlide+1)%slides.length,slides[currentSlide].className="triptych-image triptych-image-two triptych-image-two-showing",currentSlide===slidesLength&&clearInterval(slideChange)}function slideInterval(){slideChange=setInterval(nextSlide,300)}const TriptychSlider=document.querySelector(".triptych-slides-wrapper");let keepOnSliding;TriptychSlider.addEventListener("mouseenter",(function(){keepOnSliding=setInterval(infiniteNextSlide,300)})),TriptychSlider.addEventListener("mouseleave",(function(){clearInterval(keepOnSliding)}));const tlOne=gsap.timeline({defaults:{duration:.6,ease:"back.out(1.4)"}});tlOne.fromTo(".triptych-image-one",{xPercent:-100},{xPercent:0,opacity:1},"+=1").fromTo(".triptych-image-three",{xPercent:100},{xPercent:0,opacity:1},"-=0.2").addLabel("togetherness","-=.3").fromTo(".triptych-slides-wrapper",{opacity:0},{opacity:1,duration:1.5,ease:"none"},"togetherness").fromTo(".triptych-image-two",{yPercent:100},{yPercent:0,duration:2,ease:"elastic.out(1, 0.5)",onComplete:slideInterval},"togetherness"),mediaSevenHundred.matches&&tlOne.progress(.95);const controller=new ScrollMagic.Controller,introParagraphs=document.querySelectorAll(".fade-in-text");introParagraphs.forEach((function(e){new ScrollMagic.Scene({triggerElement:e,triggerHook:responsiveTriggerHookTwo}).setClassToggle(e,"fade-in").addTo(controller)}));const tlTwo=gsap.timeline({defaults:{duration:.6,ease:"power2.out"}});function arrowShake(){gsap.timeline({repeat:-1,delay:0,repeatDelay:.5}).to(".showreel-player-arrow",.15,{x:-10,y:10,rotate:5,repeat:5,yoyo:!0})}tlTwo.to(".showreel-player",{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}).fromTo(".showreel-player-button",{xPercent:-100},{xPercent:0,opacity:1}).fromTo(".showreel-player-arrow",{yPercent:-10,opacity:0},{yPercent:0,opacity:1,onComplete:arrowShake});const showReel=new ScrollMagic.Scene({triggerElement:".showreel-player",triggerHook:responsiveTriggerHookOne}).setTween(tlTwo).addTo(controller),triptychImageTwo=document.querySelectorAll(".triptych-section-two-image");triptychImageTwo.forEach((function(e){new ScrollMagic.Scene({triggerElement:e,triggerHook:responsiveTriggerHookTwo}).setClassToggle(e,"triptych-image-slide-in").addTo(controller)}));const parallaxTl=gsap.timeline();parallaxTl.from(".homepage-illustration",2,{y:"-70%",ease:"none"},0);const slideParallaxScene=new ScrollMagic.Scene({triggerElement:".homepage-illustration",triggerHook:1,duration:"150%"}).setTween(parallaxTl).addTo(controller);function parallaxRun(){return mediaTwelveHundred.matches?controller.removeScene(slideParallaxScene):controller.addScene(slideParallaxScene)}parallaxRun(),window.addEventListener("resize",parallaxRun);const playerButton=document.querySelector(".showreel-player-button"),showreelVideo=document.querySelector(".showreel-video"),showreelVideoWrapper=document.querySelector(".homepage-showreel-wrapper"),closeButton=document.querySelector(".close-button"),noScrollWrapper=document.querySelector("body"),tag=document.createElement("script");tag.id="iframe-demo",tag.src="https://www.youtube.com/iframe_api";const firstScriptTag=document.getElementsByTagName("script")[0];function showCloseButton(e){2===e||0===e?gsap.to(closeButton,{duration:.6,opacity:1}):1===e&&gsap.to(closeButton,{duration:.6,opacity:0})}function onPlayerStateChange(e){showCloseButton(e.data)}let player;function onYouTubeIframeAPIReady(){player=new YT.Player("showreel-iframe",{events:{onStateChange:onPlayerStateChange}})}function playShowreel(){player.playVideo()}firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);const showreelTl=gsap.timeline({paused:!0,defaults:{duration:1.5,ease:"none"}});function stopShowreel(e){"click"!==e.type&&"Escape"!==e.key||(closeButton.style.opacity=1,showreelTl.reverse(),player.stopVideo(),setTimeout((()=>{noScrollWrapper.classList.remove("no-scroll"),showreelVideoWrapper.style.pointerEvents="none"}),1500))}showreelTl.set(closeButton,{opacity:1}).fromTo(showreelVideoWrapper,{clipPath:"polygon(0 0, 0 100%, 0 100%, 0 0)"},{ease:"power3.in",clipPath:"polygon(100% 0, 100% 100%, 0 100%, 0 0)"}).fromTo(showreelVideo,{clipPath:"polygon(0 0, 0 0, 100% 0, 100% 0)"},{ease:"power4.inOut",clipPath:"polygon(0 0, 0 100%, 100% 100%, 100% 0)"}).to(closeButton,{duration:.3,opacity:0,onComplete:playShowreel}),playerButton.addEventListener("click",(()=>{showreelTl.play(),setTimeout((()=>{noScrollWrapper.classList.add("no-scroll"),showreelVideoWrapper.style.pointerEvents="auto"}),1500)})),closeButton.addEventListener("mouseenter",(()=>{gsap.to(closeButton,{duration:.6,opacity:1})})),closeButton.addEventListener("mouseout",(()=>{gsap.to(closeButton,{duration:.6,opacity:0})})),closeButton.addEventListener("click",stopShowreel),window.addEventListener("keyup",stopShowreel);
//# sourceMappingURL=homepage-min.js.map