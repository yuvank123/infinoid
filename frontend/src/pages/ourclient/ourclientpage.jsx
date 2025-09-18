import React, { lazy } from 'react';

// About1 loads immediately (LCP-focused)
import OC1 from '../../components/content/portfolio/ourclient/client1.jsx';

// Lazy load remaining sections
const Testinomial = lazy(() => import('../../components/elements/testinomial.jsx'));

const ourclient = () => {
  return (
    <div className="bg-black text-white">
      {/* About1 – LCP Critical */}
      <div className="relative h-auto">
        <OC1 />
      </div>
      <div className="relative h-auto">
        <Testinomial />
      </div>
    </div>
  );
};

export default ourclient;
