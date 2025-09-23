document.addEventListener("DOMContentLoaded",()=>{
    const car = document.querySelector(".car");
    const stations = document.querySelectorAll(".station");
    
    // get station positions
    const station1 = stations[0].offsetLeft;
    const station2 = stations[1].offsetLeft;
    const station3 = stations[2].offsetLeft;

    let tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
    tl.fromTo(car, { x: station1 }, { x: station2, duration: 2 })
      .to(car, { x: station3, duration: 2 });
})


    // animate car from station 1 -> 2 -> 3
    // let tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
    // tl.fromTo(car, { x: station1 }, { x: station2, duration: 2 })
    //   .to(car, { x: station3, duration: 2 });