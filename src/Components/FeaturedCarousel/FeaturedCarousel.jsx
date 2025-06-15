

// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Tag, Calendar, Clock, ArrowRight } from 'lucide-react';

// const FeaturedCarousel = ({ posts }) => {
//       const [currentIndex, setCurrentIndex] = useState(0);
//       const featuredPosts = posts.slice(0, 4);
    
//       const nextSlide = () => {
//         setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
//       };
    
//       const prevSlide = () => {
//         setCurrentIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
//       };
    
//     //   useEffect(() => {
//     //     const interval = setInterval(nextSlide, 5000);
//     //     return () => clearInterval(interval);
//     //   }, []);
    
//       const currentPost = featuredPosts[currentIndex];
    
//       return (
//         <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
//           <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
//             {/* Left Content */}
//             <div className="flex flex-col justify-center space-y-6 animate-fade-in">
//               <div className="space-y-4">
//                 <span className="inline-block bg-[#f6bc6d] text-white px-4 py-2 rounded-full text-sm font-semibold">
//                   Featured Post
//                 </span>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//                   {currentPost.title}
//                 </h2>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   {currentPost.description}
//                 </p>
//               </div>
              
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {currentPost.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="inline-flex items-center space-x-1 bg-white/70 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
//                   >
//                     <Tag className="w-3 h-3" />
//                     <span>{tag}</span>
//                   </span>
//                 ))}
//               </div>
    
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4 text-gray-600">
//                   <div className="flex items-center space-x-1">
//                     <Calendar className="w-4 h-4" />
//                     <span className="text-sm">{currentPost.date}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Clock className="w-4 h-4" />
//                     <span className="text-sm">{currentPost.readTime}</span>
//                   </div>
//                 </div>
//                 <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold group">
//                   <span>Read More</span>
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             </div>
    
//             {/* Right Image */}
//             <div className="relative animate-fade-in">
//               <div className="relative rounded-xl overflow-hidden shadow-lg">
//                 <img
//                   src={currentPost.image}
//                   alt={currentPost.title}
//                   className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//               </div>
//             </div>
//           </div>
    
//           {/* Navigation */}
//           <div className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
//             <button
//               onClick={prevSlide}
//               className="bg-[#FFFDF6] backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:shadow-xl"
//             >
//               <ChevronLeft className="w-5 h-5 text-gray-700" />
//             </button>
            
//             <div className="flex space-x-2">
//               {featuredPosts.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentIndex 
//                       ? 'bg-blue-600 scale-110' 
//                       : 'bg-[#FAF6E9] hover:bg-white/80'
//                   }`}
//                 />
//               ))}
//             </div>
            
//             <button
//               onClick={nextSlide}
//               className="bg-[#FFFDF6] backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:shadow-xl"
//             >
//               <ChevronRight className="w-5 h-5 text-gray-700" />
//             </button>
//           </div>
//         </div>
//       );
//     };

// export default FeaturedCarousel;




import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Tag, Calendar, Clock, ArrowRight } from 'lucide-react';

// Sample data for demonstration

const FeaturedCarousel = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredPosts = posts.slice(0, 4);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  // Auto-play functionality (commented out as per your preference)
  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const currentPost = featuredPosts[currentIndex];

  return (
    <div className="relative">
      {/* Main Container */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100/50 mb-16">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          
          {/* Left Content Section */}
          <div className="flex flex-col justify-center p-8 lg:p-16 space-y-8">
            
            {/* Featured Badge */}
            <div className="inline-flex items-center">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide shadow-sm">
                Featured
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight tracking-tight">
              {currentPost.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-light max-w-lg">
              {currentPost.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {currentPost.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200/50 hover:bg-white hover:shadow-sm transition-all duration-200"
                >
                  <Tag className="w-3 h-3 mr-1.5 text-gray-500" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta Info & CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
              <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-light">{currentPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-light">{currentPost.readTime}</span>
                </div>
              </div>
              
              <button className="group inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:p-8">
            <div className="relative h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-100">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-15 right-20  transform -translate-x-1/2">
          <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-200/50">
            
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              disabled={featuredPosts.length <= 1}
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {featuredPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gray-900 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              disabled={featuredPosts.length <= 1}
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        /* Responsive typography */
        @media (max-width: 640px) {
          .text-2xl { font-size: 1.5rem; }
          .text-3xl { font-size: 1.875rem; }
          .text-4xl { font-size: 2.25rem; }
        }
        
        /* Smooth scrolling for better UX */
        * {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 4px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 2px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default FeaturedCarousel;