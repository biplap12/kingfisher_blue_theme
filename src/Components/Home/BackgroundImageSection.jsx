import React, { useEffect, useRef } from "react";
import { useBannerHeight } from "../../Context/BannerHeightContext";

const Hero1 = () => {
  const bannerRef = useRef(null);
  const { setBannerHeight } = useBannerHeight();
  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      data-theme="dark"
      className="relative w-full h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url("https://v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1/u/a43967b2/65501639-0-Desktop-Header-.jpg")',
      }}
      ref={bannerRef}
    >
      {/* Center Text */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
  font-bold text-white tracking-wide uppercase leading-tight 
  text-center px-4 sm:px-10 md:px-16 lg:px-24 py-8 z-10 heading-font"
      >
        <h1 className="text-white mb-2 sm:mb-4">Your Dream House</h1>
        <h2 className="text-white">Becoming True</h2>
      </div>

      <div className="absolute inset-0 bg-black/70"></div>
    </div>
  );
};

export default Hero1;
