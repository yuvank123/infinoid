import { useState } from "react";
import C1 from "../../../../../public/images/360.webp";
import C2 from "../../../../../public/images/ARD.webp";
import C3 from "../../../../../public/images/Mahi.webp";
import C4 from "../../../../../public/images/SSOS.webp";
import C5 from "../../../../../public/images/montorx.webp";
import C6 from "../../../../../public/images/plus360.webp";
import C7 from "../../../../../public/images/beetal.webp";
import C8 from "../../../../../public/images/ventures.webp";
import C9 from "../../../../../public/images/revup.webp";
import C10 from "../../../../../public/images/fmpg.webp";
import C11 from "../../../../../public/images/aaram.webp";
import C12 from "../../../../../public/images/rangmahal.webp";

const logos = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12];

const ImageGrid = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center justify-center relative top-15 lg:top-15">
      <h1 className="text-5xl md:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-300 to-purple-400 mb-10 text-center lato-300 ">
        Our Clients
      </h1>

      {/* Grid Layout */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] mx-auto rounded-2xl backdrop-blur-md border border-white/10 p-4 hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-white"
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
  );
};

export default ImageGrid;
