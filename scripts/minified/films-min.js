window.addEventListener("keydown",handleFirstTab);const videoPlayButton=document.querySelectorAll(".play-button"),video=document.querySelectorAll(".video");video.forEach(e=>{e.controls=!1});const mainNavigation=document.querySelector(".main-nav");function playAndPause(){const e=this.parentElement,t=e.querySelector(".video"),o=e.querySelector(".video-title"),i=this,a=e.querySelector(".video-counter");t.paused||t.ended?(t.controls=!0,e.style.background="url('/images/black-background.svg')",i.classList.add("hide-play-button"),o.classList.add("hide-video-title"),a.classList.add("hide-video-counter"),mainNavigation.classList.add("hide-main-nav"),t.play()):video.seeking||t.pause()}function isPaused(){const e=this.parentElement,t=e.querySelector(".video-title"),o=e.querySelector(".play-button"),i=e.querySelector(".video-counter"),a=e.querySelector(".video");a.seeking||(a.controls=!1,o.classList.remove("hide-play-button"),t.classList.remove("hide-video-title"),i.classList.remove("hide-video-counter"),mainNavigation.classList.remove("hide-main-nav"))}videoPlayButton.forEach(e=>e.addEventListener("click",playAndPause)),video.forEach(e=>e.addEventListener("pause",isPaused));
//# sourceMappingURL=films-min.js.map