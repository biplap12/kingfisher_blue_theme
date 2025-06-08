import { Download } from "lucide-react";
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
    <section className="py-20 px-6 md:px-24 bg-[#f9f9f9]">
      <h2 className="text-center text-3xl font-light tracking-widest mb-16 heading-font">
        FLOOR PLANS
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {floorPlans.map((plan, index) => (
            <div key={index}>
              <button
                onClick={() => setSelected(plan)}
                className="text-left w-full  tracking-wider transition-all text-gray-700 hover:text-black text-2xl"
              >
                <div className={`flex items-center gap-3 p-2 rounded-lg ${
                  selected.label === plan.label
                    ? "bg-[#F6BC6D] text-white"
                    : "bg-white border border-gray-300 hover:bg-gray-100"
                    }`}>
                  <span className="text-sm">{plan.SN}</span>
                  <span>{plan.label.toUpperCase()}</span>
                </div>
              </button>

              {/* Details only for selected */}
              {selected.label === plan.label && (
                <>
                  <div className="mt-2 text-sm text-gray-600 mb-2 flex justify-between">
                    <p className="mb-1">
                      Units- <span className="font-medium">{plan.unit}</span>
                    </p>
                    <p className="text-xs">{plan.sqrft}</p>
                  </div>
                  <div className="border-b border-black" />
                </>
              )}
            </div>
          ))}

        <div className="flex flex-col items-center">
          <a
            href={selected.image}
          download={selected.label + ' Floor Plan kingfisher real estate'}
            className="mt-8 inline-flex items-center w-fit gap-2 px-4 py-2 border rounded-sm border-black text-sm font-medium hover:bg-black hover:text-white transition"
          >
            <Download />DOWNLOAD FLOOR PLAN
          </a>
        </div></div>

        {/* Image Preview */}
        <div className="flex-1 w-full flex items-center justify-center bg-white ">
          <img
            src={selected.image}
            alt={selected.label}
            className="max-w-full max-h-[600px] h-[80vh] object-fill w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FloorPlanSelector;
