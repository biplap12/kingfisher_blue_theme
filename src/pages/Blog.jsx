
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Filter, Tag, Calendar, Clock, ArrowRight } from 'lucide-react';
// import { blogPosts } from "../data/blogdata";

// // Since Framer Motion isn't available, I'll create subtle CSS animations
// // In your actual project, replace these with framer-motion components

// // Sample blog data (replace with your import)

// // Custom animation classes (replace with framer-motion in your project)
// const animationClasses = {
//   fadeInUp: "animate-fade-in-up",
//   fadeIn: "animate-fade-in",
//   slideIn: "animate-slide-in"
// };

// const FeaturedCarousel = ({ posts }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const featuredPosts = posts.slice(0, 4);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const currentPost = featuredPosts[currentIndex];

//   return (
//     <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden shadow-lg mb-12">
//       <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
//         {/* Left Content */}
//         <div className="flex flex-col justify-center space-y-6 animate-fade-in">
//           <div className="space-y-4">
//             <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
//               Featured Post
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//               {currentPost.title}
//             </h2>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               {currentPost.description}
//             </p>
//           </div>
          
//           <div className="flex flex-wrap gap-2 mb-4">
//             {currentPost.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="inline-flex items-center space-x-1 bg-white/70 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
//               >
//                 <Tag className="w-3 h-3" />
//                 <span>{tag}</span>
//               </span>
//             ))}
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4 text-gray-600">
//               <div className="flex items-center space-x-1">
//                 <Calendar className="w-4 h-4" />
//                 <span className="text-sm">{currentPost.date}</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Clock className="w-4 h-4" />
//                 <span className="text-sm">{currentPost.readTime}</span>
//               </div>
//             </div>
//             <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold group">
//               <span>Read More</span>
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//             </button>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="relative animate-fade-in">
//           <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
//             <img
//               src={currentPost.image}
//               alt={currentPost.title}
//               className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
//         <button
//           onClick={prevSlide}
//           className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:shadow-xl"
//         >
//           <ChevronLeft className="w-5 h-5 text-gray-700" />
//         </button>
        
//         <div className="flex space-x-2">
//           {featuredPosts.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex 
//                   ? 'bg-blue-600 scale-110' 
//                   : 'bg-white/60 hover:bg-white/80'
//               }`}
//             />
//           ))}
//         </div>
        
//         <button
//           onClick={nextSlide}
//           className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:shadow-xl"
//         >
//           <ChevronRight className="w-5 h-5 text-gray-700" />
//         </button>
//       </div>
//     </div>
//   );
// };

// const BlogCard = ({ post, index }) => {
//   return (
//     <div 
//       className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in-up"
//       style={{ animationDelay: `${index * 100}ms` }}
//     >
//       <div className="relative overflow-hidden">
//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>
      
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
//           {post.title}
//         </h3>
        
//         <p className="text-gray-600 mb-4 line-clamp-3">
//           {post.description}
//         </p>
        
//         <div className="flex flex-wrap gap-2 mb-4">
//           {post.tags.slice(0, 3).map((tag, tagIndex) => (
//             <span
//               key={tagIndex}
//               className="inline-flex items-center space-x-1 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-3 py-1 rounded-full text-sm transition-colors duration-300 cursor-pointer"
//             >
//               <Tag className="w-3 h-3" />
//               <span>{tag}</span>
//             </span>
//           ))}
//         </div>
        
//         <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-1">
//               <Calendar className="w-4 h-4" />
//               <span>{post.date}</span>
//             </div>
//             <div className="flex items-center space-x-1">
//               <Clock className="w-4 h-4" />
//               <span>{post.readTime}</span>
//             </div>
//           </div>
//         </div>
        
//         <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg transition-all duration-300 font-semibold group">
//           <span className="flex items-center justify-center space-x-2">
//             <span>Read Article</span>
//             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// const BlogFilter = ({ tags, selectedTag, onTagChange, searchTerm, onSearchChange }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6 mb-8 animate-fade-in">
//       <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
//         <div className="flex items-center space-x-2">
//           <Filter className="w-5 h-5 text-gray-600" />
//           <h3 className="text-lg font-semibold text-gray-900">Filter Posts</h3>
//         </div>
        
