import React, { lazy } from 'react';

import IoT1 from '../../components/content/AI-emerging-technologies/IOTandSmartSys/iot1';

// Lazy load remaining sections
const IoT2 = lazy(() => import('../../components/content/AI-emerging-technologies/IOTandSmartSys/iot2'));
const IoT3 = lazy(() => import('../../components/content/AI-emerging-technologies/IOTandSmartSys/iot3'));

const IoT = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <IoT1 />
      </div>
       <div className="relative h-auto">
        <IoT2 />
      </div>
       <div className="relative h-auto">
        <IoT3 />
      </div>

    </div>
  );
};

export default IoT;
