import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="bg-white min-h-screen text-black font-sans text-lg mb-10">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] -mt-24 bg-center bg-cover bg-no-repeat z-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0  backdrop-blur-sm z-20" />
        <div className="relative z-30 text-center max-w-2xl mx-auto px-6 pt-32 mt-25">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-font">
            Contact
          </h1>
          <Breadcrumbs />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col px-6 md:px-20 py-10">
        <Link to="/" className="flex items-center text-gray-700 mb-6">
          <ArrowLeft size={18} className="mr-2" />
          Back
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Form section with table borders */}
        <form className="grid grid-cols-2 border border-gray-300">
          {/* Row 1: Name / Email */}
          <div className="p-6 border-b border-r border-gray-300">
            <label className="block text-sm text-gray-600 mb-2">
              Nice to meet you
            </label>
            <input
              type="text"
              placeholder="What’s your name?"
              className="w-full border-none outline-none placeholder-gray-800 focus:font-semibold"
            />
          </div>
          <div className="p-6 border-b border-gray-300">
            <label className="block text-sm text-gray-600 mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border-none outline-none placeholder-gray-800  focus:font-semibold"
            />
          </div>

          {/* Row 2: Phone / Subject */}
          <div className="p-6 border-b border-r border-gray-300">
            <label className="block text-sm text-gray-600 mb-2">Phone</label>
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full border-none outline-none placeholder-gray-800 focus:font-semibold"
            />
          </div>
          <div className="p-6 border-b border-gray-300">
            <label className="block text-sm text-gray-600 mb-2">Subject</label>
            <select className="w-full border-none outline-none text-black bg-white focus:font-semibold">
              <option>How can we help you?</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Partnership</option>
            </select>
          </div>

          {/* Row 3: Budget / Service */}
          <div className="p-6 border-b border-r border-gray-300">
            <label className="block text-sm text-gray-600 mb-2">Budget</label>
            <input
              type="text"
              placeholder="Your budget"
              className="w-full border-none outline-none placeholder-gray-800 focus:font-semibold"
            />
          </div>
          <div className="p-6 border-b border-gray-300">
            <label className="block text-sm text-gray-600 mb-2">
              Interested Service
            </label>
            <select className="w-full border-none outline-none text-black bg-white focus:font-semibold">
              <option>Construction</option>
              <option>Design</option>
              <option>Consulting</option>
            </select>
          </div>

          {/* Row 4: Message */}
          <div className="p-6 col-span-2 border-t border-b border-gray-300">
            <label className="block text-sm text-gray-600 mb-2">
              Your name
            </label>
            <textarea
              rows="4"
              placeholder="Tell us about your project"
              className="w-full border-none outline-none placeholder-gray-800 focus:font-semibold"
            />
          </div>
        </form>

        {/* Row 5: Terms - OUTSIDE bordered section */}
        <div className="p-6 col-span-2">
          <div className="flex items-start space-x-3">
            <input type="checkbox" id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-sm">
              I am bound by the terms of the Service. I accept the{" "}
              <a href="#" className="underline text-blue-600">
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </div>

        {/* Row 6: Button - OUTSIDE bordered section */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-primary-color hover:bg-red-500 rounded-sm cursor-pointer text-white py-4 font-semibold tracking-wide transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
