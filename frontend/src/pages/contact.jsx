import React, { lazy } from 'react';

// contact1 loads immediately (LCP-focused)
import Contact1 from '../components/content/contact/contact1.jsx';

// Lazy load remaining sections
const Career4 = lazy(() => import('../components/content/career/career4.jsx'));

const contactpage = () => {
  return (
    <div className="bg-black text-white">
      {/* contact1 – LCP Critical */}
      <div className="relative h-auto">
        <Contact1 />
      </div>
       <div className="relative h-auto">
        <Career4 />
      </div>

    </div>
  );
};

export default contactpage;
