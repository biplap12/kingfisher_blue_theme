import React, { useState } from 'react';
import { FaHome, FaTree, FaCar, FaCity } from 'react-icons/fa';
import { MdLocationCity, MdCalendarToday } from 'react-icons/md';
import { IoMdSchool } from 'react-icons/io';
import { PiStorefrontLight } from 'react-icons/pi';

const tabs = ['Map', 'School', 'Shop & Restaurant', 'Commute location'];

export default function MapSection() {
  const [activeTab, setActiveTab] = useState('Map');

  return (
      
      <section className="bg-white rounded-xl mt-4">
          <h2 className="text-2xl font-semibold mb-6 tracking-[2px] sub-heading-font">Location Information</h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-sm border ${
                  activeTab === tab ? 'bg-[#232266] text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Map/Image Placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with real map component */}
            <img
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7805207386527!2d55.26239281501078!3d25.265347383863596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434d3a6c0e1f%3A0x174f41226e0b46b0!2sDubai%20Creek%20Harbour!5e0!3m2!1sen!2sae!4v1702285085897!5m2!1sen!2sae"
              alt="Map"
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

      
  );
}