//         <div className="flex-1">
//           <input
//             type="text"
//             placeholder="Search blog posts..."
//             value={searchTerm}
//             onChange={(e) => onSearchChange(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//           />
//         </div>
        
//         <div className="flex flex-wrap gap-2">
//           <button
//             onClick={() => onTagChange("All")}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//               selectedTag === "All"
//                 ? 'bg-blue-600 text-white shadow-lg'
//                 : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
//             }`}
//           >
//             All
//           </button>
//           {tags.map((tag) => (
//             <button
//               key={tag}
//               onClick={() => onTagChange(tag)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 selectedTag === tag
//                   ? 'bg-blue-600 text-white shadow-lg'
//                   : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
//               }`}
//             >
//               {tag}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const BlogPage = () => {
//   const [selectedTag, setSelectedTag] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredPosts, setFilteredPosts] = useState(blogPosts);

//   // Get all unique tags
//   const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

//   useEffect(() => {
//     let filtered = blogPosts;

//     if (selectedTag !== "All") {
//       filtered = filtered.filter(post => post.tags.includes(selectedTag));
//     }

//     if (searchTerm) {
//       filtered = filtered.filter(post =>
//         post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
//       );
//     }

//     setFilteredPosts(filtered);
//   }, [selectedTag, searchTerm]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease-out forwards;
//           opacity: 0;
//         }
        
//         .animate-fade-in {
//           animation: fadeIn 0.8s ease-out forwards;
//         }
        
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header */}
//         <div className="text-center mb-12 animate-fade-in">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our Blog
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover insights, tips, and strategies to help grow your business
//           </p>
//         </div>

//         {/* Featured Carousel */}
//         <FeaturedCarousel posts={blogPosts} />

//         {/* Filter Section */}
//         <BlogFilter
//           tags={allTags}
//           selectedTag={selectedTag}
//           onTagChange={setSelectedTag}
//           searchTerm={searchTerm}
//           onSearchChange={setSearchTerm}
//         />

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredPosts.map((post, index) => (
//             <BlogCard key={post.id} post={post} index={index} />
//           ))}
//         </div>

//         {/* No Results */}
//         {filteredPosts.length === 0 && (
//           <div className="text-center py-12 animate-fade-in">
//             <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Filter className="w-12 h-12 text-blue-600" />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-2">No posts found</h3>
//             <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
//             <button
//               onClick={() => {
//                 setSelectedTag("All");
//                 setSearchTerm("");
//               }}
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold"
//             >
//               Clear Filters
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;

import React, { useState, useEffect } from 'react';
// import FeaturedCarousel from './FeaturedCarousel';
// import BlogFilter from './BlogFilter';
// import BlogCard from './BlogCard';
import { blogPosts } from '../data/blogdata';
import FeaturedCarousel from '../Components/FeaturedCarousel/FeaturedCarousel';
import BlogFilter from '../Components/BlogFIlter/BlogFilter';
import BlogCard from '../Components/BlogCard/BlogCard';

const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  useEffect(() => {
    let filtered = blogPosts;
    if (selectedTag !== 'All') {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    setFilteredPosts(filtered);
  }, [selectedTag, searchTerm]);

  return (
    <div className="min-h-screen w-full bg-gray-50 ">
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

<div
        className="relative w-full mx-auto h-screen bg-cover bg-center text-white -mt-25 darkSection"
        style={{
          backgroundImage: 'url("/property/property.jpg")',
          fontFamily: `'Wellsbrook Initials SG Regular'`,
          height: "75vh",
          padding: "0 50px",
        }}
      >
        {/* Black overlay at 80% */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Centered Text */}
        <div className="absolute top-[450px] left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6">
          <p className="text-6xl font-bold heading-font tracking-widest uppercase leading-20 heading-font">
            Blog
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
   
     
        {/* Featured Carousel */}
        <FeaturedCarousel posts={blogPosts} />

        {/* Filter Section */}
        <BlogFilter
          tags={allTags}
          selectedTag={selectedTag}
          onTagChange={setSelectedTag}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12 fade-in-up opacity-0">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSelectedTag('All');
                setSearchTerm('');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
