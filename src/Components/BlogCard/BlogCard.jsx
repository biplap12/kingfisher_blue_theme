// import React from 'react';
// import { Tag, Calendar, Clock, ArrowRight } from 'lucide-react';

// const BlogCard = ({ post, index }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden group transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1">
//       <div className="relative">
//         <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
//       </div>

//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
//         <p className="text-gray-600 mb-4">{post.description}</p>

//         <div className="flex flex-wrap gap-2 mb-4">
//           {post.tags.slice(0, 3).map((tag, idx) => (
//             <span key={idx} className="inline-flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
//               <Tag className="w-3 h-3" /><span>{tag}</span>
//             </span>
//           ))}
//         </div>

//         <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-1"><Calendar className="w-4 h-4" /><span>{post.date}</span></div>
//             <div className="flex items-center space-x-1"><Clock className="w-4 h-4" /><span>{post.readTime}</span></div>
//           </div>
//         </div>

//         <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
//           <span className="flex items-center justify-center space-x-2">Read Article <ArrowRight className="w-4 h-4" /></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

const BlogCard = ({ post, index }) => {
  const navigate = useNavigate();

  const handleReadArticle = () => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <article className="group cursor-pointer" onClick={handleReadArticle}>
        
      <div className="bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/50 border border-gray-100/60">
        
        {/* Image Section */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
          
          {/* Floating Read Time */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 2).map((tag, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-gray-700 transition-colors duration-200 cursor-pointer" onClick={handleReadArticle}>
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {post.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
              <span>Read</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default BlogCard