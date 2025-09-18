import React, { lazy } from 'react';

import Wla1 from '../../components/content/Enterprices & platform solution/workflow-and-logisticAutomation/wla1.jsx';

// Lazy load remaining sections
const Wla2 = lazy(() => import('../../components/content/Enterprices & platform solution/workflow-and-logisticAutomation/wla2.jsx'));
const Wla3 = lazy(() => import('../../components/content/Enterprices & platform solution/workflow-and-logisticAutomation/wla3.jsx'));

const wlapage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <Wla1 />
      </div>
      <div className="relative h-auto">
        <Wla2 />
      </div>
      <div className="relative h-auto">
        <Wla3 />
      </div>
      
    </div>
  );
};

export default wlapage;
