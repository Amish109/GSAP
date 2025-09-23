document.addEventListener("DOMContentLoaded",()=>{
       // Create timeline
    const tl = gsap.timeline({ paused: true });

    tl.to(".circle", {
      x: 300,
      duration: 2,
      rotation: 360
    })
    .to(".rectangle", {
      x: 300,
      duration: 2,
      rotation: 180
    });

    // Button controls
    document.getElementById("play").addEventListener("click", () => tl.play());
    document.getElementById("pause").addEventListener("click", () => tl.pause());
    document.getElementById("reverse").addEventListener("click", () => tl.reverse());
    document.getElementById("restart").addEventListener("click", () => tl.restart());
})




/*

 const anim = gsap.to(".circle", {
      x: 300,
      duration: 2,
      rotation: 360,
      paused: true
    });

    // Another animation for rectangle
    const anim2 = gsap.to(".rectangle", {
      x: 300,
      duration: 2,
      rotation: 180,
      paused: true
    });

    // Button controls (control both together)
    document.getElementById("play").addEventListener("click", () => {
      anim.play();
      anim2.play();
    });
    document.getElementById("pause").addEventListener("click", () => {
      anim.pause();
      anim2.pause();
    });
    document.getElementById("reverse").addEventListener("click", () => {
      anim.reverse();
      anim2.reverse();
    });
    document.getElementById("restart").addEventListener("click", () => {
      anim.restart();
      anim2.restart();
    });
  </script>

*/