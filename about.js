//  GSAP      
gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 500) {

  // const races = document.querySelector(".outbox-s7");
  
  // function getScrollAmount() {
  //   let racesWidth = races.scrollWidth;
  //   return -(racesWidth - window.innerWidth)*1.05;
  // }
  
  // const tween = gsap.to(races, {
  //   x: getScrollAmount,
  //   duration: 3,
  //   ease: "none",
  // });
  
  
  // ScrollTrigger.create({
  //   trigger:".s7-wrapper",
  //   start:"top 7%",
  //   end: () => `+=${getScrollAmount() * -1}`,
  //   pin:true,
  //   animation:tween,
  //   scrub:1,
  //   invalidateOnRefresh:true,
  // });


gsap.to(".test-h", {
scrollTrigger: {
  trigger: ".section-6",
  start: "-20% 90%",
  end: "-20% 40%",
  scrub: true,
},
background: "linear-gradient(to right, #c3e2ef 100%, #222222 0%)",
onUpdate: function() {
  document.getElementById("test-h").style.webkitBackgroundClip = "text";
  document.getElementById("test-h").style.backgroundClip = "text";
  document.getElementById("test-h").style.webkitTextFillColor = "transparent";
  document.getElementById("test-h").style.color = "transparent";
},
});

}else{
  gsap.to(".test-h", {
    scrollTrigger: {
      trigger: ".section-6",
      start: "-40% 90%",
      end: "-40% 40%",
      scrub: true,
    },
    background: "linear-gradient(to right, #c3e2ef 100%, #222222 0%)",
    onUpdate: function() {
      document.getElementById("test-h").style.webkitBackgroundClip = "text";
      document.getElementById("test-h").style.backgroundClip = "text";
      document.getElementById("test-h").style.webkitTextFillColor = "transparent";
      document.getElementById("test-h").style.color = "transparent";
    },
    });
}