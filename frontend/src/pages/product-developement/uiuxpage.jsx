import React, { lazy } from 'react';
import UIUX1 from '../../components/content/development/uiux/uiux1.jsx';

// Lazy load remaining sections
const UIUX2 = lazy(() => import('../../components/content/development/uiux/uiux2.jsx'));
const UIUX3 = lazy(() => import('../../components/content/development/uiux/uiux3.jsx'));
const UIUX4 = lazy(() => import('../../components/content/development/uiux/uiux4.jsx'));

const uiuxpage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <UIUX1 />
      </div>
       <div className="relative h-auto">
        <UIUX2 />
      </div>
       <div className="relative h-auto">
        <UIUX3 />
      </div>
       <div className="relative h-auto">
        <UIUX4 />
      </div>
      
    </div>
  );
};

export default uiuxpage;
