import React, { lazy } from 'react';

import WMdev1 from '../../components/content/development/WMdev/wmdev1.jsx';

// Lazy load remaining sections
const WMdev2 = lazy(() => import('../../components/content/development/WMdev/wmdev2.jsx'));
const WMdev3 = lazy(() => import('../../components/content/development/WMdev/wmdev3.jsx'));
const WMdev4 = lazy(() => import('../../components/content/development/WMdev/wmdev4.jsx'));

const wmdevpage = () => {
  return (
    <div className="bg-black text-white">
      
      <div className="relative h-auto">
        <WMdev1 />
      </div>
      <div className="relative h-auto">
        <WMdev2 />
      </div>
      <div className="relative h-auto">
        <WMdev3 />
      </div>
      <div className="relative h-auto">
        <WMdev4 />
      </div>

    </div>
  );
};

export default wmdevpage;
