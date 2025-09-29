import React, { useRef } from 'react'
import video from '../../../../assets/vdo/vdo1_bg_removed_new.mp4'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ScrollVideo = () => {
  const video_ref = useRef(null);
  useGSAP(() => {
    const video = video_ref.current;

    if (!video) return;

    const handleLoadedMetadata = () => {
      const duration = video.duration;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top top",
          end: "bottom start",
          scrub: true,
          markers: true,
          pin:true
        },
      });

      tl.to(video, { currentTime: duration, ease: "back.inOut" });
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => video.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, []); 
  return (
 <div className="scroll-section absolute bottom-[-60px] left-0 w-full h-full flex justify-center items-end">
  <video
    ref={video_ref}
    className=" h-[750px]"
    src={video}
    // autoPlay
    // loop
    muted
    playsInline
  />
</div>

  )
}

export default ScrollVideo