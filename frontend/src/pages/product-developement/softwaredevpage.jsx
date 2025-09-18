import React, {lazy } from 'react';

import CSD1 from '../../components/content/development/softwaredev/softdev1';

// Lazy load remaining sections
const CSD2 = lazy(() => import('../../components/content/development/softwaredev/softdev2'));
const CSD3 = lazy(() => import('../../components/content/development/softwaredev/softdev3'));
const CSD4 = lazy(() => import('../../components/content/development/softwaredev/softdev4'));

const softwaredevpage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <CSD1 />
      </div>
      <div className="relative h-auto">
        <CSD2 />
      </div>
      <div className="relative h-auto">
        <CSD3 />
      </div>
      <div className="relative h-auto">
        <CSD4 />
      </div>

    </div>
  );
};

export default softwaredevpage;
