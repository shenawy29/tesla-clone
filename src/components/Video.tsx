import React from "react";
import { forwardRef } from 'react'

const Video = forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="h-screen snap-center w-full snap-always">
    <video
      autoPlay
      muted
      playsInline
      loop
      className="object-cover h-screen w-full"
    >
      <source src="/Tesla-Home-Video.webm" type="video/webm" />
    </video>
  </section>
));

Video.displayName = 'Video'
export default Video
