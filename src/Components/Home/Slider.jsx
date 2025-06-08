// import React, { useState } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const images = [
//   '/gallery/img1.jpg',
//   '/gallery/img2.jpg',
//   '/gallery/img3.jpg',
//   '/gallery/img4.jpg',
//   '/gallery/img5.jpg',
//   '/gallery/img6.jpg',
//   '/gallery/img7.jpg',
// ]

// const Gallery = () => {
//   const [current, setCurrent] = useState(0)
//   const length = images.length

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1))
//   }

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
//   }

//   const getIndex = (index) => (index + length) % length

//   return (
//     <div className="flex flex-col items-center w-full">
//       {/* Images container: full width */}
//       <div className="relative w-full h-[500px] flex justify-center items-center overflow-visible">
//         {/* Left image */}
//         <img
//           src={images[getIndex(current - 1)]}
//           alt="Left Slide"
//           className="absolute left-0 top-0 w-[10%] h-full object-cover opacity-80 transform -translate-x-6 scale-100 transition-all duration-500"
//           draggable={false}
//           style={{ zIndex: 10 }}
//         />

//         {/* Center image */}
//         <img
//           src={images[current]}
//           alt="Current Slide"
//           className="relative w-[80%] h-full object-cover shadow-lg transition-all duration-500 scale-100"
//           draggable={false}
//           style={{ zIndex: 20 }}
//         />

//         {/* Right image */}
//         <img
//           src={images[getIndex(current + 1)]}
//           alt="Right Slide"
//           className="absolute right-0 top-0 w-[10%] h-full object-cover opacity-80 transform translate-x-6 scale-100 transition-all duration-500"
//           draggable={false}
//           style={{ zIndex: 10 }}
//         />
//       </div>

//       {/* Controls below images - full width, spaced left & right */}
//       <div className="flex justify-between items-center mt-6 w-full max-w-screen-xl px-6">
//         {/* Left side: count */}
//         <div className="text-gray-700 font-semibold text-lg select-none">
//           {/* {current} image{current !== 1 ? 's' : ''} left &nbsp;|&nbsp; {length - current - 1} image{length - current - 1 !== 1 ? 's' : ''} right */} {length} images
//         </div>

//         {/* Right side: icon buttons */}
//         <div className="flex space-x-4">
//           <button
//             onClick={prevSlide}
//             aria-label="Previous Slide"
//             className="p-2 transition"
//           >
//             <ChevronLeft size={24} />
//           </button>

//           <button
//             onClick={nextSlide}
//             aria-label="Next Slide"
//             className="p-2 transition"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Gallery



import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  '/gallery/img1.jpg',
  '/gallery/img2.jpg',
  '/gallery/img3.jpg',
  '/gallery/img4.jpg',
  '/gallery/img5.jpg',
  '/gallery/img6.jpg',
  '/gallery/img7.jpg',
]

const Slider = () => {
  const [current, setCurrent] = useState(0)
  const length = images.length
  const startX = useRef(0)
  const isDragging = useRef(false)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
  }

  const getIndex = (index) => (index + length) % length

  const handleStart = (e) => {
    isDragging.current = true
    startX.current = e.touches ? e.touches[0].clientX : e.clientX
  }

  const handleEnd = (e) => {
    if (!isDragging.current) return
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    const diff = startX.current - endX

    if (diff > 50) {
      nextSlide()
    } else if (diff < -50) {
      prevSlide()
    }

    isDragging.current = false
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="relative w-full h-[500px] flex justify-center items-center overflow-visible touch-none hover:cursor-grab"
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        {/* Left image */}
        <img
          src={images[getIndex(current - 1)]}
          alt="Left Slide"
          className="absolute left-0 top-0 w-[10%] h-full object-cover opacity-80 transform -translate-x-6 scale-100   transition-all duration-500"
          draggable={false}
          style={{ zIndex: 10 }}
        />

        {/* Center image */}
        <img
          src={images[current]}
          alt="Current Slide"
          className="relative w-[80%] h-full object-cover shadow-lg transition-all duration-500 scale-100"
          draggable={false}
          style={{ zIndex: 20 }}
        />

        {/* Right image */}
        <img
          src={images[getIndex(current + 1)]}
          alt="Right Slide"
          className="absolute right-0 top-0 w-[10%] h-full object-cover opacity-80 transform translate-x-6 scale-100 transition-all duration-500"
          draggable={false}
          style={{ zIndex: 10 }}
        />
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-6 w-full max-w-screen-xl px-6">
        <div className="text-gray-700 font-semibold text-sm select-none">
          
          {length} images
        </div>
        <div className="flex space-x-4">
          <button onClick={prevSlide} aria-label="Previous Slide" className="p-2 transition">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} aria-label="Next Slide" className="p-2 transition">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slider
