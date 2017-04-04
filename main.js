$(function () { // wait for document ready
     // init
     var controller = new ScrollMagic.Controller();
     // define movement of panels
     var wipeAnimation = new TimelineMax()
         .fromTo("div.panel.second", 3, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
         .fromTo("div.panel.third",    3, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
         .fromTo("div.panel.fourth", 3, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
         .fromTo("div.panel.fifth", 3, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from bottom
         // create scene to pin and link animation
     new ScrollMagic.Scene({
         triggerElement: "#pinContainer",
         triggerHook: "onLeave",
         duration: "500%"
     })
     .setPin("#pinContainer")
     .setTween(wipeAnimation)
     .addTo(controller);
});

//Navegación
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

