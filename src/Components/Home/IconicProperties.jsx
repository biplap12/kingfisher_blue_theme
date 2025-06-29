import React, { useState, useEffect } from "react";
import { MapPin, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { showErrorToast } from "../../config/toastConfig";

// Fallback properties in case API fails
const fallbackProperties = [
  {
    _id: "1",
    name: "Kingfisher Riverside Views",
    location: "Dubai Investment Park 2, UAE",
    price: "$354,000",
    mainImage: "https://images.unsplash.com/photo-1597171149529-7a8f69abe77b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: "2",
    name: "Kingfisher Islands",
    location: "Dubailand, Dubai, UAE",
    price: "$678,000",
    mainImage: "https://images.unsplash.com/photo-1592237892334-46facfb3f325?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: "3",
    name: "Violet",
    location: "Kingfisher Hills 2, Dubai, UAE",
    price: "$534,000",
    mainImage: "https://images.unsplash.com/photo-1626244105791-562784044969?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: "4",
    name: "Kingfisher Lagoons - Mykonos",
    location: "Dubailand, Dubai, UAE",
    price: "$790,000",
    mainImage: "https://images.unsplash.com/photo-1584306221131-373b2e117535?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const text = [
  {
    title: "Explore Our Iconic Properties",
    description:
      "Kingfisher Real Estate is recognized for developing premium residential towers, exclusive communities, and luxurious resort-style homes. From contemporary apartments in prime city locations to serene urban getaways, each property showcases modern design and high-end amenities, delivering a refined and elevated living experience.",
  },
];

const IconicProperties = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await api.get('/properties/active');
        if (response.data.success) {
          // Take first 4 properties or all if less than 4
          const activeProperties = response.data.data.slice(0, 4);
          setProperties(activeProperties);
        }
      } catch (err) {
        console.error('Error fetching properties:', err);
        setError('Failed to load properties. Showing sample data.');
        showErrorToast('Failed to load properties');
        setProperties(fallbackProperties);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section id="properties" className="py-20 px-6 lightSection">
      <div className="text-center mb-14">
        {text.map((textItem, index) => (
          <div key={index + "iconic property"}>
            <h2 className="text-4xl md:text-5xl tracking-widest heading-font uppercase mb-6">
              {textItem.title}
            </h2>
            <p className="text-lg text-gray-500 max-w-7xl mx-auto raleway-regular">
              {textItem.description}
            </p>
          </div>
        ))}
      </div>
      {/* grid md:grid-cols-4 gap-4 mx-30 mb-20 */}
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
        </div>
      ) : error ? (
        <div className="text-center py-10 text-red-500">
          <p>{error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-4 md:mx-24">
          {properties.map((property) => (
            <div
              key={property._id}
              className="border border-gray-300 rounded-lg overflow-hidden group hover:shadow-lg transition duration-300"
            >
              <img
                src={property.mainImage || 'https://via.placeholder.com/400x300?text=Image+Not+Available'}
                alt={property.name}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                }}
              />
              <div className="p-4 flex flex-col justify-between h-[180px]">
                <div>
                  <h3 className="text-md font-bold text-gray-900 line-clamp-2">
                    {property.name}
                  </h3>
                  <p className="text-sm paragraph-font tracking-wide text-gray-600 flex items-center mt-2">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </p>
                </div>
                <p className="text-black font-bold text-md mb-2">
                  FROM <span className="text-green-600">${property.price?.toLocaleString() || 'N/A'}</span>
                </p>
                <div className="mt-4">
                  <button
                    className="flex paragraph-font tracking-wide items-center justify-center px-4 py-2 rounded-xl border-2 border-[#f6bc6d] text-black hover:bg-[#f6bc6d] hover:text-black transition-colors duration-300 cursor-pointer w-full"
                    onClick={() => navigate(`/properties/${property._id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex justify-center ">
        <button
          onClick={() => navigate("/properties")}
          className="flex items-center gap-2 px-7 py-3 rounded-xl bg-[#f6bc6d] text-black text-base font-medium tracking-wide hover:bg-[#f6bd6dcf] transition duration-300 ease-in-out shadow-sm hover:shadow-lg cursor-pointer"
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default IconicProperties;
