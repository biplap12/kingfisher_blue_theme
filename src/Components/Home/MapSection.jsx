import React from "react";
import { TrainFront, Plane, Briefcase, ShoppingBag } from "lucide-react";
import DubaiMapSection from "../PropertyDetails/mapSection";

const locations = [
  {
    time: "10 MINUTES",
    label: "Gold Souq Metro Station",
    icon: <TrainFront className="w-5 h-5" />,
  },
  {
    time: "20 MINUTES",
    label: "Dubai International Airport",
    icon: <Plane className="w-5 h-5" />,
  },
  {
    time: "24 MINUTES",
    label: "Downtown Dubai",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    time: "33 MINUTES",
    label: "Business Bay",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
];

const MapSection = () => {
  return (
    <section className="bg-white" id="location">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="heading-font tracking-widest text-3xl sm:text-4xl lg:text-6xl font-extralight text-slate-800 mb-4">
            LOCATION
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Location List with padding */}
        <div className="lg:col-span-2 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 space-y-6 sm:space-y-8 h-fit my-auto">
          {locations.map((item, i) => (
            <div
              key={i}
              className="flex items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/60 border border-slate-200/50 hover:bg-white/80 hover:shadow-sm transition-all duration-500"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center transition-all duration-300">
                <div className="text-amber-700">{item.icon}</div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base sm:text-xl font-light text-slate-800 mb-1 tracking-wide">
                  {item.time}
                </p>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Map without padding */}
        <div className="lg:col-span-3  px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 space-y-6 sm:space-y-8 h-fit my-auto">
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <DubaiMapSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
