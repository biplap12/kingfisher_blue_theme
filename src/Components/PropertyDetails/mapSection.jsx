import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Your custom icon setup here (same as before)
const redIcon = new L.Icon({
  iconUrl: "/marker/location-marker-red.png",
  iconRetinaUrl: "/marker/location-marker-red.png",
  iconSize: [32, 32],
});

const dubaiLocations = [
  {
    name: "Burj Khalifa",
    lat: 25.197197,
    lng: 55.274376,
    images: ["/mapsection/burj-khalifa.png", "/mapsection/burj-khalifa.jpg"],
  },
  {
    name: "Palm Jumeirah",
    lat: 25.112222,
    lng: 55.138611,
    images: ["/dubai/palm-jumeirah.jpg", "/dubai/palm-jumeirah2.jpg"],
  },
  {
    name: "Dubai Marina",
    lat: 25.0781,
    lng: 55.1403,
    images: ["/dubai/dubai-marina.jpg", "/dubai/dubai-marina2.jpg"],
  },
  {
    name: "Dubai Mall",
    lat: 25.1985,
    lng: 55.2796,
    images: ["/dubai/dubai-mall.jpg", "/dubai/dubai-mall2.jpg"],
  },
  {
    name: "Dubai Frame",
    lat: 25.229721,
    lng: 55.296111,
    images: ["/dubai/dubai-frame.jpg", "/dubai/dubai-frame2.jpg"],
  },
];

const TooltipSlider = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      style={{
        width: "220px",
        height: "260px",
        textAlign: "center",
        borderRadius: "12px",
        background: "white",
        padding: "10px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        zIndex: 10,
        position: "relative",
      }}
    >
      <h3
        style={{
          fontWeight: "600",
          fontSize: "14px",
          color: "#1E40AF",
          marginBottom: "6px",
          whiteSpace: "normal",
        }}
      >
        {name}
      </h3>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "180px",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
            transition: "transform 0.3s ease-in-out",
          }}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.4)",
                color: "white",
                border: "none",
                borderRadius: "0 6px 6px 0",
                padding: "5px 8px",
                cursor: "pointer",
                fontSize: "18px",
                transition: "background 0.3s",
              }}
              aria-label="Previous Image"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.4)",
                color: "white",
                border: "none",
                borderRadius: "6px 0 0 6px",
                padding: "5px 8px",
                cursor: "pointer",
                fontSize: "18px",
                transition: "background 0.3s",
              }}
              aria-label="Next Image"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div style={{ fontSize: "12px", marginTop: "10px", color: "#1E40AF" }}>
        {name} <br />
        {/* Lat: {lat.toFixed(6)} <br />
        Lng: {lng.toFixed(6)} */}
      </div>
    </div>
  );
};

const DubaiMapSection = () => {
  // State to control which marker's tooltip is open
  const [activeTooltipIndex, setActiveTooltipIndex] = useState(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <MapContainer
          center={[25.1972, 55.2744]}
          zoom={12}
          scrollWheelZoom={true}
          style={{
            height: "520px",
            width: "100%",
            borderRadius: "16px",
            zIndex: 0,
          }}
          maxBounds={[
            [24.9, 54.8],
            [25.5, 55.7],
          ]}
          maxBoundsViscosity={1.0}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {dubaiLocations.map((location, idx) => (
            <Marker
              key={idx}
              position={[location.lat, location.lng]}
              icon={redIcon}
              eventHandlers={{
                mouseover: () => setActiveTooltipIndex(idx),
                mouseout: () => setActiveTooltipIndex(null),
              }}
            >
              {activeTooltipIndex === idx && (
                <Tooltip
                  direction="top"
                  offset={[0, -10]}
                  opacity={1}
                  interactive
                  zIndex={99999}
                  permanent
                  onMouseLeave={() => setActiveTooltipIndex(null)}
                  onMouseOver={() => setActiveTooltipIndex(idx)}
                >
                  <TooltipSlider
                    name={location.name}
                    lat={location.lat}
                    lng={location.lng}
                    images={location.images}
                  />
                </Tooltip>
              )}
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default DubaiMapSection;

export const MapSectionHeader = () => {
  return (
    <>
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-[#F6BC6D]">
        Iconic Places in Dubai
      </h2>
      <p className="text-md text-center text-gray-600 max-w-3xl mx-auto mb-8">
        Discover Dubai&#39;s most iconic destinations—from the soaring heights
        of Burj Khalifa to the luxury of Palm Jumeirah—all interactively mapped
        below.
      </p>
    </>
  );
};
