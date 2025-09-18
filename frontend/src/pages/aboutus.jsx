import React, { lazy } from 'react';

// About1 loads immediately (LCP-focused)
import About1 from '../components/content/about/about1.jsx';

// Lazy load remaining sections
const About2 = lazy(() => import('../components/content/about/about2.jsx'));

const Aboutus = () => {
  return (
    <div className="bg-black text-white">
      {/* About1 – LCP Critical */}
      <div className="relative h-auto">
        <About1 />
      </div>
       <div className="relative h-auto">
        <About2 />
      </div>

    </div>
  );
};

export default Aboutus;
