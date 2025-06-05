import React, { useState } from "react";

export const floorPlans = [
  {
    label: "1 Bedroom",
    unit: "94",
    sqrft: "785 sq ft — 1022 sq ft",
    image: "/new/bed1.jpg",
  },
  {
    label: "2 Bedroom",
    unit: "76",
    sqrft: "1102 sq ft — 1375 sq ft",
    image: "/new/bed2.jpg",
  },
  {
    label: "3 Bedroom",
    unit: "38",
    sqrft: "1450 sq ft — 1620 sq ft",
    image: "/new/bed3.jpg",
  },
  {
    label: "3 Bedroom Duplex",
    unit: "12",
    sqrft: "1810 sq ft — 2000 sq ft",
    image: "/new/bed4.jpg",
  },
];

const FloorPlanSelector = () => {
  const [selected, setSelected] = useState(floorPlans[0]);

  return (
    <section className="py-20 px-6 md:px-24 bg-[#f9f9f9]">
      <h2 className="text-center text-3xl font-light tracking-widest mb-16">
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
                {plan.label.toUpperCase()}
              </button>

              {/* Details only for selected */}
              {selected.label === plan.label && (
                <>
                  <div className="mt-2 text-sm text-gray-600 mb-2 flex justify-between">
                    <p className="mb-1">
                      UNITS: <span className="font-medium">{plan.unit}</span>
                    </p>
                    <p className="text-xs">{plan.sqrft}</p>
                  </div>
                  <div className="border-b border-black" />
                </>
              )}

              {/* Inactive buttons get a grey border */}
              {selected.label !== plan.label && (
                <div className="border-b border-gray-300 mt-2" />
              )}
            </div>
          ))}

          <a
            href={selected.image}
            download
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 border border-black text-sm font-medium hover:bg-black hover:text-white transition"
          >
            ⬇ DOWNLOAD FLOOR PLAN
          </a>
        </div>

        {/* Image Preview */}
        <div className="flex-1 w-full flex items-center justify-center bg-white p-6 shadow-md rounded-md">
          <img
            src={selected.image}
            alt={selected.label}
            className="max-w-full max-h-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FloorPlanSelector;
