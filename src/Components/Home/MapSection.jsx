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
    icon: <TrainFront className="w-6 h-6" />,
  },
  {
    time: "20 MINUTES",
    label: "Dubai International Airport",
    icon: <Plane className="w-6 h-6" />,
  },
  {
    time: "24 MINUTES",
    label: "Downtown Dubai",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    time: "33 MINUTES",
    label: "Business Bay",
    icon: <ShoppingBag className="w-6 h-6" />,
  },
];

const MapSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 md:px-24 py-16 items-start">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 space-y-10">
        {locations.map((item, i) => (
          <div key={i} className="flex items-start gap-4 border-b pb-6">
            <div className="text-primary">{item.icon}</div>
            <div>
              <p className="font-semibold">{item.time}</p>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="w-full md:w-2/3">
        <iframe
          title="Dubai Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7805207386527!2d55.26239281501078!3d25.265347383863596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434d3a6c0e1f%3A0x174f41226e0b46b0!2sDubai%20Creek%20Harbour!5e0!3m2!1sen!2sae!4v1702285085897!5m2!1sen!2sae"
          width="100%"
          height="500"
          className="rounded-xl shadow-md border"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
