// About GSAP it is a js library that handles animtion

// GreenSock Animation Platform (GSAP)

/*

    Why Lean GSAP
    - Easy to learn
    - Use of methods to control animation
    - Can build controllers like start, stop, pause, reverse, play, restart

*/

/**
    gsap.from('.box',{
        color:'grey',
    })

    --> gsap.method('selector',{property})



    // ========================================= from() ============================

    gsap.from('.box-1',{y:300,duration:3})
    --> It is used when a div is at fixed position and need to animate it before (like from to this state)
    --> So now this will make the div be at top position and from there animate to the position it is now 

 */