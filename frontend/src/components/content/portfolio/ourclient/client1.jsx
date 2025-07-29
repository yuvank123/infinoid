import { useState } from "react";
import C1 from "../../../../../public/images/360.webp";
import C2 from "../../../../../public/images/ARD.webp";
import C3 from "../../../../../public/images/Mahi.webp";
import C4 from "../../../../../public/images/SSOS.webp";
import C5 from "../../../../../public/images/montorx.webp";

const logos = [C1, C2, C3, C4, C5,];

const ImageCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      <h1 className="text-5xl md:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-300 to-purple-400 mb-10 text-center lato-300">
        Our Clients
      </h1>

      {/* Carousel */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full overflow-hidden"
      >
        <div
          className={`flex animate-scroll whitespace-nowrap will-change-transform ${
            isPaused ? "pause" : ""
          }`}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[200px] h-[200px] mx-4 bg-white/2 rounded-4xl backdrop-blur-md border border-white/10 p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
