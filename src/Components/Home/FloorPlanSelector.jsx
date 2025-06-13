import { Contact, Download, MoveUpRight } from "lucide-react";
import React, { useState } from "react";

export const floorPlans = [
  {
    SN: 1,
    label: "Queen Bedroom",
    unit: "94",
    sqrft: "785 sq ft — 1022 sq ft",
    image: "/new/bed1.jpg",
  },
  {
    SN: 2,
    label: "King Bedroom",
    unit: "76",
    sqrft: "1102 sq ft — 1375 sq ft",
    image: "/new/bed2.jpg",
  },
  {
    SN: 3,
    label: "Double Bedroom",
    unit: "38",
    sqrft: "1450 sq ft — 1620 sq ft",
    image: "/new/bed3.jpg",
  },
  {
    SN: 4,
    label: "Bedroom Duplex",
    unit: "12",
    sqrft: "1810 sq ft — 2000 sq ft",
    image: "/new/bed4.jpg",
  },
];

const FloorPlanSelector = () => {
  const [selected, setSelected] = useState(floorPlans[0]);

  return (
    <section className="" id="floor-plan">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-16">
        <div className="text-center">
          <h2 className="heading-font text-4xl lg:text-6xl font-thin text-gray-800 tracking-widest mb-4">
            FLOOR PLANS
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>

          {/* <div className="w-20 h-px bg-amber-600 mx-auto"></div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Plan Selector */}
          <div className="lg:col-span-4 space-y-3">
            {floorPlans.map((plan, index) => (
              <div key={index} className="group">
                <button
                  onClick={() => setSelected(plan)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 border-2 ${
                    selected.label === plan.label
                      ? "bg-amber-600 text-white border-amber-600 shadow-lg"
                      : "bg-white text-gray-800 border-gray-200 hover:border-amber-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      selected.label === plan.label
                        ? "bg-white text-amber-600"
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {plan.SN}
                    </div>
                    <span className="text-xl font-light tracking-wide">
                      {plan.label.toUpperCase()}
                    </span>
                  </div>

                  {/* Details - Always visible but styled differently */}
                  <div className={`text-sm space-y-2 transition-all duration-300 ${
                    selected.label === plan.label
                      ? "text-amber-100"
                      : "text-gray-600"
                  }`}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Units Available</span>
                      <span className="text-lg font-light">{plan.unit}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Size Range</span>
                      <span className="text-sm">{plan.sqrft}</span>
                    </div>
                  </div>

                  {/* Active indicator */}
                  {selected.label === plan.label && (
                    <div className="mt-4 w-full h-px bg-white/30"></div>
                  )}
                </button>
              </div>
            ))}

          
          </div>

          {/* Image Preview */}
          <div className="lg:col-span-8">
            <div className=" ">
              <div className="absolute -inset-2rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className=" bg-white rounded-2xl p-4 shadow-2xl">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={selected.image}
                    alt={selected.label}
                    className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-700 "
                  />
                </div>
                
                {/* Image Overlay Info */}
                  {/* <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <h3 className="text-xl font-light text-gray-800 mb-1 tracking-wide">
                      {selected.label}
                    </h3>
                    <p className="text-sm text-gray-600">{selected.sqrft}</p>
                  </div> */}

                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gray-200"></div>
      </div>
    </section>
  );
};

export default FloorPlanSelector;