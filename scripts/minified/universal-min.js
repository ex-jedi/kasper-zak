const html=document.querySelector("html"),mainNav=document.querySelector(".main-nav"),navWrapper=document.querySelector(".nav-inner-wrapper"),menuOpener=document.querySelector("#menu-opener"),menuCloser=document.querySelector("#menu-closer"),navLink=document.querySelectorAll(".main-nav-link"),backgroundBirds=document.querySelector(".main-nav-background-birds"),openMenuTl=gsap.timeline({paused:!0,defaults:{ease:"power3.in",duration:1}});function menuOpenerHandler(){openMenuTl.restart(),menuOpener.style.display="none",menuCloser.style.display="unset",mainNav.classList.add("main-nav-reveal"),html.classList.add("html-nav-opened")}function menuClosed(){mainNav.classList.remove("main-nav-reveal"),html.classList.remove("html-nav-opened")}openMenuTl.to(navWrapper,{clipPath:"inset(0 0 0 0"}).fromTo(navLink,{x:-300,opacity:0},{x:0,opacity:1,stagger:.2,duration:.75},"-=0.75").fromTo(backgroundBirds,{x:100,opacity:0},{x:0,opacity:.5,duration:2,ease:"power3.out"},"-=1"),menuOpener.addEventListener("click",menuOpenerHandler);const closeMenuTl=gsap.timeline({paused:!0,defaults:{ease:"power4.in",duration:1}});function menuCloserHandler(){closeMenuTl.restart(),menuCloser.style.display="none",menuOpener.style.display="unset"}closeMenuTl.to(navWrapper,{clipPath:"inset(0 100% 0  0"}).to(navLink,{x:300,opacity:0,stagger:-.2,duration:.75},"-=1.5").to(backgroundBirds,{x:-200,opacity:0,duration:1.5,ease:"power3.out",onComplete:menuClosed},"-=1.25"),menuCloser.addEventListener("click",menuCloserHandler);
//# sourceMappingURL=universal-min.js.map