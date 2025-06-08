import React from 'react';

const Hero1 = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center text-white -mt-25"
      style={{
    backgroundImage: 'url("https://v.fastcdn.co/cdn-cgi/image/format=auto,fit=scale-down,sharpen=1/u/a43967b2/65501639-0-Desktop-Header-.jpg")',
        fontFamily: `'Wellsbrook Initials SG Regular'`,
      }}
    >
      {/* Center Text */}
      <div className="absolute top-1/4 text-5xl font-bold text-white  tracking-wide uppercase leading-20 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6 heading-font">
         <p>WHERE THE  SEA </p>
          <p>MEETS YOUR SOUL</p>
      </div>

      {/* Bottom Text */}
      {/* <div className="absolute bottom-6 w-full text-center">
        <p className="text-xl bg-opacity-50 inline-block px-4 py-2 rounded-md">Nepal</p>
      </div> */}
    </div>
  );
};

export default Hero1;


// import React from 'react';

// const Hero1 = () => {
//   return (
//     <div className="relative w-full h-screen text-white overflow-hidden -mt-25">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src="/videobg.mp4" type="video/mp4" className='h-fit w-full' />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay (optional dark tint) */}
//       <div className="absolute inset-0 bg-black/40 z-0" />

//       {/* Center Text */}
//       <div
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-6 z-10"
//         style={{ fontFamily: `'Playfair Display', serif` }}
//       >
//         <h1 className="text-4xl md:text-7xl  uppercase leading-tight tracking-wide main-text">
//           <p>WHERE THE  </p>
//           <p>SEA MEETS</p>
//           <p>YOUR SOUL</p>
//         </h1>
//       </div>

//       {/* Bottom Text */}
//       {/* <div className="absolute bottom-6 w-full text-center z-10">
//         <p className="text-xl bg-white/20 backdrop-blur-sm px-4 py-2 inline-block rounded-md">
//           Nepal
//         </p>
//       </div> */}
//     </div>
//   );
// };

// export default Hero1;
