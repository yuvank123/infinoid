import React, { lazy } from 'react';

import CRMERP1 from '../../components/content/Enterprices & platform solution/CRM_and_ERP/crmanderp1';

// Lazy load remaining sections
const CRMERP2 = lazy(() => import('../../components/content/Enterprices & platform solution/CRM_and_ERP/crmanderp2'));
const CRMERP3 = lazy(() => import('../../components/content/Enterprices & platform solution/CRM_and_ERP/crmanderp3'));

const crmerppage = () => {
  return (
    <div className="bg-black text-white">
    
      <div className="relative h-auto">
        <CRMERP1 />
      </div>
       <div className="relative h-auto">
        <CRMERP2 />
      </div>
       <div className="relative h-auto">
        <CRMERP3 />
      </div>

    </div>
  );
};

export default crmerppage;
