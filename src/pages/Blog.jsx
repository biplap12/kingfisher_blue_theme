import { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blogPosts } from "../data/blogdata";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import { MenuContext } from "../state/ContextMenu";
import { useInView } from "framer-motion";
import { ArrowLeft } from "lucide-react";

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

   const divRef = useRef(null);
    const {setMenuColor} = useContext(MenuContext)

    const isVisible = useInView(divRef, {once:false});

    useEffect(()=>{
setMenuColor("dark")
    },[isVisible])

    
  return (
   <div className="relative text-white -mt-25">
  {/* Background overlay */}
  <div className="absolute inset-0 h-fit bg-black/50 z-10" />

  {/* Header section with background image */}
  <div
    ref={headerRef}
    className="relative h-[46vh] mt-24 bg-center bg-cover bg-no-repeat z-20 overflow-hidden"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    }}
  >
    {/* Blur overlay */}
    <div className="absolute inset-0 backdrop-blur-sm z-20" />

    {/* Content */}
    <div className="relative z-30 text-center max-w-2xl mx-auto px-6 pt-32 pb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
      <Breadcrumbs />
      <p className="text-lg text-[#F5BC6D] mt-4">
        The Hottest Real Estate Marketing, Website, and Technology Insights.
      </p>
    </div>
  </div>


      

      {/* Blog Cards */}
      <Link to={'/'} className="flex justify-start mx-20 py-6 items-center text-gray-700"><ArrowLeft size={15} /> Back</Link>
      <div className="grid w-11/12 md:grid-cols-3 gap-5 mx-auto darkSection">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <Link key={index} to={`/blog/${index}`}>
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer border border-[#F5BC6D]/20 h-[410px] flex flex-col"
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
                    <h3 className="text-xl font-semibold mb-2 text-gray-500 line-clamp-1">
                      {post.title}
                    </h3>
                   <p className="text-sm text-gray-500 line-clamp-2">
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
