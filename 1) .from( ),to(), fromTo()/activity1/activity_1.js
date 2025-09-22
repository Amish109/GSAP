document.addEventListener("DOMContentLoaded", (event) => {
  gsap.from('.img-right',{ // from the mentioned state to the current state animate
    // x:'100%',
    right:'0px',
    duration:3,
    // delay:2 ,// To add a delay before animation starts
    rotate:360,
    repeat: -1,   // infinite loop
    yoyo: true,   // back and forth
    repeatDelay: 1.5,  // pause (in seconds) before reversing
    ease: "power1.inOut" // smoother motion

  })
  // gsap.to('.img-right',{ // from the current state to the mentioned state animate
  //   // x:'100%',
  //   right:'0px',
  //   duration:3
  // })
  // gsap.from('.img-right',{
  //   x:'200',
  //   duration:3
  // })
 });