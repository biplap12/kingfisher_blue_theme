import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const videoSection = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoSection.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        videoRef.current,
        { scale: 1, opacity: 0.3 },
        { scale: 1.2, opacity: 1, duration: 1 }
      );
    }, videoSection);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={videoSection}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[20vh] bg-gradient-to-b from-white to-transparent z-20" />

      {/* Bottom Gradient */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-white to-transparent z-20" /> */}

      {/* Background Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2025/03/04/262412_tiny.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <h2 className="text-white md:text-6xl  text-6xl font-bold  tracking-wide uppercase leading-20 text-center p-6  main-text">
          Find your dream home{" "}
        </h2>
      </div>
    </section>
  );
};

export default Gallery;
