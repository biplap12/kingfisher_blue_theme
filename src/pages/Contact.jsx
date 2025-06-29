import React, { useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { showSuccessToast, showErrorToast } from "../config/toastConfig";
import api from "../services/api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    budget: "",
    project: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      const dataToSend = {
        ...formData,
        project: formData.project || 'kingfisher construencysd'
      };
          
      const response = await api.post('/contacts', dataToSend);
      if (response.status === 201) {
      showSuccessToast('Message sent successfully!');
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        budget: "",
        project: "",
        service: ""
      });
      }      
    } catch (error) {
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          data: error.config?.data
        }
      });
      showErrorToast(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
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
        <form className="grid grid-cols-2" onSubmit={handleSubmit}>
          {/* Row 1: Name / Email */}
          <div className="p-6 ">
            <label className="block text-sm text-gray-600 mb-2">
              Nice to meet you
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="What's your name?"
              className="w-full border-none outline-none placeholder-gray-800 focus:font-semibold"
              required
            />
          </div>
          <div className="p-6 ">
            <label className="block text-sm text-gray-600 mb-2">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full border-none outline-none placeholder-gray-800 focus:font-semibold"
              required
            />
          </div>

          {/* Row 2: Phone / Subject */}
          <div className="p-6 ">
            <label className="block text-sm text-gray-600 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full border-none outline-none placeholder-gray-800 focus:font-semibold"
              required
            />
          </div>
          <div className="p-6 ">
            <label className="block text-sm text-gray-600 mb-2">Subject</label>
            <input
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="Project name"
              className="w-full border-none outline-none placeholder-gray-800 focus:font-semibold"
            />
          </div>

          {/* Row 3: Budget / Service */}
          <div className="p-6 ">
            <label className="block text-sm text-gray-600 mb-2">Budget</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Your budget"
              className="w-full border-none outline-none placeholder-gray-800 focus:font-semibold"
            />
          </div>
          <div className="p-6 ">
            <label className="block text-sm text-gray-600 mb-2">
              Interested Service
            </label>
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Interested service"
              className="w-full border-none outline-none placeholder-gray-800 focus:font-semibold"
            />
          </div>

          {/* Row 4: Message */}
          <div className="p-6 col-span-2">
            <label className="block text-sm text-gray-600 mb-2">
              Your name
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your project"
              className="w-full border-none outline-none placeholder-gray-800 focus:font-semibold"
              required
            />
          </div>
          {/* Terms and Submit Button */}
          <div className="p-6 col-span-2">
            <div className="flex items-start space-x-3 mb-6">
              <input type="checkbox" id="terms" className="mt-1" required />
              <label htmlFor="terms" className="text-sm">
                I am bound by the terms of the Service. I accept the{" "}
                <a href="#" className="underline text-blue-600">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-primary-color hover:bg-red-500 rounded-sm cursor-pointer text-white py-4 font-semibold tracking-wide transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
