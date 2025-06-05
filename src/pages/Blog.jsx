import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronDown } from "react-icons/fa";
import { blogPosts } from "../data/blogdata";

gsap.registerPlugin(ScrollTrigger);

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  const categories = useMemo(() => {
    const tags = blogPosts.flatMap((post) => post.tags);
    return ["All", ...Array.from(new Set(tags))];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.tags.includes(selectedCategory);
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  useLayoutEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 1,
      y: -40,
      duration: 1,
      ease: "power2.out",
    });

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [filteredPosts]);

  return (
    <div className="gradient-bg-blue text-white min-h-screen -mt-24 px-6 md:px-12 py-16  ">
      {/* Header with Background Image */}
      <div
        ref={headerRef}
        className="relative w-full h-[500px] md:h-[600px] mt-24 bg-cover bg-center rounded-3xl overflow-hidden mb-16"
        style={{
          backgroundImage:
            "url('https://unsplash.com/blog/content/images/2025/04/400K--Blog--1.jpg')",
        }}
      >
        <div className="absolute inset-0  backdrop-blur-sm" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Real Estate Blog</h1>
          <p className="text-lg text-[#F5BC6D] mb-6">
            The Hottest Real Estate Marketing, Website, and Technology Insights.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center"
          >
            <input
              type="email"
              placeholder="Email address..."
              className="w-72 px-4 py-2 rounded-l-full border border-white text-[#232266] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#F5BC6D] hover:bg-[#f3aa45] text-[#232266] px-6 py-2 rounded-r-full font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
        <div className="relative inline-block w-64">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none w-full bg-[#232266] text-white px-4 py-2 rounded-full text-sm cursor-pointer pr-10"
          >
            {categories.map((category, i) => (
              <option key={i} value={category} className="scroll-m-0">
                {category === "All" ? "All Categories" : category}
              </option>
            ))}
          </select>
          <FaChevronDown className="w-4 h-4 absolute top-3 right-4 text-white pointer-events-none" />
        </div>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="What are you searching for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-full bg-white text-[#232266] placeholder-gray-400 focus:outline-none w-64 border border-[#232266]"
          />
          <button
            onClick={handleReset}
            className="text-sm bg-[#F5BC6D] px-4 py-2 rounded-full text-[#232266] font-semibold"
          >
            RESET
          </button>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <Link key={index} to={`/blog/${index}`}>
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-[#1c1c3a] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer border border-[#F5BC6D]/20 h-[460px] flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-[#F5BC6D] text-xs text-[#232266] px-3 py-1 rounded-full font-bold"
                        >
                          {tag.toUpperCase()}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-3">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
