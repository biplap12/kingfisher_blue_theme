import React from "react";

const Hero1 = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center text-white "
      style={{
        backgroundImage:
          'url("https://v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1/u/a43967b2/65501639-0-Desktop-Header-.jpg")',
        fontFamily: `'Wellsbrook Initials SG Regular'`,
      }}
    >
      {/* Center Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-wide uppercase leading-20 text-center p-6 z-10 heading-font">
        <p>Your Dream House</p>
        <p>Becoming True</p>
      </div>
      <div className="absolute inset-0 bg-black/70">
      </div>
    </div>
  );
};

export default Hero1;
