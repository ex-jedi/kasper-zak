function handleFirstTab(e){9===e.keyCode&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",handleFirstTab))}window.addEventListener("keydown",handleFirstTab);const controller=new ScrollMagic.Controller,fadeInText=document.querySelectorAll(".sprosser-fade-in");fadeInText.forEach((function(e){new ScrollMagic.Scene({triggerElement:e,triggerHook:1}).setClassToggle(e,"sprosser-fade-in-reveal").addTo(controller)}));const playButton=document.querySelector(".play-button"),pauseButton=document.querySelector(".pause-button"),allVideos=Array.from(document.querySelectorAll(".sprosser-video"));function videoMouseoverHandler(e){const{target:o}=e;allVideos.forEach((e=>{e!==o&&(e.muted=!0,e.style.borderColor="#fff"),o.style.borderColor="#f00",o.muted=!1}))}function playButtonClickHandler(){allVideos.forEach((e=>{(e.paused||e.ended)&&(e.play(),e.muted?e.style.borderColor="#fff":e.style.borderColor="#f00",playButton.classList.add("hide-play-and-pause-button"),e.addEventListener("mouseover",videoMouseoverHandler),playButton.addEventListener("transitionend",(()=>{playButton.style.display="none",pauseButton.style.display="block"}),{once:!0}))}))}function pauseButtonClickHandler(){allVideos.forEach((e=>{pauseButton.style.display="none",playButton.style.display="block",e.removeEventListener("mouseover",videoMouseoverHandler),setTimeout((()=>playButton.classList.remove("hide-play-and-pause-button")),100),e.pause()}))}function videosEndedHandler(){allVideos.every((e=>e.ended))&&pauseButtonClickHandler()}playButton.addEventListener("click",playButtonClickHandler),pauseButton.addEventListener("click",pauseButtonClickHandler),allVideos.forEach((e=>e.addEventListener("ended",videosEndedHandler)));
//# sourceMappingURL=sprosser-min.js.map