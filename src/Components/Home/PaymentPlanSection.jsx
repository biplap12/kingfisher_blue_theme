import React from "react";
import { Download } from "lucide-react";

const paymentSchedule = [
  { step: 1, percentage: "20%", note: "On booking" },
  { step: 2, percentage: "5%", note: "15th April 2025" },
  { step: 3, percentage: "5%", note: "15th August 2025" },
  { step: 4, percentage: "10%", note: "15th November 2025" },
  { step: 5, percentage: "10%", note: "15th March 2026" },
  { step: 6, percentage: "10%", note: "15th July 2026" },
  { step: 7, percentage: "40%", note: "Q1 2027 On Completion" },
];

const PaymentPlanSection = () => {
  return (
    <section id="payment-plan" className="py-10 px-6 md:px-24 bg-[#f9f9f9] lightSection">
      <h2 className="text-center text-4xl md:text-5xl font-light tracking-widest mb-15 heading-font">
        PAYMENT PLAN
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Steps */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {paymentSchedule.map((item, index) => (
            <div key={index} className="border-b border-gray-500 pb-10 ">
              <p className="text-sm text-gray-400 mb-1 flex justify-items-start t">
                {item.step}
              </p>
              <div className="flex flex-col items-center">
                <p className="text-[32px] font-semibold">{item.percentage}</p>
                <p className="text-[16px] text-gray-600 mt-1">{item.note}</p>
              </div>
            </div>
          ))}

          {/* Button */}
          {/* <div className="col-span-2 flex justify-center pt-6">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm font-medium hover:bg-black hover:text-white transition">
              <Download className="w-4 h-4" />
              DOWNLOAD PAYMENT PLAN
            </button>
          </div> */}
        </div>

        {/* Right: Image */}
        <div className="w-full h-full">
          <img
            src="new/1.jpg" // replace with your image path
            alt="Payment Plan View"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentPlanSection;
