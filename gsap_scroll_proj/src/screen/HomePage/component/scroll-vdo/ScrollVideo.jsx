/*
It skips some frames as mmost vdos have keyframes only few sec but scrub based animation needs keyframes every sec

for that we use an oppen source named
-- FFmpeg : For handling vdos,audio and other multimedia file and streams
designed for processing vdos and audios


https://www.ffmpeg.org/download.html#build-windows
download vdo and use this command
ffmpeg -i coffee_vdo.mp4 -vf "scale=960:-2" -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4

*/


import React, { useRef } from 'react'
// import video from '../../../../assets/vdo/vdo1_bg_removed_new.mp4'
// import video from '../../../../assets/vdo/coffee_vdo.mp4'
import video from '../../../../assets/vdo/output.mp4'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ScrollVideo = () => {
  const video_ref = useRef(null);
  useGSAP(() => {
    const video = video_ref.current;

    if (!video) return;

    const handleLoadedMetadata = (e) => {
        e.currentTarget.playbackRate = 0.5;
      const duration = video.duration;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top+=100 top",
          // end: "bottom start",
          end: "bottom+=1000 top+=200",
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
 <div className="scroll-section  bottom-0  left-0 h-full flex justify-center items-end !w-full !p-0">
  <video
    ref={video_ref}
    className="!w-full"
    src={video}
    //  data-speed="0.3"
    // autoPlay
    // loop
    muted
    playsInline
  />
</div>

  )
}

export default ScrollVideo