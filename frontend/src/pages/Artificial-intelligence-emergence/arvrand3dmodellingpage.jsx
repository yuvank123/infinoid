import React, { lazy } from 'react';


import ARVR1 from '../../components/content/AI-emerging-technologies/arvr-and-3Dmodelling/arvr1';

// Lazy load remaining sections
const ARVR2 = lazy(() => import('../../components/content/AI-emerging-technologies/arvr-and-3Dmodelling/arvr2'));
const ARVR3 = lazy(() => import('../../components/content/AI-emerging-technologies/arvr-and-3Dmodelling/arvr3'));

const arvr = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <ARVR1 />
      </div>
      <div className="relative h-auto">
        <ARVR2 />
      </div>
      <div className="relative h-auto">
        <ARVR3 />
      </div>
      
    </div>
  );
};

export default arvr;
