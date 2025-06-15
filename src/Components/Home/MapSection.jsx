
import React from "react";
import {
  TrainFront,
  Plane,
  Briefcase,
  ShoppingBag,
} from "lucide-react";

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
    <section className="" id="location">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center">
          <h2 className="heading-font tracking-widest text-4xl lg:text-6xl font-extralight text-slate-800 mb-4">
            LOCATION
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Location List */}
          <div className=" lg:col-span-2 space-y-8 ">
            {locations.map((item, i) => (
              <div 
                key={i} 
                className=" flex items-center gap-6 p-6 rounded-2xl bg-white/60  border border-slate-200/50 hover:bg-white/80 hover:shadow-lg transition-all duration-500"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center transition-all duration-300">
                  <div className="text-amber-700 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xl font-light text-slate-800 mb-1 tracking-wide">
                    {item.time}
                  </p>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>



          {/* Map */}
          <div className="lg:col-span-3">
            <div className="">
              <div className="rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className=" bg-white rounded-2xl p-2 shadow-xl">
                <iframe
                  title="Dubai Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7805207386527!2d55.26239281501078!3d25.265347383863596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434d3a6c0e1f%3A0x174f41226e0b46b0!2sDubai%20Creek%20Harbour!5e0!3m2!1sen!2sae!4v1702285085897!5m2!1sen!2sae"
                  width="100%"
                  height="450"
                  className="rounded-xl border-0"
                  loading="lazy"
                  // style={{ filter: 'contrast(1.1) saturate(1.2)' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default MapSection;