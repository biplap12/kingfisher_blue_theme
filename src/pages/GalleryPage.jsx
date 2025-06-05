import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiaTimesSolid } from "react-icons/lia";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const images = {
  CLASSIC: [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
  ],
  mini: ["/gallery/img7.jpg", "/gallery/img8.jpg", "/gallery/img9.jpg"],
};

export default function GalleryPage() {
  const [selected, setSelected] = useState("CLASSIC");
  const [modalImgIndex, setModalImgIndex] = useState(null);
  const modalRef = useRef(null);
  const galleryRef = useRef(null);
  const currentImages = images[selected];

  // Disable scroll on modal open
  useEffect(() => {
    document.body.style.overflow = modalImgIndex !== null ? "hidden" : "auto";
  }, [modalImgIndex]);

  // Scroll animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".gallery-img").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, galleryRef);
    return () => ctx.revert();
  }, [selected]);

  // Modal animation
  useEffect(() => {
    if (modalImgIndex !== null && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [modalImgIndex]);

  // ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setModalImgIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handlePrev = () =>
    setModalImgIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );

  const handleNext = () =>
    setModalImgIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="bg-black text-white px-10 -mt-25 sm:px-20 py-12 min-h-screen">
      {/* Heading */}
      <div className="mt-20">
        <h1 className="text-end text-white mb-8 text-6xl md:text-8xl tracking-tight font-light">
        <span className="italic font-bold">gallery</span>
      </h1>

      {/* Toggle */}
      <div className="flex gap-6 text-xl mb-10">
        {["CLASSIC", "mini"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setSelected(type);
              setModalImgIndex(null);
            }}
            className={`${
              selected === type ? "underline" : "text-white/50"
            } italic font-semibold transition`}
          >
            {type}.
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div
        ref={galleryRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {currentImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Gallery ${selected} ${idx}`}
            onClick={() => setModalImgIndex(idx)}
            className="gallery-img cursor-pointer rounded-3xl w-full h-[400px] object-cover transition-transform hover:scale-105 duration-300"
          />
        ))}
      </div>

      {/* Modal */}
      {modalImgIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setModalImgIndex(null)}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="relative flex items-center justify-center w-full max-w-7xl px-6"
          >
            <button
              onClick={() => setModalImgIndex(null)}
              className="absolute top-4 right-4 text-white text-3xl p-2 rounded-full hover:scale-110"
              aria-label="Close"
            >
              <LiaTimesSolid />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-0 text-white text-4xl bg-white/10 hover:bg-white/20 px-2 py-2 rounded-full"
              aria-label="Prev"
            >
              <MdNavigateBefore />
            </button>

            <img
              src={currentImages[modalImgIndex]}
              alt="modal-img"
              className="max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />

            <button
              onClick={handleNext}
              className="absolute right-0 text-white text-4xl bg-white/10 hover:bg-white/20 px-2 py-2 rounded-full"
              aria-label="Next"
            >
              <MdNavigateNext />
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
