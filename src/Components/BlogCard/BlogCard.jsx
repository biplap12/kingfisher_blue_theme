import React from 'react';
import { Tag, Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, index }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group transition duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="inline-flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
              <Tag className="w-3 h-3" /><span>{tag}</span>
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1"><Calendar className="w-4 h-4" /><span>{post.date}</span></div>
            <div className="flex items-center space-x-1"><Clock className="w-4 h-4" /><span>{post.readTime}</span></div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          <span className="flex items-center justify-center space-x-2">Read Article <ArrowRight className="w-4 h-4" /></span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
