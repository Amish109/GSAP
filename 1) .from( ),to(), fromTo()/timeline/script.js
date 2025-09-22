// So instead of calculating time for delay we can use timeline to make animation run after completion of one animatin
document.addEventListener("DOMContentLoaded",()=>{

    // Animating each shape one after other
    // gsap.to('.circle',{
    //     x:400,
    //     duration:3,
    //     rotate:360
    // })
    // gsap.to('.triangle',{
    //     x:400,
    //     duration:3,
    //     rotate:360,
    //     delay:3 // calculating the animation duration of previous to sync properly
    // })
    // gsap.to('.rectangle',{
    //     x:400,
    //     duration:3,
    //     rotate:360,
    //     delay:6 // calculating the animation duration of previous to sync properly

    // })
// ============================================================
    // Doing same using timeline
    // let animation_timeline = gsap.timeline();
    // animation_timeline.to('.circle',{
    //     x:400,
    //     duration:3,
    //     rotate:360
    // })
    // .to('.triangle',{
    //     x:400,
    //     duration:3,

    //     rotate:360,
    // })
    // .to('.rectangle',{
    //     x:400,
    //     duration:3,
    //     rotate:360,
    // })

// ============================================================
// ============================================================
    // Doing same using timeline but starting multiple at same time
    // let animation_timeline = gsap.timeline();
    // animation_timeline.to('.circle',{
    //     x:400,
    //     duration:3,
    //     rotate:360
    // },'test')  // SO by giving a common name this both will work together
    // .to('.triangle',{
    //     x:400,
    //     duration:3,

    //     rotate:360, 
    // })          // and this will work after both are completed
    // .to('.rectangle',{
    //     x:400,
    //     duration:3,
    //     rotate:360,
    // },'test')  // SO by giving a common name this both will work together

// =================================================
    // Doing same using timeline and starting one before completion
    let animation_timeline = gsap.timeline();
    animation_timeline.to('.circle',{
        x:400,
        duration:5,
        rotate:360
    }) 
    .to('.triangle',{
        x:400,
        duration:5,

        rotate:360, 
    },'-=1')        // -=1 means it will staart 1 se before the previous animation ends
    .to('.rectangle',{
        x:400,
        duration:5,
        rotate:360,
    },'+=3')  // +=1 means starts 1 sec aftr previos animation ends
    .to('.rectangle-new',{
        x:400,
        duration:5,
        rotate:360,
    },'3')  // jst number like (1,2,3) means start when timeline reaches that number no matter the sequence

// ============================================================



// ============================================================

    // Move all 3 to the right
    // gsap.to('.circle,.triangle,.rectangle',{
    //     x:400,
    //     duration:3
    // })
})