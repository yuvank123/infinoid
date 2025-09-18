import React, { lazy } from 'react';

import Hdp1 from '../../components/content/Enterprices & platform solution/Hrms-adminportal/hdp1.jsx';

// Lazy load remaining sections
const Hdp2 = lazy(() => import('../../components/content/Enterprices & platform solution/Hrms-adminportal/hdp2.jsx'));
const Hdp3 = lazy(() => import('../../components/content/Enterprices & platform solution/Hrms-adminportal/hdp3.jsx'));

const hdppage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <Hdp1 />
      </div>
       <div className="relative h-auto">
        <Hdp2 />
      </div>
       <div className="relative h-auto">
        <Hdp3 />
      </div>

    </div>
  );
};

export default hdppage;
