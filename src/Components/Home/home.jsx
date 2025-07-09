// import { ArrowRight, CircleArrowRight } from "lucide-react";
// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="relative h-screen w-full bg-[#0E1C41] text-white overflow-hidden">
//       {/* Background Image + Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src="/apartments/apartment2.jpg"
//           alt="Background"
//           className="w-full h-full object-cover opacity-30"
//         />
//         <div className="absolute inset-0 bg-[#0E1C41] bg-opacity-90" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex w-full flex-col items-center justify-center h-full px-4">
//         {/* Title */}
//         <div className="w-full max-w-screen-xl">
//           <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl">
//             We integrate <br />
//             <span className="font-semibold text-white">Real economy</span> into
//             the <span className="font-semibold text-blue-300">Digital one</span>
//           </h1>
//         </div>

//         {/* Feature List */}
//         <div className="w-full max-w-screen-xl ml-[10%]">
//           <div className="mt-12 flex flex-row  items-start w-2xl">
//             {[
//               "Become a co-owner of real estate on blockchain",
//               "Receive up to 40% of annual profit",
//               "Get 7x profit on token’s growth",
//             ].map((text, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-start gap-4 bg-opacity-10 backdrop-blur-sm p-4 "
//               >
//                 <img
//                   src="./old-building.png"
//                   alt="Icon"
//                   className="w-12 h-12 shrink-0"
//                 />
//                 <p className="text-sm leading-relaxed">{text}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA + Countdown */}
//         <div className="mt-12 w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-6 px-4">
//           {/* CTA Buttons */}
//           <div className="flex gap-4">
//             <button className="bg-transparent outline-3 outline-cyan-300 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-between gap-5 ">
//               Buy Tokens <CircleArrowRight />
//             </button>
//             <button className="bg-transparent outline-3 outline-cyan-300 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-between gap-5 ">
//               White paper{" "}
//               <span className="text-cyan-300 rotate-90">
//                 <CircleArrowRight />
//               </span>
//             </button>
//           </div>

//           {/* Countdown */}
//           <div className="flex  flex-col mt-4 md:mt-0">
//             <div className="text-sm text-white/60">
//               <small>Count down</small>
//               <p>Until the launch</p>
//             </div>
//             <div className="flex gap-4 flex-row">
//               {[
//                 { label: "Days", value: "20" },
//                 { label: "Hours", value: "09" },
//                 { label: "Min", value: "30" },
//                 { label: "Sec", value: "45" },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex flex-col border px-5 py-3 outline-2 outline-cyan-200  rounded-full tracking-tighter linespace-tighter"
//                 >
//                   <div className="text-2xl p-0 font-bold">{item.value}</div>
//                   <div className="text-xs text-white/60">{item.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div>mouse</div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import { ArrowRight, CircleArrowRight, Mouse } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full bg-[#0E1C41] text-white overflow-hidden">
      {/* Background Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/apartments/apartment2.jpg')",
        }}
      >
        <div className="absolute w-full inset-0 bg-gradient-to-l from-[#0A1430] via-[#0E1C41]/60 to-[#0A1430] opacity-99 " />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center h-full px-4">
        {/* Title */}
        <div className="w-full max-w-screen-xl">
          <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl">
            We integrate <br />
            <span className="font-semibold text-white">Real economy</span> into
            the <span className="font-semibold text-blue-300">Digital one</span>
          </h1>
        </div>

        {/* Feature List */}
        <div className="w-full max-w-screen-xl ml-[10%]">
          <div className="mt-12 flex flex-row items-start w-2xl">
            {[
              "Become a co-owner of real estate on blockchain",
              "Receive up to 40% of annual profit",
              "Get 7x profit on token’s growth",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-opacity-10 p-5"
              >
                <img
                  src="./old-building.png"
                  alt="Icon"
                  className="w-16 h-16 shrink-0"
                />
                <p className="text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA + Countdown */}
        <div className="mt-12 w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="bg-transparent outline-3 outline-cyan-300 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-between gap-5 ">
              Buy Tokens <CircleArrowRight />
            </button>
            <button className="bg-transparent outline-3 outline-cyan-300 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-between gap-5 ">
              White paper{" "}
              <span className="text-cyan-300 rotate-90">
                <CircleArrowRight />
              </span>
            </button>
          </div>

          {/* Countdown */}
          <div className="flex flex-col mt-4 md:mt-0">
            <div className="text-sm text-white/60">
              <small>Count down</small>
              <p>Until the launch</p>
            </div>
            <div className="flex gap-4 flex-row">
              {[
                { label: "Days", value: "20" },
                { label: "Hours", value: "09" },
                { label: "Min", value: "30" },
                { label: "Sec", value: "45" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col border px-5 py-3 outline-2 outline-cyan-200 rounded-full tracking-tighter"
                >
                  <div className="text-2xl p-0 font-bold">{item.value}</div>
                  <div className="text-xs text-white/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce flex items-center justify-center w-12 h-16 border-2 border-white rounded-full bg-white/10 backdrop-blur-md shadow-md">
          <Mouse className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
